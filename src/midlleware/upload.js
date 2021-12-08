const multer = require('multer');

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => cb(null, 'src/uploads'),
  filename: (req, _file, cb) => {
    const { id } = req.params;
    cb(null, `${id}.jpeg`);
  },
});

module.exports = multer({ storage });
