const express = require('express');
const compression = require('compression');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const PORT = process.env.PORT || 4000;

const getScores = () => {};
const postScores = (req, res) => {
	const { scores } = req.body;
};

const app = express();
app.use(cors());
app.use(compression());

app.get('/getScores', getScores);
app.post('/postScores', postScores);

app.listen(PORT, () => {
	console.log('we runnin');
});
