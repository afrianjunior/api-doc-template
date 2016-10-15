<template>
  <div>
    <header-cover></header-cover>
    <div class="mi container">
      <h1>Free to use</h1>
      <div class="infobox">
        <p>just another info</p>
      </div>
      <list-api></list-api>
    </div>
  </div>
</template>

<script>
  import Header from '../components/Header.vue'
  import ListApi from '../components/List.vue'
  export default {
    components: {
      headerCover: Header,
      listApi: ListApi
    }
  }
</script>

<style>
  body {
    font-family: 'Raleway', sans-serif;
    font-size: 13px;
    color: rgb(82, 81, 81);
    margin: 0;
    padding: 0;
  }

  h1, h2, h3, h4, h5 {
    font-family: 'Raleway', sans-serif;
  }

  .infobox {
    border: 1px solid rgb(116, 116, 116);
    padding: 1em;
    margin-bottom: 1em;
  }

  .mi.container {
    width: 80%;
    margin: 100px auto;
    padding: 1em;
  }

  .table {

  }
</style>
