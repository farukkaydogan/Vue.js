<template>
  <ul class="nav nav-pills">
    <router-link active-class="active" to="/" exact tag="li">
      <a>Home</a>
    </router-link>
    <router-link active-class="active" to="/action" tag="li"
      ><a>Action</a></router-link >
    <router-link active-class="active" tag="li" to="/action">
      <a href="">Comedy</a>
    </router-link>

    <router-link active-class="active" tag="li" to="/action">
      <a href="">Drama</a>
    </router-link>
    <router-link active-class="active" tag="li" to="/action">
      <a href="">Fantasy</a>
    </router-link>
    <router-link active-class="active" tag="li" to="/action">
      <a href="">Horror</a>
    </router-link>
    <router-link active-class="active" tag="li" to="/action">
      <a href="">Mystery</a>
    </router-link>
  </ul>
</template>
