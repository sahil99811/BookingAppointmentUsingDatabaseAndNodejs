const Sequelize=require('sequelize');

const sequelize=new Sequelize('appointment','root','Sahil99811@',{dialect:'mysql',host:'localhost'});
sequelize.authenticate().then(() => {
    console.log("successfullt connected with db");
}).catch((err) => {
    console.log(err)
});
module.exports=sequelize;

// const mysql=require('mysql2');
// const pool=mysql.pool()
// const mysql=require('mysql2');
// const pool=mysql.createPool({
//     host:'localhost',
//     user:'root',
//     database:'appointment',
//     password:'Sahil99811@'
// })
// // pool.getConnection((err, connection) => {
// //     if (err) {
// //       console.error('Error connecting to the database:', err);
// //       return;
// //     }
  
// //     // You now have a valid database connection in the "connection" object
  
// //     // Perform database operations here
  
// //     // Release the connection when you're done with it
// //     connection.release();
// //   });
  
// //   // Handle errors
// //   pool.on('error', (err) => {
// //     console.error('Database pool error:', err);
// //   });

//   module.exports=pool.promise();