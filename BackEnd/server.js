const express = require('express')
const app = express()
const port = 4000
const cors = require('cors'); // package for cross origin resource sharing (npm install cors)
const bodyParser = require('body-parser') // Body Parser package
const mongoose = require('mongoose'); // Mongoose Library
const path = require('path'); // Path Library

app.use(cors());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Essentially configiration telling us where the front end content is located
app.use(express.static(path.join(__dirname, '../build')));
app.use('/static', express.static(path.join(__dirname, 'build//static')));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// MongoDB Connection String (connect server to database)
const connectionString = 'mongodb+srv://admin:4jYT5K45BR4q@cluster0.ijihv.mongodb.net/movies?retryWrites=true&w=majority'
mongoose.connect(connectionString, {useNewUrlParser: true}); // Connects to MongoDB server

// Movie Schema for the database model
const schema = mongoose.Schema;
var movieSchema = new schema({
	Title:String,
	Year:String,
	Poster:String
});

// Construct a database model
var movieModel = mongoose.model("movie", movieSchema);

// get sent via the url
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/api/movies', (req, res) => {
    // Hardcoded Movie data
    // const mymovies = [
    //     {
	// 		"Title":"Avengers: Infinity War",
	// 		"Year":"2018",
	// 		"imdbID":"tt4154756",
	// 		"Type":"movie",
	// 		"Poster":"https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
	// 	},
	// 	{
	// 		"Title":"Captain America: Civil War",
	// 		"Year":"2016",
	// 		"imdbID":"tt3498820",
	// 		"Type":"movie",
	// 		"Poster":"https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
	// 	},
	// 	{
	// 		"Title":"World War Z",
	// 		"Year":"2013",
	// 		"imdbID":"tt0816711",
	// 		"Type":"movie",
	// 		"Poster":"https://m.media-amazon.com/images/M/MV5BNDQ4YzFmNzktMmM5ZC00MDZjLTk1OTktNDE2ODE4YjM2MjJjXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"
	// 	},
	// 	{
	// 		"Title":"War of the Worlds",
	// 		"Year":"2005",
	// 		"imdbID":"tt0407304",
	// 		"Type":"movie",
	// 		"Poster":"https://m.media-amazon.com/images/M/MV5BNDUyODAzNDI1Nl5BMl5BanBnXkFtZTcwMDA2NDAzMw@@._V1_SX300.jpg"
	// 	}
    // ]
	
	// Respond to URL /api/movies with the data from the MongoDB Database
	movieModel.find((err, data) => {
		res.json(data);
	})

    // Respond to URL /api/movies with JSON data of mymovies
    // res.status(200).json({
    //     message: "All Good",
    //     movies:mymovies});
})

// Function that will return a specific movie if the URL contains a matching movie id
app.get('/api/movies/:id', (req, res) => {
	console.log(req.params.id);

	movieModel.findById(req.params.id, (err, data) => {
		res.json(data);
	});
});

// put request which will update the movie record
app.put('/api/movies/:id', (req, res) => {
	console.log("Update Movie: " + req.params.id);
	console.log(req.body);

	movieModel.findByIdAndUpdate(req.params.id, req.body, {new:true}, 
		(err, data) => {
			res.send(data);
		}
	);
});

// Delete Movie data from the database using the unique id
app.delete('/api/movies/:id', (req, res) => {
	console.log('Delete ' + req.params.id);

	movieModel.findByIdAndDelete({_id:req.params.id}, (err, data) => {
		if (err)
			res.send(err);
		else
			res.send(data);
	})
})

// Will display the info sent by the browser (entered by the user on create component) in the terminal window
app.post('/api/movies', (req, res) => {
    console.log('Movie Received!');
    console.log(req.body.Title);
    console.log(req.body.Year);
	console.log(req.body.Poster);
	
	// Send data to MongoDB Database
	movieModel.create({
		Title:req.body.Title,
		Year:req.body.Year,
		Poster:req.body.Poster
	})

	res.send('Item Added'); // Confirmation Message
})

// * is for all other routes
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname + '/../build/index.html'))
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})