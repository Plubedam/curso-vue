<template>
    <div class="container">
        <h1>Ingreso de usuario</h1>
    
        <form @submit.prevent="procesarForm">
            <input 
                type="email" 
                placeholder="Email"
                class="form-control my-2"
                v-model.trim="email"
            >
            <input 
                type="password" 
                placeholder="Contraseña"
                class="form-control my-2"
                v-model.trim="pass"
            > 

            <button 
                type="submit" 
                class="btn btn-primary" 
                :disabled="bloquear"
            >Ingresar</button> 
        </form>
    </div>
  
</template>

<script>
import { mapActions } from 'vuex'
export default {
    data() {
        return {
            email: 'ubedamuela.pedroluis@gmail.com',
            pass: 'pruebaapi'
        }
    },
    computed: {
        bloquear(){
            if(!this.email.includes('@'))   return true
            if(this.pass.length <= 5)     return true
            return false
        }
    },
    methods: {
        ...mapActions(['ingresoUsuario']),
        procesarForm(){ 
            this.ingresoUsuario({email: this.email, password: this.pass})
            this.email = ''
            this.pass = ''
        }
    }
}
</script>