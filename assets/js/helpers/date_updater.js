function updateCopyrightYear() {
  var currentYear = new Date().getFullYear(); // 2024
  var copyrightElement = document.querySelector('.footer__copy');

  if (copyrightElement) {
      copyrightElement.textContent = "© " + currentYear + ", Todos los derechos reservados.";
  }
}

// No export statement for a non-module script

// Call the function if needed
updateCopyrightYear();
