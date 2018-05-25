{
    let myAjax = function(target){
        return new Promise( (resolve,reject) => {

            let request = new XMLHttpRequest()
            request.onload = function () {
                if (request.status === 200) {
                    resolve(request.responseText)
                } else {
                    reject(request.status)
                }
            }
            request.open(target.method, target.url);

            for(let key in target.header){
                request.setRequestHeader(key,target.header[key])
            }
            request.send();
        }).catch( err => {
            console.log(new Error(err))
        })
    }
    var sailfish = myAjax
}