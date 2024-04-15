import axios from "axios";
 
const base_url = import.meta.env.VITE_BASE_URL;
 
const usePaiement = () => {
    // Fonction pour créer un nouveau paiement
    const createPaiement = async (paiement) => {
        await axios.post(`${base_url}/paiements`, paiement);
    };
 
    // Fonction pour récupérer la liste des paiements
    const getAllPaiements = async () => {
        const response = await axios.get(`${base_url}/paiements`);
        return response.data;
    };
 
    // Fonction pour récupérer un paiement par son ID
    const getPaiementById = async (id) => {
        const response = await axios.get(`${base_url}/paiements/${id}`);
        return response.data;
    };
 
    // Fonction pour mettre à jour un paiement
    const updatePaiement = async (id, paiement) => {
        await axios.put(`${base_url}/paiements/${id}`, paiement);
    };
 
    // Fonction pour supprimer un paiement
    const deletePaiement = async (id) => {
        await axios.delete(`${base_url}/paiements/${id}`);
    };
 
    return { createPaiement, getAllPaiements, getPaiementById, updatePaiement, deletePaiement };
};
 
export default usePaiement;