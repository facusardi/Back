import Order from "../models/modelOrder.js";
import { Order_Detail } from "../models/modelOtder_Detail.js";
import User from "../models/modelUser.js";

// Obtener todos los pedidos
export const getOrders = async (req, res) => {
    try {
        const orders = await Order.findAll();
        res.json(orders);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener los pedidos", error: error.message });
    }
};

// Obtener un pedido por ID
export const getOrderById = async (req, res) => {
    try {
        const { id } = req.params;
        const order = await Order.findByPk(id);
        if (order) {
            res.json(order);
        } else {
            res.status(404).json({ message: "Pedido no encontrado" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error al obtener el pedido", error: error.message });
    }
};
// Crear un nuevo pedido con detalles
export const createOrder = async (req, res) => {
    try {
        const { user_id, state_id, details } = req.body;
        const newOrder = await Order.create({ user_id, state_id });
        for (const detail of details) {
            await Order_Detail.create({
                order_id: newOrder.order_id,
                cost_unit: detail.cost_unit,
                cant: detail.cant
            });
        }
        res.status(201).json(newOrder);
    } catch (error) {
        res.status(500).json({ message: "Error al crear el pedido con detalles", error: error.message });
    }
};

// Eliminar un pedido
export const deleteOrder = async (req, res) => {
    try {
        const { id } = req.params;
        await Order_Detail.destroy({ where: { order_id: id } });
        const order = await Order.findByPk(id);
        if (order) {
            await order.destroy();
            res.json({ message: "Pedido eliminado correctamente" });
        } else {
            res.status(404).json({ message: "Pedido no encontrado" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error al eliminar el pedido", error: error.message });
    }
};

// Actualizar un pedido existente
export const updateOrder = async (req, res) => {
    const { id } = req.params;
    const {order_id, created_at, total, user_id, state_id, len_location, lat_lucation, description_location, delivery_date} = req.body;
    try {
        const order = await Order.findByPk(id);
        if(!order){
            return res.status(404).json({message: "Pedido no encontrado"});
        }
        //Actulizar el pedido
        await order.update({order_id, created_at, total, user_id, state_id, len_location, lat_lucation, description_location, delivery_date});
        //Elimina todos los detalles del pedido
        await Order_Detail.destroy({where: {order_id: id}});
        //Crear nuevos detalles del pedido
        const newDetails = details.map(detail => ({...detail, order_id: id}));
        await Order_Detail.bulkCreate(newDetails);
        res.json({message: "Pedido actualizado correctamente", order, newDetails: newDetails}) 
        
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar el pedido", error: error.message });
    }
};