<template>
  <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
    <a class="navbar-brand" href="#">Navbar</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item" v-for="link in menu" :key="link.id">
          <nuxt-link class="nav-link" :to="link.link">{{ link.title }}</nuxt-link>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      menu: [
        { id: 1, title: "Home", link: "/" },
        { id: 2, title: "About", link: "/about" },
        { id: 3, title: "Todos", link: "/todos" }
      ]
    };
  }
};
</script>

