<template>
  <Titulo texto="Ruta con parámetros" />
  <h2>Parámetro: {{ $route.params.id }}</h2>
  <h3>{{post.title}}</h3>
  <p>{{post.body}}</p>
</template>

<script>
import Titulo from '../components/Titulo.vue'
export default {
    components: {
        Titulo
    },
    data() {
        return{
            post: {}
        } 
    },
    methods: {
        async obtenerArticulo(){
            try{ 
                const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`)
                const post = await data.json()
                this.post = post
            }catch(error){
                console.log(error)
            }
        }
    },
    created(){
        this.obtenerArticulo()
    }
}
</script>

<style>

</style>