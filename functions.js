const newsLetterButton = document.getElementById('newsletter-button');
const newsLetterSection = document.getElementById('newsletter-section');
const newsLetterEmail = document.getElementById('newsletter-email');

let sentEmail = false;

newsLetterButton.addEventListener('click', () => {
  let newParagraph = document.createElement('p');
  if (sentEmail) {
    return;
  }
  const findAlert = document.getElementById('alert');
  if (findAlert) {
    findAlert.parentElement.removeChild(findAlert);
  }
  if (!newsLetterEmail.value) {
    newParagraph.textContent = 'Il faut saisir quelque chose !';
    newParagraph.classList.add('alert-danger', 'w-100', 'p-2');
    newParagraph.setAttribute('id', 'alert');
    newsLetterSection.appendChild(newParagraph);
    return;
  }
  newParagraph.textContent = 'Adresse email envoyée !';
  newParagraph.classList.add('alert-success', 'w-100', 'p-2');
  newsLetterSection.appendChild(newParagraph);
  newsLetterSection.children[0].children[0].removeChild(newsLetterEmail);
  newsLetterSection.children[0].children[0].removeChild(newsLetterButton);
  sentEmail = true;
});