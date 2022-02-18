<template>
  <v-container>
  <v-carousel>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
      contain
    >

        <v-img
          :src="i.src"
          height="100%"
        >
        </v-img>

      </v-carousel-item>
  </v-carousel>

  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            caption: "Wallpaper",
            src: require('~/assets/linux_setup/empty.png')
          },
          {
            caption: "neofetch" ,
            src: require("~/assets/linux_setup/nf.png"),
          },
          {
            caption: "Firefox" ,
            src: require("~/assets/linux_setup/ff.png"),
          },
          {
            caption: "Multiple applications" ,
            src: require("~/assets/linux_setup/mult.png"),
          },
          {
            caption: "tmux+neovim" ,
            src: require("~/assets/linux_setup/neovim.png"),
          },
        ],
      }
    },
  }
</script>

<style>
.carousel {
  max-width: 50em;
}
</style>
