const path = require('path')
const express = require('express')
const nunjucks = require('nunjucks') //模板引擎

const app = express()
const resolve = dir => path.resolve(__dirname,  dir)

// 开放 public 资源
app.use('/public/',express.static(resolve('./public/')))
// views 在views 目录中查找静态资源
nunjucks.configure(resolve('views'), {
    autoescape: true,
    express: app,
    watch:true  //监听文件，预编译；生产环境关闭
});


app.get('/',(req,res,next) =>{
    // res.status(200).send('hello world Owen')
    // 第一个文件名，第二个传参数
    res.render('index.html',{name:'Owen'})
})

app.get('/people/home',(req,res,next) =>{
    res.render('home.html')
})

app.listen(3001,() =>{
    console.log('服务启动成功')
    console.log('http://localhost:3001/')
})

