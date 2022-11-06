 document.getElementById('btn').addEventListener('click',
function(){ 
    let input= document.getElementById('input').value;
    let elem=document.createElement('li');
    let btn1=document.createElement('button');
    let btn2=document.createElement('button');
    btn1.innerText="Done";
    btn2.innerText="delete";
    btn1.className="search";           
    btn2.className="origin";
    elem.innerText=input; 
   
   
    let ul=document.querySelector('ul'); 
    ul.appendChild(elem);
    elem.appendChild(btn1);
    elem.appendChild(btn2); 
    elem.style="padding:10px; margin-top:20px; border:2px solid black; margin-left:25px; margin-right:25px; border-radius:10px; background-color:white; margin-bottom:3px; font-family:bold; "
    
    btn1.addEventListener('click',function()
     {
         elem.style.textDecoration="line-through red";
    });
     btn2.addEventListener('click',function()
    {
     elem.remove();
     }); 
     document.getElementById('input').value="";

     }
     ); 
   