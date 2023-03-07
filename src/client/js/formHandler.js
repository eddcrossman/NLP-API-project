async function handleSubmit(event) {
    event.preventDefault();

    const formText = document.getElementById('name').value;
    const resultsElement = document.getElementById('results');
    resultsElement.innerHTML = "";

    try {
        if (! validateURL(formText)) {
            throw new Error('Invalid URL, please check and try again');
        }

        const resultText = await Client.checkMeaning(formText);

        for (const [key,value] of Object.entries(resultText)) {
            if (typeof value === 'string'){
                resultsElement.innerHTML += `<h2>${key}</h2>${value}`;
            }
        }
    } catch(error) {
        alert(error.message);
    }
}

function validateURL(input){
    try {
        const checkURL = new URL(input);
        return checkURL.protocol === 'http:' || checkURL.protocol === 'https:';        
    } catch (error) {
        console.log(`validateURL() ${error}`);
        return false;
    }
}

export { handleSubmit }
export { validateURL }