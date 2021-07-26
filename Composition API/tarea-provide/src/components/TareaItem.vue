<template>
  <div class="alert alert-warning mt-3 d-flex justify-content-between align-items-center">
    <p class="m-0" :class="{'textoTachado' : tarea.estado}" id="textoTarea">{{tarea.texto}}</p>
    <div>
        <i 
            class="fas fa-undo-alt mx-2 text-success" 
            role="button"
            @click="modificarTarea(tarea.id)"
            v-if="tarea.estado"
            ></i>
        <i 
            class="fas fa-check-circle mx-2 text-success" 
            role="button"
            @click="modificarTarea(tarea.id)"
            v-if="!tarea.estado"
            ></i>
        <i 
            class="fas fa-minus-circle text-danger" 
            role="button"
            @click="eliminarTarea(tarea.id)"
        ></i>
    </div>
  </div>
  

</template>

<script>
import { inject } from '@vue/runtime-core'
export default {
    props: {
        tarea: {
            type: Object,
            required: true
        }
    },
    setup() {
        const tareas = inject('tareas')

        const eliminarTarea = (id) => {
            tareas.value = tareas.value.filter(item => item.id !== id)
        }

        const modificarTarea = (id) =>{
            tareas.value = tareas.value.map(item => {
                if(item.id === id){
                    item.estado = !item.estado 
                } 
                return item
            })
        }

        return {eliminarTarea, modificarTarea}

    }
}
</script> 

<style scoped>
    .textoTachado{
        text-decoration: line-through;
    }
</style>