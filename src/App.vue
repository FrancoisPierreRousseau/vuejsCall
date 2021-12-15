<template>
  <div id="app">
    <div id="nav">
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-nav>
          <b-nav-item :to="{ name: 'tickets' }">Hotline</b-nav-item>
        </b-navbar-nav>
      </b-navbar>
    </div>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>
