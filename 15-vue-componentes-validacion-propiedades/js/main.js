Vue.component('candidato', {
    // props: ['nombre', 'email', 'imagen'],
    props: {
        nombre: {
            type: [String, Array],
            required: true,
        },
        email: {
            type: [String, Array],
            default: 'me@alejandrozorita.me'
        },
        imagen: String,
        location: {
            type: Object,
            default() {
                return {
                    ciudad: 'Madrid',
                }
            }
        },
    },
    template: `#candidato-template`
});

const vm = new Vue({

    el: 'main',
    mounted() {
        this.obtenerCandidatos()
    },
    data: {
        candidatos: [],
    },
    methods: {
        obtenerCandidatos() {
            axios.get('https://randomuser.me/api/?results=10')
                .then((respuesta) => {
                    this.candidatos = respuesta.data.results;
                })
        }
    }

});
