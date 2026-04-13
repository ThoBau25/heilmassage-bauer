<script setup>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
</script>

<template>
    <div class="layout">
    <Navbar />
    <main class="content"> 
        <slot />
    </main>
    <Footer />
    </div>  

</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Noto+Sans:ital,wght@0,100..900;1,100..900&family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&display=swap');

.layout {
    background-color: #9F94AD;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    color: white;
}
.content {
    flex: 1;
}
</style>