var mongoose = require("mongoose");

// Local Database Configuration with Mongoose
// mLab database
mongoose.connect("mongodb://heroku_hpb6n0pn:iienerkfbebjokkiuj9tdn8l4n@ds025782.mlab.com:25782/heroku_hpb6n0pn", function(err) {
	if(err) throw err;
	console.log('database connected');
});