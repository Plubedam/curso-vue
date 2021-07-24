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
    },
    user: null
  },
  mutations: {
    setUser(state, payload){
      state.user = payload 
      router.push('/')

    },
    set(state, payload){
      state.tareas.push(payload)
    },
    eliminar(state, payload){
      state.tareas = state.tareas.filter(item => item.id != payload)
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
      router.push('/') 
    },
    cargar(state, payload){
      state.tareas = payload
    }
  },
  actions: {
    async registrarUsuario({commit}, usuario){
      try {
        // Registro en Firebase
        const res = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCj8NBIxU6KK2OYZZwQcyeqor-xyVqz7qk ',{
          method: 'POST',
          body: JSON.stringify({
            email: usuario.email,
            password: usuario.password,
            returnSecureToken: true
          })
        })
        const userDB = await res.json()
        console.log(userDB)

        if(userDB.error){
          console.log(userDB.error)
          return
        }
        commit('setUser', userDB)
        localStorage.setItem('usuario', JSON.stringify(userDB))
      } catch (error) {
        console.log(error)
      }
    },
    async ingresoUsuario({commit}, usuario){
      try {
        const res = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCj8NBIxU6KK2OYZZwQcyeqor-xyVqz7qk ',{
          method: 'POST',
          body: JSON.stringify({
            email: usuario.email,
            password: usuario.password,
            returnSecureToken: true
          })
        })
        const userDB = await res.json()
        console.log('userDb', userDB)

        if(userDB.error){
          console.log(userDB.error)
          return
        }
        commit('setUser', userDB)
        localStorage.setItem('usuario', JSON.stringify(userDB))
      } catch (error) {
        console.log(error)
      } 
    },
    cerrarSesion({commit}){
      commit('setUser', null)
      localStorage.removeItem('usuario')  
      router.push('/ingreso')
    },
    async setTareas({commit, state}, tarea){
      try {
        const res = await fetch(`https://udemy-api-8e7d3-default-rtdb.europe-west1.firebasedatabase.app/tareas/${state.user.localId}/${tarea.id}.json?auth=${state.user.idToken}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(tarea)
        })

        const dataBD = await res.json()
        console.log(dataBD)

      } catch (error) {
        console.log(error)
      }
      commit('set', tarea)
    },
    async deleteTarea({commit, state}, id){
      try {
        await fetch(`https://udemy-api-8e7d3-default-rtdb.europe-west1.firebasedatabase.app/tareas/${state.user.localId}/${id}.json?auth=${state.user.idToken}`, {
          method: 'DELETE'
        })
        
      } catch (error) {
        console.log(error)
      }
      commit('eliminar', id)
    },
    getTarea({commit}, id){
      commit('get', id)
    },
    async updateTarea({commit, state}, tarea){
      try {
        const res = await fetch(`https://udemy-api-8e7d3-default-rtdb.europe-west1.firebasedatabase.app/tareas/${state.user.localId}/${tarea.id}.json?auth=${state.user.idToken}`, {
          method: 'PATCH',  // PATCH para editar en la BD
          body: JSON.stringify(tarea) 
        })
        const dataBD = await res.json()

      } catch (error) {
        console.log(error)
      }
      commit('update', tarea)
    },
    async cargarBD({commit, state}){
      if(localStorage.getItem('usuario')){  
        commit('setUser', JSON.parse(localStorage.getItem('usuario')))
        try {
          const res = await fetch(`https://udemy-api-8e7d3-default-rtdb.europe-west1.firebasedatabase.app/tareas/${state.user.localId}.json?auth=${state.user.idToken}`, {
            method: 'GET' /* Ya es GET por defecto */ 
          })
          const dataBD = await res.json() // Esto devuelve un mapa con el id como clave
          console.log(dataBD)
  
          const arrrayBD = []
          // Iteración sobre el mapa, no se puede hacer como una array normal, hay que acceder por cada id
          for (let id in dataBD) {
            arrrayBD.push(dataBD[id])
          }
          commit('cargar', arrrayBD)
          return

        } catch (error) {
          console.log(error)
        }
      }
      return commit('setUser', null)
    }
  },
  getters: {
    usuarioAutenticado(state){
      return !!state.user // !! devuelve falso si es null o true si no lo es
    }
  },
  modules: {
  }
})
