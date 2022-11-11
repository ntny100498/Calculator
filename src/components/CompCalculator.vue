<template>
  <table>
    <tr>
      <td colspan="4" class="btn-dark">
        {{ current || '0' }}
      </td>
    </tr>
    <tr>
      <td @click="clear" colspan="3" class="btn-gray">AC</td>
      <td @click="compute('/')" class="btn-orange">/</td>
    </tr>
    <tr>
      <td @click="append('7')" class="btn-light">7</td>
      <td @click="append('8')" class="btn-light">8</td>
      <td @click="append('9')" class="btn-light">9</td>
      <td @click="compute('*')" class="btn-orange">*</td>
    </tr>
    <tr>
      <td @click="append('4')" class="btn-light">4</td>
      <td @click="append('5')" class="btn-light">5</td>
      <td @click="append('6')" class="btn-light">6</td>
      <td @click="compute('-')" class="btn-orange">-</td>
    </tr>
    <tr>
      <td @click="append('1')" class="btn-light">1</td>
      <td @click="append('2')" class="btn-light">2</td>
      <td @click="append('3')" class="btn-light">3</td>
      <td @click="compute('+')" class="btn-orange">+</td>
    </tr>
    <tr>
      <td @click="append('0')" colspan="2" class="btn-light">0</td>
      <td @click="dot" class="btn-light">.</td>
      <td @click="equal" class="btn-orange">=</td>
    </tr>
  </table>
</template>

<script>
export default {
  name: 'CompCalculator',
  data () {
    return {
      previous: null,
      current: '',
      operator: null,
      operation: '',
      isResult: false,
    }
  },
  methods: {
    clear () {
      this.current = '';
      this.previous = null;
      this.operator = null;
      this.operation = '';
      this.isResult = false;
    },
    dot () {
      if (this.current.indexOf('.') === -1 && this.current.length > 0) {
        this.append('.');
      }
    },
    append (number) {
      if (this.operation.length > 0) {
        this.previous = this.current;
        this.current = '';
        this.operation = '';
      }
      if (this.isResult) this.clear();
      this.current = `${this.current}${number}`;
      
    },
    compute (operation) {
      if (this.current.length > 0) {
        switch (operation) {
          case '+':
            this.operator = (a, b) => a + b;
            this.operation = '+';
            break;
          case '-':
            this.operator = (a, b) => a - b;
            this.operation = '-';
            break;
          case '*':
            this.operator = (a, b) => a * b;
            this.operation = '*';
            break;
          case '/':
            this.operator = (a, b) => a / b;
            this.operation = '/';
            break;
        }
      }
    },
    equal () {
      if (this.previous.length > 0) {
        this.current = `${this.operator(
          parseFloat(this.previous),
          parseFloat(this.current)
        )}`;
        this.previous = null;
        this.operator = null;
        this.isResult = true;
      }
    }
  }
}
</script>

<style scoped>
table, td {
  border: 1px solid #dddcd6;
}
table {
  font-weight: bold;
  font-size: 20px;
  width: 100%;
  max-width: 400px;
  margin: auto;
}
td {
  padding: 15px;
}
.btn-orange {
  background-color: #ff9500;
}
.btn-orange:active {
  background-color: #d37b00;
}
.btn-light {
  background-color: #efefef;
}
.btn-light:active {
  background-color: #dbd7d7;
}
.btn-gray {
  background-color: #ddd;
}
.btn-gray:active {
  background-color: rgb(190, 185, 185);
}
.btn-dark {
  background-color: #202;
  color: #868686;
  text-align: right;
  max-width: 350px;
  overflow: hidden;
}
</style>
