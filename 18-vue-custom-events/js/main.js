Vue.component('mis-tareas', {
    props: ['listado'],
    template: `#mis-tareas-template`,
});

const vm = new Vue({

    el: 'main',
    data: {
        tareas: [
            { titulo: 'Salir a correr' },
            { titulo: 'sacar al perro' },
            { titulo: 'tirar basura' },
            { titulo: 'aprender código' },
        ]
    }

});

