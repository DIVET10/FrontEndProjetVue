<template>
  <form @submit.prevent="submit" enctype="multipart/form-data">
    <div class="mb-3">
      <label for="nom" class="form-label">Nom</label>
      <input type="text" class="form-control" id="nom" v-model="utilisateur.nom" required pattern="[a-zA-Z\s-']+" title="Le nom n'est pas conforme">
      <div class="invalid-feedback" v-if="!utilisateur.nom">Le nom est requis.</div>
    </div>
    <div class="mb-3">
      <label for="email" class="form-label">Email</label>
      <input type="email" class="form-control" id="email" v-model="utilisateur.email" required pattern="[^\s@]+@[^\s@]+\.[^\s@]+" title="Ce n'est pas un email valide">
      <div class="invalid-feedback" v-if="!utilisateur.email">L'email est requis.</div>
    </div>
    <div class="mb-3">
      <label for="mdp" class="form-label">Mot de passe</label>
      <div class="input-group">
        <input :type="showPassword ? 'text' : 'password'" class="form-control" id="mdp" v-model="utilisateur.mot_de_passe" required minlength="8" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}" title="Doit contenir au moins une lettre majuscule, une lettre minuscule, un chiffre et un caractère spécial">
        <button class="btn btn-outline-secondary" type="button" @click="toggleShowPassword">
          <i class="far fa-eye" v-if="!showPassword"></i>
          <i class="far fa-eye-slash" v-else></i>
        </button>
      </div>
      <div class="invalid-feedback" v-if="!utilisateur.mot_de_passe || utilisateur.mot_de_passe.length < 8">Le mot de passe doit contenir au moins 8 caractères.</div>
    </div>
    <div class="mb-3">
      <label for="photo" class="form-label">Photo de profil</label>
      <input type="file" class="form-control" id="photo" @change="handlePhotoChange" >
      <div class="invalid-feedback" v-if="!utilisateur.photo_de_profil">Une photo de profil est requise.</div>
      <img v-if="utilisateur.photo_de_profil" :src="utilisateur.photo_de_profil" alt="Photo de profil">
    </div>
   <div class="mb-3">
  <label for="role" class="form-label">Rôles</label>
  <select class="form-select form-select-lg mb-3" id="role" v-model="utilisateur.roleId" >
    <option value="1">Client</option>
    <option value="2">Organisateur</option>
    <!-- Vous pouvez ajouter d'autres options ici avec les valeurs appropriées -->
  </select>
  <div class="invalid-feedback" v-if="!utilisateur.roleId">Veuillez sélectionner un rôle.</div>
</div>
 
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</template>
 
<script setup>
import axios from 'axios';
import { ref } from 'vue';
import useUtilisateur from '../../services/serviceUtilisateurs';
import { useRouter } from 'vue-router';
 
const { addUtilisateur } = useUtilisateur();
const router = useRouter();
 
const utilisateur = ref({
  nom: null,
  email: null,
  mot_de_passe: null,
  photo_de_profil: null, // Utiliser photo_de_profil comme clé
  roleId: null
});
 
const showPassword = ref(false);
 
const submit = () => {
  // Vérifiez les validations avant de soumettre
  if (!utilisateur.value.nom || !utilisateur.value.email || !utilisateur.value.mot_de_passe || !utilisateur.value.photo_de_profil || !utilisateur.value.roleId) {
    // Affichez un message d'erreur ou appliquez un style pour les champs non valides
    return;
  }
 
  const formData = new FormData();
  for (let champ in utilisateur.value) {
    formData.append(champ, utilisateur.value[champ]);
  }
 
  axios.post('http://localhost:8500/utilisateurs', formData)
    .then(res => {
      console.log(res.data);
      router.push('/');
    })
    .catch(err => console.error('Erreur lors de l\'inscription:', err));
};
 
const addPhoto = e => {
  utilisateur.value.photo_de_profil = e.target.files[0];
};
 
const toggleShowPassword = () => {
  showPassword.value = !showPassword.value;
};
 
const handlePhotoChange = (event) => {
  const file = event.target.files[0];
  utilisateur.value.photo_de_profil = URL.createObjectURL(file);
};
</script>
 