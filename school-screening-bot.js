document.getElementsByTagName("h2")[0].innerHTML = "";

document.querySelector('.outcome-content-block-with-icon__Content-l3w382-3').innerHTML = "";

document.querySelector('.button__StyledButton-sc-1hmy6jw-0').click();

document.getElementById("student").click();

const links = Array.from(document.querySelectorAll('.button__StyledButton-sc-1hmy6jw-0'));

links.forEach((link) => {
  if (link.textContent === 'No') {
    link.click();
  }
})