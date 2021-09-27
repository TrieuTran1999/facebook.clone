
    var boxchat=document.querySelector(".setting-chat-box")
    var showchat1=document.querySelector(".setting-chat")
    var changedcolor=document.querySelector(".")

//////////////////////////////////////////////setting chat box top
   function showtogge()
   {
   boxchat.classList.toggle("setting-chat-box-height")
   }

   ////////////////////////////////////hide vs show list sidebar-left
   function showmore()
   {
       document.getElementById('more').style.display="block";
       document.getElementById('hide-icondown').style.display="none";
   }
   function hidemore()
   {
       document.getElementById('more').style.display="none";
       document.getElementById('hide-icondown').style.display="block";
   }
//   ////////////////////////////////////////////// tắt và bật ô chát

   
   function showchat()
   {
    document.getElementById('sss').style.display="block";
  
   }


   function hide()
   {
       document.getElementById('sss').style.display="none";
   }
  

 function like()
 {
    document.getElementById("addmore").innerHTML="100";
    document.getElementById("buttonlike").style.color="blue";

    
 }
