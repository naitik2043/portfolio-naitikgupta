function showSection(id) {
  document.querySelectorAll('.section').forEach(section => {
    section.style.display = 'none';
  });
  document.getElementById(id).style.display = 'block';
}

window.onload = () => {
  showSection('home');

  const typingTexts = [
    "Frontend Developer 💻",
    "DSA Enthusiast ⚔️",
    "Creative Coder ✨"
  ];
  let index = 0, charIndex = 0;
  const typingEl = document.getElementById("typing");

  function type() {
    if (charIndex < typingTexts[index].length) {
      typingEl.textContent += typingTexts[index].charAt(charIndex++);
      setTimeout(type, 100);
    } else {
      setTimeout(() => {
        typingEl.textContent = "";
        charIndex = 0;
        index = (index + 1) % typingTexts.length;
        type();
      }, 2000);
    }
  }

  type();
};
