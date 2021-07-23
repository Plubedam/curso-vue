<template>
  Editar {{$route.params.id}} - {{tarea}}
  <form @submit.prevent="updateTarea(tarea)">
    <Input :tarea="tarea"/> 
  </form>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import Input from '../components/Input.vue';

export default {
    components: {
        Input
    },
    methods: { 
        ...mapActions(['getTarea', 'updateTarea'])
    },
    computed: {
        ...mapState(['tarea'])
    },
    created(){
        this.getTarea(this.$route.params.id)
    }
}
</script> 