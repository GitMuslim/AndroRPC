const express = require('express'); 
const app = express(); 
const fs = require('fs')
const { Client } = require("discord-rpc");
const bodyParser = require('body-parser'); 
const { time } = require('console');
var server = app.listen(6999); 
const {getMetadata} = require('page-metadata-parser');
const domino = require('domino');
const apps = [
    "Discord", 
    "Firefox",
    "Google Play Store",
    "Reddit",
    "Steam",
    "YouTube"
]

client = new Client({
    transport: "ipc"
})

let can_run = false
let large_image = ""
let end_name = ""

const debug = true

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 
 
app.post('/postrpc', (req, res) => { 
    var link = req.body.rpc_link;
    var name = req.body.rpc_name;
    res.status(200).json({ 
        message: "Data received successfully" 
	}); 

    if (debug) {
        console.log(name)
    }
    read_rpc_data(link, name)

}); 

async function read_rpc_data(rlink, rname) {
    if (apps.includes(rname)) {
        end_name = rname
        if ( rname == "Google Play Store" ) { end_name = "Google Play" } else
        if ( rname == "Firefox" ) { end_name = "Google" }
        const url = 'https://premid.app/store/presences/'+end_name;
        const response = await fetch(url);
        const html = await response.text();
        const doc = domino.createWindow(html).document;
        const metadata = getMetadata(doc, url);
        StartRPC(rname, metadata.image)
    }
}

function StartRPC(name, b_pic) {
    large_image = b_pic

    if (can_run == true) {
        client.setActivity({
            details: name,
            state: "Device: Samsung A51",
            largeImageKey: large_image,
            largeImageText: "Device: Samsung A51",
            smallImageKey: "https://iconape.com/wp-content/png_logo_vector/android-robot-head.png",
            smallImageText: "AndroRPC",
            startTimestamp: Date.now()
        })
    }
}

process.on('uncaughtException', function(err) {
    console.log('Caught exception: ' + err);
});

client.on('ready', () => {
    can_run = true
});

client.login({ clientId: "1003025583552336013" }).catch(() => client.destroy())
