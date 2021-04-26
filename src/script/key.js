const pulm = document.querySelector(".pulm");
const datam = document.querySelector(".datam");
const konfm = document.querySelector(".konfm");
const negara = document.querySelector(".negara");
const button = document.querySelector("#tombolCari");
const elemen = document.querySelector("#elemenCari");

function key() {
  const searching = () => {
    fetch(`https://covid19.mathdro.id/api/countries/${elemen.value}`)
    .then(respon =>{
      return respon.json();
    })
    .then(rjson => {
      pulm.innerHTML = `
            <h3>${rjson.recovered.value} Jiwa</h3>
            `;
          konfm.innerHTML = `
            <h3>${rjson.confirmed.value} Jiwa</h3>
            `;
          datam.innerHTML = `
            <h3>${rjson.deaths.value} Jiwa</h3>
            `;
          negara.innerHTML =`
            <h2>${elemen.value.toUpperCase()}</h2>
            <br>
            <h3> Last Update : ${rjson.lastUpdate}</h3>
            `;
    })
    .catch(() => {
      pulm.innerHTML = `
            <h3>Null</h3>
            `;
          konfm.innerHTML = `
            <h3>Null</h3>
            `;
          datam.innerHTML = `
            <h3>Null</h3>
            `;
      negara.innerHTML = `<h1 style="background: #9c2b17; padding:10px; border: 20px solid #9c2b17;">Country ${elemen.value.toUpperCase()} is not found</h1>`;
    })
  };
  button.addEventListener('click', function(e) {
    searching();
  })
}

key();