<template>
    <div class="container">
        <div class="card">
            <div class="card-body">
                <h1>{{articulo.title}}</h1>
                <p class="small">{{articulo.nombreAutor}}</p>
                <p>{{articulo.body}}</p>
                <div class="text-center">
                    <nuxt-link to="/blog" class="btn btn-primary">Atras</nuxt-link>
                </div>
                
            </div>
        </div>
        
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
             
        }
    },
    async created(){
        
    },
    async asyncData({ params }){
        try {
            // Obtenemos artículo
            const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
            const articulo = res.data

            // Obtenemos nombre del usuario a partir del userId
            const resAutor = await axios.get(`https://jsonplaceholder.typicode.com/users/${res.data.userId}`)
            articulo.nombreAutor = resAutor.data.name

            return { articulo }
            
        } catch (error) {
            console.log(error)
            return {error: error}
        }
    }
}
</script>