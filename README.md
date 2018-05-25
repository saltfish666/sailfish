## branch
master

release   -->   生产版本（未压缩）

dev       -->   开发版本

sailfish  -->   自己开发的版本

```
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
```