<template>
  <div>
    <div>
      <b-navbar variant="faded" type="light">
        <b-navbar-nav>
          <b-nav-item :to="{ name: 'tickets' }" active>Tickets</b-nav-item>
          <b-nav-item :to="{ name: 'clients' }">Clients</b-nav-item>
          <b-nav-item href="#">Contrats</b-nav-item>
        </b-navbar-nav>
      </b-navbar>
      <router-view/>

    </div>
  </div>
</template>

<script>
export default {
  name: "Index",
}
</script>

<style scoped>

</style>
