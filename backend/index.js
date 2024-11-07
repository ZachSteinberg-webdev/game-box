if(process.env.NODE_ENV!=="production") {
	const dotenv=require('dotenv').config();
};
console.log('In backend index.js file');
const express=require('express');
const path=require('path');
const cors=require('cors');
const mongoose=require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoSanitize = require('express-mongo-sanitize');
// const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const errorHandler = require('./middleware/error.js');
const hmsTime = require('./utilities/hmsTime');

const app=express();

// Morgan logging middleware
app.use(morgan('dev'));

// Body Parser middleware
app.use(bodyParser.json());

// Cookie parser middleware
app.use(cookieParser());

// CORS middleware
app.use(cors());

// Helmet middleware
// app.use(helmet());

// Error handler middleware
app.use(errorHandler);

// Express Mongo Sanitize middleware
app.use(mongoSanitize());

// Routes
const userRoutes = require('./routes/userRoutes.js');
const appRoutes = require('./routes/appRoutes.js');

// Route middleware
app.use('/api', userRoutes);
app.use('/api', appRoutes);

app.use(express.static(path.join('/app/frontend/dist')));

app.get('*', function(req, res){
	res.sendFile(path.join('/app/frontend/dist/index.html'));
});

// Mongoose database connection
mongoose.connect(process.env.REMOTE_DATABASE)
	.then(()=>{console.log(`${hmsTime()}: Mongo connection open.`)})
	.catch(error=>{console.log(`${hmsTime()}: Mongo error: ${error}`)});

const port = process.env.PORT || 8000;

app.listen(port, ()=>{
	console.log(`Server is running on port ${port}`);
});
