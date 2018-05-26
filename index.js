var myAjax = {}
myAjax.get = function(target){
    return new Promise( (resolve,reject) => {
        let method = "get"
        let formatData = ""
        for(key in target.data){
            formatData = formatData + `${key}=${target.data[key]}&`
        }
        let url = target.url + "?" + formatData

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

        request.send();
    })
}

myAjax.post = function(target){
    return new Promise( (resolve,reject) => {
        let method = "post"
        let formatData = ""
        for(key in target.data){
            formatData = formatData + `${key}=${target.data[key]}&`
        }
        let url = target.url

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

        request.send(formatData);
    })
}

var myAjaxCallBackFun_123456_
myAjax.jsonp = function(target){
    
    myAjaxCallBackFun_123456_ = target.callback
    let method = "get"
    let formatData = ""
    for(key in target.data){
        formatData = formatData + `${key}=${target.data[key]}&`
    }
    let url = `${target.url}?callback=myAjaxCallBackFun_123456_&${formatData}`
    
    let script = document.createElement('script');
    script.setAttribute("type","text/javascript");
    script.src = url;
    document.body.appendChild(script)
}

let url = "https://www.iyingdi.cn/commentplus/list/article"
let target = {
    url:url,
    callback:()=>{},
    data:{
        "web":1,
        "size":20,
        "id":0,
        "article":56905
    },
    header:{
        uselessheader:"uselessheader"
    }
}

myAjax(target).then( data =>{
    console.log(JSON.parse(data))
})