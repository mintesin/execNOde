import express from 'express'

const app = express()


app.get('/home',(req,res)=>{
    res.send("Hallo home Page")
}) 

app.listen(3000,()=>{
    console.log(`The page is running http:localhost:/3000`)
})