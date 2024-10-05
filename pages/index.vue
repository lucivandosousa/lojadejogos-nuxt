<template>
  <NavBar />
  <main class="min-h-screen">

    <!-- Jogos em destaque -->

    <section class="py-8 px-0 max-w-7xl mx-auto">
      <h2 class="text-center my-8 mx-0 text-4xl">Jogos em destaque</h2>
      <div class="flex flex-col items-center flex-wrap justify-around gap-4 lg:flex-row">
        <GameCard
          title="The Witcher 3"
          price="99.99"  
          img="https://via.placeholder.com/150"
        />
      </div>
    </section>

    <!-- Jogos populares -->

    <section class="py-8 px-0 max-w-7xl mx-auto">
      <h2 class="text-center my-8 mx-0 text-4xl">Jogos populares</h2>
      <div class="flex flex-col items-center flex-wrap justify-around gap-4 lg:flex-row">
        <GameCard
          title="Total War"
          price="199.99"  
          img="https://via.placeholder.com/150"
        />
      </div>
    </section>
  </main>
  <Footer />
</template>

<script setup lang="ts">
import NavBar from '@/components/NavBar/NavBar.vue'
import Footer from '@/components/Footer/Footer.vue'
import GameCard from '@/components/GameCard/GameCard.vue'
</script>