"use strict"

function Info() {
    const Code = document.getElementById("select").value;
    const url = `https://restcountries.com/v2/lang/${Code}?fields=name,capital,population,flag,area,currencies,languages,timezones`;

    fetch(url)
    .then(response => response.json())
    .then(data => {
        const i = Math.floor(Math.random() * data.length);
        const country = data[i];
        const name = country.name;
        const capital = country.capital;
        const population = country.population;
        const flag = country.flag;
        const area = country.area;
        const currency = country.currencies[0]?.name ?? '';
        const language = country.languages[0]?.name ?? '';
        const timezones = country.timezones.join(", ");

        const countryDiv = document.getElementById("info");
        countryDiv.innerHTML =`
        <br>
        <h2>${name}</h2>
        <p>首都: ${capital}</p>
        <p>人口: ${population}</p>
        <p>面積: ${area}</p>
        <p>通貨: ${currency}</p>
        <p>公用語: ${language}</p>
        <p>標準時: ${timezones}</p>
        <br>
        <img src="${flag}" alt="${name}の国旗" width="100">
        `
        ;
    })
    .catch(error => console.error(error));
    
}