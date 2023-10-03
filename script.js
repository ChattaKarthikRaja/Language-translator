const Languages = {
    "am": "Amharic",
    "ar": "Arabic",
    "be": "Bielarus",
    "bem": "Bemba",
    "bi-": "Bislama",
    "bjs": "Bajan",
    "bn": "Bengali",
    "bo": "Tibetan",
    "br": "Breton",
    "bs": "Bosnian",
    "ca": "Catalan",
    "cop": "Coptic",
    "cs": "Czech",
    "cy": "Welsh",
    "da": "Danish",
    "dz": "Dzongkha",
    "de": "German",
    "dv": "Maldivian",
    "el": "Greek",
    "en": "English",
    "es": "Spanish",
    "et": "Estonian",
    "eu": "Basque",
    "fa": "Persian",
    "fi": "Finnish",
    "fn": "Fanagalo",
    "fo": "Faroese",
    "fr": "French",
    "gl": "Galician",
    "gu": "Gujarati",
    "ha": "Hausa",
    "he": "Hebrew",
    "hi": "Hindi",
    "hr": "Croatian",
    "hu": "Hungarian",
    "id": "Indonesian",
    "is": "Icelandic",
    "it": "Italian",
    "ja": "Japanese",
    "kk": "Kazakh",
    "km": "Khmer",
    "kn": "Kannada",
    "ko": "Korean",
    "ku": "Kurdish",
    "ky": "Kyrgyz",
    "la": "Latin",
    "lo": "Lao",
    "lv": "Latvian",
    "men": "Mende",
    "mg": "Malagasy",
    "mi": "Maori",
    "ms": "Malay",
    "mt": "Maltese",
    "my": "Burmese",
    "ne": "Nepali",
    "niu-": "Niuean",
    "nl": "Dutch",
    "no": "Norwegian",
    "ny": "Nyanja",
    "ur": "Pakistani",
    "pau": "Palauan",
    "pa": "Panjabi",
    "ps": "Pashto",
    "pis": "Pijin",
    "pl": "Polish",
    "pt": "Portuguese",
    "rn": "Kirundi",
    "ro": "Romanian",
    "ru": "Russian",
    "sg": "Sango",
    "si": "Sinhala",
    "sk": "Slovak",
    "sm": "Samoan",
    "sn-": "Shona",
    "so": "Somali",
    "sq": "Albanian",
    "sr": "Serbian",
    "sv": "Swedish",
    "sw": "Swahili",
    "ta": "Tamil",
    "te": "Telugu",
    "tet": "Tetum",
    "tg": "Tajik",
    "th": "Thai",
    "ti": "Tigrinya",
    "tk": "Turkmen",
    "tl": "Tagalog",
    "tn": "Tswana",
    "to": "Tongan",
    "tr": "Turkish",
    "uk": "Ukrainian",
    "uz": "Uzbek",
    "vi": "Vietnamese",
    "wo": "Wolof",
    "xh": "Xhosa",
    "yi": "Yiddish",
    "zu": "Zulu"
}

// Language Selection
const source_text = document.querySelector(".source_text"),
dest_text = document.querySelector(".dest_text")
optionselect = document.querySelectorAll("select")
excngicon = document.querySelector(".double-arrow-icon")
btn_to_translate = document.querySelector("button");
icons = document.querySelectorAll(".row i");


optionselect.forEach((tag, id) => {
    for (const country_code in Languages) {
    let selectedlang;
    if(id == 0 && country_code == "en-GB") {
        selectedlang = "selected";
    } else if(id == 1 && country_code == "hi-INDIA") {
        selectedlang = "selected";
    }
    let selectoption = `<option value="${country_code}" ${selectedlang}>${Languages[country_code]}</option>`;
    tag.insertAdjacentHTML("beforeend", selectoption);
    }
});


const call =  async (input,from,to) => {
    console.log(input,from,to)
    const url = 'https://text-translator2.p.rapidapi.com/translate';
    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'X-RapidAPI-Key': '17d688c8c3mshe5f0e37f46d9d78p14f7d1jsn14d90cbe60e3',
            'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
        },
        body: new URLSearchParams({
            source_language: from,
            target_language: to,
            text: input
        })
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json()
        document.getElementById('target_text').value = result.data.translatedText
    } catch (error) {
        console.error(error);
    }
}

const trans_text = () => {
    let input = document.getElementById('text_input').value
    let from = document.getElementById('from_lang').value
    let to = document.getElementById('to_lang').value
    console.log(input,from,to)
    call(input,from,to)
}
 

var text = document.getElementById("text_input"),
convertspeech = document.getElementById("from_source"),
count = 2;

convertspeech.addEventListener('click' ,function(){
    if(!speechSynthesis.speaking || speechSynthesis.pause()){
        textText = text.value;
        var speechtext = new SpeechSynthesisUtterance();
        var voices = speechSynthesis.getVoices();
        speechtext.voice = voices[2];
        speechtext.text = textText;
        speechtext.lang = 'en-US';
        speechSynthesis.speak(speechtext)
    }
    if(count == 1){
        speechSynthesis.resume();
        setTimeout(function(){
            count = 2;
        },3000)
    }else{
        speechSynthesis.paused;
        count = 1;
    }
    setInterval(function(){
        if(!speechSynthesis.speaking && count == 2){
            count = 1
        }
    },100)
})

let clearbtn = document.querySelector("#clear_1");
let inputs = document.querySelectorAll("textarea");

clearbtn.addEventListener('click', () => {
    inputs.forEach(textarea => textarea.value='');
});

let clearbtn_2 = document.querySelector("#clear_2");
let input2 = document.querySelectorAll("textarea");

clearbtn_2.addEventListener('click', () => {
    input2.forEach(textarea => textarea.value='');
});