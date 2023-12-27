const express = require('express');
const { upload } = require('../utils/multer');
const router = express.Router();

router.post('/', upload.single('file'), async (req, res) => {
  try {
    if (!req.body) {
      return res.status(404).json({ status: false, message: "Doesn't have data" });
    }
    console.log('BODY', req.body);
    console.log("FILE", req.file)
    return res.status(201).json({ status: true, message: "Lead saved successfully" })

  } catch (error) {
    return res.status(404).json({ status: false, message: error });
  }
})

router.get('/', async (_req, res) => {
  res.send("Listening")
})


module.exports = router;