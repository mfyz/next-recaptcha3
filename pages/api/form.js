import axios from 'axios'

const SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY

export default (req, res) => {
	axios({
		url: `https://www.google.com/recaptcha/api/siteverify?secret=${SECRET_KEY}&response=${req.body['token']}`
	}).then((resp) => {
		const verified = resp.data.success
		
		res.status(200).json({
			success: true,
			received: req.body,
			verified,
			verification_result: resp.data
		})
	})
	.catch((e) => {
		res.status(403).json({ success: false, error: e.message })
	})

} 