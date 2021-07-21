// Nombre de componente siempre en minuscula y separado por "-"
app.component('footer-banco', {
    props: ['valor', 'fecha'],
    template: /*html*/ `<div class="bg-dark py-3 mt-2 text-white">
                            <h3>{{texto}} - {{valor}}</h3>
                            <p class="p-2">{{fecha}}</p>
                        </div>` 
    ,
    data(){
        return{
            texto: "Footer de mi sitio web dinámico"
        }
    }
})