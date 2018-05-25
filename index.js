{
    let myAjax = function(target){
        return new Promise( (resolve,reject) => {

            let method = target.method.toLocaleLowerCase()
            let url = target.url
            let formatData = ""
            for(key in target.data){
                formatData = formatData + `${key}=${target.data[key]}&`
            }

            switch(method){
                case "get":
                    url = url + "?" + formatData 
            }
            

            let request = new XMLHttpRequest()
            request.onload = function () {
                if (request.status === 200) {
                    resolve(request.responseText)
                } else {
                    reject(request.status)
                }
            }
            request.open(method,url);

            for(let key in target.header){
                request.setRequestHeader(key,target.header[key])
            }

            if(method == "post"){
                request.send(formatData)
            }else{
                request.send();
            }
            
        }).catch( err => {
            console.log(new Error(err))
        })
    }
    var sailfish = myAjax
}