import multer from "multer";

const upload = multer({
  // configure the destination folder for the uploaded files
  dest: "uploads/",
});

export default upload;
