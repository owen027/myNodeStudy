const express = require('express')
const indexControl = require('../controller')

// 注意是引用 Router
const router = express.Router()
 
router.get('/',indexControl.showIndex) // 首页  

router.get('/login', indexControl.showLogin) // 登录页
      .post('/signup', indexControl.signup) // 登录接口
      .get('/captcha',indexControl.captcha)
      //   .get('/questions/new', indexControl.showLogin)
/* 
// TODO 
router.get('/questions/:id/edit', (req, res, next) => {
    res.render('questionsEdit.html')
})

// 标签列表
router.get('/tags', (req, res, next) => {
    res.render('tags.html')
})

// 标签详情
router.get('/tags/:id', (req, res, next) => {
    res.render('tagsDetail.html')
})

// 用户主页动态
router.get('/people/:id/activities', (req, res, next) => {
    res.render('activities.html')
})

// 用户回答
router.get('/people/:id/answers', (req, res, next) => {
    res.render('activities.html')
})

// questions 提问
router.get('/people/:id/questions', (req, res, next) => {
    res.render('activities.html')
})

// 收藏
router.get('/people/:id/collections', (req, res, next) => {
    res.render('collecion.html')
})

//following 关注
router.get('/people/:id/following', (req, res, next) => {
    res.render('following.html')
})

// 设置基本信息
router.get('settings/profile', (req, res, next) => {
    res.render('following.html')
})

// 账户设置
router.get('settings/account', (req, res, next) => {
    res.render('following.html')
})
router.get('/people/home', (req, res, next) => {
    res.render('home.html')
})

 */

module.exports = router