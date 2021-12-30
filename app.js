const textarea=document.querySelector("textarea"),
voiceList =document.querySelector("select")
speechBtn=document.querySelector("button");


function textToSpeech(text){
    let utternance= new SpeechSynthesisUtterance(text);
     speechSynthesis.speak(utternance);
}
speechBtn.addEventListener("click",e=>{
    e.preventDefault();
    if (textarea.value!=="") {
        textToSpeech(textarea.value);
    }
});