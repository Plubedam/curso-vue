<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1
      :style="colorContador" 
      >{{titulo}} {{ contador }}
    </h1>
    <button @click="accionIncrementar">Aumentar</button>
    <BtnDisminuir :disabled="desactivarDism"/>
    <hr>
    <BtnAccion :estado="true" />
    <BtnAccion :estado="false" />

  </div>
</template>

<script>
// @ is an alias to /src 
import {mapState, mapMutations, mapActions} from 'vuex'
import BtnDisminuir from '../components/BtnDisminuir.vue'
import BtnAccion from '../components/BtnAccion.vue'

export default {
  name: 'Home',
  components: {
    BtnDisminuir, BtnAccion
  },
  data() {
    return {
      titulo: "Mi contador vuex"
    }
  },
  computed: {
    ...mapState(['contador', 'desactivarDism']),
    colorContador(){
      return this.contador > 100 ? {'color': 'green'} : {'color': 'red'}
    }
  },
  methods: {
    ...mapMutations(['incrementar']),
    ...mapActions(['accionIncrementar'])
  }
}
</script>
