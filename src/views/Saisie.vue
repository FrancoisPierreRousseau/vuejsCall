<template>
  <div>
    <!--------------------------->
    <!-- FORM -->
    <!-------------------------->
    <b-form class="mt-4" @submit="onSubmit">

      <!--------------------------->
      <!-- TAB -->
      <!-------------------------->
      <b-nav>
        <b-nav-item type="submit">Enregistrer</b-nav-item>
      </b-nav>

      <!--------------------------->
      <!-- PAGINATION -->
      <!-------------------------->
      <div class="overflow-auto mt-4">
        <b-pagination-nav
            :link-gen="linkGen"
            :page-gen="pageGen"
            :number-of-pages="links.length"
        ></b-pagination-nav>
      </div>

      <b-row class="my-1 mb-2">
        <b-col sm="1">

          <!--------------------------->
          <!-- LABEL -->
          <!-------------------------->
          <label>Client:</label>

        </b-col>
        <b-col>

          <!--------------------------->
          <!-- INPUT TEXT-->
          <!-------------------------->
          <b-form-input id="searchBy" :state="null" placeholder="nom" v-model="form.customer.name"></b-form-input>

        </b-col>
        <b-col>

          <!--------------------------->
          <!-- INPUT TEXT-->
          <!-------------------------->
          <b-form-input id="searchBy" :state="null" placeholder="adresse"
                        v-model="form.customer.address"></b-form-input>
        </b-col>
      </b-row>
      <b-row class="my-1 mb-2">
        <b-col sm="1">
          <!--------------------------->
          <!-- LABEL -->
          <!-------------------------->
          <label>Contacts:</label>
        </b-col>
        <b-col>
          <!--------------------------->
          <!-- INPUT SELECT-->
          <!-------------------------->
          <b-form-select class="form-control" v-model="form.contact" :options="contacts" size="sm"></b-form-select>
        </b-col>
      </b-row>
      <b-row class="my-1 mb-2">
        <b-col sm="1">
          <!--------------------------->
          <!-- LABEL -->
          <!-------------------------->
          <label>Contrats:</label>
        </b-col>
        <b-col>
          <!--------------------------->
          <!-- INPUT SELECT-->
          <!-------------------------->
          <b-form-select class="form-control" v-model="form.contrat" :options="contrats" size="sm"></b-form-select>
        </b-col>
      </b-row>
      <b-row class="my-1 mb-2">
        <b-col sm="1">
          <!--------------------------->
          <!-- LABEL -->
          <!-------------------------->
          <label>Produits:</label>
        </b-col>
        <b-col>
          <!--------------------------->
          <!-- INPUT SELECT-->
          <!-------------------------->
          <b-form-select class="form-control" v-model="form.produit" :options="produits" size="sm"></b-form-select>
        </b-col>
      </b-row>
      <b-row class="my-1 mb-2">
        <b-col sm="1">
          <!--------------------------->
          <!-- LABEL -->
          <!-------------------------->
          <label>Modules:</label>
        </b-col>
        <b-col>
          <!--------------------------->
          <!-- INPUT SELECT-->
          <!-------------------------->
          <b-form-select class="form-control" v-model="form.produit" :options="modules" size="sm"></b-form-select>
        </b-col>
      </b-row>

      <h2 class="text-center mt-4">Ticket</h2>
      <b-row class="my-1 mt-3">
        <b-col sm="1">
          <!--------------------------->
          <!-- LABEL -->
          <!-------------------------->
          <label>Client:</label>
        </b-col>
        <b-col>
          <!--------------------------->
          <!-- INPUT TEXT-->
          <!-------------------------->
          <b-form-input id="searchBy" :state="null" placeholder="nom" v-model="form.customer.name"></b-form-input>
        </b-col>
        <b-col sm="1">
          <!--------------------------->
          <!-- LABEL -->
          <!-------------------------->
          <label>Objet:</label>
        </b-col>
        <b-col>
          <!--------------------------->
          <!-- INPUT TEXT -->
          <!-------------------------->
          <b-form-input id="searchBy" :state="null" placeholder="Resumé de l'objet"
                        v-model="form.customer.address"></b-form-input>
        </b-col>
        <b-col>
          <!--------------------------->
          <!-- INPUT SELECT -->
          <!-------------------------->
          <b-form-select class="form-control" v-model="form.origine" :options="origines" size="sm"></b-form-select>
        </b-col>
      </b-row>

      <b-row>
        <b-col>
          <h3 class="mt-3 text-center">Etat</h3>

          <b-row>
            <b-row>
              <b-col sm="2">
                <!--------------------------->
                <!-- LABEL -->
                <!-------------------------->
                <label>Etat:</label>
              </b-col>
              <b-col>
                <!--------------------------->
                <!-- INPUT SELECT -->
                <!-------------------------->
                <b-form-select class="form-control" v-model="form.state" :options="states" size="sm"></b-form-select>
              </b-col>
            </b-row>
            <b-row class="mt-3">
              <b-col sm="2">
                <!--------------------------->
                <!-- LABEL -->
                <!-------------------------->
                <label>Statut:</label>
              </b-col>
              <b-col>
                <!--------------------------->
                <!-- INPUT SELECT -->
                <!-------------------------->
                <b-form-select class="form-control" v-model="form.statut" :options="statuts" size="sm"></b-form-select>
              </b-col>
            </b-row>
            <b-row class="mt-3">
              <b-col sm="2">
                <!--------------------------->
                <!-- LABEL -->
                <!-------------------------->
                <label>Nature:</label>
              </b-col>
              <b-col>
                <!--------------------------->
                <!-- INPUT SELECT -->
                <!-------------------------->
                <b-form-select class="form-control" v-model="form.nature" :options="natures" size="sm"></b-form-select>
              </b-col>
            </b-row>
            <b-row class="mt-3">
              <b-col sm="2">
                <!--------------------------->
                <!-- LABEL -->
                <!-------------------------->
                <label>Priorité:</label>
              </b-col>
              <b-col>
                <!--------------------------->
                <!-- INPUT SELECT -->
                <!-------------------------->
                <b-form-select class="form-control" v-model="form.priorite" :options="priorites"
                               size="sm"></b-form-select>
              </b-col>
            </b-row>
          </b-row>

        </b-col>
        <b-col>
          <h3 class="mt-3 text-center">Dates / Heures</h3>

          <b-row>
            <b-row>
              <b-col sm="2">
                <!--------------------------->
                <!-- LABEL -->
                <!-------------------------->
                <label>Créé le:</label>
              </b-col>
              <b-col>
                <!--------------------------->
                <!-- INPUT DATETIME -->
                <!-------------------------->
                <b-form-input type="datetime-local" v-model="form.create_at" locale="fr"></b-form-input>
              </b-col>
            </b-row>
            <b-row class="mt-3">
              <b-col sm="2">
                <!--------------------------->
                <!-- LABEL -->
                <!-------------------------->
                <label>Rappelé le:</label>
              </b-col>
              <b-col>
                <!--------------------------->
                <!-- INPUT DATETIME -->
                <!-------------------------->
                <b-form-input type="datetime-local" v-model="form.rappeler_at" locale="fr"></b-form-input>
              </b-col>
            </b-row>
            <b-row class="mt-3">
              <b-col sm="2">
                <!--------------------------->
                <!-- LABEL -->
                <!-------------------------->
                <label>Clôturé le:</label>
              </b-col>
              <b-col>
                <!--------------------------->
                <!-- INPUT DATETIME -->
                <!-------------------------->
                <b-form-input type="datetime-local" v-model="form.cloture_at" locale="fr"></b-form-input>
              </b-col>
            </b-row>
          </b-row>
        </b-col>


        <b-col>
          <h3 class="mt-3 text-center">Temps</h3>

          <b-row>
            <b-row class="mt-3">
              <b-col sm="2">
                <!--------------------------->
                <!-- LABEL -->
                <!-------------------------->
                <label>Durée:</label>
              </b-col>
              <b-col>
                <!--------------------------->
                <!-- INPUT TIME -->
                <!-------------------------->
                <b-form-input type="time" v-model="form.rappeler_at" locale="fr"></b-form-input>
              </b-col>
            </b-row>
            <b-row class="mt-3">
              <b-col sm="2">
                <!--------------------------->
                <!-- LABEL -->
                <!-------------------------->
                <label>Pièces jointes:</label>
              </b-col>
              <b-col>
                <!--------------------------->
                <!-- INPUT FILES -->
                <!-------------------------->
                 <b-form-file></b-form-file>
              </b-col>
            </b-row>
          </b-row>
        </b-col>
      </b-row>
      <!--------------------------->
      <!-- INPUT TEXTAREA -->
      <!-------------------------->
      <h3 class="text-center mt-4">Descriptif</h3>
      <b-form-textarea
          id="textarea-default"
          placeholder="Descriptif"
          rows="8"
      ></b-form-textarea>

      <h3 class="text-center mt-4">Solution</h3>
      <b-form-textarea
          class="mb-5"
          id="textarea-default"
          placeholder="Solution"
          rows="8"
      ></b-form-textarea>
    </b-form>
  </div>
