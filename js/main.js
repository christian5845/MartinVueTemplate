const app = Vue.createApp({
    data() {
        return {
            intro: 'Welcome to my Vue template',
            Liste: [
                { id: 1, name: 'Item 1' },
                { id: 2, name: 'Item 2' },
                { id: 3, name: 'Item 3' },
            ],
            Liste2: [1,2,3,4,5],
            Nr: 0,
            Nr2: 0,
            skjul: false,
            ListeNavne: [
                { name: 'john', age: 30 },
                { name: 'jane', age: 25 },
                { name: 'bob', age: 40 }
            ],
            age: 0,
            name: ''
        }
    },
    methods: {
        myMethod(){

        },
        add() {
            this.Liste2.push(this.Nr)
            this.Nr2++;
        },
        skjulListe() {
            this.skjul = !this.skjul
        },
        addperson() {
            this.ListeNavne.push({ name: this.name, age: this.age })
        }
    },
    computed: {
        myComputed() {
            return ''
        },
        
    }
})
