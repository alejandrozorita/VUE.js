const vm = new Vue({

    el: 'main',

    mounted() {
        this.cargarPersonas()
    },
    data: {
        personas: []
    },
    methods: {
        cargarPersonas() {
            // Make a request for a user with a given ID
            axios.get('https://randomuser.me/api/?results=500')
            .then(function (respuesta) {
            // handle success
            console.log(respuesta.data);
            this.personas = respuesta.data.results;
            })
            .catch(function (error) {
            // handle error
            console.log(error);
            })
            .then(function () {
            // always executed
            });
        }
    }
});
