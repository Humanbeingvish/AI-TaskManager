import express from 'express';
import router from '../src/routes/taskrouts'

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json()); // Middleware to parse JSON bodies
app.use('/tasks', router); // Use the task routes

// Start the server
app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});
