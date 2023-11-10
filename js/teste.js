const fileIE = document.getElementById('fileIE')

fileIE.addEventListener('change' , ()=>{
    const file = fileIE.files[0];

    const fr = new FileReader();

    fr.readAsDataURL(file);

    fr.addEventListener('load',()=>{
        const url = fr.result;
        
        localStorage.setItem('key', url);
    })
})

const botao = document.getElementById('botao')

botao.addEventListener('click', ()=>{

    window.location.href = "/historico.html";

})

