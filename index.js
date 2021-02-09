const express = require("express")
const app = express()

// tell express to use ejs to display views
app.set('view engine','ejs')

app.get('/',function(req,res){
    res.render('index.ejs', {
        name: "Sterling Archer",
         age: 35
        })
})
app.get('/about',function(req,res){
    let data = ["Pizza","Outside","On cinema At the Cinema"];
    res.render('about.ejs',{
        faveThings: data
    })
})
app.get('/blog',function(req,res){
    res.render('blog-directory.ejs')
})

app.listen(8000)