import express from "express";
import {
    getPresentations,
    getPresentationById,
    createPresentation,
    updatePresentation,
    deletePresentation
} from "../controllers/controlerPresentation.js";

const router = express.Router();

// Ruta para obtener todas las presentaciones   
router.get("/product/presentations", getPresentations);
// Ruta para obtener una presentacion por ID
router.get("/product/presentations/:id", getPresentationById);  
// Ruta para crear una nueva presentacion
router.post("/product/presentations", createPresentation);
// Ruta para actualizar una presentacion existente
router.put("/product/presentations/:id", updatePresentation);
// Ruta para eliminar una presentacion
router.delete("product/presentations/:id", deletePresentation);