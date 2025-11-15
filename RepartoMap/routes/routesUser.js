import express from "express";
import {
   getUser,
   getUserById,
   createUser,
   updateUser,
   deleteUser
} from "../controllers/controlerProduct.js";

const router = express.Router();

// Ruta para obtener todos los usuarios
router.get("/user", getUser);
// Ruta para obtener un usuario por ID
router.get("/user/:id", getUserById); 
// Ruta para crear un nuevo usuario
router.post("/user", createUser);
// Ruta para actualizar un usuario existente
router.put("/user/:id", updateUser);
// Ruta para eliminar un usuario
router.delete("/user/:id", deleteUser);