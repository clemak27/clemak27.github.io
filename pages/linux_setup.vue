<template>
  <div class="linux_setup">
    <h1> My Linux Setup </h1>
    <Gallery />

    <a href="https://github.com/clemak27/linux_setup">dotfiles etc.</a>
    <h4> Some software I use: </h4>
    <ul>
      <li> Plasma + Kröhnkite + latte-dock </li>
      <p> After trying out Plasma and GNOME extensivly, I setteled on using Plasma. This mostly came down to Plasma + the KDE framework providing better software and extension support than GNOME, also vastly improved styling options. I also used i3wm for several months, but some issues with picom made me unfortunately reconsider it. Nowadays I'm using KDE together with Kröhnkite, a script that provides automatic tiling. I also use latte-dock, since it is vastly superior to the default panel. </p>
      <li> alacritty </li>
      <p> Fast GPU accelerated terminal emulator. If used Konsole and Kitty before that and while I kinda miss my ligatures, I enjoy alacritty's speed and simplicity. </p>
      <li> neovim </li>
      <p> My editor of choice. With (way too many) plugins, I use it for editing all non java/kotlin/android projects I work on in my free time. </p>
      <li> firefox </li>
      <p> Best browser :) </p>
      <li> fzf </li>
      <p> A great fuzzy finder that makes finding things easier, especially paired with ripgrep. Great (n)vim support too. </p>
      <li> ranger </li>
      <p> A terminal file explorer with vim-linke keybinds. </p>
    </ul>
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
