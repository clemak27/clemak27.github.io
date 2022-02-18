<template>
  <v-container>
    <v-layout>
  <div class="home_network">
    <h1> My Homelab </h1>

    <p>
      I have a small server at home, running some services host for
          myself. I don't know if you can even call a single server
          homelab, but hey, it's a start. ¯\_(ツ)_/¯
    </p>
    <p>
          My server is a reused laptop, a Tinkpad e470. It is running
          NixOS. The bulk of data is stored on 2 4TB HDDs.
          Nothing of those is public, and only accessible via VPN. It
          uses PiHole to resolve urls to the servers ip and traefik to
          point the server's urls to the container ports.
          Whenever possible I run the services in containers (docker to
          be exact, since traefik doesn't support podman properly)
    </p>
    <p>
          I also have a Raspberry Pi 3 laying around that might get
          integrated into my Homelab later. I would also like to
          experiment with k8s more, but with just a single server, I
          don't think it will give me much benefit unfortunately (and
          the hardware prices are still a bit too high to invest some
          money in that).
    </p>

      <h1> TODO: update images</h1>

    <div id="nf">
      <h2> neofetch </h2>
      <v-img src="https://picsum.photos/id/11/500/300" fluid></v-img>
    </div>

    <div id="services">
      <h2> dashboard </h2>
      <p> made with <a href="https://github.com/bastienwirtz/homer">homer</a></p>
      <v-img src="https://picsum.photos/id/11/500/300" fluid></v-img>
    </div>

  </div>
    </v-layout>
  </v-container>
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
</style>
