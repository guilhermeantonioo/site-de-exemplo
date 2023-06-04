
const linkMenu = document.querySelector('.links');
const content = document.querySelector('#content');
let showSideBar = false;

function toggleSideBar(){
    showSideBar = !showSideBar;

 // Abrir e fechar menu

    if(showSideBar){
       linkMenu.style.marginLeft = '0vw';
       content.style.filter = 'blur(2px)';
        bloquearRolagemTela()
    }
    else{
        linkMenu.style.marginLeft = '-110vw';
        content.style.filter = '';
        desbloquearRolagemTela()
    }
}

//fechar o menu quando houver um clique no conteudo 
function closeSideBar(){
    if(showSideBar){
        toggleSideBar()
    }
}

// Bloquear ou desbloquear rolagem de tela

function bloquearRolagemTela() {
    document.body.style.overflow = 'hidden';
  }

  function desbloquearRolagemTela() {
    document.body.style.overflow = 'auto';
  }


// O botão de toggle
const checkbox = document.getElementById('checkbox');

function saveTheme(){
  if(document.body.classList.contains('dark')){
      localStorage.setItem('tema' , 'dark');
  }else{
    localStorage.removeItem('tema' , 'dark');
  }
}

document.addEventListener('DOMContentLoaded', function() {
  // Verificar se há uma preferência de tema salva
  const temaSalvo = localStorage.getItem('tema');

  if (temaSalvo === 'dark') {
    // Aplicar o tema escuro
    document.body.classList.add('dark');
  } else {
    // Aplicar o tema claro (padrão)
    document.body.classList.remove('dark');
  }
});

//sistema para trocar as classes e alterar as cores 
function toggleMode() {
    //checkbox.classList.toggle('dark');
    document.body.classList.toggle('dark')
    // if( checkbox.classList.contains('dark')){
    //     document.body.classList.add('dark')
    document.body.style.transition = '.3s'
    saveTheme()
    // }else{
    //     document.body.classList.remove('dark')
    //     document.body.style.transition = '.3s'
       
    // }
   
}

// salvar o mode 

// localStorage.removeItem('dark');

// function LoadTheme(){
//     const darkTheme = localStorage.getItem('dark');
//     if(darkTheme){
//         toggleMode()
//     }
// }

// if(document.body.classList.contains('dark')){
//     localStorage.setItem('dark' , 1);

// }
// LoadTheme();
