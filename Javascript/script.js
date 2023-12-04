const { createApp } = Vue


createApp({

    data() {

        return {
            apiUrl: "server.php",
            textList: [],
            addTask: ""
        }

    },

    methods: {

        remove(index) {
            const data = new FormData();
            data.append("indexToRemove", index);

            axios
                .post(this.apiUrl, data)
                .then((response) => {
                    this.todoList = response.data;
                    console.log(response.data);
                    location.reload();
                })
        },




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
        readList() {
            axios.get(this.apiUrl).then((response) => {
                console.log(response);
                this.textList = response.data;
            }).catch(function (error) {
                console.log(error);

            }).finally(function () {


            });
        },

        addNewTask() {
            console.log(this.addTask);
            const data = new FormData();
            data.append('task', this.addTask)
            axios.post(this.apiUrl, data)
                .then((response) => {
                    console.log(response.data);
                    this.textList = response.data;
                    this.readList();
                })
                .catch(function (error) {
                    console.log(error);
                })

        },

        mounted() {

            this.readList();
        },



    }
    /*created() {

        this.addNewTask();
    },*/

}).mount('#app')
