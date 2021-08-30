import express from 'express'
import colors from 'colors'
import con from './config/db.js'

const app = express()

app.use(express.json())

app.post('/', (req, res) => {
  const { name, email } = req.body
  const sql = `INSERT INTO user (Email, Name) VALUES ("${email}", "${name}")`
  con.query(sql, function (err, result) {
    if (err) {
      res.json({ error: err.sqlMessage })
      return
    }
    res.json({ message: 'User added successfully' })
  })
})

app.get('/:email', (req, res) => {
  const email = req.params.email
  const sql = `SELECT * FROM user WHERE Email="${email}"`
  con.query(sql, function (err, result) {
    if (err) {
      res.json({ error: err.sqlMessage })
      return
    } else if (!result[0]) {
      res.json({ error: 'User is not registered' })
    } else {
      res.json(result[0])
    }
  })
})

app.put('/', (req, res) => {
  const { name, email } = req.body
  const sql = `UPDATE user SET Name="${name}" WHERE email="${email}"`
  con.query(sql, function (err, result) {
    if (err) {
      res.json({ error: err.sqlMessage })
    } else if (result.affectedRows > 0) {
      res.json({ message: 'User Updated' })
    } else {
      res.json({ error: 'User is not registered' })
    }
  })
})

app.delete('/:email', (req, res) => {
  const email = req.params.email
  const sql = `DELETE FROM user WHERE Email="${email}"`
  con.query(sql, function (err, result) {
    console.log(result.affectedRows)
    if (err) {
      res.json({ error: err.sqlMessage })
    } else if (result.affectedRows > 0) {
      res.json({ message: 'User Deleted' })
    } else {
      res.json({ error: 'User is not registered' })
    }
  })
})

const PORT = 5000
app.listen(5000, () =>
  console.log(`Server listening on port ${PORT}`.yellow.bold)
)
