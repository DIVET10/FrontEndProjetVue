<template>
    <div class="d-flex justify-content-center align-items-center ramonte" style="height: 100vh;">
      <form @submit.prevent="connecter" class="class">
        <div class="mb-3 tai">
          <label for="email" class="form-label">Email</label>
          <input type="email" class="form-control" id="email" v-model="infoLogin.email">
        </div>
        <div class="mb-3 tai">
          <label for="mdp" class="form-label">Mot de passe</label>
          <div class="input-group">
            <input :type="showPassword ? 'text' : 'password'" class="form-control" id="mdp" v-model="infoLogin.mot_de_passe">
            <button class="btn btn-outline-secondary" type="button" @click="toggleShowPassword">
              <i class="far fa-eye" v-if="!showPassword"></i>
              <i class="far fa-eye-slash" v-else></i>
            </button>
          </div>
        </div>
 
        <button type="submit" class="btn btn-coul">Connecter</button>
        <span class="button-space"></span> <!-- Ajoute un espace entre les boutons -->
        <button type="button" class="btn btn-secondary" @click="allerVersInscription">S'inscrire</button>
      </form>
    </div>
  </template>
 
  <script setup>
  import { ref } from "vue";
  import useLogin from '@/services/auth/serviceAuth'
  import { useRouter } from "vue-router";
 
  const { login } = useLogin()
  const infoLogin = ref({
      email: null,
      mot_de_passe: null
  })
 
  const router=useRouter()
 
  const showPassword = ref(false);
 
  const connecter = () => {
      login(infoLogin.value)
          .then(res => {
              console.log('User', res.data);
              router.push('/listeDesEvenements'); // Rediriger vers /listeDesEvenements après une connexion réussie
              // Afficher un message de succès
              alert('Connexion réussie ! Bienvenue ! , cliquer sur Ok pour continuer ');
          })
          .catch(err => {
              console.log('Erreur de connexion', err);
              // Afficher un message d'alerte si l'utilisateur est introuvable
              if (err.response && err.response.status === 404) {
                  alert("Utilisateur introuvable. Veuillez vérifier vos informations d'identification.");
              }
          });
  }
 
  const allerVersInscription = () => {
      router.push({ name: 'ajout-etudiant' });
  }
 
  const toggleShowPassword = () => {
      showPassword.value = !showPassword.value;
  }
  </script>
 
  <style scoped>
  .button-space {
      margin-left: 20px; /* Ajustez cette valeur selon l'espace souhaité */
  }
  .tai{
      width: 400px;
  }
  .btn-coul{
    background-color: orange;
  }
  .class{
    background-color: bisque;
    padding: 20px;
    font-weight: bold;
  }
  .ramonte{
    margin-top: -150px;
  }
  body {
      background-color: aqua; /* Couleur de fond pour toute la page */
      margin: 0; /* Supprime les marges par défaut du body */
      padding: 0; /* Supprime les paddings par défaut du body */
  }
  </style>
 
Dispose d’un menu contextuel