<script setup>
import { BContainer, BRow, BCol } from 'bootstrap-vue-next'
import { RouterLink } from 'vue-router'
</script>

<template>
  <BContainer fluid id="footer">
    <footer>
      <section id="footer-content" class="py-5">
        <BContainer>
          <BRow class="gy-4 justify-content-between align-items-stretch">
            <!-- Kontakt -->
            <BCol cols="12" md="4" class="text-center text-md-start">
              <h5 class="header mb-4">Kontakt</h5>

              <div class="footer-item">
                <img src="../assets/logo/Telefon-Logo.png" width="32" height="32" class="symbol" />
                <a href="tel:+436765111042">
                  <strong>Telefon:</strong><br />
                  +436765111042
                </a>
              </div>

              <div class="footer-item">
                <img src="../assets/logo/Mail-Logo.png" width="32" height="32" class="symbol" />
                <a href="mailto:bauer.heilmassage@gmail.com">
                  <strong>Email:</strong><br />
                  bauer.heilmassage@gmail.com
                </a>
              </div>
            </BCol>

            <!-- Adresse -->
            <BCol cols="12" md="4" class="text-center text-md-start">
              <h5 class="header mb-4">Adresse</h5>

              <div class="footer-box">
                <p class="mb-1">Langegasse 15</p>
                <p class="mb-1">2603 Felixdorf</p>
              </div>
            </BCol>

            <!-- Öffnungszeiten -->
            <BCol cols="12" md="4" class="text-center text-md-start">
              <h5 class="header mb-4">Öffnungszeiten</h5>
              <div class="footer-box">
                <p class="mb-1"><strong>Donnerstag</strong></p>
                <p class="mb-0">09:00 – 14:00 Uhr</p>
              </div>
            </BCol>
          </BRow>
        </BContainer>
      </section>
      <div class="footer-bottom text-center">
        <p><a href="#" @click="$router.impressum('/kontakt')">Impressum</a> | <a href="#" @click="$router.datenschutz('/kontakt')">Datenschutz</a></p>
        © 2026 Thomas Bauer. Alle Rechte vorbehalten
      </div>
    </footer>
  </BContainer>
</template>

<style scoped>
#footer {
  background-color: #f6f4f0;
  box-shadow: 0 -2px 12px rgba(0, 0, 0, 0.05);
  margin-top: 80px;
}

#footer a {
  color: inherit;
  text-decoration: none;
}

#footer a:hover {
  color: #716b9b;
}

.header {
  color: #716b9b;
  font-weight: 700;
  margin-bottom: 20px;
}

.footer-item {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  margin-bottom: 20px;
  max-width: 320px;
}

.footer-item a {
  display: block;
  word-break: break-word;
  overflow-wrap: break-word;
}

.footer-box {
  background: white;
  padding: 20px;
  border-radius: 18px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.04);
  width: 100%;
  max-width: 320px;
}

.symbol {
  background: transparent;
  object-fit: contain;
  margin-top: 4px;
}

.footer-bottom {
  padding: 20px 0;
  border-top: 1px solid rgba(113, 107, 155, 0.1);
  font-size: 0.9rem;
  color: #666;
}

@media (max-width: 768px) {
  .footer-item {
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }

  .footer-box {
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }

  .symbol {
    margin-top: 0;
  }
}
</style>
