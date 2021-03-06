var mongoose = require("mongoose"); 
var Schema = mongoose.Schema; 
var userSchema = new Schema({
	
	firstName: 
	{
    	type: String,
    	trim: true,
    	required: "First Name is Required"
  	},

  	lastName: 
  	{
    	type: String,
    	trim: true,
    	required: "Last Name is Required"
  	},

	age: Number,

	grade: Number, 

	username: 
	{
    	type: String,
    	trim: true,
    	required: "Username is Required"
  	},

	loginPassword: 
	{
		type: String,
		trim: true,
		required: "Password is Required"
	},

	email: String,

	cash: {type: Number, default: 1000},

	tradeHistory: 
		[{ 
			stockName: String,
			Date: {type: Date, default: Date.now},
			numberOfSharesPurchased: {type: Number, default: 0},

			numberOfSharesSold: {type: Number, default:0},
			sharePrice: 
				{	
					type: Number, 
				
				}
		}],

	portfolio: 
		[{
			stockName: String,
			shareCount: Number
		}],
		
	leagueID: {
		type: Schema.Types.ObjectId, 
		default: null		
	},

	createdAt: {type: Date, default: Date.now}
}); 
var userModel = mongoose.model("userModel", userSchema); 
module.exports = userModel; 
