const express = require('express')
const app = express()
const axios = require("axios")
const heroes = require('../heroes.json')

app.get('/', (req, res) => {
    res.json(heroes)
})


app.get('/:slug', (req, res) => {
    const { slug } = req.params
    const hero = heroes.find(hero => hero.slug === slug)
    if (hero) {
        res.json(hero.slug)
    }else{
        res.status(404).send('Not Found')
    }
})

app.get('/:slug/powers', (req, res) => {
    const { slug } = req.params
    const hero = heroes.find(hero => hero.slug === slug)
    const powers = { power : hero.power }
    if (hero) {
        res.json(powers)
    }else{
        res.status(404).send('Not Found')
    }
})

module.exports = app
