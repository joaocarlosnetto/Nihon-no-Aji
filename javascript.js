function aparecerMenu(){
    let menu = document.getElementById('menu');
    if(menu.style.display == 'block'){
        menu.style.display = 'none';
        menu.style.animation = 'go-back 0.4s'
    } else{
        menu.style.display = 'block';
        menu.style.animation = 'go-back 0.4s'
 
    
    }
}