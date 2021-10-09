<template>
  <div class="home_network">
    <h1> My Home Network </h1>

    <p>
      I also have a small server at home, running some services. Nothing of those is public, and only accessible via VPN. Currently they are deployed with docker(compose), I am planning to eventually replace this with a fancy k8s setup. My "server" is also a repurposed laptop, this might also change in the future. Also I might switch from debian to somethings else. My old raspberry pi also needs a use. Time and motivation are hard to come by these days. ¯\_(ツ)_/¯
    </p>

  <div id="nf">
    <h2> neofetch </h2>
    <b-img src="~/assets/home_network/nf.png" fluid alt="neofetch"></b-img>
  </div>

  <div id="services">
    <h2> services </h2>
    <b-container fluid class="p-4 bg-dark">
      <b-row>
      <a href="https://www.wireguard.com/">
          <b-img src="https://is5-ssl.mzstatic.com/image/thumb/Purple123/v4/3a/16/01/3a16010c-138b-4515-c2d4-573cfae222db/source/512x512bb.png" alt="wireguard" class="srv_image"></b-img>
      </a>
      <a href="https://pi-hole.net/">
          <b-img src="https://wp-cdn.pi-hole.net/wp-content/uploads/2016/12/Vortex-R.webp" alt="pi-hole" class="srv_image"></b-img>
      </a>
      <a href="https://github.com/traefik/traefik">
          <b-img src="https://raw.githubusercontent.com/traefik/traefik/master/docs/content/assets/img/traefik.logo.png" alt="traefik" class="srv_image"></b-img>
      </a>
      <a href="https://github.com/syncthing/syncthing">
          <b-img src="https://avatars.githubusercontent.com/u/7628018?s=200&v=4" alt="syncthing" class="srv_image"></b-img>
      </a>
      <a href="https://github.com/go-gitea/gitea">
          <b-img src="https://raw.githubusercontent.com/go-gitea/gitea/main/public/img/gitea.svg" alt="gitea" class="srv_image"></b-img>
      </a>
      <a href="https://github.com/miniflux/v2">
          <b-img src="https://avatars.githubusercontent.com/u/10584991?s=200&v=4" alt="miniflux" class="srv_image"></b-img>
      </a>
      <a href="https://github.com/navidrome/navidrome">
          <b-img src="https://raw.githubusercontent.com/navidrome/navidrome/master/resources/logo-192x192.png" alt="navidrome" class="srv_image"></b-img>
      </a>
      </b-row>
    </b-container>
  </div>

  </div>
</template>

<script>
export default {

}
</script>

<style>
.home_network {
  padding: 3em;
  text-align: left;
}

li {
  font-weight: bold;
}

.srv_image {
  height: 150px;
  width: 150px;
  margin: 5px;
}
</style>
