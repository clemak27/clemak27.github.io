<template>
  <div class="linux_setup">
    <h1> My Linux Setup </h1>
    <Gallery />

    <a href="https://github.com/clemak27/linux_setup">dotfiles etc.</a>
    <h4> Some software I use: </h4>
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
