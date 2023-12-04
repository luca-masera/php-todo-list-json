const { createApp } = Vue


createApp({

    data() {

        return {
            apiUrl: "server.php",
            todoList: [],
            addTask: "",

        }
    },

    methods: {

        /* remove(index) {
             this.lista.splice(index, 1)
         },*/



        /*aggiungi() {
            this.lastId++;

            const newObj = {
                id: this.lastId,
                text: this.todoTextNew,
                done: true
            }
            this.lista.push(newObj),
                this.todoTextNew = ''
        }*/

        addNewTask() {
            console.log(this.addTask)
            const data = new FormData();
            data.append('task', this.addTask)
            axios.post(this.apiUrl, data)
                .then(function (response) {
                    console.log(response.data);
                    this.todoList = response.data;
                })
                .catch(function (error) {
                    console.log(error);
                })

        },

        /*bonus2(id) {
            this.lista[id].done = !this.lista[id].done
        }*/

    },
    /*created() {

        this.addNewTask();
    },*/

}).mount('#app')