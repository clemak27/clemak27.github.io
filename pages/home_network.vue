<template>
  <v-container>
    <v-layout>
      <v-container class="home_network">
        <h1> My Homelab </h1>

        <p>
          I have a small server at home, running some services host for
          myself. I don't know if you can even call a single server
          homelab, but hey, it's something. ¯\_(ツ)_/¯
        </p>
        <p>
          My server is a "normal" PC with a Node 304 as a case, an
          AMD Ryzen 5 3600 with 16 GB and currently 8TB HDD (with space for more).
          It run Fedora CoreOS.
          Almost all services on it run in docker-containers.
          Nothing of those is public, and only accessible via VPN. It
          uses PiHole to resolve urls to the servers ip and traefik to
          point the server's urls to the container ports.
        </p>
        <p>
          I also have a Raspberry Pi 3 laying around that might get
          (re-)integrated into my Homelab later. I would also like to
          experiment with k8s more, but with just a single server, I
          don't think it will give me much benefit unfortunately (and
          the hardware prices are still a bit too high to invest some
          money in that).
        </p>
      </v-container>
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
