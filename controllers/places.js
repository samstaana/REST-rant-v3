const router = require('express').Router()

// GET /places
router.get('/', (req, res) => {
    let places = [{
        name: 'Din Tai Fung',
        city: 'Las Vegas',
        state: 'NV',
        cuisines: 'Chinese, Dim-Sum',
        pic: '/images/dintaifung.jpg'
      }, {
        name: 'Carbone',
        city: 'Las Vegas',
        state: 'NV',
        cuisines: 'Italian',
        pic: '/images/pasta.jpg'
      }]      
    res.render('places/index', { places })
})

// NEW
router.get('/new', (req, res) => {
    res.render('places/new')
})

// POST
router.post('/', (req, res) => {
    console.log(req.body)
    res.send('POST /places')
})

module.exports = router
