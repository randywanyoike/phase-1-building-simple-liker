// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

document.addEventListener('DOMContentLoaded', () => {
  // Like functionality
  const hearts = document.querySelectorAll('.like-glyph');
  hearts.forEach(heart => {
    heart.addEventListener('click', () => {
      if (heart.textContent === FULL_HEART) {
        // If already liked, unlike
        heart.textContent = EMPTY_HEART;
        heart.classList.remove('activated-heart');
      } else {
        // Try to like (simulate server)
        mimicServerCall()
          .then(() => {
            heart.textContent = FULL_HEART;
            heart.classList.add('activated-heart');
          })
          .catch((error) => {
            const modal = document.getElementById('modal');
            if (modal) {
              modal.classList.remove('hidden');
              const modalMsg = document.getElementById('modal-message');
              if (modalMsg) {
                modalMsg.textContent = error;
              }
              setTimeout(() => {
                modal.classList.add('hidden');
              }, 3000);
            }
          });
      }
    });
  });
});




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
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
