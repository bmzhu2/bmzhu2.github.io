document.addEventListener("DOMContentLoaded", () => {
  let thumbnails = Array.from(document.getElementsByClassName("thumbnail"));

  document.getElementById('modal').addEventListener("click", () => {
    closeModal();
  })

  document.getElementById('modal-child').addEventListener("click", e => {
    e.stopPropagation();
  })

  thumbnails.forEach((thumb, index) => {
    thumb.addEventListener("click", e => {
      showModal(index)
    })
  })
})

const showModal = index => {
  document.getElementById('modal').classList.toggle('hidden')

  const features = document.createElement('ul')
  features.classList.add('modal-features')
  const feat1 = document.createElement('li')
  const feat2 = document.createElement('li')
  const feat3 = document.createElement('li')
  const feat4 = document.createElement('li')
  const feat5 = document.createElement('li')

  switch (index) {
    case 0:
      document.getElementById('modal-name').innerText = 'StrifeCloud'
      document.getElementById('modal-intro').innerText = 'StrifeCloud is a pixel perfect clone of SoundCloud, the popular music streaming and sharing app, with a Final Fantasy theme. It retains most core features of the original app. Features include:'
      document.getElementById('modal-live-link').href = 'https://strife-cloud.herokuapp.com'
      document.getElementById('modal-github-link').href = 'https://github.com/bmzhu2/StrifeCloud'
      document.getElementById('modal-preview').src = 'images/spellcast-large.gif'
      
      feat1.innerText = 'User authentication with secure passwords using BCrypt hashing and salting'
      features.appendChild(feat1);
      feat2.innerText = 'Music player with standard controls, seekable progress bar, and slideable volume'
      features.appendChild(feat2);
      feat3.innerText = 'Upload, edit, delete, view your own songs'
      features.appendChild(feat3);
      feat4.innerText = 'Leave comments on other users\' songs'
      features.appendChild(feat4);
      feat5.innerText = 'Set a profile picture and view other users\' profiles along with their uploaded songs'
      features.appendChild(feat5);
      break;
    case 1:
      document.getElementById('modal-name').innerText = 'Pokenalysis'
      document.getElementById('modal-intro').innerText = 'Pokenalysis provides a social way to build, share, and analyze Pokemon teams. Features include:'
      document.getElementById('modal-live-link').href = 'https://pokenalysis.herokuapp.com'
      document.getElementById('modal-github-link').href = 'https://github.com/bmzhu2/Pokenalysis'

      feat1.innerText = 'User authentication with secure passwords using BCrypt hashing and salting'
      features.appendChild(feat1);
      feat2.innerText = 'Create teams from a selection of all Pokemon ever released'
      features.appendChild(feat2);
      feat3.innerText = 'Customize the moves, ability, and item of each Pokemon on your team'
      features.appendChild(feat3);
      feat4.innerText = 'View analysis on the strengths and weaknesses of your team'
      features.appendChild(feat4);
      feat5.innerText = 'Like or comment on other users\' teams'
      features.appendChild(feat5);
      break;
    case 2:
      document.getElementById('modal-name').innerText = 'Elemental Invoker'
      document.getElementById('modal-intro').innerText = 'Elemental Invoker is a puzzle and board game where you match up elemental orbs and cast devastating spells. Features include:'
      document.getElementById('modal-live-link').href = 'https://bmzhu2.github.io/Elemental-Invoker'
      document.getElementById('modal-github-link').href = 'https://github.com/bmzhu2/Elemental-Invoker'
      document.getElementById('modal-preview').src = 'images/spellcast-large.gif'

      feat1.innerText = 'Slide pieces on the board to create formations'
      features.appendChild(feat1);
      feat2.innerText = 'Drag and drop spells from the grimoire on the right onto the board to cast spells'
      features.appendChild(feat2);
      feat3.innerText = 'Keep track of your points and combo at the top'
      features.appendChild(feat3);
      break;
    default:
      break;
  }

  document.getElementById('modal-body').appendChild(features);
}

const closeModal = () => {
  document.getElementById('modal').classList.toggle('hidden')

  const features = document.getElementsByClassName('modal-features')[0]
  features.parentNode.removeChild(features);
}