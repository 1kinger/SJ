  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBNjmQnhNhtKS3Fl-S01bPLapvqtjFN7kE",
    authDomain: "myall-proekt.firebaseapp.com",
    databaseURL: "https://myall-proekt.firebaseio.com",
    projectId: "myall-proekt",
    storageBucket: "myall-proekt.appspot.com",
    messagingSenderId: "53126128195",
    appId: "1:53126128195:web:c5605a60494f511b8b6af6",
    measurementId: "G-2YRGN7EEZN"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
//definicija  
var DODATOK=window.location.href.slice(28);var MyallBase = firebase.database().ref();

var JOB_ID=null;
var USER=DODATOK;
if (DODATOK.includes("#")){
	  USER=DODATOK.slice(0,DODATOK.length-7);
	JOB_ID=DODATOK.slice(DODATOK.length-6);}

///ovie se dodadeni kakotestiracki elementi !!!
//USER="bbbbb";            /// bbbbb
//JOB_ID="pjslj9";//"oil0zf";           paw58y     bbbbb#    pjslj9


function CEKuser(){USERlinkceto="URLuser/"+USER;

MyallBase.child(USERlinkceto);
MyallBase.once("value")
  .then(function(snapshot) {
     CC = snapshot.val();
	 
 DD=CC["URLuser"][USER];
 
	if(DD!=undefined){    
		console.log("ovaj postoi  user ",USER);DD=true;}else{
		console.log("ovaj user  go nema",USER);DD=false;}
 
 
 if(DD){
if((CC["URLuser"][USER]["PROFIL"]["SETINGS"]["PROFIL_STATUS"]!=true)&&(CC["URLuser"][USER]["PROFIL"]["SETINGS"]["PROFIL_STATUS"]!=false)){
document.getElementById("INFOstat").innerHTML="<a>this USERNAME <a/><span>"+USER+"</span><a>is alredy suspended</a><br>";}
else{ DAJval("PROFIL","RANK",0);

if(JOB_ID){
document.getElementById("K_4").style="display:none;";
document.getElementById("K_4_J").style="display:block;";}else{
document.getElementById("K_4").style="display:block;";
document.getElementById("K_4_J").style="display:none;";}






}}else{

document.getElementById("Loading").innerHTML="<a>this USERNAME <a/><span>"+USER+"</span><a> still dont exist </a><br><br><a target='_self'    style='font-size: 35px;' href='https://myall.sytes.net/'>Create that acc</a>";}
 	
  });}

function puniLokalno(G){
	
if(JOB_ID){Puni_JOB(G,JOB_ID);}


if(GETaccSTATUS(G["PROFIL"]["SETINGS"]["PROFIL_STATUS"])){
document.getElementsByTagName("body")[0].style="background-image: url('J4K_files/MEDIA/bcground.jpg')";

document.getElementById("INFOstat").innerHTML=G["PROFIL"]["SETINGS"]["PROFIL_SEY"];
fotoLINK=G["PROFIL"]["FOTO"]["Flink"];

if(fotoLINK==false){
document.getElementById("PROFI_pic").src="J4K_files/MEDIA/SJ_PRO_pic.png";
}else{document.getElementById("PROFI_pic").src=fotoLINK;}

if(G["PROFIL"]["CONTACT"]["MYALL"]&&(G["PROFIL"]["CONTACT"]["C_text"]!="")){
P_myall=G["PROFIL"]["CONTACT"]["C_text"];
document.getElementById("MYALLbtnPRO").style.display="block";
document.getElementById("MYALLbtnPRO").onclick=function(){window.open(P_myall)};
	  document.getElementById("Contact_PRO").remove();
}else{document.getElementById("MYALLbtnPRO").remove();
document.getElementById("Contact_PRO").innerHTML=G["PROFIL"]["CONTACT"]["C_text"];
document.getElementById("Contact_PRO").style.display="block";}



PUNItablata(G);

	}else{
document.getElementById("INFOstat").innerHTML="<a>this profil  <a/><span>"+USER+"</span><a> exsist <br> and wann stay privat </a>";
		
		
	}

}

function GETaccSTATUS(a){if(a){return a;}}

function DAJval(a,b,ELEM){LINKtxt="URLuser/"+USER+"/"+a+"/"+b;  
MyallBase.child(LINKtxt);
MyallBase.once("value")
  .then(function(snapshot) {
     toBACK = snapshot.val();
	 
	 GTD=toBACK["URLuser"][USER];
	 puniLokalno(GTD);

document.getElementById("Loading").remove();	 
  });	
  
}
Start();



function Start(){
	CEKuser();

}


