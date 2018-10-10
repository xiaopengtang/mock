'use strict'


const express = require('express')

const app = express()

app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
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