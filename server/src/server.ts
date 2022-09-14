import express, { response } from 'express'

const app = express()

//rota quano o user acessa cai nela
// método get
app.get('/ads', (request, response) => {
    //console.log('Acessou')
    return response.json([
        {id: 1, name : 'Anuncio 1'},
        {id: 2, name : 'Anuncio 2'},
        {id: 3, name : 'Anuncio 3'},
        {id: 3, name : 'Anuncio 4'}
    ])
}) 

app.listen(3333) // porta para rodar a aplicação