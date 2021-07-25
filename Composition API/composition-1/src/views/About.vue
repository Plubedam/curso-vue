<template>
  <div class="about">
    <Titulo :contador="contador" :color="color"/>
    <h1 :style="{'color': color}">Contador: {{contador}}</h1>
    <hr>
    <Btn class="btn btn-primary" :textoBoton="'Aumentar'" @accion="aumentar"/>
    <Btn class="btn btn-danger ml-2" :textoBoton="'Disminuir'" @accion="disminuir"/>
    <!-- <button class="btn btn-primary" @click="aumentar">+</button>
    <button class="btn btn-danger ml-2" @click="disminuir">-</button> -->
    <hr>
    <input type="text" v-model="texto">
    <p>{{texto}}</p>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { computed } from '@vue/runtime-core'
import Titulo from '../components/Titulo'
import Btn from '../components/Btn'

export default {
  components:{
    Titulo, Btn
  },
  // Se ejecuta antes de que se cree el componente, una vez resueltos los props.
  // Sirve de entry point a la Composition API
  setup(){
    const contador = ref(0)
    const texto = ref('')

    const aumentar = () =>{
      contador.value ++ // En Composition API no hay que usar "this"
    }
    const disminuir = () =>{
      contador.value --  
    }

    const color = computed(() => {
      return contador.value < 0 ? 'red' : 'green'
    })

    return {contador, texto, aumentar, disminuir, color}
  }
}
</script>