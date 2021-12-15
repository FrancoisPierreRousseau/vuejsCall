<template>
  <div class="min-vh-100 overflow-hidden">
    <form-filter class="mb-4"></form-filter>

    <div class="d-flex justify-content-between">


      <h3 v-if="$route.meta.model === 'ticket'" class="d-block"> Tickets </h3>
      <div v-if="$route.meta.model === 'ticket'" class="align-baseline">
        <b-button size="sm" variant="outline-primary">Exporter</b-button>
        <b-button size="sm" variant="primary" class="ms-1"> Ajouter un ticket</b-button>
      </div>

      <h3 v-if="$route.meta.model === 'client'" class="d-block"> Clients </h3>
      <div v-if="$route.meta.model === 'client'" class="align-baseline">
        <b-button size="sm" variant="primary" class="ms-1">Ajouter un Client</b-button>
      </div>

    </div>

    <b-navbar v-if="$route.meta.model === 'ticket'" variant="faded" type="light">
      <b-navbar-nav>
        <b-nav-item :to="{ path: `tickets` }" active> Tout</b-nav-item>
        <span v-for="(state) in this.$store.getters['ticket/distinctStates']" :key="state">
          <b-nav-item :to="{ path: `tickets?state=${state}` }">{{ state }}</b-nav-item>
        </span>
      </b-navbar-nav>
    </b-navbar>


    <b-table striped hover :filter="this.filter" :filter-function="this.filtered" :items="this.collectionModel"/>


  </div>
</template>

<script>
import FormFilter from "../../components/Forms/Filter";

export default {
  name: "CollectionItems",
  components: {
    FormFilter,
  },
  props: {
    filter: {
      type: Object,
    },
  },
  data() {
    return {
      model: '',
    }
  },
  computed: {
    collectionModel() {
      return this.$store.state[`${this.$route.meta.model}`].all;
    },
  },
  methods: {
    filtered(model, filter) {
      const valFilter = Object.values(filter).filter(val => {
        if (val) return val
      })

      const valModel = Object.values(model);

      return valFilter.forEach(filter => valModel.forEach(model => {
        console.log(filter, model)
      }))
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.$store.dispatch(`${to.meta.model}/initAll`, {api: vm.$grafe.api.ebp})
    })
  },
}
</script>

<style scoped>

</style>
