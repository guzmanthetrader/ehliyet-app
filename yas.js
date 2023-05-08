const form = document.getElementById('surdurucu-form');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const yas = parseInt(document.getElementById('yas').value);
  const cinsiyet = document.getElementById('cinsiyet').value;
  const ehliyet = document.getElementById('ehliyet').value;
  
  let sonuc = yas;
  
  if (cinsiyet === 'erkek') {
    sonuc *= 4;
  } else if (cinsiyet === 'kadin') {
    sonuc *= 5;
  }
  
  if (ehliyet === 'A') {
    sonuc -= 500;
  } else if (ehliyet === 'C') {
    sonuc += 1000;
  } else if (ehliyet === 'D') {
    sonuc += 2000;
  } else if (ehliyet==="B"){
    sonuc+=1250;
  }
  
  sonuc *= 1.9;
  sonuc += ' TL';
  
  document.getElementById('sonuc').innerText = sonuc;
});
