---
title: homelab
---

I have a k3s "cluster" at home, running some services I host for myself. It
currently consists of single bare-metal server running NixOS, with k3s to deploy
containers. The cluster is managed with [ArgoCD](https://argoproj.github.io/cd)
which watches the cluster directory for changes and automatically applies them
to the cluster. Nothing of those is public, and only accessible via VPN
(Wireguard). You can find more info
[in the repo here](https://github.com/clemak27/homelab).
