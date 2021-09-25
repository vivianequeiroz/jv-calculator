<script setup>
  // This starter template is using Vue 3 <script setup> SFCs
  // Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
  import Calculator from './components/Calculator.vue';
</script>

<template>
  <main class="container">
    <h1 class="title">JV Calculator</h1>
    <Calculator />
  </main>
</template>

<style>
  :root {
    --background: hsl(268, 75%, 9%);
    --shape: hsl(268, 71%, 12%);

    --primary: hsl(52, 100%, 62%);
    --secondary: hsl(198, 20%, 13%);
    --tertiary: hsl(0, 0%, 100%);

    --button-background: hsl(268, 47%, 21%);
    --button-shadow: hsl(290, 70%, 36%);

    --action-button-background: hsl(281, 89%, 26%);
    --action-button-shadow: hsl(285, 91%, 52%);

    --submit-button: hsl(176, 100%, 44%);
    --soft-submit-button: hsl(177, 92%, 70%);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width: 100%;
    height: 100%;
  }

  #app,
  .container {
    font-family: Spartan, Roboto, Arial, sans-serif;
    font-weight: 700;

    background: var(--background);
  }

  .container {
    max-width: 1440px;
    height: 100vh;

    margin: 0 auto;

    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 2rem;
  }

  .title {
    font-size: 3rem;
    color: var(--primary);
  }

  button {
    cursor: pointer;
  }
</style>
