<template>
  <div>
    <nav class="in">
      <div class="container-fluid">
       
       
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">          
          </ul>
        </div>
      </div>
    </nav>
 
    <!-- Contenu de la page -->
    <section class="acceuil banner d-flex justify-content-center align-items-center pt-5 taille">
      <div class="container my-5 py-5">
        <div class="row">
   
          <div class="col-md-6 py-5 decalage taille">
           <h1 class="py-3 text_baniere textt">Réservez vos billets en ligne dès maintenant !</h1>
 
              <span class="auto-typing"></span>
 
            <h5 class="italic">Alors, on vous aide ?</h5>
 
           <p>
      <!-- Ajoutez un gestionnaire d'événements @click pour rediriger vers la page de connexion -->
        <button @click="redirectToLogin" class="bout py-3 btn btn-lg btn-order">
          <div><strong>Commencez</strong> </div>
        </button>
           
    </p>
          </div>
 
         
        </div>
      </div>
    </section>
 
    <!-- Section 4 -->
    <section class="section6">
      <h2>Vous désirez parler avec nous ?</h2>
      <h1 class="xt">Contactez-nous directement via le bouton</h1>
      <router-link to="/contact" class="btn bt r">C'est par ici</router-link>
 
      <p>Decouvrez les reponses a vos questions dans la <a href="FAQ.html"> FAQ</a></p>
    </section>
 
    <!-- Section 5 -->
   
 
    <!-- Section 6 -->
    <section class="section7">
  <footer class="text-center text-lg-start text-white footboost d-flex justify-content-center">
    <section class="mb-4 foot line">
      <div class="iconess">
        <i class="fab fa-facebook-f y"></i>
        <i class="fab fa-twitter y"></i>
        <i class="fab fa-google-plus-g y"></i>
        <i class="fab fa-instagram y"></i>
      </div>
      <div class="lien line">
        <a href="#" class="active">Home</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Contact</a>
      </div>
    </section>
    <div class="text-center p-3 bg-black-copy droit d-none d-lg-block">
      <span class="yt line">© 2024 Billeterie. Tout droits reservés </span>
      <a class="yt" href="#">Termes & Conditions</a>
      <a class="yt" href="#">Politique de confidentialité</a>
    </div>
  </footer>
</section>
 
  </div>
</template>
 
<script>
export default {
  name: 'HomePage',
 
  methods: {
    redirectToLogin() {
      // Redirigez vers la page de connexion en utilisant le routeur
      this.$router.push('/login');
    }
  }
}
</script>
 
<style scoped>
/* Lien de on vous aide ? */
@import url('https://fonts.googleapis.com/css2?family=Sacramento&display=swap');
 
 
/* Style globale de la page */
*{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    font-family:'poppins', sans-serif;
    /* Effet de defilement quand on clique sur un lien */
    scroll-behavior: smooth;
 
   
}
.foot{
    height: 100px;
}
.line  {
    margin-top: 10px;
}
:root{
    --blanche:#ffff;
    --Noir:#222;
    --primaire: #007bc4;
    --gris:#888;
 
}
 
 
.taille{
    height: 10%;
}
.cc-navbar{
    background-color:  #F8FAFF;
    box-shadow: 1px 1px 3px #fc5e1f7a;
    z-index: 99;
    font-weight: 600;
    @media screen {
       
    }
}
.navbar{
    height: 70px;
}
.w{
    color: #fc5e1f;
    font-size: 30px;
    margin-left: 60%;
}
.a{
    color: #fc5e1f;
}
 
 
/* classe du bouton que j'ai donner*/
/* bordure des bouton */
.btn-order{
    color: #fff;
    border-color: none;
    transition: 0.5s;
    background-color: #fc5e1f;
    font-size: 13px;
}
.btn-order:hover,
.btn-order:active{    
    color: #fff;
    background-color:#fd7d14cc;
}
/* Pour bouton reserver */
.btn-orderr{
    color: #fd7d14cc;
    transition: 0.5s;
}
.btn-orderr:hover{
    color: #fff ;
    background-color:rgb(26, 18, 138);
}
 
/* L'effet Hover */
.navbar-nav .nav-item .nav-link :hover{
  border-bottom: 1px solid ;
  transition: padding-bottom .4s ease-in-out, border-color .3s ease;
  color :#fd7d14cc;
}
.hover{
    opacity: .9;
}
 
/* ------------------------------section 2---------------------------------- */
 
