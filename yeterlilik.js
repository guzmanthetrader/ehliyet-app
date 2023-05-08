const form = document.querySelector('form');
const resultContainer = document.querySelector('.result-container');
const ageInput = document.getElementById('age');
const citizenshipPointsInput = document.getElementById('citizenship-points');
const licenseTypeSelect = document.getElementById('license-type');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const age = parseInt(ageInput.value);
  const citizenshipPoints = parseInt(citizenshipPointsInput.value);
  const licenseType = licenseTypeSelect.value;

  if (isNaN(age) || isNaN(citizenshipPoints)) {
    resultContainer.innerHTML = '<p>Lütfen geçerli bir yaş ve vatandaşlık puanı girin.</p>';
    return;
  }

  if (age < 18 || citizenshipPoints < 4 || citizenshipPoints > 10) {
    resultContainer.innerHTML = '<p>Yaşınız minimum 18, vatandaşlık puanınız minimum 4 ve maksimum 10 olmalıdır.</p>';
    return;
  }

  const result = (age * 0.3) + (citizenshipPoints * 0.7);

  if (result > 4) {
    resultContainer.innerHTML = `<p>Tebrikler, ${licenseType} alabilirsiniz.</p>`;
  } else {
    resultContainer.innerHTML = '<p>Maalesef, ehliyet almak için yeterli puanınız yok.</p>';
  }
});
