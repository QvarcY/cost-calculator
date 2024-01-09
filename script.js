document.getElementById('calculator').addEventListener('submit', function(e) {
    e.preventDefault(); // Šī rinda novērš formas noklusējuma iesniegšanu
  
    const distance = parseFloat(document.getElementById('distance').value);
    const area = parseFloat(document.getElementById('area').value);
    const length = parseFloat(document.getElementById('length').value);
    const selectedTerrains = Array.from(document.querySelectorAll('.terrain:checked')).map(checkbox => parseFloat(checkbox.value));
  
    const distanceCost = distance * 0.35;
    const baseAreaCost = 0.040;
    let areaCost = baseAreaCost;
  
    selectedTerrains.forEach(cost => {
      areaCost += cost;
    });
  
    if (length >= 0 && length <= 0.25) {
      areaCost += 0.005;
    } else if (length > 0.25 && length <= 0.50) {
      areaCost += 0.008;
    } else if (length > 0.50 && length <= 1.00) {
      areaCost += 0.010;
    } else if (length > 1.00 && length <= 1.25) {
      areaCost += 0.015;
    } else if (length > 1.25 && length <= 1.50) {
      areaCost += 0.020;
    } else if (length > 1.50 && length <= 1.75) {
      areaCost += 0.025;
    } 
  
    const totalAreaCost = area * areaCost;
    const totalPrice = distanceCost + totalAreaCost;
  
    // Papildu informācija
    const transportCost = distanceCost;
    const pricePerM2 = totalAreaCost / area;
    const pricePerHa = (totalAreaCost / area) * 10000; // Par hektāru (1ha = 10000m2)
  
    document.getElementById('totalPrice').textContent = totalPrice.toFixed(2);
    document.getElementById('transportCost').textContent = transportCost.toFixed(2);
    document.getElementById('pricePerM2').textContent = pricePerM2.toFixed(3);
    document.getElementById('pricePerHa').textContent = pricePerHa.toFixed(2);
  });
  