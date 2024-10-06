<template>
  <NavBar />
  <main class="min-h-screen">

    <!-- Jogos em destaque -->

    <section class="py-8 px-0 max-w-7xl mx-auto">
      <h2 class="text-center my-8 mx-0 text-4xl">Jogos em destaque</h2>
      <div class="flex flex-col items-center flex-wrap justify-around gap-4 lg:flex-row">
        <p v-if="featuredGames.length === 0">Carregando...</p>
        <GameCard
          v-for="game in featuredGames"
          :key="game.id"
          :title="game.title"
          :price="game.price"  
          :img="game.img"
        />
      </div>
    </section>

    <!-- Jogos populares -->

    <section class="py-8 px-0 max-w-7xl mx-auto">
      <h2 class="text-center my-8 mx-0 text-4xl">Jogos populares</h2>
      <div class="flex flex-col items-center flex-wrap justify-around gap-4 lg:flex-row">
        <p v-if="popularGames.length === 0">Carregando...</p>
        <GameCard
          v-for="game in popularGames"
          :key="game.id"
          :title="game.title"
          :price="game.price"  
          :img="game.img"
        />
      </div>
    </section>
  </main>
  <Footer />
</template>

<script setup lang="ts">
interface Game {
  id: number;
  title: string;
  price: number;
  img: string;
}

const featuredGames = ref<Game[]>([])
const popularGames = ref<Game[]>([])

onMounted(() => {
  fetch('http://localhost:3000/api/games')
    .then(response => response.json())
    .then(data => {
      featuredGames.value = data.featuredGames
      popularGames.value = data.popularGames
    })
})
</script>