const APP_BASE_URL = 'http://localhost:8081';

async function getAPIKey() {
    const result = await fetch(`${APP_BASE_URL}/getMeaningAPIKey`);

   try {
        let data  = await result.json()
        return data.key;

    } catch(error) {
        console.log('getAPIKey() error', error);
    }
}

async function checkMeaning(inputText) {
    const url = 'https://api.meaningcloud.com/sentiment-2.1';
    let formData = new FormData();
    const meaningAPIKey = await getAPIKey();

    formData.append("key", meaningAPIKey);
    formData.append("lang", "en");
    formData.append("txt", inputText);

    const response = await fetch(`${url}`, {
        method: 'POST',
        body: formData
    })

    try {
        const newData = await response.json();
        return newData;

    } catch(error) {
        console.log(error);
    }
}

export { checkMeaning }