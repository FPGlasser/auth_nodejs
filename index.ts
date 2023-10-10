import express, {Express} from 'express'

const App:Express = express()

App.listen(8080, ()=>console.log('server is running on port 8080'))