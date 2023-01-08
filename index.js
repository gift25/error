const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('สวัสดีชาวโลก อยาก error ก็กดมั่วจิ')
})

app.get('/home', function(req, res){
    res.sendFile(__dirname + 'D:\java\home')
})


app.get('*', function(req, res) {
    res.sendFile(__dirname + '/public/index.html')
})



app.listen(3000, () => {
    console.log("Start Server at Port [3000]")
})