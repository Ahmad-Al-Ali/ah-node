const http = require('http');
const mysql = require('mysql');
const port = process.env.PORT || 8997;
const connectionString = process.env.MYSQLCONNSTR_localdb;

var queryResult;
//Database=localdb;Data Source=127.0.0.1:49833;User Id=azure;Password=6#vWHD_$


// var arr = connectionString.split(";");
// var arr2 = arr[1].split(":");
// var result = "";

var con = mysql.createConnection({

//Database=localdb;Data Source=127.0.0.1:49833;User Id=azure;Password=6#vWHD_$

    // host: arr2[0],
    // port: arr2[1],
    // user: arr[2],
    // password: arr[3],
    // database: arr[0]
    
    host: "127.0.0.1",
    port: "49833",
    user: "azure",
    password: "6#vWHD_$",
    database: "localdb"

  });

  con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM users", function (err, result, fields) {
      if (err) throw err;
       queryResult = JSON.stringify(result);
      console.log(result);
    });
  });

const server = http.createServer((req, res) => {

res.statusCode = 200;
res.setHeader('Content-Type', 'text/html');
res.end(queryResult);

});

server.listen(port,() => {

    console.log(`Server running at port `);

});