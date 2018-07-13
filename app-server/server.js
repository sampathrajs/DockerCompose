var express = require('express');
var app = express();

app.get("/",function(req,res){
    var os = require('os');
    var ifaces = os.networkInterfaces();
    var ipaddress = [];
    Object.keys(ifaces).forEach(function (ifname) {
    var alias = 0;

    ifaces[ifname].forEach(function (iface) {
        if ('IPv4' !== iface.family || iface.internal !== false) {
        // skip over internal (i.e. 127.0.0.1) and non-ipv4 addresses
        return;
        }

        ipaddress.push({
            "name":iface,
            "address":iface.address
        })
    });
    });

    res.send({
        "server":"app",
        "address":ipaddress
    });
})

/* app.get("/app",function(req,res){
    res.send("send from the app server");
})
 */

app.listen(3000,"0.0.0.0");