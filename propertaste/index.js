import express from './node_modules/express/index.js'
import {router as tipsRouter} from './routes/tips.js'

const app = express()
app.use('/tips', tipsRouter)


const port = process.env.PORT || 5000
app.listen(port, ()=>{
    console.log(`Server is listening on port: ${port}`)
})




