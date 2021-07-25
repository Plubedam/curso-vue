<template>
  <!-- <h1>Detalle de: {{$route.params.nombre}}</h1> -->
  <h1>Detalle de: {{nombre}}</h1>
  <p v-for="(pais, index) in arrayData" :key="index">
      {{pais.name}} - {{pais.region}}
  </p>
</template>

<script>
import {useRoute} from 'vue-router'
import {useFetch} from '../hooks/useFetch'

export default {
    props: ['nombre'],
    setup(props){
        const nombreParams = useRoute()
        console.log(nombreParams.params.nombre)

        const {arrayData} = useFetch(`https://restcountries.eu/rest/v2/name/${nombreParams.params.nombre}`)

        return {arrayData}
    }
}
</script> 