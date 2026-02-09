const express = require('express')
const app = express()
const port = 3000

let boek = [
    {
    naam: "Sophie",
    jaar: 2012,
    }
]

app.use(express.static("static"))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/start', toonStart)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.post('/start', toonData)

app.set('view engine', 'ejs')
app.set('views', 'view')

function toonStart(req, res) {

    res.render("start.ejs", {boek: boek})
}

function toonData(req, res) {

    boek.push({
        naam:req.body.naam,
        jaar:req.body.jaar
    })

    res.redirect("/start")
}