import { createStore } from 'vuex'

export default createStore({
  state: {
    paises: [],
    paisesFiltrados: []
  },
  mutations: {
    setPaises(state, payload){
      state.paises = payload
    },
    setPaisesFiltrados(state, payload) {
      state.paisesFiltrados = payload
    }
  },
  actions: {
    async getPaises({commit}){
      try {
        const res = await fetch('https://restcountries.eu/rest/v2/all')
        const dataPaises = await res.json()
        console.log(dataPaises)
        commit('setPaises', dataPaises)
      } catch (error) {
        console.log(error)
      }
    }
  },
  modules: {
  }
})
