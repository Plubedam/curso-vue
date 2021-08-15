import { db } from '@/plugins/firebase'

export const state = () => ({
    tareas: [],
    tarea: ''
})

export const mutations = {
    setTareas(state, payload){
        state.tareas = payload
        console.log(state.tareas)
    },
    setTarea(state, payload){
        state.tareas.push(payload)
    },
    deleteTarea(state, payload){
        const index = state.tareas.findIndex(item => item.id === payload.id)
        state.tareas.splice(index, 1)
    },
    updateTarea(state, payload){
        const index = state.tareas.findIndex(item => item.id === payload.id)
        state.tareas[index].nombre = payload.nombre
    },
    setTareaIndividual(state, payload){
        state.tarea = payload 
    }
}

export const actions = {
    nuxtServerInit ({commit}, {req}){
        return db.collection('tareas').get()
        .then(query => {
            const tareas = []
            query.forEach((element) => {
                let tarea = element.data()
                tarea.id = element.id
                tareas.push(tarea)
            })
            return commit('setTareas', tareas)
        })  
        .catch(error => {
            console.log(error)
        })
    },
    async agregarTarea({commit}, payload){
        try {
            const doc = await db.collection('tareas').add({
                nombre: payload,
                fecha: new Date()
            })
            commit('setTarea', {nombre: payload, id: doc.id})
        } catch (error) {
            
        }
        
    },
    eliminarTarea({commit}, payload){
        db.collection('tareas').doc(payload.id).delete()
        .then(() => {
            console.log("Tarea eliminada")
            commit('deleteTarea', payload)
        })
        .catch((error) => {
            console.log(error)
        })
    },
    editarTarea({commit}, payload){
        db.collection('tareas').doc(payload.id).update({
            nombre: payload.nombre
        })
        .then(() => {
            console.log("Tarea editada")
            commit('updateTarea', payload)
            this.app.router.push('/vuex')

        })
        .catch((error) => {
            console.log(error)
        })
    }
}