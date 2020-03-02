var textUser = document.querySelector("#chatInput ")
//keypress,keydown,keyup
textUser.addEventListener("keyup",function(e){
    var texti =textUser.value.trim();
    if(texti != ""){
        if(e.keyCode ==13){
            if(texti[0].toUpperCase()==texti[0]){
                AddMessage("support",texti)
            }
            else{
                AddMessage("user",texti)
            }
        }
    }
})
function AddMessage(clName,texti){
    var mDiv=document.createElement("div");
    mDiv.className="message " +clName

    var ptag =document.createElement("p");
    ptag.innerText=texti;
     var date= new Date();
     var ptime=document.createElement("p")
     ptime.className="time"
     ptime.innerText=date.getHours()+":"+date.getMinutes();
     mDiv.appendChild(ptag);
     mDiv.appendChild(ptime);
     document.querySelector("#chat main").appendChild(mDiv)
     textUser.value=""
}