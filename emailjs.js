 const btn = document.getElementById('button');

document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('form');

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    btn.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_01qs4zf';

   //ojo con la public key del final
   emailjs.sendForm(serviceID, templateID, this, 'ixGZ1ahg9ReDCRNga')
    .then(() => {
      btn.value = 'Enviar correo';
      alert('Enviado!');
    }, (err) => {
      btn.value = 'Enviar correo';
      alert(JSON.stringify(err));
    });
  });
});