import express from "express";
const Port = 8080;
const App = express();
App.listen(Port, () => console.log(`Server is runing on port ${Port}`));
