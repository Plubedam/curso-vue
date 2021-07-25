<template>
  <h1>Contador: {{contador}}</h1>
  <Btn class="btn btn-primary" :textoBoton="'Aumentar'" @accion="aumentar"/>
  <Btn class="btn btn-danger ml-2" :textoBoton="'Disminuir'" @accion="disminuir"/>
</template>

<script>
import Btn from '../components/Btn.vue'
import {useContador} from '../hooks/useContador.js'

export default {
    setup(){
        /* const {aumentar, disminuir, contador} = useContador()    // Forma para elegir que importamos del Hook
        return {aumentar, disminuir, contador}  */
        return {...useContador()}   // Forma para importar todo via spread operator
    },
    components:{
        Btn
    }
}
</script>