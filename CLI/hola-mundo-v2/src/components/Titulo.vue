<template>
  <h1>{{texto}}</h1>
</template>

<script>
export default {
    name: "Título", /* Buena práctica poner atributo name a cada componente */
    props: {
        texto: String
    }
}
</script>

<style scoped>  /*Scoped para que el style solo afecte a este componente */
    h1 {
        color: peru
    }
</style>