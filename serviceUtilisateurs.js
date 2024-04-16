import axios from "axios";
 
const useUtilisateur = () => {
    // Créer une fonction pour récupérer la liste des utilisateurs
    const getAllUtilisateurs = async () => {
        const utilisateurs = await axios.get(`${import.meta.env.VITE_BASE_URL}/utilisateurs`);
        console.log('La liste des utilisateurs :', utilisateurs.data.data);
        return utilisateurs.data;
    };
 
    // Fonction pour supprimer un utilisateur
    const deleteUtilisateur = async (id) => {
        await axios.delete(`${import.meta.env.VITE_BASE_URL}/utilisateurs/${id}`);
    };
 
    // Fonction pour récupérer un utilisateur par son ID
    const getUtilisateurById = async (id) => {
        const utilisateur = await axios.get(`${import.meta.env.VITE_BASE_URL}/utilisateurs/${id}`);
        return utilisateur.data;
    };
 
    // Fonction pour ajouter un nouvel utilisateur
    const addUtilisateur = async (utilisateur) => {
        await axios.post(`${import.meta.env.VITE_BASE_URL}/utilisateurs`, utilisateur);
    };

    const updateUtilisateur = async (id, utilisateur) => {
        await axios.put(`${import.meta.env.VITE_BASE_URL}/utilisateurs/${id}`, utilisateur);
    };
 
    return { getAllUtilisateurs, deleteUtilisateur, getUtilisateurById, addUtilisateur, updateUtilisateur };
};
 
export default useUtilisateur;
 


