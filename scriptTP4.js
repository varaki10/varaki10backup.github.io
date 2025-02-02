// script.js
document.getElementById('imcForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Empêcher le rechargement de la page

    // Récupérer les valeurs du formulaire
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);

    // Calculer l'IMC
    const imc = weight / (height * height);

    // Afficher le résultat
    const resultDiv = document.getElementById('result');
    let message = '';

    if (imc < 18.5) {
        message = `Votre IMC est ${imc.toFixed(2)} (Sous-poids)`;
    } else if (imc >= 18.5 && imc < 25) {
        message = `Votre IMC est ${imc.toFixed(2)} (Poids normal)`;
    } else if (imc >= 25 && imc < 30) {
        message = `Votre IMC est ${imc.toFixed(2)} (Surpoids)`;
    } else {
        message = `Votre IMC est ${imc.toFixed(2)} (Obésité)`;
    }

    resultDiv.textContent = message;
});