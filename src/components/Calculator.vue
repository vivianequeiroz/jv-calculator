<script setup lang="ts">
  //import { ref } from 'vue';

  //const count = ref<number>(10);
</script>

<template>
  <div class="calculator-container">
    <div class="input-numbers">399,981</div>
    <div class="buttons-operators">
      <div class="button-column">
        <div>7</div>
        <div>4</div>
        <div>1</div>
        <div>,</div>
      </div>
      <div class="button-column">
        <div>8</div>
        <div>5</div>
        <div>2</div>
        <div>0</div>
      </div>
      <div class="button-column">
        <div>9</div>
        <div>6</div>
        <div>3</div>
        <div>/</div>
      </div>
      <div class="button-column">
        <div>DEL</div>
        <div>+</div>
        <div>-</div>
        <div>x</div>
      </div>
    </div>
    <div class="buttons-controllers">
      <div class="reset">RESET</div>
      <div class="result">=</div>
    </div>
  </div>
</template>

<style scoped>
  a {
    color: #42b983;
  }
</style>
