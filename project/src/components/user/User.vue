<template>
  <div class="container">
        <router-view></router-view>

  </div>
</template>
<script>
  export default {
    data() {
      return {
        id: this.$route.params.id,
        paragraf:this.$route.params.paragraf

      
      }
    },
    methods: {
      navigateToHome() {
        // this.$router.push("/");
        // this.$router.push({ path : '/' });
        this.$router.push({name: 'anasayfa'});
      }
    },
    watch: {
      "$route"(to, from) {
        this.id = to.params.id;
        this.paragraf = to.params.paragraf;

      }
    }
  }
</script>
