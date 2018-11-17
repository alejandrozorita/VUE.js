Vue.component('mis-tareas', {
    props: ['tareas'],
    template: `<ul><li v-for="tarea in tareas" v-text="tarea.title"></li></ul>`
    
});


Vue.component('las-tareas', {
    template: `<ul><li v-for="tarea in lasTareas" v-text="tarea.title"></li></ul>`,

    mounted() {
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then((respuesta) => {
                this.lasTareas = respuesta.data
                console.log(respuesta.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    },
    data() {
        return {lasTareas: []}
    }
    
});

const vm = new Vue({

    el: 'main',

    mounted() {
        this.cargarPersonas()
    },
    data: {
        tareasAjax: [],
        tareasLocales: [
            {title: 'Tarea 1'},
            {title: 'Tarea 2'},
            {title: 'Tarea 3'},
        ],
    },
    methods: {
        cargarPersonas() {
            // Make a request for a user with a given ID
            axios.get('https://jsonplaceholder.typicode.com/todos')
                .then((respuesta) => {
                    this.tareasAjax = respuesta.data
                    console.log(respuesta.data);
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
                .then(function () {
                    // always executed
                });
        }
    }
});
