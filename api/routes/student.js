const router = require('express').Router()
const database = require('../../database')

let studentDatabase = database.child('student')

class Student {
  /**
    * @param {string} username
    * @param {string} password
    * @param {string} email
    * @param {string} name
    * @param {string} studentId
    * @param {string} university
    * @param {string} citizenId
  **/
 constructor(username, password, email, name, studentId, university, citizenId){
   this.username = username
   this.password = password
   this.email = email
   this.name = name
   this.studentId = studentId
   this.university = university
   this.citizenId = citizenId
 }
}

router.get('/getAll', async (req, res) => {
  let snapshot = await studentDatabase.once('value')
  var result = []
  snapshot.forEach((child) => {
    let { username, password, email, name, studentId, university, citizenId } = child.val()
    let student = new Student(username, password, email, name, studentId, university, citizenId)
    result.push(student)
  })
  res.json(result)
})

router.post('/addNewStudent', async (req, res) => {
  let username = req.body.username 
  let password = req.body.password
  let email = req.body.email
  let name = req.body.name
  let studentId = req.body.studentId
  let university = req.body.university
  let citizenId = req.body.citizenId
  let student = new Student(username, password, email, name, studentId, university, citizenId)
  let snapshot = await studentDatabase.once('value')
  var count = 1
  snapshot.forEach((child) => {
    count += 1
  })
  studentDatabase.child(count).set(student)
  res.json({
    status: true
  })
})

module.exports = router

