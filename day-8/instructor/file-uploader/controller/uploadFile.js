export function uploadFile(req, res) {
  // req.file exists because of the upload.single middleware by multer
  const file = req.file;

  res.status(200).json({
    message: "File uploaded successfully",
    file: file,
  });
}
