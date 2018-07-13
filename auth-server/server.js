var express = require('express');
var app = express();

app.get("",function(req,res){
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
        "server":"auth",
        "address":ipaddress
    });
})

app.get('/a/b',function(req,res){
    res.send("/a/b");
})

app.listen(3001,"0.0.0.0");