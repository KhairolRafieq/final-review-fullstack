// routes/api/books.js

const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
// Load Book model
const Location = require('../../models/Location');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Adjust the path to where you want to save the images
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, 'delivery-' + uniqueSuffix + path.extname(file.originalname));
  }
});

// Initialize multer with the storage configuration
const upload = multer({ storage: storage });

// @route GET api/books/test
// @description tests books route
// @access Public
router.get('/test', (req, res) => res.send('location route testing!'));

// @route GET api/books
// @description Get all books
// @access Public
router.get('/', (req, res) => {
  const keyword = req.query.keyword;

  // Define a query object to search by keyword in multiple fields
  const query = keyword ? {
    $or: [
      { name: { $regex: keyword, $options: 'i' } },
      { phone_number: { $regex: keyword, $options: 'i' } },
      { address: { $regex: keyword, $options: 'i' } },
      { description: { $regex: keyword, $options: 'i' } },
    ]
  } : {};

  Location.find(query)
    .then(locations => {
      if (locations.length === 0) {
        return res.json([]);
      }
      res.json(locations);
    })
    .catch(err => res.status(400).json({ error: err.message }));
});
// router.get('/', (req, res) => {
//   Location.find()
//     .then(location => res.json(location))
//     .catch(err => res.status(404).json({ nolocationfound: 'No details found' }));
// });

// @route GET api/location/:id
// @description Get single location by id
// @access Public
router.get('/:id', (req, res) => {
  Location.findById(req.params.id)
    .then(location => res.json(location))
    .catch(err => res.status(404).json({ nolocationfound: 'No details found' }));
});

// @route GET api/location
// @description add/save location
// @access Public
router.post('/', upload.single('image'), (req, res) => {
  const { body, file } = req;
  if (!file) {
    return res.status(400).json({ error: 'Image file is required' });
  }

  const image_url = `uploads/${file.filename}`; // Adjust the path if necessary
  const locationData = { ...body, image_url };

  console.log('Location Data:', locationData); // Log locationData to see its structure

  Location.create(locationData)
    .then(location => res.json({ msg: 'Location added successfully', location }))
    .catch(err => res.status(400).json({ error: err.message }));
});


// @route GET api/location/:id
// @description Update location
// @access Public
router.put('/:id', (req, res) => {
  Location.findByIdAndUpdate(req.params.id, req.body)
    .then(location => res.json({ msg: ` Updated successfully` }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

// @route GET api/location/:id
// @description Delete location by id
// @access Public
router.delete('/:id', (req, res) => {
  Location.findByIdAndRemove(req.params.id, req.body)
    .then(location => res.json({ mgs: 'Location entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such details' }));
});

module.exports = router;