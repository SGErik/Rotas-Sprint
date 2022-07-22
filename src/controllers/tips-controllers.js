const tipsController = (app, db) =>{

    app.get('/tips', (req, res)=>{    
        res.json({
            tips: db.tips[parseInt((Math.random() * db.tips.length))]
        })


    })

    app.post('/create', (req, res)=>{
        const body = req.body
        db.tips.push(body.tips)
        console.log(body)
        res.json(body)

    })

}


export default tipsController