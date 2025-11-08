import express from 'express';
import 'dotenv/config';
import sequelize from './config/sequelize.js';

const app = express();
app.use(express.json());

// Ruta de prueba
app.get('/api/status', (req, res) => {
  res.json({ message: 'API funcionando correctamente 🚀' });
});

// Sincronizar base de datos y levantar servidor
const PORT = process.env.PORT || 1999;

sequelize.authenticate()
  .then(() => {
    console.log('✅ Conectado correctamente a la base de datos');
    app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
  })
  .catch((err) => console.error('❌ Error al conectar la base de datos:', err));
