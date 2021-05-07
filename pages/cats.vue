<template>
  <div class="cats justify-content-center mb-3">
    <div id="refreshButton">
      <b-button
        :disabled="loading"
        variant="primary"
        @click="fetchCat()"
      >
        I want another cat
      </b-button>
    </div>

    <div
      v-if="!loading"
      id="catContainer"
    >
      <img :src="catImage">
    </div>

    <div v-else>
      <loading />
    </div>
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
  margin: 2em;
  text-align: center;
}

img {
  max-width: 30em;
  max-height: 30em;
  margin: 2em auto;
}
</style>
