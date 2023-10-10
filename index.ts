import express, { Express } from "express";

const Port = 8080
const App: Express = express()

App.listen(Port, () => console.log(`Server is runing on port ${Port}`))