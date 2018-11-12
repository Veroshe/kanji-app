
function getData(option){
    let promiseObj = new Promise(function(resolve, reject){
        const API_KEY = ''; //API key needs to be put here, can't push it to the repo
        let xhr = new XMLHttpRequest();
        xhr.overrideMimeType("application/json");
        let url = setUrl(option);
        xhr.open('GET', url, true);
        xhr.setRequestHeader("X-Mashape-Key",API_KEY);
        xhr.send();
        xhr.onreadystatechange = function(){
        if (xhr.readyState === 4){
           if (xhr.status === 200){
              let resp = xhr.responseText;
              let respJson = JSON.parse(resp);
              resolve(respJson);
           } else {
              reject(xhr.status);
           }
        }
     }
   });
   return promiseObj;
};
function setUrl(option){
    if(option.type === 'single'){
        return 'https://kanjialive-api.p.mashape.com/api/public/kanji/' + option.value;
    }
    if(option.type === 'basic'){
        return 'https://kanjialive-api.p.mashape.com/api/public/search/advanced/?grade=' + option.value;
    }
}

export default getData;
