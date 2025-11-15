import User from "../models/modelUser.js";
import bcrypt from "bcryptjs";
// Obtener todos los usuarios
export const getUser = async (req, res) => {
    try {
        const users = await User.findAll(); 
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener los usuarios", error: error.message });
    }
};
// Obtener un usuario por ID
export const getUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findByPk(id);
        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ message: "Usuario no encontrado" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error al obtener el usuario", error: error.message });
    }
};

// Crear un nuevo usuario
export const createUser = async (req, res) => {
    try {
        const { username, password, email } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({ user_name: username, password: hashedPassword, email });
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ message: "Error al crear el usuario", error: error.message });
    }
};

// Actualizar un usuario existente
export const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { username, password, email } = req.body;
        const user = await User.findByPk(id);  
        if (user) {
            const hashedPassword = await bcrypt.hash(password, 10);
            await user.update({ user_name: username, password: hashedPassword, email });
            res.json(user);
        } else {
            res.status(404).json({ message: "Usuario no encontrado" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar el usuario", error: error.message });
    }
};

// Eliminar un usuario
export const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findByPk(id);
        if (user) {
            await user.destroy();
            res.json({ message: "Usuario eliminado correctamente" });
        } else {
            res.status(404).json({ message: "Usuario no encontrado" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error al eliminar el usuario", error: error.message });
    }
};