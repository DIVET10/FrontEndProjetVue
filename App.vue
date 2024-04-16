<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref, onMounted, onUnmounted } from 'vue';
 
const isNavFixed = ref(false);
 
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});
 
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
 
const handleScroll = () => {
  isNavFixed.value = window.pageYOffset > 0;
};
</script>
 
<template>
  <header :class="{ 'nav-fixed': isNavFixed }"> <!-- Utilisation de la directive v-bind:class -->
    <div class="wrapper">
      <!-- Navbar Brand with RouterLink -->
      <RouterLink to="/" class="navbar-brand text-uppercase fw-bolder mx-4 py-3 text-dark">
        <span class="w">B</span>illeterie
        <i class="em em-admission_tickets" aria-role="presentation" aria-label=""></i>
        <i class="em em-ticket" aria-role="presentation" aria-label="TICKET"></i>
      </RouterLink>
      <nav>
        <!-- Routes -->
        <div class="nav-links">
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/login">Login/Sign Up</RouterLink>
          <RouterLink to="/listeDesEvenements">Evenements</RouterLink>
          <RouterLink to="/contact">Nous Contacter</RouterLink>
        </div>
      </nav>
    </div>
  </header>
  <RouterView />
</template>
 
<style scoped>
header {
  background-color: bisque;
  color: black;
  padding: 16px 0;
}
 
.nav-links a {
  color: black;
  font-weight: bold;
  text-transform: uppercase;
  margin: 0 8px;
  padding: 6px 10px;
  border-radius: 5px;
  text-decoration: none;
  font-size: 14px;
  transition: background-color 0.3s;
}
 
.w{
    color: #fc5e1f;
    font-size: 50px;
    margin-left: 60%;
}
 
.wrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px
}
 
nav {
  font-size: 16px;
}
 
nav a {
  margin: 0 10px;
  padding: 8px 12px; /* Ajustez la taille du padding pour correspondre à la nouvelle taille de police */
  border-radius: 5px;
  text-decoration: none;
  color: black; /* Couleur du texte */
  transition: background-color 0.3s;
  font-size: 30px; /* Nouvelle taille de police */
  font-weight: bold; /* Rendre le texte en gras */
}
 
nav a:hover {
  background-color: #555;
}
 
nav a.active {
  background-color: #555;
}
 
.nav-fixed {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
}
</style>
 
Dispose d’un menu contextuel