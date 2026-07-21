const fs = require("fs");
const path = require("path");

// Faz o import do serviço de autenticação
const productsFile = path.join(__dirname, "../data/products.json");


// Funcao para ler os produtos do arquivo JSON
const getProducts = () => {

    const data = fs.readFileSync(productsFile, "utf8");

    return JSON.parse(data);

};


// Funcao para salvar os produtos no arquivo JSON
const saveProducts = (products) => {

    fs.writeFileSync(
        productsFile,
        JSON.stringify(products, null, 4),
        "utf8"
    );

};

// Funcao para criar (cadastrar) um novo produto
const createProduct = ({ name, description, price, stock }) => {

    const products = getProducts();

    const newProduct = {
        id: products.length + 1,
        name,
        description,
        price,
        stock
    };

    products.push(newProduct);

    saveProducts(products);

    return newProduct;
};

module.exports = {
    getProducts,
    saveProducts,
    createProduct
};
