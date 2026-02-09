async function haalStudentenOp() {
    const response = await fetch('studenten.json')
    const data = await response.json()
    const studenten = data.studenten
    
    // Selecteer de <ul> in de HTML
    const ulElement = document.querySelector('ul')

    // Loop door elke rij in de JSON-data en maak een <li> voor elk item
    studenten.forEach(student => {
      const liElement = document.createElement('li')
      liElement.textContent = student.naam // Aanpassen op basis van de structuur van je JSON-data

      // Voeg het <li>-element toe aan de <ul>
      ulElement.appendChild(liElement)
    });
}

haalStudentenOp()