<template>
  <form @submit.prevent="procesarFormulario">
    <Input :tarea="tarea" />
  </form>
  <hr>
  <lista-tareas />
</template>

<script>
// @ is an alias to /src 

import Input from '../components/Input.vue'
import ListaTareas from '../components/ListaTareas.vue'
import {mapActions} from 'vuex'
const shortid = require('shortid')

export default {
  name: 'Home',
  components: { 
    Input, ListaTareas
  },
  data(){
    return{
      tarea: {
        id: '',
        nombre: '',
        categorias: [],
        estado: '',
        numero: 0

      }
    }
  }, 
  methods: {
    ...mapActions(['setTareas']),

    procesarFormulario(){
      console.log(this.tarea)
      if(this.tarea.nombre.trim() === ""){
        console.log("Campo vacío")
        return
      }
      console.log('no está vacío')

      // Generar Id
      this.tarea.id = shortid.generate()
      console.log("Id:", this.tarea.id)

      // Se envían los datos
      this.setTareas(this.tarea)

      // Limpiar campos
      this.tarea = {
        id: '',
        nombre: '',
        categorias: [],
        estado: '',
        numero: 0 
      }
    }
  }
}
</script>
