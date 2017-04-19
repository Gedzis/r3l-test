import TaskDisplayTemplate from '../../views/task-display.html';
import moment from 'moment'
class TaskDisplay {
    constructor() {
        this.restrict = 'E';
        this.template = TaskDisplayTemplate;
        this.scope = {
            task: '='
        };
    }

    formatDate(){
        console.log(this);
    }

    static directiveFactory() {
        TaskDisplay.instance = new TaskDisplay();
        return TaskDisplay.instance;
    }
}


export default TaskDisplay;
