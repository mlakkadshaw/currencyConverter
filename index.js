angular.module('currencyConverterApp',[])
    .controller('currencyConverterController',function($http){
        var currencyConverter = this;
        currencyConverter.amount = 1;
        currencyConverter.list = []
         currencyConverter.getCurrencyData = $http({
  method: 'POST',
  url: 'http://apilayer.net/api/live?access_key=0c9cc76de866de4eeec9b7f21f1dc801&currencies=EUR,JPY,GBP,AUD,CAD,CHF,CNY,SEK,MXN,NZD '
}).then(function successCallback(response) {
    // for (i=0; i<response.data.quotes; i++){
    //     console.log(i)
    // }

    for (var i in response.data.quotes){
        var item = {};
        item.currency = i;
        item.value = response.data.quotes[i];
        currencyConverter.list.push(item); 
    };
  }, function errorCallback(response) {
   console.log(response);
  });
 })