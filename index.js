let target = {
    url:url,
    method:"GET",
    data:{
    },
    header:{
        uselessheader:"uselessheader"
    }
}

var myAjax = function(url){
    return new Promise( (resolve,reject) => {

        let request = new XMLHttpRequest()
        request.onload = function () {
            console.log('111')
            if (request.status === 200) {
                console.log("222")
                resolve(request.responseText)
            } else {
                reject(request.responseText)
            }
        }
        request.open(target.method, target.url);

        //设置请求头
        for(let key in target.header){
            request.setRequestHeader(key,target.header[key])
        }

        request.send();
    }).then( (responseText) => {
        return responseText
    }).catch( err => {
        console.log(err)
    })
}

let url = "https://www.iyingdi.cn/commentplus/list/article?web=1&size=20&id=0&article=56905"

myAjax(target).then( data =>{
    console.log(JSON.parse(data))
})