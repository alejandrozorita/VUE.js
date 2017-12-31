const vm1 = new Vue({

    el: 'main',

    data: {

        nombre: 'Mi nombre',
    },
    beforeUpdate() {
        console.log('beforeUpdate ' + this.nombre);
    },
    updated() {
        console.log('afterUpdate ' + this.nombre);
    },
    methods: {
        nombre_al_reves() {
            this.nombre = this.nombre.split('').reverse().join('');

            //vm2.mensaje = 'cambiamos el mensaje!!!'

        }
    }
});

const vm2 = new Vue({

    el: '#app',

    data: {
        mensaje: 'Mensaje desde la segunda instancia',
    }
});