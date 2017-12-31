const vm = new Vue({

    el: 'main',

    data: {

        minimo: 60,

        busqueda: '',

        tareas: [
            { nombre: 'Estudiar', completado: true },
            { nombre: 'Vuejs', completado: false },
            { nombre: 'Firebase', completado: true },
            { nombre: 'LARAVEL', completado: false },
        ],

    },
    methods: {
        completarTarea(tarea) {
            tarea.completado = !tarea.completado;
        }
    },
    computed: {
        tareas_completadas() {
            return this.tareas.filter((tarea) => tarea.completado);
        }
    }
});