
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBKXDFF6LYOmjW_gymnhaeJCrfyc35lgfQ",
    authDomain: "sezon-j.firebaseapp.com",
    databaseURL: "https://sezon-j.firebaseio.com",
    projectId: "sezon-j",
    storageBucket: "sezon-j.appspot.com",
    messagingSenderId: "322723109813",
    appId: "1:322723109813:web:79c6333c7de8ce450297fc",
    measurementId: "G-4VDTXDVRFG"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig); var SJ_BASE = firebase.database().ref(); //MyallBase >>>  SJ_BASE
//  firebase.analytics();

var DODATOK=window.location.href.slice(28);
var Ltxt=document.getElementById("Loading");

var JOB_ID,USER;

if (DODATOK.includes("#")){
	  USER=DODATOK.slice(0,DODATOK.length-7);
	JOB_ID=DODATOK.slice(DODATOK.length-6);
CekJOB(USER,JOB_ID);}else{USER=DODATOK;CekUSER(USER);}

if(JOB_ID){
document.getElementById("K_4").style="display:none;";
document.getElementById("K_4_J").style="display:block;";}else{
document.getElementById("K_4").style="display:block;";
document.getElementById("K_4_J").style="display:none;";}


function CekJOB(U,J){
chekU="J_DB/JOBS/"+U;
SJ_BASE.child(chekU).once("value")
  .then(function(snapshot) {
     CHEK = snapshot.val();
	
	if(CHEK!=undefined){J_status=chekU+"/"+J; CEKjob(J_status);}else{
Ltxt.innerHTML="<a>this USERNAME <a/><span>"+USER+"</span><a> still dont exist </a><br><br><a target='_self'    style='font-size: 35px;' href='https://sezonjobs.sytes.net/'>Create that acc</a>";
  }});}
  
function CEKjob(a){
              J=a+"/J_STATUS";	
SJ_BASE.child(J).once("value")
  .then(function(snapshot) {J_ok = snapshot.val();
if(J_ok!=undefined){if(J_ok){LOAD_J(a);}else{
      Ltxt.innerHTML="<a>this job is momental deactiv <br>by<a/><span>"+USER+"</span><br><a>see what other jobs have</a><br><br><a target='_self'    style='font-size: 35px;' href='https://sezonjobs.sytes.net/"+USER+"'>"+USER+"</a>";}
}else{Ltxt.innerHTML="<a>this job dont exsist or alredy deleted.. <a/><span>"+USER+"</span><a> still dont exist </a><br><br><a target='_self'    style='font-size: 35px;' href='https://sezonjobs.sytes.net/"+USER+"'>"+USER+"</a>";}

  });}
function LOAD_J(a){SJ_BASE.child(a).once("value").then(function(snapshot){J=snapshot.val();Puni_JOB(J);});}
var P;
function CekUSER(a){
chekU="J_DB/USER_BEKAP/"+a;
SJ_BASE.child(chekU).once("value").then(function(snapshot){
CHEK = snapshot.val();if(CHEK!=undefined){P=CHEK["PROFIL"]["SETINGS"]["PROFIL_STATUS"];if(P){Puni_PROFIL(CHEK);}
 else if(!P){Ltxt.innerHTML="<a>this profil<a/><br><span>"+USER+"</span><a> exsist <br> and wann stay privat </a>";}
 else if((P!=true)&&(P!=false)){Ltxt.innerHTML="<a>this USER <a/><span>"+USER+"</span><a>is alredy suspended</a><br><a>and reason was :"+P+"</a>";}}
else{Ltxt.innerHTML="<a>this USERNAME <a/><span>"+USER+"</span><a> still dont exist </a><br><br><a target='_self'    style='font-size: 35px;' href='https://sezonjobs.sytes.net/'>Create that acc</a>";}});}


function Puni_PROFIL(a){
	A=a["PROFIL"];
Ltxt.remove();

document.getElementsByTagName("body")[0].style="background-image: url('J4K_files/MEDIA/bcground.jpg')";
document.getElementById("INFOstat").innerHTML=A["SETINGS"]["PROFIL_SEY"];

fotoLINK=A["FOTO"]["Flink"];
if(fotoLINK==false){
document.getElementById("PROFI_pic").src="J4K_files/MEDIA/SJ_PRO_pic.png";
}else{document.getElementById("PROFI_pic").src=fotoLINK;}

if(A["CONTACT"]["MYALL"]&&(A["CONTACT"]["C_text"]!="")){
P_myall=A["CONTACT"]["C_text"];
document.getElementById("MYALLbtnPRO").style.display="block";
document.getElementById("MYALLbtnPRO").onclick=function(){window.open("https://myall.sytes.net/"+P_myall)};
	  document.getElementById("Contact_PRO").remove();
}else{document.getElementById("MYALLbtnPRO").remove();
document.getElementById("Contact_PRO").innerHTML=A["CONTACT"]["C_text"];
document.getElementById("Contact_PRO").style.display="block";}

b=A["USER"];
LoadJOBLIST(b);}
		 
