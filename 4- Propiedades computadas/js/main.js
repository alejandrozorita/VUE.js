const vm = new Vue({

    el: 'main',

    data:{

        nombre_reves: null, 

        nombre: 'Alejandro Zorita',

        tareas: [
            { nombre: 'Estudiar', prioridad: true, antiguedad: 200 },
            { nombre: 'Vuejs', prioridad: false, antiguedad: 100 },
            { nombre: 'Firebase', prioridad: true, antiguedad: 50 },
        ],

    },
    methods: {

    },
    computed: {
        nombre_al_reves(){
            this.nombre_reves = this.nombre.split(' ').reverse().join(', ');

            return this.nombre_reves;
        },
        tareas_con_prioridad() {
            return this.tareas.filter((tarea) => tarea.prioridad);
        },
        tareas_por_antiguedad() {
            return this.tareas.sort((a, b) => b.antiguedad - a.antiguedad);
        }
    }
}); 