<template>
  <div class="linux_setup">
    <h1> My Linux Setup </h1>
    <Gallery />
    <a href="https://github.com/clemak27/linux_setup">dotfiles etc.</a>

    <div>
      <h2> Some software I use: </h2>
      <ul>
        <li> KDE Plasma </li>
        <li> rofi </li>
        <li> firefox </li>
        <li> alacritty </li>
        <li> neovim </li>
        <li> tmux </li>
        <li> fzf </li>
        <li> ranger </li>
      </ul>
    </div>

    <div>
      <h2> Nix </h2>
      <p>
        Recently, I have also been experimenting with the nixOS package manager. Specifially, I use home-manager to manage my dotfiles and development environment. I like that I have a central place to manage my configuration independent of purpose and handware of a machine and in a reproducable way.
      </p>
    </div>

    <div id="btw">i use arch btw</div>
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

#btw {
 font-size: 7px;
}
</style>
