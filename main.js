// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

let glyphs = document.querySelectorAll(".like-glyph");

for (const item of glyphs){
  item.addEventListener('click', () => {
    mimicServerCall()
    .then(res => {
      console.log(res);
      if(res === "Pretend remote server notified of action!") {
        item.classList.add('liked');
        item.textContent = FULL_HEART;
      }
    })
    .catch(err => {
      document.querySelector('#modal').classList.remove('hidden')
      setTimeout(() => {
        document.querySelector('#modal').classList.add('hidden')
      }, 3000);
    })
  })
}

for (const item of glyphs) {
  item.addEventListener('click', () => {
    if (item.classList.contains('liked')){
      item.classList.remove('liked')
      item.textContent = EMPTY_HEART;
    } else {
      item.classList.add('liked');
    }
  })
}









//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
