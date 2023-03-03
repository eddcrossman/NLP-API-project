const testText = 'You know doctor is supposed to be such a prestigious occupation. But it’s really like one of the only jobs where you have to have your diploma right up there on the wall. It makes them seem so insecure, doesn’t it? "I really am a doctor you know. You think I’m not, just check it out." I don’t know why they need these little bits of psychological leverage over us all the time. "Go in that little room, take your pants off, wait 15 minutes, and I’ll give you my opinion." After that, anyone that comes in with pants on seems like they know what they’re talking about. In any difference of opinion, pants always beats no-pants.'

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
console.log(inputText);

    const url = 'https://api.meaningcloud.com/sentiment-2.1';
    let formData = new FormData();
    const meaningAPIKey = await getAPIKey();
    // formData = {
    //     key: tempKey,
    //     lang: "EN",
    //     txt: "HELLO THIS IS THE TEXT TO TEST"
    // };

    formData.append("key", meaningAPIKey);
    formData.append("lang", "en");
    formData.append("txt", inputText);

    const response = await fetch(`${url}`, {
        method: 'POST',
        body: formData
    })

    try {
        const newData = await response.json();
        console.log(newData);
        return newData;

    } catch(error) {
        console.log(error);
    }
}

export { checkMeaning }