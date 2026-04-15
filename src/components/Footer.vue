<script setup>
import { BContainer, BRow, BCol } from 'bootstrap-vue-next';
import { RouterLink } from 'vue-router';
</script>

<template>
  <BContainer fluid id="footer">
    <footer>
      <section id="footer-content" class="py-2">
        <BContainer>  
          <BRow class="align-items-start gy-3">
            <BCol cols="12" md="4" class="text-center text-md-start mb-2">
              <h5 class="header mb-3">Kontakt</h5>
              <div class="d-flex flex-column flex-md-row align-items-center mb-0 gap-1">
                <img src="../assets/logo/Telefon-Logo.png" width="40" height="40" class="me-1">
                <a href="tel:+436509918233">
                  <strong>Telefon:</strong> +436765111042
                </a>
              </div>
              <div class="d-flex flex-column flex-md-row align-items-center mb-1 gap-1">
                <img src="../assets/logo/Mail-Logo.png" width="40" height="40" class="me-1">
                <a href="mailto:bauer.thomas98@gmail.com">
                  <strong>Email:</strong> bauer.heilmassage@gmail.com
                </a>
              </div>
            </BCol>
            <BCol cols="12" md="4" class="text-center text-md-start mb-1">
              <h5 class="header mb-4">Service</h5>
              
            </BCol>
          </BRow>
        </BContainer>
      </section>
      <div class="footer-bottom text-center">
        © 2026 Thomas Bauer. Alle Rechte vorbehalten
      </div>
    </footer>
  </BContainer>
</template>

<style scoped>
#footer {
  background-color: #1f1f1f;
  color: #f8f9fa;
padding-top: 10px;
}


#footer a {
  word-break: break-word;
  color: inherit;
  text-decoration: none;
}

#footer a:hover {
  text-decoration: underline;
  color: peru;
}

.header {
  color: #716B9B;
  font-weight: bold;
}

.footer-bottom {
  padding: 1rem 0;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  font-size: 0.9rem;
  opacity: 0.8;
}
</style>
