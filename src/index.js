import express from 'express'
import {router as tipsRouter} from './routes/tips.js'
import cors from 'cors'

const app = express()
app.use('/tips', tipsRouter)
app.use(cors())


let port = process.env.PORT
if(port==null || port == ""){
	port=8000
}
app.listen(port, ()=>{
    console.log(`Server is listening on port: ${port}`)
})




