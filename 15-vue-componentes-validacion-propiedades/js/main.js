Vue.component('autor', {
    props: ['nombre'],
    template: `<div><h1> {{ nombre }} </h1> <button @click="cambiarProp"> Cambiar propiedad </button></div>`,
    methods: {
        cambiarProp() {
            this.nombre = this.nombre.toUpperCase();
        }
    }
});

const vm = new Vue({

    el: 'main',
    data: {
        autor: 'Alex Zorita',
    },

});
