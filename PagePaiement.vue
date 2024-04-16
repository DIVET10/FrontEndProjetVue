<template>
  <div class="payment-page">
    <h1 class=" dessus" >Page de paiement</h1>
    <p>Veuillez saisir vos informations de paiement pour réserver votre place :</p>
    <!-- Formulaire de paiement -->
    <form @submit.prevent="validerPaiement">
      <div class="form-group">
        <label for="nom">Nom sur la carte :</label>
        <input type="text" id="nom" v-model="nom" name="nom" required>
      </div>
      <div class="form-group">
        <label for="numero-carte">Numéro de carte :</label>
        <input type="text" id="numero-carte" v-model="numeroCarte" name="numeroCarte" required>
      </div>
      <div class="expiration-cvv">
        <div class="form-group expiration">
          <label for="date-expiration">Date d'expiration :</label>
          <input type="text" id="date-expiration" v-model="dateExpiration" placeholder="MM/YY" name="dateExpiration" required>
        </div>
        <div class="form-group cvv">
          <label for="cvv">CVV :</label>
          <input type="text" id="cvv" v-model="cvv" placeholder="123" name="cvv" required>
        </div>
      </div>
      <button type="submit" class="btn btn-primary">Payer</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nom: '',
      numeroCarte: '',
      dateExpiration: '',
      cvv: ''
    };
  },
  methods: {
    validerPaiement() {
      // Envoyer les données de paiement à votre API ou service de paiement
      // Simulons une attente de 2 secondes pour représenter le processus de paiement
      setTimeout(() => {
        // Après 2 secondes, affichez une alerte pour indiquer que le paiement est réussi
        alert("Paiement réussi !");
        // Ensuite, redirigez l'utilisateur vers la page d'accueil
        this.$router.push('/');
      }, 2000);
    }
  }
};
</script>

<style scoped>
.payment-page {
  max-width: 400px;
  margin: 0 auto;
}

.form-group {
  margin-bottom: 20px;
}

label {
  font-weight: bold;
}

input[type="text"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
}
.dessus{
  padding-top:50px;
}
.expiration-cvv {
  display: flex;
}

.expiration, .cvv {
  flex: 1;
}

button {
  margin-top: 20px;
  padding: 12px 24px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: #0070ba;
  color: #fff;
  font-weight: bold;
}
button:hover {
  background-color: #005ea2;
}

</style>
