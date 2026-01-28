import express from 'express';
import cors from 'cors';

interface Quote {
     message: string,
     author: string,
     title: string | undefined
}

let items: Quote[] = [
     {
          message:"Some Message Goes Here",
          author:"Me",
          title: undefined
     },
     {
          message:"Super cool Quote",
          author:"This guy",
          title: "Oopsie Poopsie"
     }
]

const app = express()

app.use(cors())

app.get('/', (request, response) => {
     response.send("Welcome to the Quote Server!")
})

app.get('/getDailyJoke', (request, response) => {
     const randomQuote: Quote = items[Math.floor(Math.random() * items.length)]
     response.send(randomQuote)
})

app.listen(3000, () => {
    console.log(`Server is Listening on 3000`)
})