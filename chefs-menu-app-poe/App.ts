// 🌍 Global variable
let numbers: number[] = [10, 20, 30, 40, 50];

// ✅ Function to calculate total using a for loop
function calculateTotal(arr: number[]): number {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

// ✅ Function to find the average
function calculateAverage(): number {
  const total = calculateTotal(numbers);
  return total / numbers.length;
}

// 🧪 Display results
console.log('Numbers:', numbers);
console.log('Total:', calculateTotal(numbers));
console.log('Average:', calculateAverage());