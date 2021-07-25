import {onMounted, ref} from 'vue'

export function useFetch(url){
    const arrayData = ref([]) 

    onMounted(async() => {
        try {
            const res = await fetch(url)
            arrayData.value = await res.json()
        } catch (error) {
            console.log(error)
        }
    })

    /* const fetchData = async() => {
        try {
            const res = await fetch('https://restcountries.eu/rest/v2/all')
            arrayData.value = await res.json()
        } catch (error) {
            console.log(error)
        }
    }
    fetchData() */

    return {arrayData}
}