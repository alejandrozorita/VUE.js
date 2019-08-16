Vue.component('pass', {
    props: ['pass'],
    template: `<input :value="pass" @input="comprobarPass($event.target.value)" ref="pass">`,
    methods: {
        comprobarPass(pass) {
            if (this.noValidas.includes(pass)) {
                console.log('no válida');
                this.$refs.pass.value = pass = '';
            } else {
                this.$emit('input', pass);
            }

        }
    },
    data() {
        return {
            noValidas: ['root', 'admin', 'pass', '1234'],
        }
    }
})

new Vue({
    el: 'main',
    data: {
        pass: 'ppaflo!?·g0a'
    }
});