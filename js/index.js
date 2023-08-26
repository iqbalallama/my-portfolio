const menu = document.getElementById('menubar');
document.getElementById('iconbar').addEventListener('click',function(){
    menu.classList.toggle('open')
})

document.getElementById('menubar').addEventListener('click',function(e){
    const menus = document.querySelectorAll('a');
    for(let i = 0; i< menus.length; i++){
        if(menus[i] === e.target){
            menus[i].classList.add('active')
        }
        else{
            menus[i].classList.remove('active')
        }
        
    }
}) 