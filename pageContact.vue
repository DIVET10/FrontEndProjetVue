<template>
  <div class="contact-page c" style="background-color: bisque; color: black; padding-left: 15px;padding-right: 15px;padding-bottom: 15px;">
    <h1 class="taille" style="text-align: center; font-size: 24px; margin-top: 20px;">Nous contacter</h1>
    <p style="text-align: center;">Pour toute question ou commentaire, n'hésitez pas à nous contacter en utilisant le formulaire ci-dessous :</p>
   
    <!-- Formulaire de contact -->
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="name" style="text-align: center; font-size: 18px;">Nom :</label>
        <input type="text" id="name" v-model="name" required>
      </div>
      <div class="form-group">
        <label for="email" style="text-align: center; font-size: 18px;">Adresse e-mail :</label>
        <input type="email" id="email" v-model="email" required>
      </div>
      <div class="form-group">
        <label for="subject" style="text-align: center; font-size: 18px;">Sujet :</label>
        <input type="text" id="subject" v-model="subject" required>
      </div>
      <div class="form-group">
        <label for="message" style="text-align: center; font-size: 18px;">Message :</label>
        <textarea id="message" v-model="message" rows="6" required></textarea>
      </div>
      <button type="submit" class="btn btn-primary" style="display: block; margin: 0 auto;">Envoyer</button>
    </form>
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
  },
  methods: {
    submitForm() {
      // Envoyer le formulaire à votre backend ou service de messagerie
      console.log('Formulaire envoyé avec succès :', this.name, this.email, this.subject, this.message);
      // Afficher une confirmation d'envoi
      alert('Votre message a été envoyé avec succès ! Nous vous répondrons dès que possible.');
      // Réinitialiser les champs du formulaire
      this.name = '';
      this.email = '';
      this.subject = '';
      this.message = '';
    }
  }
};
</script>
 
<style scoped>
.contact-page {
  max-width: 600px;
  margin: 0 auto;
}
 
 
.form-group {
  margin-bottom: 20px;
}
 
label {
  font-weight: bold;
}
 
input[type="text"],
input[type="email"],
textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
 
button {
  margin-top: 20px;
 
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: #007bff;
  color: #fff;
  font-weight: bold;
}
button:hover {
  background-color: #0056b3;
}
</style>