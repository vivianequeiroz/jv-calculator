<script setup lang="ts">
  //import { ref } from 'vue';

  //const count = ref<number>(10);
</script>

<template>
  <form class="calculator-container">
    <input class="input-numbers" value="399,981" />
    <div class="buttons-operators">
      <div class="button-column">
        <button>7</button>
        <button>4</button>
        <button>1</button>
        <button>,</button>
      </div>
      <div class="button-column">
        <button>8</button>
        <button>5</button>
        <button>2</button>
        <button>0</button>
      </div>
      <div class="button-column">
        <button>9</button>
        <button>6</button>
        <button>3</button>
        <button>/</button>
      </div>
      <div class="button-column">
        <button>DEL</button>
        <button>+</button>
        <button>-</button>
        <button>x</button>
      </div>
    </div>
    <div class="buttons-controllers">
      <button class="reset">RESET</button>
      <button type="submit" class="result">=</button>
    </div>
  </form>
</template>

<style scoped>
  .calculator-container {
    width: 700px;
  }
  a {
    color: #42b983;
  }
</style>
