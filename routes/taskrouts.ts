import { Router, Request, Response } from 'express';
import { InMemoryTaskStorage } from '../storage/inMemoryStorage';

const router = Router();
const taskStorage = new InMemoryTaskStorage();

// Create a task
router.post('/', (req: Request, res: Response) => {
    const { title } = req.body;
    if (!title) {
        return res.status(400).send('Title is required');
    }
    const task = taskStorage.create(title);
    res.status(201).json(task);
});

// Read all tasks
router.get('/', (req: Request, res: Response) => {
    const tasks = taskStorage.readAll();
    res.json(tasks);
});

// Update a task
router.put('/:id', (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const updatedTask = taskStorage.update(id, req.body.title);
    if (!updatedTask) {
        return res.status(404).send('Task not found');
    }
    res.json(updatedTask);
});

// Delete a task
router.delete('/:id', (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const deleted = taskStorage.delete(id);
    if (!deleted) {
        return res.status(404).send('Task not found');
    }
    res.status(204).send();
});

export default router;
