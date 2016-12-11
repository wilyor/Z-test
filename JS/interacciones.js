//variable  global apra controlar el carrusel principal
var contCarrusel = 0;

document.onreadystatechange = function () {
    var menuBtn = document.getElementById("menu-responsive-btn");
    var menuResponsive = document.getElementById("menu-responsive");
    var headerSoftware = document.getElementById("hdr-software");
    var headerServices = document.getElementById("hdr-services");
    
    menuBtn.onclick = function(){
        if( menuResponsive.style.display=="block"){
            menuResponsive.style.display="none";
        }else{
            menuResponsive.style.display="block";
        }
    }
    
    //acciones de los vinculos del menú de la cabecera
   headerSoftware.onmouseover=function(){
        ocultarSubMenus();
        document.getElementById("hdr-software-subMenu").style.display="block";
    }
    headerServices.onmouseover=function(){
        ocultarSubMenus();
        document.getElementById("hdr-services-subMenu").style.display="block";
    }
     
    headerServices.onmouseout= function(){
         ocultarSubMenus();
     }
    headerSoftware.onmouseout= function(){
         ocultarSubMenus();
     }
    
    
    //acciones de las flechas del carrusel
    document.getElementById("left-arrow").onclick= function(){
         moverCarrusel("before");
     }
    document.getElementById("right-arrow").onclick= function(){
         moverCarrusel("next");
     }
    
};

    //oculta los submenus de las cabecera
    function ocultarSubMenus(){
        var subMenus = document.getElementsByClassName("submenu-superior");
        for(var i=0; i< subMenus.length;i++){
            subMenus[i].style.display ="none";
        }
    }

//funcion para cambiar la imagen que se muestra en el carrusel
    function  moverCarrusel(direccion){
        
        var imgCarrusel = document.getElementsByClassName("carrusel-item");
        if(direccion=="next"){
            if(contCarrusel<imgCarrusel.length-1){
               contCarrusel++; 
            }else{
                contCarrusel = 0;
            }
        }else{
            if(contCarrusel>0){
               contCarrusel--; 
            }else{
                contCarrusel = 2;
            }
        }
        for(var j = 0; j<imgCarrusel.length;j++){
            imgCarrusel[j].classList.remove("carrusel_visible");
            imgCarrusel[j].classList.add("carrusel_hidden");
        }      
       document.getElementById("carr_img_"+(contCarrusel+1)).classList.add("carrusel_visible");
    }