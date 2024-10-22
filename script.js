
function ShowHide(id) {
  const divContainer = document.getElementById(id);
  if (divContainer.style.display === 'none' || divContainer.style.display === '') {
    divContainer.style.display = 'block';
  } else {
    divContainer.style.display = 'none';
  }
}

const btn = document.getElementById('button');

document.getElementById('form')
  .addEventListener('submit', function (event) {
    event.preventDefault();

    btn.value = 'Sending...';

    const serviceID = 'default_service';
    const templateID = 'template_nmeonha';

    emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        btn.value = 'Send Email';
        alert('Sent!');
      }, (err) => {
        btn.value = 'Send Email';
        alert(JSON.stringify(err));
      });
  });