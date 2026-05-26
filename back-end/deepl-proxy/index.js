const express = require('express')
const cors = require('cors')
const axios = require('axios')
require('dotenv').config()

const app = express()
const port = 3000
const url = 'https://api-free.deepl.com/v2/translate'

app.use(cors())
app.use(express.json())

app.post('/translate', async (req, res) => {
    const {text, target_lang} = req.body

    if(!text || !target_lang){
        return res.status(400).json({error: 'Missing text or target_lang in request body'})
    }

    try {
        const textArray = Array.isArray(text) ? text : [text]

        const body = {
            text: textArray,
            target_lang: target_lang
        }

        const response = await axios.post(url, body, {
            headers: {
                'Authorization': `DeepL-Auth-Key ${process.env.DEEPL_API_KEY}`,
                'Content-Type': 'application/json'
            }
        });

        res.json(response.data)
    } catch (error) {
        console.error(error.response?.data || error.message)
        res.status(500).json({error: 'Tranlation failed'})  
    }
})

app.listen(port, () => {
    console.log(`Server running PORT: ${port}`) 
})