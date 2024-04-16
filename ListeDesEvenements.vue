<template>
  <div>
    <h1>Liste des événements</h1>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Nom</th>
          <th>Date</th>
          <th>Heure</th>
          <th>Lieu</th>
          <th>Description</th>
          <th>Action</th> <!-- Nouvelle colonne pour le bouton -->
        </tr>
      </thead>
      <tbody>
        <tr v-for="evenement in listeEvenements" :key="evenement.evenement_id">
          <td>{{ evenement.nom }}</td>
          <td>{{ formatDate(evenement.date_evenement) }}</td>
          <td>{{ evenement.heure_evenement || 'Non spécifié' }}</td>
          <td>{{ evenement.lieu_nom }}, {{ evenement.lieu_adresse }}</td>
          <td>{{ evenement.description }}</td>
          <td>
            <div class="action-buttons">
              <button class="btn-reserver" @click="reserverPlace">Réserver</button>
              <button class="btn-modifier" @click="modifierEvenement(evenement)">Modifier</button>
              <button class="btn-supprimer" @click="supprimerEvenement(evenement)">Supprimer</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <button class="btn btn-primary" @click="allerVersAjoutEvenement">Ajouter un événement</button>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import axios from 'axios'; // Importer Axios
import useEvenement from '@/services/serviceEvenements.js';

const { getAllEvenements, deleteEvenement } = useEvenement();
const listeEvenements = ref([]);
const router = useRouter();

const reserverPlace = () => {
  // Redirection vers la page de paiement
  router.push({ name: 'paiement' });
};

const modifierEvenement = (evenement) => {
  // Logique de modification de l'événement
};

const supprimerEvenement = async (evenement) => {
  try {
    await deleteEvenement(evenement.evenement_id);
    await fetchEvenements();
    console.log("Événement supprimé avec succès.");
  } catch (error) {
    console.error('Erreur lors de la suppression de l\'événement:', error);
  }
};

const fetchEvenements = async () => {
    try {
        const evenements = await getAllEvenements(listeEvenements);
        console.log("Evenements récupérés:", evenements);
    } catch (error) {
        console.error('Erreur lors de la récupération des événements:', error);
    }
};

onMounted(async () => {
    try {
        await fetchEvenements();
        console.log("Liste des événements mise à jour:", listeEvenements.value);
    } catch (error) {
        console.error('Erreur lors de la récupération des événements:', error);
    }
});

const allerVersAjoutEvenement = () => {
    router.push({ name: 'ajouter-evenement' });
};

const formatDate = (date) => {
    return new Date(date).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' });
};
</script>



<style>
/* Style de la table */
/* Style de la table */
.table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
  background-color: #fff; /* Ajout d'un fond blanc */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Ajout d'une ombre légère */
}

.table th, .table td {
  padding: 12px; /* Augmentation du padding */
  border: 1px solid #ddd;
}
.btn-modifier,
.btn-supprimer {
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.btn-modifier {
  background-color: #ffc107; /* Couleur jaune */
  color: #000;
}

.btn-supprimer {
  background-color: #dc3545; /* Couleur rouge */
  color: #fff;
}

.btn-modifier:hover,
.btn-supprimer:hover {
  filter: brightness(85%); /* Réduction de la luminosité au survol */
}

.table th {
  background-color: #f8f9fa; /* Fond gris plus clair */
  font-weight: bold;
  text-align: left;
}

.table td {
  background-color: #fff; /* Fond blanc pour les cellules de données */
}

/* Style des boutons */
.btn {
  display: inline-block;
  padding: 10px 20px; /* Augmentation du padding */
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;
  background-color: #007bff;
  color: #fff;
  font-weight: bold;
  transition: background-color 0.3s ease; /* Transition fluide */
}
/* Dans la section <style> */
.action-buttons {
  display: flex;
  gap: 10px; /* Espacement entre les boutons */
}

.action-buttons button {
  flex: 1; /* Les boutons prennent le même espace */
}
.btn-reserver {
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: #28a745; /* Couleur verte */
  color: #fff;
  font-weight: bold;
}

.btn-reserver:hover {
  background-color: #218838; /* Couleur verte plus foncée au survol */
}

.btn:hover {
  background-color: #0056b3;
}

/* Style du titre */
h1 {
  margin-bottom: 30px; /* Augmentation de la marge */
  font-size: 28px; /* Augmentation de la taille de police */
  color: #333; /* Couleur de texte plus foncée */
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Ajout d'une ombre au texte */
}

/* Style pour rendre la première lettre d'une chaîne de caractères en majuscule */
.capitalize {
  text-transform: capitalize;
}

/* Style pour la ligne d'ajout d'événement */
.add-event-row {
  background-color: #f2f2f2; /* Fond gris pour la ligne d'ajout */
}

.add-event-row td {
  padding-top: 20px; /* Ajout de padding en haut */
  border: none; /* Suppression des bordures */
}

.add-event-row .btn {
  margin-top: 10px; /* Marge en haut du bouton */
}

/* Style pour le lien de retour */
.back-link {
  color: #007bff; /* Couleur bleue */
  text-decoration: none;
  font-weight: bold;
}

.back-link:hover {
  text-decoration: underline; /* Soulignement au survol */
}

</style>
