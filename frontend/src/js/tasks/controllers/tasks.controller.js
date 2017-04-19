import moment from 'moment';
class TasksController {

    constructor(TasksService) {
        this.tasks = [];
        this.tasksService = TasksService;
        this.sortOrder = 'asc';
        this.sortField = 'priority';
        this.getTasks();
    }

    getTasks() {
        this.tasksService.getTasks(this.sortField, this.sortOrder).then((tasks) => {
            this.tasks = tasks;
        }).catch(() => {
            alert('Error occured');
        });
    }

    changeSort(field) {
        if (this.sortField === field) {
            this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
        } 
        this.sortField = field;
        this.getTasks();
    }

    getPendingTasks() {
        return this.tasks.filter((task) => {
            return moment(task.dueDate).isAfter(new Date())
        })
    }

    getOverdueTasks() {
        return this.tasks.filter((task) => {
            return moment(task.dueDate).isBefore(new Date())
        })
    }

}

export default TasksController;
