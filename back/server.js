const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./models')
const routers = require('./router')

app.use(bodyParser.urlencoded({ extended: false }))

db.sequelize.sync()//
.then(()=>{
    console.log('db접속 성공');
})
.catch(e=>{
    console.log(`접속실패${e}`);
})

app.use('/api',routers)
app.post('/', async (req, res) => {
    //DB연결하고 

    console.log('postman 으로 실행함!!!!!!');
    res.json(req.body)
    // await User.create({
    //     userid: req.body.userid,
    //     username: req.body.username,
    //     userpw: req.body.userpw
    // })
})

//회원가입 url
app.post('/user',(req,res)=>{

})
//회원 정보 url
app.get('/user',(req,res)=>{

})
//회원 수정 url
app.patch('/user',(req,res)=>{

})
//회원탈퇴 url
app.delete('/user',(req,res)=>{

})


app.listen(3000, () => {
    console.log('sever start : 3000');
})