// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const like = document.querySelectorAll(".like-glyph")
const hiddenClass = document.getElementById("modal")

like.forEach(i => {
  i.addEventListener("click", handleLike)
})

function handleLike(e){
  const heart = e.target
  console.log(heart)
  mimicServerCall()
    .then((message)=>{
      console.log(message)
      hiddenClass.innerText = message
      hiddenClass.classList.remove("hidden")
      setTimeout(()=>{hiddenClass.classList.add("hidden")}, 3000)

      if(heart.innerText === EMPTY_HEART){
        heart.innerText = FULL_HEART
        heart.classList.add("activated-heart")
      }else if(heart.innerText === FULL_HEART){
        heart.innerText = EMPTY_HEART
        heart.classList.remove("activated-heart")
      }
    })
    .catch((error)=>{
       console.error(error);
       console.log("error") 
    })
    // e.preventdefault()
    // console.log(e.target.value)
    // console.log("hi")
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
