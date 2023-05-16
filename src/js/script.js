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