---
title: Linux Setup

---

[dotfiles etc. are here](https://github.com/clemak27/linux_setup)

## My journey so far

My Linux journey took me to many distributions over the years:

### Linux Mint

Guess everyone had to start somewhere ¯\\\_(ツ)_/¯. For the things I did back
then, which was mostly taking notes for university classes and some simple
programming, it was ok. Cinnamon was also fine at the beginning, coming from Windows.

### Ubuntu

After that, I used vanilla Ubuntu for a while (back in a time when it was still
kinda ok and not full of snaps). I thought the way GNOME worked with the
different workspaces was cool.

### Kubuntu

I soon switched to KDE Plasma in the form of Kubuntu. Which was awesome, all the
things you could customize. The whole set of KDE software is also more up
my alley than their GNOME equivalents.

### Manjaro

While I was occasionally still dual booting windows until now, it was finally
time to use Linux all the time, also on my desktop PC. I needed and wanted more
up-to-date software for this, so I switched to a rolling release distro and
ended up with Manjaro. The few months I used it, it was quite ok, and also
supported my hardware well. That said, there were and still are some concerns
with Manjaro (there a good write-up [here](https://manjarno.snorlax.sh/)).
So I just went to use Arch proper.

### Arch Linux

Despite the common opinion, I found Arch actually be easy to install, the guide
in the archwiki is pretty detailed. I also soon began documenting and automating
the installation process to fit my needs in case I wanted to start fresh. That said,
Arch has been extremely stable for me and the legendary wiki and a community has
a wealth of knowledge if one encounters problems.

In the years I used Arch, I also learned a lot of new things about the inner
workings of Linux. This was also the time-period where I learned to love vim,
which I use daily now. While still staying with Plasma most of the time, I also
used i3 for a while (and took one or 2 looks what GNOME is up to)

While Arch really is awesome (and I would everyone interested in Linux to at
least try it out for a while) there were also a few things that annoyed me.
As already said, I documented my whole setup and ended up with some pretty
convoluted installation scripts. That said, such scripts take also time to maintain,
and testing them would usually mean spinning up a VM etc. Not to mention the
not-so-nice experience of not writing down a magic command that fixes an issue.

### NixOS

I eventually came to know the Nix ecosystem. After using the (community made)
home-manager tool to manage my dotfiles, I took the plunge and replaced
Arch with NixOS.

There are 2 things I find great about Nix: The whole system-configuration in
declared in one file, and the system is set up exactly the way it is defined,
with all packages and customizations. The second is the awesome nix_shell,
that creates local development environments in an awesome way. Want to see how
your node14 application works with node16? Just create a nix-shell without
screwing up your global install or setting up nvm.

### Fedora Silverblue

Despite my initial hype for NixOS I was not 100% satisfied with it.
I switched to Fedora Silverblue. I like its combination of containers,
Flatpak and the toolbox. That said, I currently still use home-manager
to organize my dotfiles, which is both because it would require additional
migration work, and because it allows me to use my dotfiles anywhere else where
Nix is available. While I did think about returning to NixOS for a while,
I see no reason to change for now. Fedora just works™
