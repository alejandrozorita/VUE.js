Vue.component('alerta', {
    props: ['tipo', 'posicion'],
    template: `
    <section class="alerta" :class="[tipo, posicion]">
        <header class="alerta__header">
        <slot name="header"> Este es el header </slot>
        </header>
        <div class="alerta__contenido">
            <slot>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum orci lectus, 
            luctus vel porta eu, placerat vitae dolor. Fusce elementum lorem enim, pulvinar vehicula mass
            </slot>
        </div>
        <footer class="alerta__footer">
            <slot name="footer"> Este es el footer </slot>
            
        </footer>
    </section>`,
});

const vm = new Vue({

    el: 'main'

});

