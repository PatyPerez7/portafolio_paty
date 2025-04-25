
function ShowHide(id) {
  const divContainer = document.getElementById(id);
  if (divContainer.style.display === 'none' || divContainer.style.display === '') {
    divContainer.style.display = 'block';
  } else {
    divContainer.style.display = 'none';
  }
}
