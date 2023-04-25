import express, { urlencoded } from 'express'
import route from './api/image.routes'
const app  =  express()
const PORT = process.env.PORT || 5000

app.use(express.json())

app.use(express.urlencoded({ extended: true }));



app.listen(PORT,()=>{
   console.log(`app listening on port ${PORT}`)
})


app.use('/api', route)