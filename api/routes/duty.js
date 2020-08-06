// Router
const router = require('express').Router()
    // Database 
const database = require('../../database')

let dutyDatabase = database.child('duty')

class Duty {
    /**
     * @param {string} name 
     * @param {string} detail 
     */
    constructor(name, detail) {
        this.name = name
        this.detail = detail
    }
}

// GET = lay du lieu
// POST = them du lieu moi
// PUT = chinh sua du lieu
// DELETE = xoa du lieu

router.get('/getAll', async(req, res) => {
    let snapshot = await dutyDatabase.once('value')
    var result = []
    snapshot.forEach((child) => {
        let { name, detail } = child.val()
        let duty = new Duty(name, detail)
        result.push(duty)
    })
    res.json(result)
})

router.post('/addNewDuty', async(req, res) => {
    let name = req.body.name
    let detail = req.body.detail
    let duty = new Duty(name, detail)
    let snapshot = await dutyDatabase.once('value')
    var count = 0
    snapshot.forEach((child) => {
        count += 1
    })
    dutyDatabase.child(count).set(duty)
    res.json({
        status: true
    })
})

// Export module
module.exports = router