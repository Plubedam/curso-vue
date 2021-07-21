<template>
  <button @click="accion" :disabled="desactivar">{{texto}}</button>
</template>

<script>
export default {
    props:{
        texto: String,
        desactivar: {
            type: Boolean,
            default: false  /* Valor por defecto */
        }
    },
    methods: {
        accion(){
            this.$emit('accion')
        }
    }
}
</script>

<style>

</style>