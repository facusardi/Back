import Presentation from "../models/Presentation.js";
import Unit from "../models/Unit.js";
import Category from "../models/Category.js";

// Obtener todas las presentaciones
export const getPresentations = async (req, res) => {
    try {
        const presentations = await Presentation.findAll({
            include: [
                { model: Unit, as: 'unit' },
                { model: Category, as: 'category' }
            ]
        });
        res.json(presentations);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener las presentaciones", error: error.message });
    }
};
// Obtener una presentacion por ID 
export const getPresentationById = async (req, res) => {
    try {
        const { id } = req.params;
        const presentation = await Presentation.findByPk(id, {
            include: [
                { model: Unit, as: 'unit' },
                { model: Category, as: 'category' }
            ]
        });
        if (presentation) {
            res.json(presentation);
        } else {
            res.status(404).json({ message: "Presentacion no encontrada" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error al obtener la presentacion", error: error.message });
    }
};

// Crear una nueva presentacion
export const createPresentation = async (req, res) => {
  try {
    const { description, unit_id, category_id } = req.body;

    const unidad = await Unit.findByPk(unit_id);
    const categoria = await Category.findByPk(category_id);
    if (!unidad || !categoria) {
      return res.status(400).json({ message: "Unidad o categoría inválida" });
    }

    const newPresentation = await Presentation.create({ description, unit_id, category_id });
    res.status(201).json({ message: "Presentación creada correctamente", newPresentation });
  } catch (error) {
    res.status(500).json({ message: "Error al crear la presentación", error: error.message });
  }
};


// Actualizar una presentacion existente
export const updatePresentation = async (req, res) => {
  try {
    const { id } = req.params;
    const { description, unit_id, category_id } = req.body;

    const presentation = await Presentation.findByPk(id);
    if (!presentation) {
      return res.status(404).json({ message: "Presentación no encontrada" });
    }

    await presentation.update({ description, unit_id, category_id });

    res.json({ message: "Presentación actualizada", presentation });
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar la presentación", error: error.message });
  }
};

// Eliminar una presentacion
export const deletePresentation = async (req, res) => {
    try {
        const { id } = req.params;
        const presentation = await Presentation.findByPk(id);
        if (presentation) {
            await presentation.destroy();
            res.json({ message: "Presentacion eliminada correctamente" });
        } else {
            res.status(404).json({ message: "Presentacion no encontrada" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error al eliminar la presentacion", error: error.message });
    }
};