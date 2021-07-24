<template>
    <div class="container">
        <h1>Registro de usuario</h1>
    
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
                v-model.trim="pass1"
            >
            <input 
                type="password" 
                placeholder="Repetir contraseña"
                class="form-control my-2"   
                v-model.trim="pass2"
            >

            <button 
                type="submit" 
                class="btn btn-primary" 
                :disabled="bloquear"
            >Registrarse</button> 
        </form>
    </div>
  
</template>

<script>
import { mapActions } from 'vuex'
export default {
    data() {
        return {
            email: '',
            pass1: '',
            pass2: ''
        }
    },
    computed: {
        bloquear(){
            if(!this.email.includes('@'))   return true
            if(this.pass1.length <= 5)     return true
            return this.pass1 === this.pass2 ? false : true
        }
    },
    methods: {
        ...mapActions(['registrarUsuario']),
        procesarForm(){ 
            this.registrarUsuario({email: this.email, password: this.pass1})
            this.email = ''
            this.pass1 = ''
            this.pass2 = '' 
        }
    }
}
</script>
 