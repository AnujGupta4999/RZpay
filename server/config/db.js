// import mysql from 'mysql2/promise;

// // const connectDB = async () => {
// //   try {
//     const dbConnection = await mysql.createConnection({
//       host: process.env.MYSQL_HOST,
//       user: process.env.MYSQL_USER,
//       password: process.env.MYSQL_PASSWORD,
//       database: process.env.MYSQL_DATABASE
//     });


// dbConnection.connect((err) => {
//     if (err) {
//       console.log("connection error");
//       return;
//     } else {
//       console.log("connected successfully");
//     }
//   });

// export  { dbConnection };



import mysql from 'mysql2/promise';

const dbConnection = await mysql.createConnection({
  host: "localhost",
  user: "root",
  password:"password",
  database:"temp2" 
});

try {
  await dbConnection.connect();
  console.log("Connected successfully");
} catch (error) {
  console.error("Connection error:", error);
}

export { dbConnection };
