const app = Vue.createApp({
    data(){
        return{
            titulo: "Mi banco con Vue",
            cantidad: 1000,
            enlace: "https://youtube.com/blueeweb",
            estado: false,
            servicios: ['transferencias', 'pagos', 'giros'],
            desactivar: false
        }
    },
    methods: {
        agregarSaldo(){
            this.cantidad += 100;
            this.desactivar = false;
        },
        disminuirSaldo(valor){
            if(this.cantidad === 0){
                this.desactivar = true;
                alert("¡El saldo es 0!");
                return;
            } 
            this.cantidad -= valor;  
        }
    },
    computed: {
        colorCantidad(){
            return this.cantidad > 500 ? 'text-success' : 'text-danger'
        },
        mayusculasTexto(){
            return this.titulo.toUpperCase();
        }
    }
})