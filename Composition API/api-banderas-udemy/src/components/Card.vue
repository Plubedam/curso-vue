<template>
  <div class="card mt-3">
      <div class="card-body">
          <h4 class="text-center">{{pais.name}}</h4>
          <p class="text-center">
              <img :src="`${pais.flag}`" :alt="`bandera-${pais.name}`" class="img-fluid w-50">
          </p>
          <p class="card-text">
              <span class="badge badge-dark d-block mb-1">Nombre nativo: {{pais.nativeName}}</span>
              <span class="badge badge-info p-3 d-block mb-1">Población: {{numeroFormato(pais.population)}}</span>
              <span class="badge badge-warning d-block mb-1">Capital: {{pais.capital}}</span>
              <span class="badge badge-success d-block mb-1">Continente: {{pais.region}}</span>


          </p>
      </div>
  </div>
</template>

<script>
export default {
    props:['pais'],
    setup(){
        const numeroFormato = (num) => {
            return Intl.NumberFormat("de-DE").format(num)
        }

        return {numeroFormato}
    }
}
</script> 