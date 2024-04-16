<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <form @submit.prevent="submit" class="mt-5">
          <div class="mb-3">
            <label for="nom" class="form-label">Nom</label>
            <input type="text" class="form-control" id="nom" v-model="evenement.nom" required>
            <div class="invalid-feedback" v-if="!evenement.nom">Le nom de l'événement ne peut pas être vide.</div>
          </div>
          <div class="mb-3">
            <label for="date_evenement" class="form-label">Date de l'événement</label>
            <input type="date" class="form-control" id="date_evenement" v-model="evenement.date_evenement">
            <!-- Supprimer la validation côté client pour la date -->
          </div>
          <div class="mb-3">
            <label for="heure_evenement" class="form-label">Heure de l'événement</label>
            <input type="time" class="form-control" id="heure_evenement" v-model="evenement.heure_evenement">
            <!-- Supprimer la validation côté client pour l'heure -->
          </div>
          <div class="mb-3">
            <label for="lieu_nom" class="form-label">Nom du lieu</label>
            <input type="text" class="form-control" id="lieu_nom" v-model="evenement.lieu_nom">
          </div>
          <div class="mb-3">
            <label for="lieu_adresse" class="form-label">Adresse du lieu</label>
            <input type="text" class="form-control" id="lieu_adresse" v-model="evenement.lieu_adresse">
          </div>
          <div class="mb-3">
            <label for="description" class="form-label">Description</label>
            <textarea class="form-control" id="description" v-model="evenement.description"></textarea>
          </div>
          <div class="d-grid gap-2">
            <button type="submit" class="btn btn-primary">Ajouter un événement</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import useEvenement from '../../services/serviceEvenements';
import { useRouter } from 'vue-router';

const { createEvenement } = useEvenement()
const router = useRouter()

const evenement = ref({
    nom: null,
    date_evenement: null,
    heure_evenement: null,
    lieu_nom: null,
    lieu_adresse: null,
    description: null
})

const submit = () => {
    // Assurez-vous que les champs date_evenement et heure_evenement sont vides si rien n'est saisi
    if (!evenement.value.date_evenement) {
        evenement.value.date_evenement = null;
    }
    if (!evenement.value.heure_evenement) {
        evenement.value.heure_evenement = null;
    }

    // Formater la date au format YYYY-MM-DD
    if (evenement.value.date_evenement) {
        evenement.value.date_evenement = new Date(evenement.value.date_evenement).toISOString().split('T')[0];
    }
    
    console.log('evenement', evenement.value)
    createEvenement(evenement.value)
        .then(res => {
            console.log(res)
            router.push('/') // Rediriger vers la liste des événements après l'ajout
        })
        .catch(err => console.log('erreur', err))
}
</script>

<style scoped>
.container {
  margin-top: 50px; /* Marge en haut */
}

.form-label {
  font-weight: bold;
}

.invalid-feedback {
  color: #dc3545; /* Couleur rouge */
}
</style>
