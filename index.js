import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PageAcceuil from '@/components/etudiants/PageAcceuil.vue'
import ProfileEtudiant from '@/components/etudiants/ProfileEtudiant.vue'
import AjoutUtilisateur from '@/components/etudiants/AjoutUtilisateur.vue'
import Login from '@/components/auth/Login.vue'
import ListeDesEvenements from '@/components/etudiants/ListeDesEvenements.vue'
import ajoutEvenement from '@/components/etudiants/ajoutEvenement.vue'
import PagePaiement from '@/components/etudiants/PagePaiement.vue' // Importez le composant de paiement
import PageContact from '@/components/etudiants/pageContact.vue' // Importez le composant de contact

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: PageAcceuil
    },
    {
      path: '/profile/:id',
      name: 'profile',
      component: ProfileEtudiant
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/ajout-etudiant',
      name: 'ajout-etudiant',
      component: AjoutUtilisateur
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/listeDesEvenements',
      name: 'listeDesEvenements',
      component: ListeDesEvenements
    },
    {
      path: '/ajouter-evenement',
      name: 'ajouter-evenement',
      component: ajoutEvenement
    },
    {
      path: '/paiement', // Chemin vers la page de paiement
      name: 'paiement',
      component: PagePaiement // Composant de la page de paiement
    },
    {
      path: '/contact', // Chemin vers la page de contact
      name: 'contact',
      component: PageContact // Composant de la page de contact
    }
  ]
})

export default router
