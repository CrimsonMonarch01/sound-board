var HohohoSound = document.getElementById('HohohoSound');
var MetalJinglesSound = document.getElementById('MetalJingles');
var AllIwantSound = document.getElementById('AllIwantSound');
var PrichazejiSound = document.getElementById('PrichazejiSound');
var Allsounds = [HohohoSound, MetalJinglesSound, AllIwantSound, PrichazejiSound];
function playJingle(event) {
    Allsounds.map(sound => sound.pause()) // prejde cez vsetky zvuky a pozastavi ich
    Allsounds.forEach(sound => sound.currentTime = 0); // prejde cez vsetky zvuky a nastavi ich na zaciatok
    MetalJinglesSound.play();
}
function playHohoho(event) {
    Allsounds.map(sound => sound.pause());
    Allsounds.forEach(sound => sound.currentTime = 0);
    HohohoSound.play();
}
function playAllIwant(event) {
    Allsounds.map(sound => sound.pause());
    Allsounds.forEach(sound => sound.currentTime = 0);
    AllIwantSound.play();
}
function playPrichazeji(event) {
    Allsounds.map(sound => sound.pause());
    Allsounds.forEach(sound => sound.currentTime = 0);
    PrichazejiSound.play();
}





/*buttons.forEach(button => {
button.addEventListener('click', () => {
const soundFile = button.getIdata-sound');h
const audio = new Audio(soundFile);
audio.play();
});
}); 
*/