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

// Funcao para atualizar um produto existente
const updateProduct = (id, updatedData) => {

    const products = getProducts();

    const index = products.findIndex(
        product => product.id === Number(id)
    );

    if (index === -1) {
        throw new Error("Produto não encontrado.");
    }

    products[index] = {
        ...products[index],
        ...updatedData,
        id: products[index].id
    };

    saveProducts(products);

    return products[index];
};


// Funcao para excluir um produto
const deleteProduct = (id) => {

    const products = getProducts();

    const index = products.findIndex(
        product => product.id === Number(id)
    );

    if (index === -1) {
        throw new Error("Produto não encontrado.");
    }

    const deletedProduct = products[index];

    products.splice(index, 1);

    saveProducts(products);

    return deletedProduct;

};


module.exports = {  // Exporta as funções para serem utilizadas em outros módulos
    getProducts,
    saveProducts,
    createProduct,
    updateProduct,
    deleteProduct
};
