import axios from "axios";
 
const base_url = import.meta.env.VITE_BASE_URL;
 
const useBillet = () => {
    // Fonction pour créer un nouveau billet
    const createBillet = async (billet) => {
        const response = await axios.post(`${base_url}/billets`, billet);
        return response.data;
    };
 
    // Fonction pour récupérer la liste des billets
    const getAllBillets = async () => {
        const response = await axios.get(`${base_url}/billets`);
        return response.data;
    };
 
    // Fonction pour supprimer un billet
    const deleteBillet = async (id) => {
        await axios.delete(`${base_url}/billets/${id}`);
    };
 
    // Fonction pour récupérer un billet par son ID
    const getBilletById = async (id) => {
        const response = await axios.get(`${base_url}/billets/${id}`);
        return response.data;
    };
 
    return { createBillet, getAllBillets, deleteBillet, getBilletById };
};
 
export default useBillet;
 