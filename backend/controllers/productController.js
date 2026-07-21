const productService = require("../services/productService"); // Faz o import do serviço de produtos

// Função para listar todos os produtos
const listProducts = (req, res) => {

    const products = productService.getProducts();

    return res.status(200).json(products);

};

// Função para criar (cadastrar) um novo produto
const createProduct = (req, res) => {

    const product = productService.createProduct(req.body);

    return res.status(201).json({
        message: "Produto cadastrado com sucesso.",
        product
    });

};

module.exports = {
    listProducts,
    createProduct
};