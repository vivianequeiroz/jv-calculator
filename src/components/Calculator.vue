<script setup lang="ts">
  import { ref } from 'vue';

  const expression = ref<string>('');

  function clearExpression() {
    expression.value = '';
  }

  function removeLastChar() {
    expression.value = Array.from(expression.value).slice(0, -1).join('');
  }

  function addExpressionValue(buttonValue: string) {
    expression.value += buttonValue;
  }
</script>

<template>
  <pre style="color: #fff">{{ expression }}</pre>
  <form class="calculator-container" @submit.prevent="">
    <input v-model="expression" class="input-numbers" />
    <div class="buttons">
      <div class="buttons-operators">
        <div class="button-column">
          <button class="button" @click='addExpressionValue("7")'>7</button>
          <button class="button" @click='addExpressionValue("4")'>4</button>
          <button class="button" @click='addExpressionValue("1")'>1</button>
          <button class="button" @click='addExpressionValue(",")'>,</button>
        </div>
        <div class="button-column">
          <button class="button" @click='addExpressionValue("8")'>8</button>
          <button class="button" @click='addExpressionValue("5")'>5</button>
          <button class="button" @click='addExpressionValue("2")'>2</button>
          <button class="button" @click='addExpressionValue("0")'>0</button>
        </div>
        <div class="button-column">
          <button class="button" @click='addExpressionValue("9")'>9</button>
          <button class="button" @click='addExpressionValue("6")'>6</button>
          <button class="button" @click='addExpressionValue("3")'>3</button>
          <button class="button" @click='addExpressionValue("/")'>/</button>
        </div>
        <div class="button-column">
          <button class="button del" @click="removeLastChar">DEL</button>
          <button class="button" @click='addExpressionValue("+")'>+</button>
          <button class="button" @click='addExpressionValue("-")'>-</button>
          <button class="button" @click='addExpressionValue("x")'>x</button>
        </div>
      </div>
      <div class="button-controllers">
        <button class="reset" @click="clearExpression">RESET</button>
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

  .input-numbers,
  .buttons {
    flex: 1;
    background: var(--shape);
    border-radius: 0.25rem;
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
    grid-gap: 0.7rem;

    font-size: 1.8rem;
  }

  .button-column {
    display: flex;
    gap: 1rem;
    flex-direction: column;
    width: 100%;
  }

  .buttons-operators,
  .button-controllers {
    display: flex;
    gap: 1rem;
  }

  .button {
    height: 3rem;

    font-size: 1.2rem;
    font-weight: bold;
    color: var(--primary);

    background: var(--button-background);
    border: 0;
    border-radius: 0.5rem;
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
    border-radius: 0.5rem;
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
