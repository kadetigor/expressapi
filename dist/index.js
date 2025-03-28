"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const setup_app_1 = require("./setup-app");
const app = (0, express_1.default)();
(0, setup_app_1.setupApp)(app);
// порт приложения
const PORT = process.env.PORT || 3000;
/// GET
app.get('/', (req, res) => {
    let helloMessage = 'Hello My App!!!!';
    res.send(helloMessage);
});
app.get('/products', (req, res) => {
    if (req.query.title) {
        let searchString = req.query.title.toString();
        res.send(products.filter(p => p.title.indexOf(searchString) > -1));
    }
    else {
        res.send(products);
    }
});
app.get('/products/:id', (req, res) => {
    let product = products.find(p => p.id === +req.params.id);
    if (product) {
        res.send(product);
    }
    else {
        res.send(404);
    }
});
app.get('/addresses', (req, res) => {
    res.send(addresses);
});
app.get('/addresses/:id', (req, res) => {
    let address = addresses.find(p => p.id === +req.params.id);
    if (address) {
        res.send(address);
    }
    else {
        res.send(404);
    }
});
// DELETE
app.delete('/products/:id', (req, res) => {
    for (let i = 0; i < products.length; i++) {
        if (products[i].id === +req.params.id) {
            products.splice(i, 1);
            res.send(204);
            return;
        }
    }
    res.send(404);
});
// POST must use query parameters stored in body
app.post('/products', (req, res) => {
    const newProduct = {
        id: +(new Date()),
        title: req.body.title
    };
    products.push(newProduct);
    res.status(201).send(newProduct);
});
// PUT might use query parameters stored in body
app.put('/products/:id', (req, res) => {
    let product = products.find(p => p.id === +req.params.id);
    if (product) {
        product.title = req.body.title;
        res.send(product);
    }
    else {
        res.send(404);
    }
});
app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});
лл;
