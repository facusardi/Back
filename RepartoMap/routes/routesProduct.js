import express from "express";
import {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
} from "../controllers/productController.js";

const router = express.Router();

// Ruta para obtener todos los productos
router.get("/products", getProducts);
// Ruta para obtener un producto por ID
router.get("/products/:id", getProductById);
// Ruta para crear un nuevo producto
router.post("/products", createProduct);
// Ruta para actualizar un producto existente
router.put("/products/:id", updateProduct);
// Ruta para eliminar un producto
router.delete("/products/:id", deleteProduct);

export default router;