<template>
  <div>
    <h1 class="text-2xl pb-3">
      Homelab
    </h1>
    <p>
      I have a k3s "cluster" at home, running some services I host for myself.
    </p>
    <p>
      It currently consists of single bare-metal server running NixOS, with k3s to deploy containers.
    </p>
    <p>
      The cluster is managed with <a class="link" href="https://argoproj.github.io/cd">ArgoCD</a>
      which watches the cluster directory for changes and automatically
      applies them to the cluster.
    </p>
    <p>
      Nothing of those is public, and only accessible via VPN (Wireguard).
    </p>
    <p>
      You can find more info <a class="link" href="https://github.com/clemak27/homelab">in the repo here</a>
    </p>
  </div>
</template>

<style scoped>
p {
  padding: 0 0 1rem 0;
}
</style>
