
Vue.config.devtools = true
new Vue({

    el: 'main',

    data: {
        dias: ['Lunes', 'Martes', 'Míercoles', 'Jueves', 'Viernes'],

        tareas: [
            { nombre: 'Estudiar', prioridad: 'baja' },
            { nombre: 'Vuejs', prioridad: 'alta' },
            { nombre: 'Firebase', prioridad: 'media' },
        ],

        persona: {
            nombre: 'Alejandro',
            profesion: 'Developer',
            ciudad: 'Madrid'
        }
    },
})