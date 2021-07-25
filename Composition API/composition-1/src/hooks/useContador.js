import { ref } from '@vue/reactivity'

export function useContador(){
    const contador = ref(0)

    const aumentar = () =>{
        contador.value ++ // En Composition API no hay que usar "this"
    }
    const disminuir = () =>{
        contador.value --  
    }

    return {contador, aumentar, disminuir}
}