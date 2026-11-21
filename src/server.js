import 'dotenv/config';
import express from 'express';
import studentRoutes from './routes/studentRoutes.js';
const app = express();
app.use(express.json());
app.use('/students', studentRoutes);
// Start server

const PORT = process.env.PORT || 4000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
});
