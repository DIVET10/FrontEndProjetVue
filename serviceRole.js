import axios from "axios";
 
const base_url = import.meta.env.VITE_BASE_URL;
 
const useRole = () => {
    // Fonction pour créer un nouveau rôle
    const createRole = async (role) => {
        await axios.post(`${base_url}/roles`, role);
    };
 
    // Fonction pour récupérer la liste des rôles
    const getAllRoles = async () => {
        const response = await axios.get(`${base_url}/roles`);
        return response.data;
    };
 
    // Fonction pour récupérer un rôle par son ID
    const getRoleById = async (id) => {
        const response = await axios.get(`${base_url}/roles/${id}`);
        return response.data;
    };
 
    // Fonction pour mettre à jour un rôle
    const updateRole = async (id, role) => {
        await axios.put(`${base_url}/roles/${id}`, role);
    };
 
    // Fonction pour supprimer un rôle
    const deleteRole = async (id) => {
        await axios.delete(`${base_url}/roles/${id}`);
    };
 
    return { createRole, getAllRoles, getRoleById, updateRole, deleteRole };
};
 
export default useRole;
 