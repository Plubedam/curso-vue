import { createStore } from 'vuex'

export default createStore({
  state: {
    /*Datos globales a todos los componentes */
    contador: 150,
    desactivarDism: false
  },
  /* Mutaciones son para modificar el state */
  mutations: {
	  incrementar(state, payload){
	    state.contador += payload;
      state.desactivarDism = false;
	  },
	  disminuir(state, payload){
      if((state.contador - payload) <= 0){
        state.contador = 0
        state.desactivarDism = true
        return
      } 
	    state.contador -= payload;
      
	  }
  },
  /* Acciones llaman a las mutaciones, así como comunicarse con APIs y BBDD */
  actions: {
    accionIncrementar({commit}){
      commit('incrementar', 10)
    },
    accionDisminuir({commit}, numero){
      commit('disminuir', numero)
    },
    accionBoton({commit}, objeto){
      if(objeto.estado){
        commit('incrementar', objeto.numero)
        return
      }
      commit('disminuir', objeto.numero)
    }
  },
  modules: {
  }
})
