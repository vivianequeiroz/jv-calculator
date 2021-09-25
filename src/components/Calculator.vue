<script setup lang="ts">
  //import { ref } from 'vue';

  //const count = ref<number>(10);
</script>

<template>
  <form class="calculator-container">
    <input class="input-numbers" value="399,981" />
    <div class="buttons">
      <div class="buttons-operators">
        <div class="button-column">
          <button class="button">7</button>
          <button class="button">4</button>
          <button class="button">1</button>
          <button class="button">,</button>
        </div>
        <div class="button-column">
          <button class="button">8</button>
          <button class="button">5</button>
          <button class="button">2</button>
          <button class="button">0</button>
        </div>
        <div class="button-column">
          <button class="button">9</button>
          <button class="button">6</button>
          <button class="button">3</button>
          <button class="button">/</button>
        </div>
        <div class="button-column">
          <button class="button del">DEL</button>
          <button class="button">+</button>
          <button class="button">-</button>
          <button class="button">x</button>
        </div>
      </div>
      <div class="button-controllers">
        <button class="reset">RESET</button>
        <button type="submit" class="result">=</button>
      </div>
    </div>
  </form>
</template>

<style scoped>
  .calculator-container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .input-numbers, .buttons {
    flex: 1;
    background: var(--shape);
    border-radius: .25rem;
  }

  .input-numbers {
    margin-top: 2rem;
    padding: 1.5rem;
    border: none;

    color: var(--primary);
    text-align: right;
    font-size: 2rem;
    font-weight: bold;
  }

  .input-numbers:focus {
    border: var(--primary);
  }

  .buttons {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 1rem;
    padding: 1.25rem;
    grid-gap: .7rem;

    font-size: 1.8rem;
  }

  .button-column {
    display: flex;
    gap: 1rem;
    flex-direction: column;
  }

  .buttons-operators,
  .button-controllers {
    display: flex;
    gap: 1rem;
  }

  .button {
    width: 5rem;
    height: 3rem;

    font-size: 1.2rem;
    font-weight: bold;
    color: var(--primary);

    background: var(--button-background);
    border: 0;
    border-radius: .5rem;
    border-bottom: 0.3rem solid var(--action-button-background);
  }

  .button-controllers {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  .button-controllers {
    margin-top: 1rem;
  }

  .reset,
  .result {
    height: 3rem;

    font-size: 1.2rem;
    font-weight: bold;

    border: 0;
    border-radius: .5rem;
  }

  .reset,
  .del {
    color: var(--tertiary);
    background: var(--action-button-background);
    border-bottom: 0.3rem solid var(--action-button-shadow);
  }

  .result {
    background: var(--submit-button);
    border-bottom: 0.3rem solid var(--soft-submit-button);
  }
</style>
