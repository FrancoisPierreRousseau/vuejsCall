<template>
  <b-form grou class="mt-4" @submit="onSubmit">
    <b-row class="my-1">
      <b-col sm="1">
        <label>Rechercher par:</label>
      </b-col>
      <b-col>
        <b-form-input id="searchBy" :state="null" placeholder="Rechercher par..."
                      v-model="form.searchBy"></b-form-input>
      </b-col>
      <b-col sm="1">
        <label>Statut:</label>
      </b-col>
      <b-col>
        <b-form-select class="form-control" v-model="form.statut" :options="statuts" size="sm"></b-form-select>
      </b-col>
      <b-col sm="1">
        <label>Contient... :</label>
      </b-col>
      <b-col>
        <b-form-input id="includes" :state="null" placeholder="Contient..." v-model="form.include"></b-form-input>
      </b-col>
    </b-row>
    <b-row class="my-1">
      <b-col sm="1">
        <label>Affecté à :</label>
      </b-col>
      <b-col>
        <b-form-select class="form-control" v-model="form.intervenant" :options="intervenants"
                       size="sm"></b-form-select>
      </b-col>
      <b-col sm="1">
        <label>Client:</label>
      </b-col>
      <b-col>
        <b-form-select class="form-control" v-model="form.customer" :options="customers"
                       size="sm"></b-form-select>
      </b-col>
    </b-row>
    <b-button size="sm" variant="primary" type="sumit" class="mb-3">Filtrer</b-button>
  </b-form>
</template>

<script>
export default {
  name: "FormFilter",
  data() {
    return {
      statuts: [
        {value: null, text: 'Choisissez un statut'},
        {value: 'A prendre en charge', text: 'A prendre en charge'},
        {value: 'En cours', text: 'En cours'},
        {value: 'Accord Client', text: 'Accord Client'},
        {value: 'Editeur', text: 'Editeur'},
        {value: 'Interne', text: 'Interne'},
        {value: 'Résolu', text: 'Résolu'},
        {value: 'Non résolu', text: 'Non résolu'},
      ],
      intervenants: [
        {value: null, text: 'Choisissez un intervenant'},
        {value: 'Intervenant 1', text: 'Intervenant 1'},
        {value: 'Intervenant 2', text: 'Intervenant 2'},
        {value: 'Intervenant 3', text: 'Intervenant 3'},
        {value: 'Intervenant 4', text: 'Intervenant 4'},
        {value: 'Intervenant 5', text: 'Intervenant 5'},
        {value: 'Intervenant 6', text: 'Intervenant 6'},
        {value: 'Intervenant 7', text: 'Intervenant 7'},
      ],
      customers: [
        {value: null, text: 'Choisissez un client'},
        {value: 'Client 1', text: 'Client 1'},
        {value: 'Client 2', text: 'Client 2'},
        {value: 'Client 3', text: 'Client 3'},
        {value: 'Client 4', text: 'Client 4'},
        {value: 'Client 5', text: 'Client 5'},
        {value: 'Client 6', text: 'Client 6'},
        {value: 'Client 7', text: 'Client 7'},
      ],
      form: {
        searchBy: '',
        include: '',
        state: null,
        statut: null,
        intervenant: null,
        customer: null,
      },
    }
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      const newPath = this.$route.fullPath.includes('?')
          ? `${this.$route.fullPath}&intervenant=Intervenant 3`
          : `${this.$route.fullPath}?intervenant=Intervenant 3`

      this.$router.push({path: newPath})
    }
  }
}
</script>

<style scoped>

</style>
