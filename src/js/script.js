const header = document.getElementById('header');
const linkMenu = document.querySelector('.links');
const content = document.querySelector('#content');
let showSideBar = false;

function toggleSideBar(){
    showSideBar = !showSideBar;
   
    if(showSideBar){
       linkMenu.style.marginLeft = '0vw';
       content.style.filter = 'blur(2px)';
    }
    else{
        linkMenu.style.marginLeft = '-110vw';
        content.style.filter = '';
    }
}

// Bloquear o scroll
function bloquearScroll() {
    document.body.style.overflow = 'hidden';
  }
  
  // Desbloquear o scroll
  function desbloquearScroll() {
    document.body.style.overflow = 'auto';
  }

const checkbox = document.getElementById('checkbox');

checkbox.onclick = () => {
    checkbox.classList.toggle('active');
    if( checkbox.classList.contains('active')){
        document.body.classList.add('active')
        document.body.style.transition = '.3s'
        bloquearScroll()
    }else{
        document.body.classList.remove('active')
        document.body.style.transition = '.3s'
        desbloquearScroll()
    }
}