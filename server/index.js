const express=require('express');
const app = express();
const cors = require("cors");
app.use(express.json());
const userRoutes=require('./routes/User');
app.use(
	cors({
		origin:"http://localhost:3000",
		credentials: true,
		methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Include DELETE method,
		allowedHeaders: ['Content-Type', 'Authorization'], // Include 'Authorization'
		
	})
)
const User=require('./models/User');
User.sync();
// User.destroy({
// 	where:{
// 		"id":1
// 	}
// })
app.use(userRoutes);
app.use('/',(req,res)=>{
	res.send(`<div>heelo ji</div>`)
})
app.listen(4000, () => {
	console.log('App is running at 3000')
})