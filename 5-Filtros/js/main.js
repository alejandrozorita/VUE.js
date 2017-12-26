const vm = new Vue({

    el: 'main',

    data: {

        minimo: 60,

        busqueda: '',

        tareas: [
            { nombre: 'Estudiar', prioridad: true, antiguedad: 200 },
            { nombre: 'Vuejs', prioridad: false, antiguedad: 100 },
            { nombre: 'Firebase', prioridad: true, antiguedad: 50 },
        ],

    },
    methods: {

    },
    computed: {
        tareas_antiguas() {
            return this.tareas.filter((tarea) => tarea.antiguedad >= this.minimo);
        },
        buscar_tarea() {
            return this.tareas.filter((tarea) => tarea.nombre.includes(this.busqueda));
        }
    }
});