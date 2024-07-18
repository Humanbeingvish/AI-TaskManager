import { Task } from "../models/task";

export class InMemoryTaskStorage {
    private tasks: Task[] = [];
    private nextId: number = 1;

    create(title: string): Task {
        const newTask: Task = { id: this.nextId++, title, completed: false };
        this.tasks.push(newTask);
        return newTask;
    }

    readAll(): Task[] {
        return this.tasks;
    }

    update(id: number, title: string): Task | undefined {
        const task = this.tasks.find(task => task.id === id);
        if (task) {
            task.title = title;
            return task;
        }
        return undefined;
    }

    delete(id: number): boolean {
        const index = this.tasks.findIndex(task => task.id === id);
        if (index !== -1) {
            this.tasks.splice(index, 1);
            return true;
        }
        return false;
    }
}
