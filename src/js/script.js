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