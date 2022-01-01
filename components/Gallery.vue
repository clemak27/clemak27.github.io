<template>
  <div>
    <b-carousel
      id="carousel"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#121212"
      img-width="1920"
      img-height="1080"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide
        caption="neofetch"
        img-src="~/assets/linux_setup/nf.png"
      />

      <b-carousel-slide
        caption="Wallpaper"
        img-src="~/assets/linux_setup/empty.png"
      />

      <b-carousel-slide
        caption="Firefox"
        img-src="~/assets/linux_setup/ff.png"
      />

      <b-carousel-slide
        caption="Multiple applications"
        text="tty-clock, bottom, ranger, pipes.sh"
        img-src="~/assets/linux_setup/mult.png"
      />

      <b-carousel-slide
        caption="tmux+neovim"
        img-src="~/assets/linux_setup/neovim.png"
      />
    </b-carousel>
  </div>
</template>

<script>

</script>

<style>
.carousel {
  max-width: 50em;
}
</style>
