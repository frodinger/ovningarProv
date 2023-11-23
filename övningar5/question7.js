// 7.1 (3p) Hämta data med fetch från denna url: https://restcountries.com/v3.1/all
// Visa följande för varje land:
// Officiellt namn
// Valuta
// bild på flagga med tillhörande alt-text

const countriesEl = document.getElementById("countries");
document.body.style.backgroundColor = "#eee";
document.body.style.fontFamily = "sans-serif";

async function getCountry() {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();

    console.log(data);

    data.forEach((country) => {
        const containerEl = document.createElement("div");

        const nameEl = document.createElement("div");
        nameEl.innerHTML = `<h1>${country.name.official}</h1>`;

        let currency = "";
        if (country.currencies) {
            const currencyArr = Object.values(country.currencies);
            currency = currencyArr[0].name;
        }
        const currencyEl = document.createElement("div");
        currencyEl.innerHTML = `<p>Currency: ${currency}</p>`;

        const flagEl = document.createElement("img");
        flagEl.src = country.flags.png;

        if (country.flags.alt != null) {
            flagEl.alt = country.flags.alt;
        } else if (country.flags.alt == null) {
            flagEl.alt = `The flag of ${country.name.common}`;
        }

        countriesEl.appendChild(containerEl);
        containerEl.appendChild(nameEl);
        containerEl.appendChild(currencyEl);
        containerEl.appendChild(flagEl);
    });
}

getCountry();

// 7.2 (3p) Gör sidan responsive:
// I desktop-vy ska varje land visas i 3 kolumner.
// I mobil-vy ska varje land visas i en kolumn med 100% width.
