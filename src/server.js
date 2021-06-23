const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express();
const port = 5000;

app.use(cors({
    origin: '*'
}))



app.get('/api/languages', async (req, res)=>{
    try{
        const {data} = await axios.get('https://api.github.com/languages');
        res.send(data)
    }catch(error){
        console.log(error)
    }
})

app.get('/api/repos/:lang', async (req, res)=>{
    const lang = req.params.lang
    console.log('Estou aqui')
    console.log(lang)
    try{
        const {data} = await axios.get(`https://api.github.com/search/repositories?q=language:${lang}&order=desc`);
        res.send(data)
    }catch(error){
        console.log(error)
    }
})


app.get('/api/users', (req, res)=>{
    res.send('teste API')
})

app.get('/', (req, res) =>{
    res.json({message: 'hello world'})
})


app.listen(port, ()=>{
    console.log('🔸START BACKEND SERVER🔸')
})
