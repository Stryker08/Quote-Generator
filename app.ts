import express from 'express';

const app = express()

app.get('/', (request, response) => {
     response.send("Welcome to the Quote Server!")
})

app.get('/getDailyJoke', (request, response) => {
     response.send({
        title: "Our First Quote",
        message:"lorem ipsum dolar emit",
        author:"Me"
     })
})

app.listen(3000, () => {
    console.log(`Server is Listening on 3000`)
})