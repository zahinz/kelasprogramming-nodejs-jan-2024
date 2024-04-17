import multer from "multer";
import path from "path";
import crypto from "crypto";

// const upload = multer({
//   // configure the destination folder for the uploaded files
//   dest: "uploads/",
// });

const uuid = crypto.randomUUID();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  // modify the filename of the uploaded file with a unique identifier and the original extension
  filename: function (req, file, cb) {
    cb(null, uuid + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

export default upload;
