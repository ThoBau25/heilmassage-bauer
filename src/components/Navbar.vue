<script setup>
import {
  BNavbar,
  BNavbarBrand,
  BNavbarToggle,
  BCollapse,
  BNavbarNav,
  BNavItem,
} from "bootstrap-vue-next";
</script>

<template>
  <BNavbar variant="faded" type="light" toggleable="lg" class="custom-navbar">
    <BNavbarBrand href="/">
      <img
        src="../assets/logo/TB-Logo.png"
        alt="Logo"
        width="60"
        height="60"
        class="d-inline-block align-top"
      />
    </BNavbarBrand>

    <BNavbarToggle target="nav-collapse" />

    <BCollapse id="nav-collapse" is-nav>
      <BNavbarNav class="ms-auto gap-3">
        <BNavItem to="/" router exact active-class="active">Home</BNavItem>
        <BNavItem to="/about-me" router exact active-class="active"
          >Über Mich</BNavItem
        >
        <BNavItem to="/lebenslauf" router active-class="active"
          >Lebenslauf</BNavItem
        >
        <BNavItem to="/projekte" router active-class="active"
          >Projekte</BNavItem
        >
        <BNavItem to="/kontakt" router active-class="active">Kontakt</BNavItem>
        <!-- <BNavItem to="/impressum" router active-class="active"
          >Impressum</BNavItem
        >
        <BNavItem to="/datenschutz" router active-class="active"
          >Datenschutz</BNavItem
        > -->
      </BNavbarNav>
    </BCollapse>
  </BNavbar>
</template>
<style scoped>
.custom-navbar {
  background-color: #f6f4f0;
}

:deep(.nav-link) {
  display: inline-block;
  position: relative;
  padding: 6px 8px;
}

:deep(.nav-link:hover) {
  color: white !important;
  background-color: #9f94ad !important;
  border-radius: 10px;
  transform: scale(1.05);
  transition: all 0.2s ease;
}

:deep(.nav-link.active) {
  color: #716b9b;
  font-weight: 600;
  position: relative;
}

:deep(.nav-link::after) {
  content: "";
  position: absolute;
  left: 0;
  bottom: -4px;
  width: 100%;
  height: 2px;
  background-color: #716b9b;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.2s ease;
}

:deep(.nav-link.active::after) {
  transform: scaleX(1);
}

@media (max-width: 992px) {
  :deep(.nav-link.active::after) {
    display: none;
  }

  :deep(.nav-link.active) {
    background-color: #e6e1f0;
    border-radius: 10px;
  }
}
</style>
