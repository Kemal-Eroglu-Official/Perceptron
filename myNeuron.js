class Neuron {

     constructor (input_quantity, learning_rate) {
          this.weights = new Array(input_quantity);
          this.learning_rate = learning_rate;

          for (let i = 0; i < this.weights.length; i++) {
               this.weights[i] = (random(-1, 1));
          }
     }

     train (inputs, desired) {
          let guess_value = this.guess(inputs);
          let error = desired - guess_value;

          for (let i = 0; i < this.weights.length; i++) {
               this.weights[i] += this.learning_rate * error * inputs[i];
          }
     }

     guess (inputs) {// inputs   noktanın x ve y değerleri
          let sum = 0;

          for (let index in inputs) {
               sum += inputs[index] * this.weights[index];
          }

          return this.activate(sum);
     }

     activate (sum) {
          if (sum > 0) {
               return 1;
          } 
          else {
               return -1;
          }
     }
}