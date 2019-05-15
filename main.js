const path = require('path')
const express = require('express')
const nunjucks = require('nunjucks') //模板引擎
const router = require('./router')

const app = express()
const resolve = dir => path.resolve(__dirname,  dir)

// 开放 public 资源
app.use('/public/',express.static(resolve('./public/')))

app.use('/node_modules/', express.static(resolve('./node_modules/')))
// views 在views 目录中查找静态资源
nunjucks.configure(resolve('views'), {
    autoescape: true,
    express: app,
    watch:true  //监听文件，预编译；生产环境关闭
});

// 接收 application/x-www-form-urlencoded 数据格式
app.use(express.urlencoded({
    extended:true
}))
// 接收 application/json 格式数据 
app.use(express.json())
app.use(router)

app.listen(3001,() =>{
    console.log('服务启动成功')
    console.log('http://localhost:3001/')
})

