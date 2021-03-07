const menulist = document.querySelector('.menulist');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);

function show(){
    menulist.style.display='flex';
    menulist.style.top='0';
}
function close(){
    menulist.style.top = '-4000%';
}