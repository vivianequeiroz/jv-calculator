<script setup lang="ts">
  import { ref, computed } from 'vue';

  const expression = ref<string>('');

  const isEmptyExpression = computed(() => expression.value.length === 0);

  const expressionSymbols = ['+', '-', 'x', '/', ','];

  function clearExpression() {
    expression.value = '';
  }

  function removeLastCharFromExpression() {
    expression.value = Array.from(expression.value).slice(0, -1).join('');
  }

  function appendValueIntoExpression(value: string) {
    const candidateText = value;

    const lastValue = expression.value.slice(-1);
    const isCandidateRepeatSymbol =
      expressionSymbols.includes(lastValue) &&
      expressionSymbols.includes(candidateText);

    const validExpressionPattern = /^(((\d+)|-|\+|x|\/|(?:x)|(,))+)$/g;
    const isValidExpression =
      validExpressionPattern.test(candidateText) && !isCandidateRepeatSymbol;

    const invalidSymbolsAsFirstValue = ['x', '/'];
    const isValidFirstValue =
      isValidExpression && !invalidSymbolsAsFirstValue.includes(candidateText);

    if (isEmptyExpression.value) {
      if (isValidFirstValue) {
        expression.value += candidateText;
      }
      return;
    }

    if (isValidExpression) {
      expression.value += candidateText;
      return;
    }
  }

  function addExpressionValue(buttonValue: string) {
    appendValueIntoExpression(buttonValue);
  }

  function handleInput(event: KeyboardEvent) {
    appendValueIntoExpression(event.key);
  }

  type MathExpressionSymbols = 'x' | '/' | '+' | '-';

  function getOperationBySymbol(symbol: MathExpressionSymbols) {
    type MathOperation = (a: number, b: number) => number;

    const multi: MathOperation = (a, b) => a * b;
    const divide: MathOperation = (a, b) => a / b;
    const sum: MathOperation = (a, b) => a + b;
    const subtract: MathOperation = (a, b) => a - b;

    const mathOperationBySymbol: Record<MathExpressionSymbols, MathOperation> =
      {
        x: multi,
        '/': divide,
        '+': sum,
        '-': subtract,
      };

    return mathOperationBySymbol[symbol];
  }

  function calculate() {
    const satinizedExpression = expression.value
      .replace(/,/, '.')
      .replace(/,/, '');

    const foundFirstSymbol = Array.from(satinizedExpression).find((symbol) =>
      expressionSymbols.includes(symbol),
    );

    const mathOperate = getOperationBySymbol(
      foundFirstSymbol as MathExpressionSymbols,
    );

    const [firstNumber, secondNumber] = satinizedExpression.split(
      foundFirstSymbol as MathExpressionSymbols,
    );

    const result = mathOperate(Number(firstNumber), Number(secondNumber));

    expression.value = result.toString();
  }
</script>

<template>
  <pre style="color: #fff">{{ expression }}</pre>
  <form class="calculator-container" @submit.prevent="calculate">
    <input
      class="input-numbers"
      :value="expression"
      @keydown.prevent="handleInput"
    />
    <div class="buttons">
      <div class="buttons-operators">
        <div class="button-column">
          <button type="button" class="button" @click="addExpressionValue('7')">
            7
          </button>
          <button type="button" class="button" @click="addExpressionValue('4')">
            4
          </button>
          <button type="button" class="button" @click="addExpressionValue('1')">
            1
          </button>
          <button type="button" class="button" @click="addExpressionValue(',')">
            ,
          </button>
        </div>
        <div class="button-column">
          <button type="button" class="button" @click="addExpressionValue('8')">
            8
          </button>
          <button type="button" class="button" @click="addExpressionValue('5')">
            5
          </button>
          <button type="button" class="button" @click="addExpressionValue('2')">
            2
          </button>
          <button type="button" class="button" @click="addExpressionValue('0')">
            0
          </button>
        </div>
        <div class="button-column">
          <button type="button" class="button" @click="addExpressionValue('9')">
            9
          </button>
          <button type="button" class="button" @click="addExpressionValue('6')">
            6
          </button>
          <button type="button" class="button" @click="addExpressionValue('3')">
            3
          </button>
          <button
            class="button"
            :disabled="isEmptyExpression"
            type="button"
            @click="addExpressionValue('/')"
          >
            /
          </button>
        </div>
        <div class="button-column">
          <button class="button del" @click="removeLastCharFromExpression">
            DEL
          </button>
          <button class="button" type="button" @click="addExpressionValue('+')">
            +
          </button>
          <button class="button" type="button" @click="addExpressionValue('-')">
            -
          </button>
          <button
            class="button"
            :disabled="isEmptyExpression"
            type="button"
            @click="addExpressionValue('x')"
          >
            x
          </button>
        </div>
      </div>
      <div class="button-controllers">
        <button type="button" class="reset" @click="clearExpression">
          RESET
        </button>
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

  @media (max-width: 600px) {
    .calculator-container,
    .input-numbers {
      width: 100%;
      min-width: 12.5rem;
    }
  }
</style>
