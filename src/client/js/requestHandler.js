const tempKey = '023740149d823e40e4fab4d916c4b828';
const testText = 'You know doctor is supposed to be such a prestigious occupation. But it’s really like one of the only jobs where you have to have your diploma right up there on the wall. It makes them seem so insecure, doesn’t it? "I really am a doctor you know. You think I’m not, just check it out." I don’t know why they need these little bits of psychological leverage over us all the time. "Go in that little room, take your pants off, wait 15 minutes, and I’ll give you my opinion." After that, anyone that comes in with pants on seems like they know what they’re talking about. In any difference of opinion, pants always beats no-pants.'

async function meaningTest() {
    console.log('meaningTest called');

    const url = 'https://api.meaningcloud.com/topics-2.0';
    let formData = new FormData();
    // formData = {
    //     key: tempKey,
    //     lang: "EN",
    //     txt: "HELLO THIS IS THE TEXT TO TEST"
    // };

    formData.append("key", tempKey);
    formData.append("lang", "en");
    formData.append("txt", testText);

    console.log(formData);

    const response = await fetch(`${url}`, {
        method: 'POST',
        // headers: {
        //     'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
        //     'Content-Type': 'multipart/form-data'
        // },
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

export { meaningTest }