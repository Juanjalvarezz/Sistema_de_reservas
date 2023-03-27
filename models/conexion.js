var mysql      = require('mysql'); 
var connection = mysql.createConnection({ 
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'reservas_de_equipos'
});
 
connection.connect();
 
module.exports = connection