Vue.component('lista-tareas', {
    template: 
            `<div>
                <h1><slot></slot></h1>
                <ul>
                    <tarea v-for="tarea in tareas" :tarea="tarea"></tarea>
                </ul>
            </div>`,
    data() {
        return {
            tareas: [
                'Fnalizar curso',
                'Repetir el curso',
                'Termianr de estudiar VUE'
            ],
        }
    }
});

Vue.component('tarea', {
    props: ['tarea'],
    template : `<li>{{ tarea }}</li>`
    
});

Vue.component('contacto', {
   template: `<div><a href="mailto:contacto@alejandrozorita.me">contacto@alejandrozorita.me</a></div>`
});
Vue.component('bio', {
    template: `<div><p>Esta es mi bio</p></div>`
});
new Vue({
    el: 'main',
    data: {
        seleccionado: 'lista-tareas'
    }
});