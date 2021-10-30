<template>
  <div class="linux_setup">
    <h1> My Linux Setup </h1>
    <Gallery />
    <a href="https://github.com/clemak27/linux_setup">dotfiles etc. are here</a>

    <div>
      <h2> My journey so far </h2>

      <p>
        My Linux journey took me to many distributions over the years:
      </p>

      <div>
        <h5> Linux Mint </h5>
        <p>
          Guess everyone had to start somewhere ¯\_(ツ)_/¯ For the things I did back then, which was mostly taking notes for university classes and some simple programming, it was ok. Cinnamon was also fine at the beginning, coming from windows.
        </p>
      </div>

      <div>
        <h5> Ubuntu </h5>
        <p>
          After that, I used vanilla Ubuntu for a while (back in a time where it was still kinda ok and not full of snaps). I thought the way GNOME worked with the different workspaces was cool.
        </p>
      </div>

      <div>
        <h5> Kubuntu </h5>
        <p>
          I soon switched to KDE Plasma in the form of Kubuntu. Which was awesome, all the things you could customize. The whole set of KDE software is also more up my alley than their GNOME equivalents.
        </p>
      </div>

      <div>
        <h5> Manjaro </h5>
        <p>
          While I was occasionally still dual booting windows until now, it was finally time to use linux all the time, also on my desktop PC. I needed and wanted more up to date software for this, so I switched to a rolling release distro and ended up with Manjaro. The few months I used it, it was quite ok, and also supported my hardware well. That said, there were and still are some concerns with Manjaro (there a good writeup <a href="https://manjarno.snorlax.sh/">here</a>). So I just went to use Arch proper.
        </p>
      </div>

      <div>
        <h5> Arch Linux </h5>
        <p>
          Despite the common opinion, I found Arch actually be easy to install, the guide in the archwiki is pretty detailed. I also soon began documenting and automating the install process to fit my needs in case I wanted to start fresh. That said, Arch has been extremly stable for me and the legendary wiki and a community has a wealth of knowledge if one encounters problems.
        </p>
        <p>
          In the years I used Arch, I also learned a lot of new things about the inner workings of Linux. This was also the time-period where I learned to love vim, which I use daily now. While still staying with Plasma most of the time, I also used i3 for a while (and took one or 2 looks what GNOME is up to)
        </p>
        <p>
          While Arch really is awesome (and I would everyone interested in Linux to at least try it out for a while) there were also a few things that annoyed me. As already said, I documented my whole setup and ended up with some pretty convoluted install scripts. That said, such scripts take also time to maintain, and testing them would usually mean spinning up a VM etc. Not to mention the not-so-nice experience of not writing down a magic command that fixes an issue.
        </p>
      </div>

      <div>
        <h5> NixOS </h5>
        <p>
          I eventually came to know the nix ecosystem. After using the (community made) home-manager tool to manage my dotfiles, I recently took the plunge and replaced Arch with NixOS.
        </p>
        <p>
          There are 2 things I find great about Nix: The whole system-configuration in declared in one file, and the system is setup exactly the way it is defined, with all packages and customizations. The second is the awesome nix_shell, that creates local development environments in an awesome way. Want to see how your node14 application works with node 16? Just create a nix-shell without screwing up your global install or setting up nvm.
        </p>
        <p>
          Despite still being fresh, I am satisfied with Nix so far. There are still things to optimize and laern (e.g. flakes), but thats half the fun :D
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.linux_setup {
  padding: 3em;
  text-align: left;
}

li {
  font-weight: bold;
}

h2 {
  margin-top: 1em;
}
</style>
