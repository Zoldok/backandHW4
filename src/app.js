const express = require('express');
const dotenv = require('dotenv')
const userRouter = require('./routes/users')

dotenv.config()
const app = express();

const {
    PORT = 3000, 
    API_URL = "http://127.0.0.1"
} = process.env;

const helloWorld = (request, response) => {
    response.status(200),
    response.send('Hello, World!')
}

app.get('/', helloWorld)

app.post('/', (request, response) => {
    response.status(200),
    response.send('Hello, from POST!')
})

app.use(userRouter)

app.listen(PORT, () => {
    console.log(`Сервер запущен по адресу ${API_URL}:${PORT}`);
})

