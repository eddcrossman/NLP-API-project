async function handleSubmit(event) {
    event.preventDefault();

    // check what text was put into the form field
    let formText = document.getElementById('name').value;
    let resultText = await Client.checkMeaning(formText);
    const resultsElement = document.getElementById('results');

    console.log("::: Form Submitted :::");

    for (const [key,value] of Object.entries(resultText)) {
        if (typeof value === 'string'){
            console.log(`${key} - ${value}`);
            resultsElement.innerHTML += `<h2>${key}</h2>${value}`;
        }
    }
}

export { handleSubmit }