import * as readline from 'readline';

// operadores e função calculo
class Calculator {
  add(x: number, y: number): number {
    return x + y;
  }

  subtract(x: number, y: number): number {
    return x - y;
  }

  multiply(x: number, y: number): number {
    return x * y;
  }

  divide(x: number, y: number): number {
    if (y === 0) {
      throw new Error("Division by zero is not allowed");
    }
    return x / y;
  }
}

const calculator = new Calculator();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// plot to do
function performCalculation() {
  rl.question("Enter the first number: ", (xStr) => {
    const x = parseFloat(xStr);

    rl.question("Enter the second number: ", (yStr) => {
      const y = parseFloat(yStr);

      console.log(`Select operation:`);
      console.log(`1. Add`);
      console.log(`2. Subtract`);
      console.log(`3. Multiply`);
      console.log(`4. Divide`);

      rl.question("Enter the operation number (1/2/3/4): ", (operationStr) => {
        const operation = parseInt(operationStr);

        let result: number;

        // selecting the operator
        switch (operation) {
          case 1:
            result = calculator.add(x, y);
            break;
          case 2:
            result = calculator.subtract(x, y);
            break;
          case 3:
            result = calculator.multiply(x, y);
            break;
          case 4:
            result = calculator.divide(x, y);
            break;
          default:
            console.log("Invalid operation selection.");
            rl.close();
            return;
        }

        console.log(`Result: ${result}`);
        rl.close();
      });
    });
  });
}

performCalculation();
