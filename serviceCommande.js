import axios from "axios";
 
const base_url = import.meta.env.VITE_BASE_URL;
 
const useCommande = () => {
    // Fonction pour créer une nouvelle commande
    const createCommande = async (commande) => {
        await axios.post(`${base_url}/commandes`, commande);
    };
 
    // Fonction pour récupérer la liste des commandes
    const getAllCommandes = async () => {
        const response = await axios.get(`${base_url}/commandes`);
        return response.data;
    };
 
    // Fonction pour récupérer une commande par son ID
    const getCommandeById = async (id) => {
        const response = await axios.get(`${base_url}/commandes/${id}`);
        return response.data;
    };
 
    // Fonction pour mettre à jour une commande
    const updateCommande = async (id, commande) => {
        await axios.put(`${base_url}/commandes/${id}`, commande);
    };
 
    // Fonction pour supprimer une commande
    const deleteCommande = async (id) => {
        await axios.delete(`${base_url}/commandes/${id}`);
    };
 
    return { createCommande, getAllCommandes, getCommandeById, updateCommande, deleteCommande };
};
 
export default useCommande;
 
