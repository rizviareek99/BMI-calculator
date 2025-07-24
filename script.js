// Tab toggle logic
const tabStandard = document.querySelector('.Stan');
const tabMetric = document.querySelector('.Met');
const standardBox = document.querySelector('.main-Stnn');
const metricBox = document.querySelector('.main-Met');

tabStandard.addEventListener('click', () => {
  tabStandard.classList.add('active');
  tabMetric.classList.remove('active');
  standardBox.classList.add('active');
  metricBox.classList.remove('active');
});

tabMetric.addEventListener('click', () => {
  tabMetric.classList.add('active');
  tabStandard.classList.remove('active');
  metricBox.classList.add('active');
  standardBox.classList.remove('active');
});

// Metric BMI Calculation
const inputKg = document.getElementById('input1');
const inputCm = document.getElementById('input2');
const calculateMetricBtn = document.getElementById('calculateButton');
const outputMetric = document.getElementById('output');

calculateMetricBtn.addEventListener('click', () => {
  const weight = parseFloat(inputKg.value);
  const heightCm = parseFloat(inputCm.value);
  if (isNaN(weight) || isNaN(heightCm) || weight <= 0 || heightCm <= 0) {
    outputMetric.value = 'Enter valid weight and height';
    return;
  }

  const heightM = heightCm / 100;
  const bmi = weight / (heightM * heightM);
  const result = bmi.toFixed(2);

  if (bmi < 18.5) {
    outputMetric.value = `You are underweight. BMI: ${result}`;
  } else if (bmi < 24.9) {
    outputMetric.value = `You have a normal weight. BMI: ${result}`;
  } else if (bmi < 29.9) {
    outputMetric.value = `You are overweight. BMI: ${result}`;
  } else if (bmi < 34.9) {
    outputMetric.value = `Obesity Class I. BMI: ${result}`;
  } else {
    outputMetric.value = `Obesity Class II or higher. BMI: ${result}`;
  }
});

// Metric Reset
const clearMetricBtn = document.getElementById('clearScreen');
clearMetricBtn.addEventListener('click', () => {
  const confirmClear = confirm("Are you sure you want to clear the data?");
  if (confirmClear) {
    inputKg.value = '';
    inputCm.value = '';
    outputMetric.value = '';
  }
});

// Standard BMI Calculation
const inputFeet = document.getElementById('inputAStandard');
const inputInches = document.getElementById('inputBStandard');
const inputPounds = document.getElementById('Pounds');
const calculateStandardBtn = document.getElementById('calculateButton1');
const outputStandard = document.getElementById('output1');

calculateStandardBtn.addEventListener('click', () => {
  const feet = parseFloat(inputFeet.value);
  const inches = parseFloat(inputInches.value);
  const pounds = parseFloat(inputPounds.value);

  if (isNaN(feet) || isNaN(inches) || isNaN(pounds) || feet < 0 || inches < 0 || pounds <= 0) {
    outputStandard.value = 'Enter valid height and weight';
    return;
  }

  const totalInches = (feet * 12) + inches;
  const bmi = (pounds * 703) / (totalInches * totalInches);
  const result = bmi.toFixed(2);

  if (bmi < 18.5) {
    outputStandard.value = `You are underweight. BMI: ${result}`;
  } else if (bmi < 24.9) {
    outputStandard.value = `You have a normal weight. BMI: ${result}`;
  } else if (bmi < 29.9) {
    outputStandard.value = `You are overweight. BMI: ${result}`;
  } else if (bmi < 34.9) {
    outputStandard.value = `Obesity Class I. BMI: ${result}`;
  } else {
    outputStandard.value = `Obesity Class II or higher. BMI: ${result}`;
  }
});

// Standard Reset
const clearStandardBtn = document.getElementById('clearScreen1');
clearStandardBtn.addEventListener('click', () => {
  const confirmClear = confirm("Are you sure you want to clear the data?");
  if (confirmClear) {
    inputFeet.value = '';
    inputInches.value = '';
    inputPounds.value = '';
    outputStandard.value = '';
  }
});