/* .acceuil{
    height:48% ;
} */
.acceuil{
    height: 600px;
    /* background: url(./Images/fond\ google.jpg) no-repeat; */
    background-size: cover;
     object-fit: cover;
    background-color: #3737377a;
    background-image: linear-gradient(45deg, #46b1dc, #e67bb1);
}
 
.textt{
    margin-top: -150px;
    margin-left: 30px;
}
.fleche{
    margin-left: 80px;
}
 
.bout{
    background: linear-gradient(90deg, #35a3cee1, #e67bb1);
    border-radius: none;
    border: none;
    font-size: 15px;
    margin-top: 30px;
    margin-left: 30px;
}
.italic{
    margin-left: 20px;
    font-weight: 500;
    font-size: 45px;
    font-family: 'Sacramento', cursive;
}
.decalage{
    margin-top: 40px;
    /* margin-left: 50px; */
}
.carous{
    height: 100px;
    margin-top: -50px;
   
    flex-wrap: nowrap;
}
            /* --------------------------------Section2--------------------------------------- */
 
.section2{
    height: 1080px;
    margin-top: 10px;
    /* background: url(./Images/fond\ google.jpg) no-repeat; */
    background-size: cover;
   
}
.nos{
    /* centrer nos services */
    font-size: 30px ;
    font-weight: 400;
    position: relative;
    padding-top: 30px;
    text-align: center;  
}
.s{
    color: #fc5e1f;
}
.plan{
    font-size: 50px;
    font-family: 'Sacramento', cursive;
    position: relative;
    text-align: center;
}
.title h2::after{
    content: '';
    background: linear-gradient(90deg, #35a3cee1, #e67bb1);
 
    height: 40px;
    width: 60px;
    position:absolute;
    top: 10px;
   
    z-index: -1;
 
    transform: rotate(-10deg);
    border-bottom-right-radius: 40px;
    border-top-left-radius: 40px;
 
}
.yo img{
    height: 400px;
    width: 400px;
    margin-left: 15px;
}
.ya img{
    height: 400px;
    width: 400px;
}
/* Ligne entre les sections */
.bordure{
 border: 1px solid #37373723;
 width: 500px;
 margin-top: 15px;
 margin-left: 30%;
}
.i{
    font-weight: 600;
}
.loin{
    margin-left: 3px;
}
 
.o{
    border: 1px solid #3737377a;
    background-color: #f4f4f78a;
    border: none;
}
/* 2  petites images a coter des titres */
.card-body img{
    height: 50px;
    border-radius: 100px;  
}
 
/* ----------------------------section3------------------------------ */
.section3{
    height: 280px;
    background-image: url(./Images/food.jpg);
    background-image:linear-gradient(rgba(225, 225, 225, 0.233), rgba(225, 225, 225, 0.233)), url(./images/food.jpg);
    /* background-color: rgba(189, 21, 21, 0.473);  */
    backdrop-filter: blur(7px);
    /* background-position: center; */
    background-size: cover;
    opacity: .8;
}
.t h1 {
    font-size: 30px;
    font-weight: 550;
    display: flex;
    justify-content: center;
    color: #fff;
}
.t h4{
    font-size: 30px;
    font-family: 'Sacramento', cursive;
 
    display: flex;
    justify-content: center;
    color: #fff;  
}
 
/* Ligne entre les sections */
.bordure2{
    border: 1px solid #fff;
    width: 100px;
    margin-top: 15px;
    margin-left: 47%;
}
.para{
    font-size: 20px;
    display: flex;
    justify-content: center;
    color: #fff;      
}
.para2{
    font-size: 20px;
    display: flex;
    justify-content: center;
    color: #fff;      
    margin-top: -35px;
}
.b {
    display: flex;
    justify-content: center;
    margin-top: -10px;
    border: none;
}
.r{
    background-color: #fc5e1f;
    border: none;
    color: #fff;
    /* border-radius: 15px; */
}
.fleche2{
    margin-left: 20px;
}
.btn:hover{
    background-color: #fd7d14cc;
    color: #fff;
}
 
/* --------------------------------Section 4------------------------------ */
.section4{
    height: 700px;
    background-color: #37373718;
    /* background-color: #fff; ;  */
}
.section4 h1{
    color: #000;
}
.details{
    display: flex;
    justify-content: center;
    font-size: 30px;
    color: #000;
    margin-left: -15px;
    margin-top: -1px;
    font-family: 'Sacramento', cursive;
}
.bagueimg img{
    height: 80px;
    width: 80px;
    border-radius: 200px;
    margin-left:640px;
}
.card{
    border: none;
   
}
.alignimg{
    display: flex;
    margin: 100px;
    justify-content: space-between;
    margin-top: -1px;
    border: none;  
}
.even{
    display: flex;
    justify-content: center;
    font-size: 20px;
    margin-left: -15px;
    margin-top: -15px;
}
.evenA{
    display: flex;
    justify-content: center;
    font-size: 20px;
    margin-left: -15px;
}
 
 
/* ------------------------ section6--------------------------- */
.section6{
    height: 200px;
    background-color: bisque ;
    padding: 2rem;
    padding-left: 8rem;
    opacity: .9;
}
.bt{
    margin-left: 900px;  
    margin-top: -100px;
}
.xt{
    color: #fc5e1f;
}
 
/* ---------------------------------section7 Fotter---------------------- */
.section7{
    margin-top: -10px;
    height: 150px;
    width: auto;
    background-color: #222;
 
}
.yt{
    font-size: 18px;
}
 
.copyright a{
 text-decoration: none;
}
.copyright{
    text-align: center;
   
}
/* Logo*/
.iconess{
    justify-content: space-between;
    margin: 10px;
    font-size: 30px;
}
.y{
    margin-right: 30px;
    border: 1px solid;
    padding: 10px;
    border-radius: 1000px;
    color: #fff;
}
 
.lien a{
    text-decoration: none;
    color: #fff;
    opacity: .5;
    font-size: 18px;
    margin-left: 20px;
    line-height: 40px;
 
}
 
.contc{
    color: #fff;
    opacity: .5;
    font-size: 18px;
   
    line-height: 40px;
}
.esp{
    margin-left: 10px;
}
 
 
.footboost{
   
   
    background-color: #222;
}
 
.card-title{
    font-weight: bold;
}
</style>
 