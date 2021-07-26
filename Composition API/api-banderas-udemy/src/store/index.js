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
    },
    filtrarRegion({commit, state}, region){
      const filtro = state.paises.filter(pais => {
        return pais.region.includes(region)
      })
      commit('setPaisesFiltrados', filtro)
    },
    filtroNombre({commit, state}, texto){
      const textoCliente = texto.toLowerCase()
      const filtro = state.paises.filter(pais => {{
        return pais.name.toLowerCase().includes(textoCliente)
      }})
      commit('setPaisesFiltrados', filtro)
    }
  },
  getters: {
    topPaisesPoblacion(state){
      return state.paisesFiltrados.sort((a, b) => {
        return a.population < b.population ? '1' : '-1'
      })
    }
  },
  modules: {
  }
})
