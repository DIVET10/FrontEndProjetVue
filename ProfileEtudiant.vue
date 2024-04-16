<template>
    <div class="card" style="width: 18rem;">
        <img src=".." class="card-img-top" alt="...">
        <div class="card-body">
            <p class="card-text">Prenom: {{ etudiant.prenom }}</p>
            <p class="card-text">Nom: {{ etudiant.nom }}</p>
            <p class="card-text">Age: {{ etudiant.date_de_naissance }}</p>
            <p class="card-text">Email {{ etudiant.email }}</p>

        </div>
    </div>
</template>

<script setup>
//import useUtilisateur from "@/services/serviceUtilisateur";
import { onBeforeMount, ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute()
const { id } = route.params

const etudiant = ref({})


const { getUtilisateurstById } = useUtilisateur()
onBeforeMount(() => {
    getStudentById(id).then((res) => {
        console.log('utilisateur a voir',res)
        utilisateur.value = res.data})
})

</script>
