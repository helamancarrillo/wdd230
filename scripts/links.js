

const baseURL = " https://helamancarrillo.github.io/wdd230/";

const linksURL = "https://helamancarrillo.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data.weeks);
  }
  
function displayLinks(weeks) {
    const ulinks = document.querySelector("#bullet");

    weeks.forEach(week => {
        let li = document.createElement("li");
        li.textContent = week.week + ": "; 

        week.links.forEach((link, index) => {
            let a = document.createElement("a");
            a.setAttribute("href",link.url);
            a.setAttribute("target", "_blank");
            a.textContent = link.title;
            li.appendChild(a); 

            if (index < week.links.length - 1) {
                let separator = document.createTextNode(" | ");
                li.appendChild(separator);
            }
        });
        ulinks.appendChild(li);
    });
}

getLinks();