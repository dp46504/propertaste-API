import express from 'express'

export const router = express.Router()

const tips = {

    zielona:{
        ciekawostka1:"You can get 80°C-85°C by leaving boiling water in kettle for 4 to 6 minutes",
        ciekawostka2:"Drinking two cups of green tea a day reduces the risk of lung cancer",
        ciekawostka3:"People who frequently drink unsweetened green tea are less likely to develop cardiovascular disease later in life"
    },

    czarna:{
        ciekawostka1:"You can brew black tea in boiling water",
        ciekawostka2:"You can make \'\'Mexican Iced Tea\'\' with black tea",
        ciekawostka3:"Black tea contains least amount of coffeine among all teas"
    },

    czerwona:{
        ciekawostka1:"You can brew red tea in boiling water",
        ciekawostka2:"Red tea soothes effects of drinking alcohol",
        ciekawostka3:"In China, black tea is called red tea"
    },

    biala:{
        ciekawostka1:"You can get 80°C-85°C by leaving boiling water in kettle for 4 to 6 minutes",
        ciekawostka2:"White tea is one of the least processed teas",
        ciekawostka3:"White tea supports skin regeneration"
    }
}

router.get('/:type', (req, res)=>{

if(tips[req.params.type]){
res.send(tips[req.params.type])
}else{
    res.status(404).send()
}

})

