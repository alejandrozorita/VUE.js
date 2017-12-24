const vm = new Vue({

    el: 'main',

    data:{

        nueva_tarea: null,

        nombre: 'Alejandro',

        tareas: ['Estudiar', 'Vuejs', 'Firebase'],
    },
    methods:{
        agregar_tarea() {
            this.tareas.unshift(this.nueva_tarea);
            this.nueva_tarea = null;
        }
    }
});