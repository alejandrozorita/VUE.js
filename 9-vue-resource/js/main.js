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
            // GET /someUrl
            this.$http.get('https://randomuser.me/api/?results=500')

            .then((respuesta) => {
                // get body data
                console.log('ok ' + respuesta);
                this.personas = respuesta.body.results;

            }, respuesta => {
                // error callback
                console.log('KO ' + respuesta)
            });
        }
    }
});