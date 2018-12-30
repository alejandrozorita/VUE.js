Vue.component('autor', {
    props: ['nombre', 'edad'],
    mounted() {
        console.log(this.nombre);
        console.log(typeof this.edad);
    },
    template:` <h1> {{ nombre }}</h1>`
});
const vm = new Vue({

    el: 'main',

    data: {
        autor: 'Juan'
    },

});
