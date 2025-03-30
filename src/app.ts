import express, {Request, Response} from "express";
// import {db} from "./db/db";
import {SETTINGS} from "./settings"
import {videoController, videoRouter} from "./videos/videoController";
// import cors from 'cors';

export const app = express()

app.use(express.json())
// app.use(cors()) this line allows any front-end to request from our back-end. To specify we would need to give it specific URLs that can request from our back-edn
app.use(videoRouter)

// app.get('/', (req: Request, res: Response) => {
//     res.status(200).send('API is running!');
// });


// const products = [
//     {
//         id: 1,
//         title: 'Product 1'
//     },
//     {
//         id: 2,
//         title: 'Product 2'
//     }
// ]
//
// const addresses = [
//     {
//         id: 1,
//         title: 'Address 1'
//     },
//     {
//         id: 2,
//         title: 'Address 2'
//     },
//     {
//         id: 3,
//         title: 'Address 3'
//     }
// ]
//
// /// GET
// app.get('/', (req: Request, res: Response) => {
//     let helloMessage = 'Hello My App!!!!';
//     res.send(helloMessage)
// })
// app.get(SETTINGS.PATH.VIDEOS, videoRouter)
//
// app.get('/products', (req: Request, res: Response) => {
//     if (req.query.title) {
//         let searchString = req.query.title.toString();
//         res.send(products.filter(p => p.title.indexOf(searchString) > -1))
//     } else {
//         res.send(products)
//     }
// })
// app.get('/products/:id', (req: Request, res: Response) => {
//     let product = products.find(p => p.id === +req.params.id)
//     if (product) {
//         res.send(product)
//     } else {
//         res.send(404)
//     }
// })
// app.get('/addresses', (req: Request, res: Response) => {
//     res.send(addresses)
// })
// app.get('/addresses/:id', (req: Request, res: Response) => {
//     let address = addresses.find(p => p.id === +req.params.id)
//     if (address) {
//         res.send(address)
//     } else {
//         res.send(404)
//     }
// })
//
// // DELETE
// app.delete('/products/:id', (req: Request, res: Response) => {
//     for (let i=0; i < products.length; i++) {
//         if (products[i].id === +req.params.id) {
//             products.splice(i, 1);
//             res.send(204)
//             return;
//         }
//     }
//     res.send(404)
// })
//
// // POST must use query parameters stored in body
// app.post('/products', (req: Request, res: Response) => {
//     const newProduct = {
//         id: +(new Date()),
//         title: req.body.title
//     }
//     products.push(newProduct)
//     res.status(201).send(newProduct)
// })
//
// // PUT might use query parameters stored in body
// app.put('/products/:id', (req: Request, res: Response) => {
//     let product = products.find(p => p.id === +req.params.id)
//     if (product) {
//         product.title = req.body.title
//         res.send(product)
//     } else {
//         res.send(404)
//     }
// })