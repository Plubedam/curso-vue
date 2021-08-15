<template>
    <div class="container">
    <h2>Vuex</h2>
    <form @submit.prevent="agregarTarea(tarea)">
        <input type="text" class="form-control mb-2" v-model="tarea">
        <b-button type="submit">Agregar</b-button>
    </form>
    <ul class="mt-3">
        <li v-for="(item, index) in tareas" :key="index">
            <div class="card">
                <div class="card-body text-center">
                    <p>{{item.id}} - {{item.nombre}}</p>
                    <b-button class="btn btn-warning" :to="`/vuex/${item.id}`">Editar</b-button>
                    <b-button class="btn btn-danger" @click="eliminarTarea(item)">Eliminar</b-button>
                </div> 
            </div> 
            <hr>
        </li>
    </ul>
    </div>
</template>

<script>
import { db } from '@/plugins/firebase.js'
import  { mapState, mapActions } from 'vuex'

export default {
    /* fetch({store}){
        return db.collection('tareas').get()
          .then(query => {
            const tareas = []
            query.forEach(element => {
                tareas.push(element.data()) 
            })
            return store.commit('setTareas', tareas)
        })
          .catch(error => {
              console.log("Error: ", error)
          })
    } */
    data() {
        return {
            tarea: ''
        }
    },
    computed: {
        ...mapState(['tareas'])
    },
    methods: {
        ...mapActions(['agregarTarea', 'eliminarTarea'])
    }
}
</script> 