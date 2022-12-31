    window.onload = function() {
        document.getElementById('loading-icon').style.display = 'none';
    }
   // Get a reference to the form and the input field
    const form = document.getElementById('company-form');
    const input = document.getElementById('company-input');
    form.addEventListener('submit', event => {
      // Prevent the form from submitting
      event.preventDefault();
      // Get the company name from the input field
      company = input.value;
      
      fetchData(company);
    });
async function fetchData(company) {

    document.getElementById('loading-icon').style.display = 'block';

    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': 'dab869fbc4msh0a6951985072bf2p118856jsnb11dfedd3af3',
        'X-RapidAPI-Host': 'openai35.p.rapidapi.com'
      },
      body: `{"prompt":"Is ${company} Eco-Friendly? Summarize with 2 sentences or less. What is their Carbon Footprint?"}`
    };
    const res = await fetch('https://openai35.p.rapidapi.com/completions', options)
      .then(response => response.text())
      .then(text => {
        document.getElementById('loading-icon').style.display = 'none';
        // Get a reference to the element you want to update
        const element = document.getElementById('response');
        // Update the element's innerHTML with the text response
        element.innerHTML = text;
      });
  }
  
  // Call the fetchData() function with a default value for the company name