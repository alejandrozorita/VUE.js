Vue.component('autor', {
    props: ['nombre', 'edad'],
    mounted() {
        console.log(this.nombre);
        console.log(typeof this.edad);
    },
    template:`<div><h1> {{ nombre }}</h1><button @click='cambiarProp'>Cambiar Prop</Button></div>`,
    methods: {
        cambiarProp() {
            this.nombre = this.nombre.toUpperCase();
        }
    }
});
const vm = new Vue({

    el: 'main',

    data: {
        autor: 'Juan'
    },

});
