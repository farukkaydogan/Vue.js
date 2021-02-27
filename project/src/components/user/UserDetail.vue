<template>
  <div class="container">
    <h3>{{ $route.params.id }}</h3>
    <hr>
    <div v-if=" $route.params.id == 'Baba'">
    <p>İmdb: 5.5 </p>
    <p id="">Açıklama:Thriller set in the world of Forensic Pathology. Coroner Paul Herzfeld finds a capsule in the head of a heavily mutilated corpse, containing a phone number and single word: the name of his daughter</p>
    <img src="baba.png" alt="">
    </div>s
     
    

</div>
</template>
<script>
  export default {}
  
</script>
