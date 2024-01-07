import express from 'express'
import { config } from 'dotenv'
import { Resend } from 'resend'

config()

const puerto = process.env.PORT
const apiKey = process.env.APY_KEY_RESEND

const app = express()
const resend = new Resend(apiKey)

// Define una ruta básica
app.get('/', (req, res) => {
  resend.emails.send({
    from: 'foxed@resend.dev',
    to: 'jaenfigueroa03042000@gmail.com',
    subject: 'Hello World',
    html: '<p>Congrats on sending your <strong>first email</strong>!</p>',
  })

  res.send('¡Hola, mundo!')
})

// Inicia el servidor Express
app.listen(puerto, () => {
  console.log(`Servidor Express escuchando en http://localhost:${puerto}/`)
})
