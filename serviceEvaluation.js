import axios from "axios";
 
const base_url = import.meta.env.VITE_BASE_URL;
 
const useEvaluation = () => {
    // Fonction pour créer une nouvelle évaluation
    const createEvaluation = async (evaluation) => {
        await axios.post(`${base_url}/evaluations`, evaluation);
    };
 
    // Fonction pour récupérer la liste des évaluations
    const getAllEvaluations = async () => {
        const response = await axios.get(`${base_url}/evaluations`);
        return response.data;
    };
    
 
    // Fonction pour récupérer une évaluation par son ID
    const getEvaluationById = async (id) => {
        const response = await axios.get(`${base_url}/evaluations/${id}`);
        return response.data;
    };
 
    // Fonction pour mettre à jour une évaluation
    const updateEvaluation = async (id, evaluation) => {
        await axios.put(`${base_url}/evaluations/${id}`, evaluation);
    };
 
    // Fonction pour supprimer une évaluation
    const deleteEvaluation = async (id) => {
        await axios.delete(`${base_url}/evaluations/${id}`);
    };
 
    return { createEvaluation, getAllEvaluations, getEvaluationById, updateEvaluation, deleteEvaluation };
};
 
export default useEvaluation;
 