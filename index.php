<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">
    <script src="https://unpkg.com/axios@1.1.2/dist/axios.min.js"></script>
    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
    <title>Vue To Do List</title>
</head>

<body>
    <div id="app">
        <div class="container">
            <header class="text-center pt-4">
                <!--<img class="w-25" src="img/ita.png" alt="">-->
                <div class="pt-5">
                    <input type="text" class="form-control w-25 d-inline-block mx-3" v-model="addNewTask"
                        @keyup.enter="addNewTask">
                    <button class="btn btn-danger" @click="addNewTask">addList</button>
                </div>
            </header>
            <main>
                <ul class="list-group">
                    <li class="list-group-item list-group-item-action d-flex justify-content-between"
                        v-for="(task,index) in todoList" :key="index">
                        <span :class="{'done': todo.done}" @click="bonus2(id)">{{ task }}</span>
                        <i class="fa-solid fa-trash" @click="remove(index)"></i>


                    </li>

                </ul>


            </main>

        </div>

    </div>

    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
    <script src="Javascript/script.js"></script>
</body>

</html>
{{}}