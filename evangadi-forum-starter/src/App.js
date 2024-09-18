
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


//import express 
const express = require("express");
//import db connection
const dbConnection = require("./db/dbConfig");
//import user route
const userRoute = require("./routes/userRoute");
//import question route
const questionRoute = require('./question/questionRoute');
//import answer route
const ansewrRoute = require('./answer/answer')
//import cors
const cors = require("cors");
//import http-status-codes
const { StatusCodes } = require("http-status-codes");
//create a port
const port = process.env.PORT;

//create an app
const app = express();
app.use(cors({ origin: true })); // allow all origins
app.use(express.json()); // parse json

app.use("/user", userRoute); // user route
app.use("/questions", questionRoute); // question route
app.use("/ansewrs", ansewrRoute); // answer route

// create a function to start the server
async function start() {
  try {
    //check db connection
    const result = await dbConnection.execute("select 'test'");
    //listen to the port
    app.listen(port);
    console.log(result);
  } catch (error) {
    console.error(error.message);
  }
}
//start the server
start();