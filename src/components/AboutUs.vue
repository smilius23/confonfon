<template>
  <div class="about">
    <h1 class="about__test">This is the test</h1>
    <div v-for="product in products" :key="product.id" class="about__card">
      <h2>{{product.name}}</h2>
      <img :src="product.imgUrl" :alt="product.imgName">
      <p>{{product.imgUrl}}</p>
    </div>
  </div>
</template>

<script>
import { getData } from '@/api'
export default {
  name: 'AboutUs',
  data () {
    return {
      products: []
    }
  },
  created () {
    getData()
      .then(items => {
        this.products = items.map(itm => {
          return {
            imgUrl: 'https:' + itm.fields.paveikslelis.fields.file.url,
            imgName: itm.fields.paveikslelis.fields.fileName,
            name: itm.fields.justSomeTextForTestingThings,
            id: itm.sys.id
          }
        })
      })
  }
}
</script>

<style scoped lang="scss">
  .about {
    color: rebeccapurple;
    &__card {
      width: 250px;
     }
  }
</style>
