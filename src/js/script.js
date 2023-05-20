
const linkMenu = document.querySelector('.links');
const content = document.querySelector('#content');
let showSideBar = false;

function toggleSideBar(){
    showSideBar = !showSideBar;
   
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

function closeSideBar(){
    if(showSideBar){
        toggleSideBar()
    }
}

function bloquearRolagemTela() {
    document.body.style.overflow = 'hidden';
  }

  function desbloquearRolagemTela() {
    document.body.style.overflow = 'auto';
  }

const checkbox = document.getElementById('checkbox');

checkbox.onclick = () => {
    checkbox.classList.toggle('active');

    if( checkbox.classList.contains('active')){
        document.body.classList.add('active')
        document.body.style.transition = '.3s'
       
    }else{
        document.body.classList.remove('active')
        document.body.style.transition = '.3s'
       
    }
}