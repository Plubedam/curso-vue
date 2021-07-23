import { createStore } from 'vuex'
import router from '../router'

export default createStore({
  state: {
    tareas: [],
    tarea: {
      id: '',
      nombre: '',
      categorias: [],
      estado: '',
      numero: 0 
    }
  },
  mutations: {
    set(state, payload){
      state.tareas.push(payload)
      localStorage.setItem('tareas', JSON.stringify(state.tareas))
    },
    eliminar(state, payload){
      state.tareas = state.tareas.filter(item => item.id != payload)
      localStorage.setItem('tareas', JSON.stringify(state.tareas))
    },
    get(state, payload){
      if(!state.tareas.find(item => item.id === payload)){
        router.push('/')
        return
      }
      state.tarea = state.tareas.find(item => item.id === payload)
    },
    update(state, payload){
      state.tareas = state.tareas.map(item => item.id === payload.id ? payload : item)
      localStorage.setItem('tareas', JSON.stringify(state.tareas))
      router.push('/') 
    },
    cargar(state, payload){
      state.tareas = payload
    }
  },
  actions: {
    setTareas({commit}, tarea){
      commit('set', tarea)
    },
    deleteTarea({commit}, id){
      commit('eliminar', id)
    },
    getTarea({commit}, id){
      commit('get', id)
    },
    updateTarea({commit}, tarea){
      commit('update', tarea)
    },
    cargarLocalStorage({commit}){
      if(localStorage.getItem('tareas')){
        const tareas = JSON.parse(localStorage.getItem('tareas'))
        commit('cargar', tareas)
        return
      }

      localStorage.setItem('tareas', JSON.stringify([]))
    }
  },
  modules: {
  }
})
