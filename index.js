var myAjax = function(target){
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

        //设置请求头
        for(let key in target.header){
            request.setRequestHeader(key,target.header[key])
        }
        request.send();
    }).catch( err => {
        console.log(new Error(err))
    })
}

let url = "https://www.iyingdi.cn/commentplus/list/article?web=1&size=20&id=0&article=56905"
let target = {
    url:url,
    method:"GET",
    data:{
    },
    header:{
        uselessheader:"uselessheader"
    }
}

myAjax(target).then( data =>{
    console.log(JSON.parse(data))
})