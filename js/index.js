const menu = document.getElementById('menubar');
document.getElementById('iconbar').addEventListener('click',function(){
    menu.classList.toggle('open')
})

document.getElementById('menubar').addEventListener('click',function(e){
    const menus = document.getElementsByClassName('menu');
    const current = location.href;
    for(let i = 0; i< menus.length; i++){
        if(menus[i].href === current){
            menus[i].classList.add('active')
        }
        then.classList.remove('active')
        
    }
}) 