export function getHealth(req, res) {
  res.status(200).json({ message: "Hello World!" });
}

export function postHealth(req, res) {
  const body = req.body;
  res.status(200).json(body);
}
