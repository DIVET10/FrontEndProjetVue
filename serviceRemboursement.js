import axios from "axios";
 
const base_url = import.meta.env.VITE_BASE_URL;
 
const useRemboursement = () => {
    // Fonction pour créer un nouveau remboursement
    const createRemboursement = async (remboursement) => {
        await axios.post(`${base_url}/remboursements`, remboursement);
    };
 
    // Fonction pour récupérer la liste des remboursements
    const getAllRemboursements = async () => {
        const response = await axios.get(`${base_url}/remboursements`);
        return response.data;
    };
 
    // Fonction pour récupérer un remboursement par son ID
    const getRemboursementById = async (id) => {
        const response = await axios.get(`${base_url}/remboursements/${id}`);
        return response.data;
    };
 
    // Fonction pour mettre à jour un remboursement
    const updateRemboursement = async (id, remboursement) => {
        await axios.put(`${base_url}/remboursements/${id}`, remboursement);
    };
 
    // Fonction pour supprimer un remboursement
    const deleteRemboursement = async (id) => {
        await axios.delete(`${base_url}/remboursements/${id}`);
    };
 
    return { createRemboursement, getAllRemboursements, getRemboursementById, updateRemboursement, deleteRemboursement };
};
 
export default useRemboursement;
 