function Puni_JOB(a,j){A=a["JOB_LISTA"][j];var T;
document.getElementById("title").innerHTML=A["J_TITLE"];

M=["month ?","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

document.getElementById("time_START").innerHTML=M[A["J_TIME"][0][0]]+" 202"+A["J_TIME"][0][1];
document.getElementById("time_END").innerHTML  =M[A["J_TIME"][1][0]]+" 202"+A["J_TIME"][1][1];

document.getElementById("desc").innerHTML=A["J_DES"];
document.getElementById("adress").innerHTML=A["J_ADDRESE"];



if(A["J_PEY"][1]==0){T=" ??"}else
if(A["J_PEY"][1]==1){T=" pro Dey"}else
if(A["J_PEY"][1]==2){T=" pro Hour"}else
if(A["J_PEY"][1]==3){T=" pro 1 KG norma"}else
if(A["J_PEY"][1]==4){T=" pro Jobs Done"}
document.getElementById("pey").innerHTML="&euro; "+A["J_PEY"][0]+T;

if(A["J_JOBREF"].length>3){T="Job Reference:<br>"+A["J_JOBREF"];}else{T="";}
document.getElementById("ref").innerHTML=T;

document.getElementById("cat").innerHTML=A["J_CAT"];

if(A["J_CONTACT"][1][0]){document.getElementById("contact").remove();
MYurl="https://myall.sytes.net/"+A["J_CONTACT"][0];
document.getElementById("MYALbtnC").onclick=function(){window.open(MYurl)}
document.getElementById("MYALbtnC").style.display="inherit";}

else{document.getElementById("MYALbtnC").remove();
document.getElementById("contact").innerHTML=A["J_CONTACT"][0];}

FOTKIsrc=[];
for(i in A["J_FOTO"]){if(A["J_FOTO"][i]["Flink"]!=""){FOTKIsrc.push(A["J_FOTO"][i]["Flink"]);}}

PUNI_fotkite(FOTKIsrc);}


function PUNI_fotkite(a){

for(i=11;i>-1;i--){
if(i<a.length){
	
	 document.getElementsByClassName("numbertext")[i].innerHTML=i+1+"/"+a.length;
	 document.getElementsByClassName("jFOTO")[i].children[1].src=a[i];}
else{document.getElementsByClassName("jFOTO")[i].remove();}}

if(a.length<2){
	 document.getElementsByClassName("prev")[0].remove();
	 document.getElementsByClassName("next")[0].remove();
document.getElementsByClassName("numbertext")[0].remove();}
}

var slideIndex = 1; showSlides(slideIndex);
function plusSlides(n) {showSlides(slideIndex += n);}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("jFOTO");  //// ovie se slikicite i site stoyat so dispplay none
  
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  
  for (i = 0; i < slides.length; i++) {slides[i].style.display="none";}
 
  slides[slideIndex-1].style.display = "block";}


function PUNItablata(a){ 
	
	N=0;
OGLASmeni=a["JOB_LISTA"];
JOB_Link=a["JOB_LINKS"]["J_Links"];
J_N=[null];
 ///// ova da bidat tie dns kodove
/// toa N to ebava bidejki ne se izaramneti J liks i J job list ... moze da se poprae ama nesmeta search
// zastita za gaden kod !!!
	for(i in OGLASmeni){  if(N){	J_N[N]=i;  IMETO=J_N[N];
    
	if(OGLASmeni[IMETO]["J_STATUS"]){    cl();	
	
	
	document.getElementsByClassName("REZLUTAT")[N-1].children[0].setAttribute("j_id",IMETO); 
	
	document.getElementsByClassName("REZLUTAT")[N-1].children[0].innerHTML=OGLASmeni[IMETO]["J_TITLE"];
	document.getElementsByClassName("REZLUTAT")[N-1].children[1].innerHTML=OGLASmeni[IMETO]["J_ADDRESE"];
	document.getElementsByClassName("REZLUTAT")[N-1].children[2].innerHTML=OGLASmeni[IMETO]["J_DES"];
	document.getElementsByClassName("REZLUTAT")[N-1].children[3].innerHTML=OGLASmeni[IMETO]["J_PEY"];
	document.getElementsByClassName("REZLUTAT")[N-1].children[4].innerHTML=OGLASmeni[IMETO]["J_JOBREF"];
	document.getElementsByClassName("REZLUTAT")[N-1].children[5].innerHTML=OGLASmeni[IMETO]["J_CAT"];
	document.getElementsByClassName("REZLUTAT")[N-1].children[6].innerHTML=OGLASmeni[IMETO]["J_CONTACT"];

	}}
	
	N=N+1;}
	
	TablaTXT();}

function cl(){var itm = document.getElementById("BingoLinija").children[0];
var cln = itm.cloneNode(true);
document.getElementsByClassName("vertical-menu")[0].appendChild(cln);}

function TablaTXT(){N=document.getElementsByClassName("vertical-menu")[0].childElementCount;
txt="No job in joblista..";if(N>2){txt="Smart search with ctrl+F";}
document.getElementsByClassName("vertical-menu")[0].children[0].innerHTML=txt;}


function OPEN_LINK(a){txt="https://sezonjobs.sytes.net/"; J=a.getAttribute("j_id") ; T=txt+USER+"#"+J; 
	window.open(T);}
	
function GoGOOGle(a){t="https://www.google.com/maps/place/";L=a.previousElementSibling.innerText;
T=t+L;window.open(T);}
	
