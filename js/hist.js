const url = localStorage.getItem('key')

const img = new Image();
img.src = url;
document.body.appendChild(img);