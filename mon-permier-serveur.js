"use strict";
/* importation du module «fs» (file system) */
let fs = require("fs");

/* lecture synchrone, la fonction: fs.readFileSync() 
bloque l'éxécution des instructions suivantes */

let data = fs.readFileSync('province.json');

let oProvince = JSON.parse(data);

console.log(oProvince);

 let trace = '<table>';


   for (let p in oProvince) { 
     trace += '<tr><td>' + p + '</td><td> ' + oProvince[p] + '</td></tr>'; 
   } 

    trace += '</table>';

    

console.log(data.toString());
console.log("Fin du programme");

let http = require('http');
http.createServer(function(request, response){

response.writeHead(200, {"Content-Type" : "text/html; charset=UTF-8"})
response.write('<style>h1 {font-family:arial; font-size: 3em;}</style>')
response.write('<h1> ça marche et vive le Québec</h1>')
    
response.write(trace)
response.end()

}).listen(3000)