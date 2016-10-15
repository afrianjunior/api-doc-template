<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <td>action</td>
          <td>method</td>
          <td>URL</td>
        </tr>
      </thead>
      <tbody>
        <router-link to="/" v-for="list in lists" class="tr">
          <td>{{ list.action }}</td>
          <td>{{ list.method }}</td>
          <td>{{ list.url }}</td>
        </router-link>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        lists: [
          {
            action: 'login',
            method: 'post',
            url: '/api/v1/main/login'
          },
          {
            action: 'register',
            method: 'post',
            url: '/api/v1/main/registers'
          }
        ]
      }
    }
  }
</script>

<style lang="css">
  .table {
    width: 100%;
  }

  .table thead {
    background-color: rgb(65, 230, 141);
    text-transform: capitalize;
    margin: 0;
  }

  .table thead tr td {
    font-size: 16px;
    padding: 1em;
  }

  .table tbody .tr {
    text-decoration: none;
    color: rgb(82, 81, 81);
    display: table-row;
    vertical-align: inherit;
    border-color: inherit;
    background-color: rgb(246, 246, 246);
  }

  .table tbody .tr:hover {
    background-color: rgb(236, 236, 236);
  }

  .table tbody .tr td {
    font-size: 15px;
    text-transform: uppercase;
    padding: 1em;
  }

  .table tbody .tr td:last-child {
    color: rgb(251, 101, 80);
    font-size: 15px;
    text-transform: inherit;
    padding: 1em;
  }
</style>
