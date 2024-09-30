function openDownloadTab(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

function getOS() {
    var platform = window.navigator.platform,
        macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
        os = null;
    if (macosPlatforms.indexOf(platform) !== -1) {
        os = 'macos';
    } else if (!os && /Linux/.test(platform)) {
        os = 'linux';
    } else {
        // show Windows by default
        os = "windows";
    }
    return os;
}

async function fetchReleaseData(repositoryName) {
    const apiUrl = `https://api.github.com/repos/mimblewimble/${repositoryName}/releases/latest`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`Failed to fetch: ${response.status}`);
        }

        const data = await response.json();

        return {
            releaseVersion: data.tag_name,
            assets: data.assets,
        };
    } catch (error) {
        console.error(`Error fetching release information for ${repositoryName}:`, error);
        return null;
    }
}

async function updateReleaseLinks() {
    try {
        const walletData = await fetchReleaseData('grin-wallet');
        const nodeData = await fetchReleaseData('grin');

        const links = {
            win: {
                Suffix: 'win-x86_64.zip',
                HashSuffix: 'win-x86_64-sha256sum.txt'
            },
            macos: {
                Suffix: 'macos-x86_64.tar.gz',
                HashSuffix: 'macos-x86_64-sha256sum.txt'
            },
            linux: {
                Suffix: 'linux-x86_64.tar.gz',
                HashSuffix: 'linux-x86_64-sha256sum.txt'
            }
        };

        function updateLink(platform, type, elementIds, repoData, fallbackUrl) {
            const suffix = links[platform][`Suffix`];
            const hashSuffix = links[platform][`HashSuffix`];

            const asset = repoData?.assets?.find(asset => asset.name.endsWith(suffix));
            const hashAsset = repoData?.assets?.find(asset => asset.name.endsWith(hashSuffix));
            
            const downloadUrl = asset ? asset.browser_download_url : fallbackUrl;
            const hashUrl = hashAsset ? hashAsset.browser_download_url : fallbackUrl;

            document.getElementById(elementIds.link).href = downloadUrl;
            document.getElementById(elementIds.link).textContent = repoData?.releaseVersion ? `${type === 'wallet' ? 'Grin Wallet' : 'Grin Node'} ${repoData.releaseVersion}` : `${type === 'wallet' ? 'Grin Wallet' : 'Grin Node'}`;
            
            document.getElementById(elementIds.hash).href = hashUrl;
            document.getElementById(elementIds.hash).textContent = hashAsset ? 'Link to GitHub hashfile: sha256sum.txt' : 'See GitHub for official sha256sum.txt hashfile';
        }

        ['win', 'macos', 'linux'].forEach(platform => {
            const walletFallbackUrl = 'https://github.com/mimblewimble/grin-wallet/releases/latest';
            const nodeFallbackUrl = 'https://github.com/mimblewimble/grin/releases/latest';

            updateLink(platform, 'wallet', { link: `${platform}-wallet-link`, hash: `${platform}-wallet-hash` }, walletData || {}, walletFallbackUrl);
            updateLink(platform, 'node', { link: `${platform}-node-link`, hash: `${platform}-node-hash` }, nodeData || {}, nodeFallbackUrl);
        });

    } catch (error) {
        console.error("Error updating release links:", error);

        // Fallback to default links for wallet and node
        const walletFallbackUrl = 'https://github.com/mimblewimble/grin-wallet/releases/latest';
        const nodeFallbackUrl = 'https://github.com/mimblewimble/grin/releases/latest';

        ['win', 'macos', 'linux'].forEach(platform => {
            document.getElementById(`${platform}-wallet-link`).href = walletFallbackUrl;
            document.getElementById(`${platform}-wallet-link`).textContent = 'Grin Wallet';

            document.getElementById(`${platform}-wallet-hash`).href = walletFallbackUrl;
            document.getElementById(`${platform}-wallet-hash`).textContent = 'See GitHub for official sha256sum.txt hashfile';

            document.getElementById(`${platform}-node-link`).href = nodeFallbackUrl;
            document.getElementById(`${platform}-node-link`).textContent = 'Grin Node';

            document.getElementById(`${platform}-node-hash`).href = nodeFallbackUrl;
            document.getElementById(`${platform}-node-hash`).textContent = 'Go to GitHub and download sha256sum.txt hash file';
        });
    }
}

document.addEventListener('DOMContentLoaded', function () {
    updateReleaseLinks();
});

window.onload = function () {
    const os = getOS();
    document.getElementById(os).click();
};