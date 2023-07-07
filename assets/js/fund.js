function fetchFundBalance(address, callback) {
    var url = 'https://api.blockcypher.com/v1/btc/main/addrs/' + address + '/balance';
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
      var status = xhr.status;
      if (status === 200) {
        callback(null, xhr.response);
      } else {
        callback(status, xhr.response);
      }
    };
    xhr.send();
}

window.onload = function () {
    var address = "bc1q2x8gu8n85ylur5j83yflhpg5hf80nhnyem98k2pld46lf4czhmgsxq8wlu"
    var callback = function(error, response) {
        if (error != null) {
            return;
        }
        var amount = (response.balance / 100000000).toFixed(2)
        document.getElementById("funding-amount").textContent = amount + " BTC";
    }
    fetchFundBalance(address, callback);
}