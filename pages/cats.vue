<template>
  <div class="cats">

    <div
      v-if="!loading"
    >
      <v-btn
        depressed
        elevation="2"
        @click="fetchCat()"
      >I want another cat</v-btn>
    </div>

    <div v-else>
      <v-btn
        depressed
        elevation="2"
        loading
      >I want another cat</v-btn>
    </div>

    <img :src="catImage">

  </div>
</template>

<script>
export default {
  name: 'Cats',
  props: {},
  data () {
    return {
      loading: true,
      catImage: ''
    }
  },
  mounted () {
    this.fetchCat()
  },
  methods: {
    async fetchCat () {
      this.loading = true
      const uri = 'https://api.thecatapi.com/v1/images/search'
      await this.$axios.get(uri).then((response) => {
        this.catImage = response.data[0].url
        this.loading = false
      })
    }
  }
}
</script>

<style>
.cats {
  margin: 5em;
  text-align: center;
}

img {
  max-width: 30em;
  max-height: 30em;
  margin: 2em auto;
}
</style>
