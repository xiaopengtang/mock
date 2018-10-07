'use strict'


const express = require('express')

const app = express()

app.use((req, res, next) => {
	const map = require('./config/url.map')
	const url = req.path
	let json = {}
	const keys = Object.keys(map)
	for(let i = 0; i < keys.length; i++){
		const r = new RegExp(keys[i])
		if(r.test(url)){
			json = map[keys[i]]
			break
		}
	}
	res.json(json)
	next()
})
app.listen(3000, () => console.log('Example app listening on port 3000!'))