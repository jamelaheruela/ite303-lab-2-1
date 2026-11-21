import 'dotenv/config';
import express from 'express';
import studentRoutes from './routes/studentRoutes.js';
const app = express();
app.use(express.json());
app.use('/students', studentRoutes);
// Start server
app.listen(4000, () => {
    console.log('Server running at http://localhost:4000');
});
