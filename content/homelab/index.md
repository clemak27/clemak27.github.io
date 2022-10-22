---
title: homelab

---

I have a small server at home, running some services host for myself.
I don't know if you can even call a single server homelab,
but hey, it's something. ¯\\\_(ツ)_/¯

My server is a "normal" PC with a Node 304 as a case, an AMD Ryzen 5 3600 with
16 GB and currently 8TB HDD (with space for more). It run Fedora CoreOS.
All services on it run in docker-containers. Nothing of those is public,
and only accessible via VPN. It uses PiHole to resolve urls to the server's ip
and traefik to point the server's urls to the container ports.

I also have a Raspberry Pi 3 laying around that might get (re-)integrated
into my Homelab later.

I would also like to experiment with k8s more,
but with just a single server, I don't think it will give me much benefit
unfortunately (and the hardware prices are still a bit too high
to invest some money in that).
