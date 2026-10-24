module.exports = (err, req, res, next) => {
  console.error(err);
  if (err.code === 11000) return res.status(409).json({ message: "A record with this value already exists" });
  if (err.name === "CastError") return res.status(400).json({ message: "Invalid ID" });
  res.status(err.status || 500).json({ message: err.status ? err.message : "Internal server error" });
};
