window.onload = function() {
  box = document.getElementById("hide-bar");
  push = document.getElementById("humberger");
  box.style.display = 'none';

  push.onclick = function() {
    box.style.display = box.style.display == 'block' ? 'none' : 'block';
  }
}