---
title: homelab

---

I have a small server at home, running some services host for myself.
I don't know if you can even call a single server homelab,
but hey, it's something. ¯\\\_(ツ)_/¯

My server is a "normal" PC with a Node 304 as a case, an AMD Ryzen 5 3600 with
16 GB and currently some TB of space. It runs NixOS.

Most services run in a k3s cluster. The cluster is managed with [ArgoCD](https://argoproj.github.io/cd),
which watches the cluster directory for changes and automatically
applies them to the cluster.

Nothing of those is public, and only accessible via VPN.

You can find more info [in the repo here](https://github.com/clemak27/homelab).
