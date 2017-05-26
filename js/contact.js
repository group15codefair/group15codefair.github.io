 /*bouncing balls*/
var context;
var dx= 4;
var dy=4;
var y=150;
var x=10;
function draw(){
	context= myCanvas.getContext('2d');
	context.clearRect(0,0,900,800);
	context.beginPath();
	context.fillStyle="#1f5679";
	context.arc(x,y,20,0,Math.PI*2,true);
	context.closePath();
	context.fill();
	if( x<0 || x>850)
	dx=-dx;
	if( y<0 || y>290)
		dy=-dy;
		x+=dx;
		y+=dy;
	}
            setInterval(draw,10,);
/*Map*/
function myMap() {
var mapProp= {
    center:new google.maps.LatLng( -12.371755,130.868858),
    zoom:17,
};
var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
}


/*form*/
(function () { 
var Person = { 
 
Name: "", 
MobileNo:0, 
Email: "",  
};
 
var applogic = {
clearuielements: function () { 
    var inputs = document.getElementsByClassName("c1"); 
    for (i = 0; i < inputs.length; i++) { 
        inputs[i].value = ""; 
    } 
},
 
saveitem: function () { 
    var lscount = localStorage.length;
    var inputs = document.getElementsByClassName("c1"); 
            
            Person.Name = inputs[0].value; 
          
            Person.MobileNo = inputs[1].value; 
            Person.Email = inputs[2].value; 
            
            localStorage.setItem("Person_" + lscount, JSON.stringify(Person));  
            location.reload(); 
},


loaddata: function () { 
    var datacount = localStorage.length; 
    if (datacount > 0) 
    { 
        var render = "<table border='0'>"; 
        render += "<tr><th>Name</th><th>MobileNo</th>  <th>Email</th></tr>"; 
        for (i = 0; i < datacount; i++) { 
            var key = localStorage.key(i); 
            var person = localStorage.getItem(key); 
            var data = JSON.parse(person); 
            
            render += "<tr><td>" + data.Name + " </td>"; 
             render += "<td>" + data.MobileNo + "</td>";
            render += "<td>" + data.Email + "</td>"; 
             
            
        } 
        render+="</table>"; 
        dvcontainer.innerHTML = render; 
    } 
},

clearstorage: function () { 
    var storagecount = localStorage.length; 
    if (storagecount > 0) 
    { 
        for (i = 0; i < storagecount; i++) { 
            localStorage.clear(); 
        } 
    } 
    window.location.reload(); 
}
    
};
     
var btnsave = document.getElementById('btnsave'); 
btnsave.addEventListener('click', applogic.saveitem, false); 
var btnclear = document.getElementById('btnclear'); 
btnclear.addEventListener('click', applogic.clearuielements, false);  
var btnclearstorage = document.getElementById('btnclearstorage'); 
btnclearstorage.addEventListener('click', applogic.clearstorage, false); 
window.onload = function () { 
applogic.loaddata(); 
}; 
})(); 





