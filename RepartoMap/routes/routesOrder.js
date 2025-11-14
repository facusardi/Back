import express from "express";
import {
    getOrders,
    getOrderById,
    createOrder,
    deleteOrder,
    updateOrder
} from "../controllers/orderController.js";

const router = express.Router();
// Ruta para obtener todos los pedidos
router.get("/orders", getOrders);
// Ruta para obtener un pedido por ID
router.get("/orders/:id", getOrderById);
// Ruta para crear un nuevos pedidos
router.post("/orders", createOrderWithDetails); 

// Ruta para eliminar un pedido con detalles
router.delete("/orders/:id", deleteOrder);
// Ruta para crear un pedido con detalles
router.post("/orders", createOrder);
// Ruta para actualizar un pedido existente
router.put("/orders/:id", updateOrder);