<template>
  <b-navbar toggleable="lg" type="dark" variant="dark" class="w-100">
    <b-navbar-brand to="/" />

    <b-navbar-toggle target="nav-collapse" />

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item to="/">Home</b-nav-item>
        <b-nav-item to="linux_setup">Linux Setup</b-nav-item>
        <b-nav-item to="cats">Cats</b-nav-item>
        <b-nav-item to="about">About</b-nav-item>
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto">
        <b-nav-item href="https://github.com/clemak27">GitHub</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {

}
</script>
