<template>
  <div class="home">
    <h1 :style="{color: colorContador}">{{contador}}</h1>
    <hr>
    <button class="btn btn-primary" @click="aumentarContador">+</button>
    <button class="btn btn-danger ml-2" @click="disminuirContador">-</button>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data() {
    return {
      contador: 0
    }
  },
  methods: {
    aumentarContador(){
      this.contador ++
    },
    disminuirContador(){
      this.contador --
    }
  },
  computed: {
    colorContador(){
      return this.contador < 0 ? 'red' : 'green'
    }
  },
  components: {
     
  }
}
</script>
