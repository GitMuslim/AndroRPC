const express = require('express'); 
const app = express(); 
const fetch = require('node-fetch');
const fs = require('fs');
const { Client } = require("discord-rpc");
const bodyParser = require('body-parser'); 
const { time } = require('console');
const {getMetadata} = require('page-metadata-parser');
const domino = require('domino');
const { exit } = require('process');
const { once } = require('events');

let cache = {};
let port_server = 0000

let timestamps = {};

let once1 = false
let averr = ""
let device_nmr = ""

client = new Client({
    transport: "ipc"
})

read_json_port()

let can_run = false
let large_image = ""
let end_name = ""
let debug = true

function read_json_port() {
    try {
        if (fs.existsSync("./port.json")) {
            let port = fs.readFileSync("./port.json");
            port_server = JSON.parse(port).port
            app.listen(port_server)
            setTray()
        } else {
            port_server = 3425
            app.listen(port_server)
            setTray()
        }
    } catch(err) {}
}

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 

app.post('/postrpc', (req, res) => { 
    var link = req.body.rpc_link;
    var name = req.body.rpc_name;
    var aver = req.body.android_ver;
    var device_nm = req.body.device_name
    res.status(200).json({ 
        message: "Data received successfully" 
	}); 

    if (debug) {
        console.log(name)
    }

    read_rpc_data(link, name, aver, device_nm)
}); 

async function read_rpc_data(rlink, rname, aver, device_nm) {
    end_name = rname
    //const url = 'https://premid.app/store/presences/'+end_name;

    if (!timestamps[rlink]) {
        timestamps[rlink] = Date.now()
    }

    if (once1 == false) {
        if (aver != undefined && device_nm != undefined) {
            once1 = true
            averr = aver
            device_nmr = device_nm
        }
    }

    if (cache[rlink]) {
        StartRPC(rname, cache[rlink], timestamps[rlink], averr, device_nmr)
    } else {
        const url = 'https://play.google.com/store/apps/details?id='+rlink
        const response = await fetch(url);
        const html = await response.text();
        const doc = domino.createWindow(html).document;
        const metadata = getMetadata(doc, url);
        cache[rlink] = metadata.image

        StartRPC(rname, metadata.image, timestamps[rlink], averr, device_nmr)
    }
}

function StartRPC(name, b_pic, timestamp_r, aver, device_nm) {
    large_image = b_pic

    if (can_run == true) {
        client.setActivity({
            details: name,
            state: device_nmr,
            largeImageKey: large_image,
            largeImageText: "AndroRPC",
            smallImageKey: "android",
            smallImageText: "Android "+aver,
            startTimestamp: timestamp_r
        })
    }
}

process.on('uncaughtException', function(err) {
    console.log('Caught exception: ' + err);
});

client.on('ready', () => {
    can_run = true

    setInterval(() => {
        cache = {}
    }, 86400000)
});

client.login({ clientId: "1139044721969332275" })
