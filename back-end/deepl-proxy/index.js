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
        const params = new URLSearchParams()

        if(Array.isArray(text)){
            text.forEach(t => params.append('text', t))
        } else{
            params.append('text', text)
        }

        params.append('target_lang', target_lang)
        params.append('auth_key', process.env.DEEPL_API_KEY)

        const response = await axios.post(url, params.toString(), {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })

        res.json(response.data)
    } catch (error) {
        console.error(error.response?.data || error.message)
        res.status(500).json({error: 'Tranlation failed'})  
    }
})

app.listen(port, () => {
    console.log(`Server running PORT: ${port}`) 
})