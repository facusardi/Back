import Product from "../models/modelProduct";


// Obtener todos los productos
export const getProducts = async (req, res) => {
    try {
        const products = await Product.findAll();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener los productos", error: error.message });
    }
};

// Obtener un producto por ID
export const getProductById = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByPk(id);
        if (product) {
            res.json(product);
        } else {
            res.status(404).json({ message: "Producto no encontrado" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error al obtener el producto", error: error.message });
    }
};

// Crear un nuevo producto
export const createProduct = async (req, res) => {
    try {
        const { name, description, price } = req.body;
        const newProduct = await Product.create({ name, description, price });
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(500).json({ message: "Error al crear el producto", error: error.message });
    }
};
// Actualizar un producto existente
export const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, description, price } = req.body;
        const product = await Product.findByPk(id);
        if (product) {
            await product.update({ name, description, price });
            res.json(product);
        } else {
            res.status(404).json({ message: "Producto no encontrado" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar el producto", error: error.message });
    }
};

// Eliminar un producto
export const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByPk(id);
        if (product) {
            await product.destroy();
            res.json({ message: "Producto eliminado correctamente" });
        }
        else {
            res.status(404).json({ message: "Producto no encontrado" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error al eliminar el producto", error: error.message });
    }
};

