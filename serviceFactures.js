import axios from "axios";
 
const base_url = import.meta.env.VITE_BASE_URL;
 
const useFacture = () => {
    // Fonction pour créer une nouvelle facture
    const createFacture = async (facture) => {
        await axios.post(`${base_url}/factures`, facture);
    };
 
    // Fonction pour récupérer la liste des factures
    const getAllFactures = async () => {
        const response = await axios.get(`${base_url}/factures`);
        return response.data;
    };
 
    // Fonction pour récupérer une facture par son ID
    const getFactureById = async (id) => {
        const response = await axios.get(`${base_url}/factures/${id}`);
        return response.data;
    };
 
    // Fonction pour mettre à jour une facture
    const updateFacture = async (id, facture) => {
        await axios.put(`${base_url}/factures/${id}`, facture);
    };
 
    // Fonction pour supprimer une facture
    const deleteFacture = async (id) => {
        await axios.delete(`${base_url}/factures/${id}`);
    };
 
    return { createFacture, getAllFactures, getFactureById, updateFacture, deleteFacture };
};
 
export default useFacture;
 
