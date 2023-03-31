function convert() {
  const temperatureInput = document.getElementById("temperatureInput").value;
  const fromUnit = document.getElementById("fromUnit").value;
  const toUnit = document.getElementById("toUnit").value;

  if (fromUnit === "celsius" && toUnit === "fahrenheit") {
    const result = (temperatureInput * 9 / 5) + 32;
    document.getElementById("result").innerHTML = `${temperatureInput}°C = ${result}°F`;
  } else if (fromUnit === "celsius" && toUnit === "kelvin") {
    const result = parseFloat(temperatureInput) + 273.15;
    document.getElementById("result").innerHTML = `${temperatureInput}°C = ${result}K`;
  } else if (fromUnit === "fahrenheit" && toUnit === "celsius") {
    const result = (temperatureInput - 32) * 5 / 9;
    document.getElementById("result").innerHTML = `${temperatureInput}°F = ${result}°C`;
  } else if (fromUnit === "fahrenheit" && toUnit === "kelvin") {
    const result = (temperatureInput - 32) * 5 / 9 + 273.15;
    document.getElementById("result").innerHTML = `${temperatureInput}°F = ${result}K`;
  } else if (fromUnit === "kelvin" && toUnit === "celsius") {
    const result = parseFloat(temperatureInput) - 273.15;
    document.getElementById("result").innerHTML = `${temperatureInput}K = ${result}°C`;
  } else if (fromUnit === "kelvin" && toUnit === "fahrenheit") {
    const result = (temperatureInput - 273.15) * 9 / 5 + 32;
    document.getElementById("result").innerHTML = `${temperatureInput}K = ${result}°F`;
  } else {
    document.getElementById("result").innerHTML = "Please select different units to convert.";
  }
}