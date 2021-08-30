import mysql from 'mysql'

var con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'F4db1f76.',
  database: 'test',
})

con.connect(function (err) {
  if (err) throw err
  console.log('Database Connected!'.blue.bold.underline)
})

export default con
