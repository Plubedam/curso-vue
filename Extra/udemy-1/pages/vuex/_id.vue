<template>
    <div class="container mb-5">
        <h2>Editar tarea</h2>
        {{tarea}}
        <form class="text-center" @submit.prevent="editarTarea(tarea)">
            <input type="text" class="form-control" v-model="tarea.nombre">
            <b-button class="btn btn-warning mt-2" type="submit">Editar</b-button>
        </form>
    </div>
</template>

<script>
import { db } from '@/plugins/firebase'
import { mapState, mapActions } from 'vuex'

export default {
    fetch({store, params}){
        return db.collection('tareas').doc(params.id).get()
        .then(doc => {
            if(doc.exists){
                let tarea = doc.data()
                tarea.id = doc.id
                return store.commit('setTareaIndividual', tarea)
            }
        })
        .catch((error) => {
            console.log(error)
        })
    },
    computed: {
        tarea: {
            get(){
                return {
                    nombre: this.$store.state.tarea.nombre,
                    id: this.$store.state.tarea.id
                }
            }
        }
    },
    methods: {
        ...mapActions(['editarTarea'])
    }
}
</script>