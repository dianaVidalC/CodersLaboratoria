var coders=[{ruta:"anais-araya .jpg", promocion:"4-chile"},
              {ruta:"andrea-miranda.jpg", promocion:"4-chile"},
              {ruta:"berenisse-ríos.jpg", promocion:"4-chile"},
              {ruta:"caterina-da-silva.jpg", promocion:"4-chile"},
              {ruta:"daniela-sanchez.jpg", promocion:"4-chile"},
              {ruta:"francisca-ojeda.jpg",promocion:"4-chile"},
              {ruta:"katerine-sandoval.jpg",promocion:"4-chile"},
              {ruta:"andrea-cabrera.jpg",promocion:"5-lima"},
              {ruta:"ariadna-izaguirre.jpg",promocion:"5-lima"},
              {ruta:"carito-juarez.jpg",promocion:"5-lima"},
              {ruta:"cristy-castro.jpg",promocion:"5-lima"},
              {ruta:"karol-orrillo.jpg",promocion:"5-lima"},
              {ruta:"paola-ortiz.jpg",promocion:"5-lima"},
              {ruta:"teresa-lara.jpg",promocion:"5-lima"},
              {ruta:"arantza-burga.jpg",promocion:"6-lima"},
              {ruta:"daguiana-revoredo.jpg",promocion:"6-lima"},
              {ruta:"elizabeth-condori.jpg",promocion:"6-lima"},
              {ruta:"grecia-rayme.jpg",promocion:"6-lima"},
              {ruta:"janine-vega.jpg",promocion:"6-lima"},
              {ruta:"michelle-more.jpg",promocion:"6-lima"},
              {ruta:"mishel-velasquez.jpg",promocion:"6-lima"},
              {ruta:"rosario-felix.jpg",promocion:"6-lima"}];

function promociones(array,seleccion){
  var galeria=document.getElementById("mostrar-imagenes");
  var dfm=document.createDocumentFragment();
  array.forEach(function(elemento){
    if(elemento.promocion==seleccion){
      var divContenedor=document.createElement("div");
        var imagenes=document.createElement("img");
        divContenedor.setAttribute("class","filtrar-coders");
        imagenes.setAttribute("src","assets/img/" + elemento.promocion + "/" + elemento.ruta);
        divContenedor.appendChild(imagenes);
        dfm.appendChild(divContenedor);
        galeria.appendChild(dfm);
      }
  });
}
promociones(coders,"4-chile");
promociones(coders,"5-lima");
promociones(coders,"6-lima");

var select=document.getElementById("select");
select.onchange=function(){
    if(select.value=="4-chile"){
      document.getElementById("mostrar-imagenes").innerHTML="";
      promociones(coders,"4-chile");
    }
    if(select.value=="5-lima"){
      document.getElementById("mostrar-imagenes").innerHTML="";
      promociones(coders,"5-lima");
    }
    if(select.value=="6-lima"){
      document.getElementById("mostrar-imagenes").innerHTML="";
      promociones(coders,"6-lima");
    }
};
