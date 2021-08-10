<template>
  <Cargando v-if="loading" class="mt-5" />
  <div v-else>
    <Navbar />
    <div class="container">
      <router-view/>  
    </div>
  </div> 
</template>

<script>
import Navbar from '@/components/Navbar'
import Cargando from '@/components/Cargando'
import {firebase} from '@/firebase.js'
import { onMounted, ref } from 'vue-demi'

export default{
  components:{
    Navbar, Cargando
  },
  setup(){
    const loading = ref(false)

    onMounted(async ()=>{
      loading.value = true
      await firebase.getCurrentUser()
      loading.value = false
    }) 

    return {loading}
  }
}
</script>
 