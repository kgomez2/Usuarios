
let comentarios=[];
//comentarios
fetch('https://jsonplaceholder.typicode.com/comments')
  .then((response) => response.json())
  .then((json) => {
  //  alert(JSON.stringify(json));
    comentarios=json;
   // alert("Total de comentarios="+comentarios.length);

  });
//

function ocultar(id)
{
  const comentario=document.getElementById('b'+id);
  comentario.style.display="none";
}
function mostrar(id)
{
  const comentario=document.getElementById('b'+id);
  comentario.style.display="block";
}
function lcomentarios(id)
{
  html='<div id="b'+id+'"><p><b>Comentarios:</b></p>';
  let c=1;
for(elemento of comentarios)
{
if(elemento.postId==id){
html+='<p><b>'+c+':</b>'+elemento.body+'</p>';
c=c+1;
}
}
html+='</div> <button  onclick="ocultar('+id+')">Ocultar</button> <button  onclick="mostrar('+id+')">Mostrar</button>  ';
//alert(html);
return html;
}


fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  .then((json) => {
    let menu=document.getElementById('mnuUsers');
    let opciones='';
    for(let i=0; i<json.length; i++){
        opciones += `<option value="${json[i].id}">${json[i].username}</option>`;
    }
    menu.innerHTML = opciones;

  });


  let btnPost=document.getElementById("btnPost");

  btnPost.addEventListener('click',()=>{
   // alert("Ya fregamos");
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then (response => response.json())
    .then ((json) => {
     // alert("si llego");
      let divpost=document.getElementById('posts');
      let datos='';
      json.forEach(pub => {
        if(pub.userId==mnuUsers.value)
        datos+=`
        <div><h2>${pub.userId} ${pub.title}</h2>
        <p>${pub.body}</p>
        </div>`+lcomentarios(pub.id);
      });
     
        
       
      divpost.innerHTML=datos;
      });
    });

     
      
    
       //aqui me quede 

//users//
  let mnuUsers=document.getElementById('mnuUsers');
  mnuUsers.addEventListener("change",()=>{
//alert("Cambio de usuario "+mnuUsers.value);
    console.log(mnuUsers.value);
    fetch('https://jsonplaceholder.typicode.com/users/'+ mnuUsers.value)
    .then (response => response.json())
    .then (json => {
      alert(JSON.stringify(json));
      //alert(json.name);
     document.getElementById("nombre").innerHTML=json.name;
     document.getElementById("nombredeusuario").innerHTML=json.username;

     console.log(json);
    })
    }
  );


    