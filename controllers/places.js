const router = require('express').Router()

// INDEX
router.get('/', (req, res) => {
    res.send('GET /places')
})

// NEW
router.get('/new', (req, res) => {
    res.send('new stub')
})

// CREATE
router.post('/', (req, res) => {
    res.send('/places STUB')
})

// SHOW
router.get('/arrayIndex', (req, res) => {
    res.send('/places STUB')
})

// EDIT
router.get('/arrayIndex/edit', (req, res) => {
    res.send('/places STUB')
})

// UPDATE
router.put('/arrayIndex', (req, res) => {
    res.send('/places STUB')
})

// DELETE
router.delete('/arrayIndex', (req, res) => {
    res.send('/places STUB')
})

module.exports = router
