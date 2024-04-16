import axios from 'axios'; // Importez Axios depuis le module 'axios'
import { ref } from 'vue'; // Importez ref depuis Vue

const base_url = `${import.meta.env.VITE_BASE_URL}`;

const useEvenement = () => {
    // Déclarez listeEvenements en tant que ref local
    const listeEvenements = ref([]); 

    // Fonction pour créer un nouvel événement
    const createEvenement = async (evenement) => {
        try {
            // Envoyer la requête POST pour créer un nouvel événement
            const response = await axios.post(`${base_url}/evenements`, evenement);
            // Retourner les données de réponse si la requête réussit
            return response.data;
        } catch (error) {
            // Capturer et traiter les erreurs
            console.error('Erreur lors de la création de l\'événement:', error);
            throw error; // Renvoyer l'erreur pour que le code appelant puisse la gérer
        }
    };
    
 
    // Fonction pour récupérer la liste des événements
    const getAllEvenements = async (listeEvenements) => {
        try {
            const response = await axios.get(`${base_url}/evenements`);
            const data = response.data.data;
            console.log("Evenements récupérés:", data); // Afficher les données récupérées dans la console
            listeEvenements.value = data; // Mettre à jour listeEvenements avec les données récupérées
        } catch (error) {
            console.error('Erreur lors de la récupération des événements:', error);
        }
    };
    
    
    // Fonction pour récupérer un événement par son ID
    const getEvenementById = async (id) => {
        const response = await axios.get(`${base_url}/evenements/${id}`);
        return response.data;
    };
 
    // Fonction pour mettre à jour un événement
    const updateEvenement = async (id, evenement) => {
        await axios.put(`${base_url}/evenements/${id}`, evenement);
    };
 
    // Fonction pour supprimer un événement
    const deleteEvenement = async (id) => {
        await axios.delete(`${base_url}/evenements/${id}`);
    };
 
    return { listeEvenements, createEvenement, getAllEvenements, getEvenementById, updateEvenement, deleteEvenement };
};
 
export default useEvenement;
