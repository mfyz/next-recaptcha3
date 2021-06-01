export default (req, res) => {
	res.status(200).json({ success: true, received: req.body })
} 