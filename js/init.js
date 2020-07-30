//const LIST_URL = "https://japdevdep.github.io/ecommerce-api/product/all.json";
const LIST_URL = "http://www.json-generator.com/api/json/get/ceCoWNIGwi?indent=2"

var showSpinner = function(){  
  document.getElementById("spinner-wrapper").style.display = "block";
}

var hideSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "none";
}

var getJSONData = function(url){
    var result = {};
    showSpinner();
    return fetch(url)
    .then(response => {
      hideSpinner();
      if (response.ok) {
        return response.json();
      }else{        
        throw Error(response.statusText);
      }
    })
    .then(function(response) {
          result.status = 'ok';
          result.data = response;
          hideSpinner();
          return result;
    })
    .catch(function(error) {
        result.status = 'error';
        result.data = error;
        hideSpinner();
        return result;
    });
}