</template>

<script>
export default {
  name: "Saisie",
  data() {
    return {
      links: ['#ticket'],

      priorites: [
        {value: 'normal', text: 'Normal'},
      ],
      contrats: [
        {value: null, text: 'Choisissez un contrat'},
        {value: 'Contrat 1', text: 'Contrat 1'},
        {value: 'Contrat 2', text: 'Contrat 2'},
        {value: 'Contrat 3', text: 'Contrat 3'},
        {value: 'Contrat 4', text: 'Contrat 4'},
        {value: 'Contrat 5', text: 'Contrat 5'},
        {value: 'Contrat 6', text: 'Contrat 6'},
        {value: 'Contrat 7', text: 'Contrat 7'},
        {value: 'Contrat 8', text: 'Contrat 8'},
      ],
      contacts: [
        {value: null, text: 'Choisissez un contact'},
        {value: 'Contact 1', text: 'Contact 1'},
        {value: 'Contact 2', text: 'Contact 2'},
        {value: 'Contact 3', text: 'Contact 3'},
        {value: 'Contact 4', text: 'Contact 4'},
        {value: 'Contact 5', text: 'Contact 5'},
        {value: 'Contact 6', text: 'Contact 6'},
        {value: 'Contact 7', text: 'Contact 7'},
        {value: 'Contact 8', text: 'Contact 8'},
      ],
      produits: [
        {value: null, text: 'Choisissez un produit'},
        {value: 'produit 1', text: 'produit 1'},
        {value: 'produit 2', text: 'produit 2'},
        {value: 'produit 3', text: 'produit 3'},
        {value: 'produit 4', text: 'produit 4'},
        {value: 'produit 5', text: 'produit 5'},
        {value: 'produit 6', text: 'produit 6'},
        {value: 'produit 7', text: 'produit 7'},
        {value: 'produit 8', text: 'produit 8'},
      ],
      modules: [
        {value: null, text: 'Choisissez un module'},
        {value: 'Module 1', text: ' Module 1'},
        {value: 'Module 2', text: 'Module 2'},
        {value: 'Module 3', text: 'Module 3'},
        {value: 'Module 4', text: 'Module 4'},
        {value: 'Module 5', text: 'Module 5'},
        {value: 'Module 6', text: 'Module 6'},
        {value: 'Module 7', text: 'Module 7'},
        {value: 'Module 8', text: 'Module 8'},
      ],
      origines: [
        {value: null, text: 'Choisissez une origine'},
        {value: 'Web', text: ' Web 1'},
        {value: 'Hotline', text: 'Hotline'},
      ],
      states: [
        {value: 'a', text: 'En cours'},
        {value: 'b', text: 'En attente'},
        {value: 'c', text: 'Terminé'},
      ],
      statuts: [
        {value: 'a', text: 'A prendre en charge'},
        {value: 'b', text: 'En cours'},
        {value: 'c', text: 'Accord Client'},
        {value: 'd', text: 'Editeur'},
        {value: 'e', text: 'Interne'},
        {value: 'f', text: 'Résolu'},
        {value: 'g', text: 'Non résolu'},
      ],
      natures: [
        {value: null, text: 'Choisissez une nature'},
        {value: 'Nature 1', text: 'Nature 1'},
        {value: 'Nature 2', text: 'Nature 2'},
        {value: 'Nature 3', text: 'Nature 3'},
        {value: 'Nature 4', text: 'Nature 4'},
      ],
      form: {
        customer: {name: '', address: ''},
        contact: null,
        contrat: null,
        produit: null,
        module: null,
        selectCustomer: null,
        origine: null,
        state: 'a',
        statut: 'a',
        nature: null,
        priorite: 'normal',
        rappeler_at: '',
        create_at: '',
        cloture_at: '',
      },
    }
  },
  methods: {
    linkGen(pageNum) {
      return this.links[pageNum - 1]
    },
    pageGen(pageNum) {
      return this.links[pageNum - 1].slice(1)
    },
  }
}
</script>
