class TasksServive {
    constructor($http, $q) {
        this.$http = $http;
        this.$q = $q;
    }

    getTasks(field='', order=''){
        return this.$http({
            method: 'GET',
            url: `/api/task/?sort_field=${field}&sort_order=${order}`
        }).then((response) => {
            return this.$q.resolve(response.data)
        })
    }

}

export default TasksServive;
