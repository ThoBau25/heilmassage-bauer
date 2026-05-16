<script setup>
import { BCarousel, BCarouselSlide, BCard } from 'bootstrap-vue-next'
import BootstrapCarousel from '@/components/Carousel.vue'

const imagesLanding = [
  new URL('@/assets/praxisbilder/Aussenansicht.jpg', import.meta.url).href,
  new URL('@/assets/praxisbilder/Behindertenaufgang.jpg', import.meta.url).href,
  new URL('@/assets/praxisbilder/Parkplatz.jpg', import.meta.url).href,
  new URL('@/assets/praxisbilder/Rezeption.jpg', import.meta.url).href,
  new URL('@/assets/praxisbilder/Warteraum-1.jpg', import.meta.url).href,
  new URL('@/assets/praxisbilder/Warteraum-2.jpg', import.meta.url).href,
]
</script>

<template>
  <BootstrapCarousel carousel-id="carouselHomeView" :images="imagesLanding" />
  <div class="container-fluid text-center" id="containerWelcomeText">
    <h2>Schmerzen, Verspannungen oder einfach erschöpft?</h2>
  </div>
  <div class="container-fluid text-center" id="containerMassageText">
    <p>
      Dann sind Sie hier genau richtig. Ich helfe Ihnen dabei, Ihren Körper wieder ins Gleichgewicht
      zu bringen – spürbar, nachhaltig und individuell auf Sie abgestimmt. Stellen Sie sich vor, wie
      es sich anfühlt, wieder beweglich, entspannt und schmerzfrei durch den Alltag zu gehen.
    </p>
    <br />
    <h3>Warum Heilmassage?</h3>
    <p>
      Ich biete Ihnen ein breites Spektrum an bewährten Massagetechniken – von klassischer
      Heilmassage über gezielte Tiefenbehandlungen bis hin zu entspannenden Anwendungen. Jede
      Behandlung wird individuell auf Ihre Beschwerden und Bedürfnisse abgestimmt, um nachhaltige
      Linderung und mehr Wohlbefinden zu erreichen.
    </p>
    <br />
    <p><b>Warten Sie nicht länger – sichern Sie sich jetzt Ihren Termin.</b></p>
    <button
      id="btnTerminVereinbaren"
      class="btn btn-primary mt-1"
      @click="$router.push('/kontakt')"
    >
      Termin vereinbaren
    </button>
  </div>
  <div class="container" id="massageTechniken">
    <h2 class="text-center mb-5">Meine Massagetechniken</h2>

    <div class="row g-4">
      <!-- Card 1 -->
      <div class="col-12 col-md-6 col-lg-4">
        <div class="card massage-card h-100">
          <div class="card-body text-center">
            <h4>Klassische Massage</h4>
            <p>
              Löst Verspannungen, verbessert die Durchblutung und sorgt für mehr Beweglichkeit und
              Wohlbefinden.
            </p>
          </div>
        </div>
      </div>

      <!-- Card 2 -->
      <div class="col-12 col-md-6 col-lg-4">
        <div class="card massage-card h-100">
          <div class="card-body text-center">
            <h4>Manuelle Lymphdrainage</h4>
            <p>
              Unterstützt den Lymphfluss, reduziert Schwellungen und fördert die Regeneration des
              Körpers.
            </p>
          </div>
        </div>
      </div>

      <!-- Card 3 -->
      <div class="col-12 col-md-6 col-lg-4">
        <div class="card massage-card h-100">
          <div class="card-body text-center">
            <h4>Bindegewebsmassage</h4>
            <p>
              Aktiviert tieferliegende Gewebeschichten und hilft bei Verspnnungen und Beschwerden.
            </p>
          </div>
        </div>
      </div>

      <!-- Card 4 -->
      <div class="col-12 col-md-6 col-lg-4">
        <div class="card massage-card h-100">
          <div class="card-body text-center">
            <h4>Schröpfen</h4>
            <p>
              Fördert die Durchblutung, löst Blockaden und unterstützt die natürliche Entgiftung des
              Körpers.
            </p>
          </div>
        </div>
      </div>

      <!-- Card 5 -->
      <div class="col-12 col-md-6 col-lg-4">
        <div class="card massage-card h-100">
          <div class="card-body text-center">
            <h4>Triggerpunkttherapie</h4>
            <p>
              Gezielte Behandlung von Schmerzpunkten zur nachhaltigen Lösung von
              Muskelverspannungen.
            </p>
          </div>
        </div>
      </div>

      <!-- Card 6 -->
      <div class="col-12 col-md-6 col-lg-4">
        <div class="card massage-card h-100">
          <div class="card-body text-center">
            <h4>Taping</h4>
            <p>
              Unterstützt Muskeln und Gelenke, lindert Schmerzen und fördert die Heilung im Alltag
              und Sport.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hero-section {
  display: flex;
  flex-direction: column;
  align-items: center;
}
#containerMassageText {
  background-color: #c6a76a;
  padding: 40px;
  margin: 50px auto;
  border-radius: 20px;
  max-width: 1200px;
}

#carouselHomeView {
  height: 450px;
  object-fit: cover;
}
#btnTerminVereinbaren {
  background-color: #716b9b;
  border: none;
}

#btnTerminVereinbaren:hover {
  background-color: #9f94ad;
  color: white;
  transform: scale(1.05);
  transition: all 0.2s ease;
}

#massageTechniken {
  margin: 80px auto;
  max-width: 1200px;
}

.massage-card {
  border: none;
  border-radius: 20px;
  padding: 20px;
  background-color: #c6a76a;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.09);
  transition: all 0.3s ease;
}

.massage-card:hover {
  transform: translateY(-5px);
  background-color: #e1c07e;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
}

.massage-card h4 {
  margin-bottom: 15px;
}

.massage-card p {
  margin: 0;

}
</style>