function LoadJOBLIST(a){
URL="J_DB/JOBS/"+a;
SJ_BASE.child(URL).once("value").then(function(snapshot){
	        OGLAS=snapshot.val();
PUNItablata(OGLAS);});}

	  

function Puni_JOB(a){var T;// sloboden privatna variablinka
document.getElementById("title").innerHTML=a["J_TITLE"];

M=["month ?","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

document.getElementById("time_START").innerHTML=M[a["J_TIME"][0][0]]+" 202"+a["J_TIME"][0][1];
document.getElementById("time_END").innerHTML  =M[a["J_TIME"][1][0]]+" 202"+a["J_TIME"][1][1];

document.getElementById("desc").innerHTML=a["J_DES"];
document.getElementById("adress").innerHTML=a["J_ADDRESE"];



if(a["J_PEY"][1]==0){T=" ??"}else
if(a["J_PEY"][1]==1){T=" pro Dey"}else
if(a["J_PEY"][1]==2){T=" pro Hour"}else
if(a["J_PEY"][1]==3){T=" pro 1 KG norma"}else
if(a["J_PEY"][1]==4){T=" pro Jobs Done"}
document.getElementById("pey").innerHTML="&euro; "+a["J_PEY"][0]+T;

if(a["J_JOBREF"].length>3){T="Job Reference:<br>"+a["J_JOBREF"];}else{T="";}
document.getElementById("ref").innerHTML=T;

document.getElementById("cat").innerHTML=a["J_CAT"];

if(a["J_CONTACT"][1][0]){document.getElementById("contact").remove();
MYurl="https://myall.sytes.net/"+a["J_CONTACT"][0];
document.getElementById("MYALbtnC").onclick=function(){window.open(MYurl)}
document.getElementById("MYALbtnC").style.display="inherit";}

else{document.getElementById("MYALbtnC").remove();
document.getElementById("contact").innerHTML=a["J_CONTACT"][0];}

FOTKIsrc=[];
for(i in a["J_FOTO"]){if(a["J_FOTO"][i]["Flink"]!=""){FOTKIsrc.push(a["J_FOTO"][i]["Flink"]);}}

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
	N=0;							REZkutati =document.getElementsByClassName("REZLUTAT");
	for(i in a){SIFRA=i; cl();      REZkutati[N].children[0].setAttribute("j_id",SIFRA); 
	
	REZkutati[N].children[0].innerHTML=a[SIFRA]["J_TITLE"];
	REZkutati[N].children[1].innerHTML=a[SIFRA]["J_ADDRESE"];
	REZkutati[N].children[2].innerHTML=a[SIFRA]["J_DES"];
	REZkutati[N].children[3].innerHTML=a[SIFRA]["J_PEY"];
	REZkutati[N].children[4].innerHTML=a[SIFRA]["J_JOBREF"];
	REZkutati[N].children[5].innerHTML=a[SIFRA]["J_CAT"];
	REZkutati[N].children[6].innerHTML=a[SIFRA]["J_CONTACT"]; N=N+1;}
	
	TablaTXT();}

function cl(){var itm = document.getElementById("BingoLinija").children[0];
var cln = itm.cloneNode(true);
document.getElementsByClassName("vertical-menu")[0].appendChild(cln);}

function TablaTXT(){N=document.getElementsByClassName("vertical-menu")[0].childElementCount;
txt="No job in joblista..";if(N>1){txt="Smart search with ctrl+F";}
document.getElementsByClassName("vertical-menu")[0].children[0].innerHTML=txt;}	

function OPEN_LINK(a){txt="https://sezonjobs.sytes.net/"; J=a.getAttribute("j_id") ; T=txt+USER+"#"+J; 
	window.open(T);}
	
function GoGOOGle(a){t="https://www.google.com/maps/place/";L=a.previousElementSibling.innerText;
T=t+L;window.open(T);}
	
	