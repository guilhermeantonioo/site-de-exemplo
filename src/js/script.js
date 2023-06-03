
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

//sistema para trocar as classes e alterar as cores 

function toggleMode() {
    //checkbox.classList.toggle('dark');
    document.body.classList.toggle('dark')
    // if( checkbox.classList.contains('dark')){
    //     document.body.classList.add('dark')
    document.body.style.transition = '.3s'
       
    // }else{
    //     document.body.classList.remove('dark')
    //     document.body.style.transition = '.3s'
       
    // }
   
}

// salvar o mode 

localStorage.removeItem('dark');


function loadTheme(){
    const dark = localStorage.getItem('dark');
    if(dark){
        toggleMode();
    }
    if(document.body.classList.contains('dark')){
        localStorage.setItem('dark' , 1);
    }
    
}
