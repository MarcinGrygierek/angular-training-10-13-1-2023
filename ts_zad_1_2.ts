enum TaskStatus {
    New = 'New',
    InProgress = 'InProgress',
    Done = 'Done'
}

interface Task {
    id: string;
    title: string;
    status: TaskStatus;
}

class TaskManager {
    tasks: Task[] = [];

    addTask(title: string) {
        const newTask: Task = {
            title,
            id: `${new Date().getTime().toString()}${Math.round(Math.random() * 10000)}`,
            status: TaskStatus.New
        }

        // sposób mutacyjny
        // this.tasks.push(newTask);

        // sposób niemutacyjny
        this.tasks = [...this.tasks, newTask];
    }

    deleteTask(id: string) {
        // sposób mutacyjny
        // const elementIndex = this.tasks.findIndex(task => task.id === id);

        // if(elementIndex >= 0) {
        //     this.tasks.splice(elementIndex, 1);
        // }

        // sposób niemutacyjny
        this.tasks = this.tasks.filter(task => task.id !== id)
    }

    changeStatus(id: string, newStatus: TaskStatus) {
        // sposób mutacyjny   
        // const element = this.tasks.find(task => task.id === id);
        // if(element) element.status = newStatus;
    
        // sposób niemutacyjny
        this.tasks = this.tasks.map(task => {
            if(task.id === id) return {
                ...task,
                status: newStatus
            };
            return task;
        })
    }

    print() {
        this.tasks.forEach(task => {
            console.log(`${task.id} - ${task.title} (${task.status})`)
        })
    }
}

const manager = new TaskManager();
manager.addTask('Lorem');
manager.addTask('Ipsum');
manager.addTask('Dolor');
manager.addTask('Sit');
manager.print();

const idToDelete = manager.tasks[1].id;
console.log(`DELETING ${idToDelete}`);
manager.deleteTask(idToDelete);

const idToChange = manager.tasks[0].id;
manager.changeStatus(idToChange, TaskStatus.Done);
manager.print();