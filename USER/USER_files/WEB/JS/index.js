$(document).ready(function(){
document.getElementById("NVG").style="display:none;";
document.getElementsByClassName("containerX")[0].style="opacity:1;";
});

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
///  firebase.analytics();
  


var IME=document.getElementById("demo22");

var MyallBase = firebase.database().ref();

var USerko;
var p0=false;var p1=false;var p2=false;
var Parametar=[p0,p1,p2];

function Imenik (a){
b="https://sezonjobs.sytes.net/";
if(a.value.length>0){d="";}else{d="1kinger";}	
document.getElementById("TitLINK").innerHTML=b+d+a.value;
USerko=a.value;
if(a.value.length<4){
document.getElementById("ErorTXT").innerHTML="Username must be longer than 3 charakters";}else{
CEK_singupUSERNAME(USerko);}}

function CKMail(a){
if(a.value.length>4){A=a.value.slice(0,a.value.length-4);
if(OKname(A)){snd2ckM(A);}else{document.getElementById("ErorTXT").innerHTML="Unsuported email type ";}}}

function CEK_singupUSERNAME(a){
if(OKname(a)){
document.getElementById("ErorTXT").innerHTML="";
snd2ckU(a);
}else{document.getElementById("ErorTXT").innerHTML="los karakter";}}

function CEp(a){A=a.value;pasot(A);}


function usrFRE(a){if(a){document.getElementById("ErorTXT").innerHTML="";Parametar[0]=true;}else{document.getElementById("ErorTXT").innerHTML="this username is alredy taken";Parametar[0]=false;}}
function mailFRE(a){if(a){document.getElementById("ErorTXT").innerHTML="";Parametar[1]=true;}else{document.getElementById("ErorTXT").innerHTML="this email is alredy used ";Parametar[1]=false;}}
function pasot(a){if(a.length>7){document.getElementById("ErorTXT").innerHTML="";Parametar[2]=true;}else{document.getElementById("ErorTXT").innerHTML="pasword must be over 8 charakters";Parametar[2]=false;}}

function snd2ckU(a){
MyallBase.child("URLuser").child(a).once("value").then(function(snapshot) {BAZATA = snapshot.val();	
EEE=BAZATA;if(EEE==null){usrFRE(true);}else{usrFRE(false);}
 
});}

function snd2ckM(a){
MyallBase.child("REG@").child(A).once("value").then(function(snapshot) {BAZATA = snapshot.val();	
EEE=BAZATA;if(EEE==null){mailFRE(true);}else{mailFRE(false);}});

}


function OKname(a){
if((a.includes("/"))||
   (a.includes("#"))||
   (a.includes("."))||
   (a.includes(","))||
   (a.includes("`"))||
   (a.includes("|"))||
   (a.includes("'"))||
   (a.includes('"'))||
   (a.includes(" "))||
   (a.includes("["))||
   (a.includes("]"))||
   (a.includes("%")))
{return false;}else{return true;}}


var USERdef;
var mailID;
var CC,DD;


 var  OKO=0;
 
function KOJeOVOJ(a){ /// ovdeka se pravi updajtot za userko

			
		mailID=a.slice(0,a.length-4);
		
		USERdef="REG@/"+mailID;
		
MyallBase.child(USERdef);
MyallBase.once("value")
  .then(function(snapshot) {
     CC = snapshot.val();
	 
 DD=CC["REG@"][mailID];
 
	if(DD!=undefined){
		console.log("ovaj postoi  user ",mailID);
		      document.getElementById("user_para").innerHTML = "https://sezonjobs.sytes.net<br>/" + DD; LOADNIall();
		}else{
		console.log("ovaj user  go nema  WELCOME",mailID);}
  });	 
}


		

firebase.auth().onAuthStateChanged(function(user) {

  if (user) {
    // User is signed in.

    document.getElementById("user_div").style.display = "contents";
    document.getElementById("user_div").style.width = 37+"%";
    document.getElementById("login_div").style.display = "none";

    var user = firebase.auth().currentUser;

	
	

KOJeOVOJ(user.email);	// go pozdravuva akkauntot	  

    if(user != null){

      var email_id = user.email;
  
	  document.getElementById("NVG").style="display:block;";
	   
 
	  
	  

    }

  } else {
    // No user is signed in.

    document.getElementById("user_div").style.display = "none";
    document.getElementById("user_div").style.width = 73+"%";
    document.getElementById("login_div").style.display = "block";

  }
});

function login(){

  var userEmail = document.getElementById("email_field_1").value;
  var userPass = document.getElementById("password_field_1").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);

    // ...
  });

}

function logout(){
  firebase.auth().signOut();
  
document.getElementById("email_field_1").innerHTML="";
document.getElementById("password_field_1").innerHTML="";
document.getElementById("email_field_2").innerHTML="";
document.getElementById("password_field_2").innerHTML="";
  SUP(false);
  
	    document.getElementById("NVG").style="display:none;";
}



function SUP(a){
if(a){
	document.getElementById("ErorTXT").display="block";
	document.getElementById("Lin").style.display = "none";
    document.getElementById("Sup").style.display = "block";}else{
	document.getElementById("ErorTXT").display="none";
	document.getElementById("Lin").style.display = "block";
    document.getElementById("Sup").style.display = "none";}

}
var eMAIL;
function SingUP(){
	if((Parametar[0])&&(Parametar[1])&&(Parametar[2])){
  var email = document.getElementById("email_field_2").value;   eMAIL=email.slice(0,email.length-4);
  var password = document.getElementById("password_field_2").value;
	
firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});
setTimeout(function(){
	
SJ_NEW={
PROFIL:{
	FOTO:{Fime:"",Flink:false},
	REG:{ID:"",email:"",veri:0},
	UserLink:{URL:"",URL_status:false},
	SETINGS:{IME:"",PROFIL_STATUS:true,PROFIL_SEY:""},
	CONTACT:{C_text:"",MYALL:false}
	},
JOB_LISTA:{J_Lista:[""]},
JOB_SCHEMA:{J_TITLE:"",J_DES:"",J_STATUS:false,J_CAT:[0],J_ADDRESE:"",J_PEY:[0,[0]],J_TIME:[[0,0],[0,0]],J_CONTACT:["",[false]],J_JOBREF:"",

       J_FOTO:[
		   {Fname:"",Flink:""},
		   {Fname:"",Flink:""},
		   {Fname:"",Flink:""},
		   {Fname:"",Flink:""},
		   {Fname:"",Flink:""},
		   {Fname:"",Flink:""},
		   {Fname:"",Flink:""},
		   {Fname:"",Flink:""},
		   {Fname:"",Flink:""},
		   {Fname:"",Flink:""},
		   {Fname:"",Flink:""},
		   {Fname:"",Flink:""}
           ]},
	   
JOB_LINKS:{J_Links:[""]},
J_DNS:{j_dns:["ADDup"]}}
	
firebase.database().ref().child("REG@").child(eMAIL).set(USerko);
firebase.database().ref().child("URLuser").child(USerko).set(SJ_NEW);

firebase.database().ref().child("URLuser").child(USerko).child("PROFIL").child("REG").child("email").set(email);

	alert("accaunt sucsecsful created ");

setTimeout(function(){location.reload();}, 1000);

 	
	}, 1500);
}else{
if(Parametar[0]!=true){TXTO="heyy dude take other username..";}else
if(Parametar[1]!=true){TXTO="this email is unvaeble for sign up..";}else
{TXTO="paswort to short,, dude comone think somthink long";}
document.getElementById("ErorTXT").innerHTML=TXTO;}

}


function SND_vrf(a){var user = firebase.auth().currentUser;
	if(a==0){
user.sendEmailVerification().then(function() {
  // Email sent.
  
  
}).catch(function(error) {
  // An error happened.
});

}

if (user.emailVerified) {
if(a!=true){MyallBase.child("URLuser").child(DD).child("PROFIL").child("REG").child("veri").set(true);}}
}

function Aktiv(a,n){ b=a.children[0];
if(n==0){ELEmentce=document.getElementById("STatusTxT");}
if(n==1){ELEmentce=document.getElementById("STATS_linkce");}

if(b.checked){
ELEmentce.innerHTML="Akctiv";
ELEmentce.style="color:green;";
a.children[1].style="background-color:#2196F3;";}else{
ELEmentce.style="color:red;";
ELEmentce.innerHTML="Deactiv";
a.children[1].style="background-color:red;";}

if(n==0){if(b.checked){GLAVEN_SW=true;}else{GLAVEN_SW=false;}}


}



//////////////////// modalo

// Get the modal
var modal_JOB = document.getElementById("myModal");
var modal_PROFIL = document.getElementById("Modal_PROFIL");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");


var DROPdwnBTN=document.getElementById("MENIlink");
var LOPCI=document.getElementById("Lopci");


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal_JOB) {
    modal_JOB.style.display = "none";
	LOPCI.style.display="none";
	 }
  
  
  if (event.target == modal_PROFIL) {
  modal_PROFIL.style.display = "none";
  }

  
}


////////////////////////// modelskoto kopce
function MDL_PROFIL(){modal_PROFIL.style.display = "block";
a=GTD["PROFIL"]["REG"]["veri"];
if(a==true){
document.getElementById("E_status").innerHTML="verifyed";}else{
document.getElementById("E_status").innerHTML="unverified";}
}
	

var FTO_UPLOAD_view=document.getElementById("wew"); var FTO_url=false; var NOVO_FOTO_iME=null;

var uploadPROCENT=0;
var UPD_Pic=document.getElementById("fileButonP_FOTO");
UPD_Pic.addEventListener("change", function(e){
	
	var file = e.target.files[0];
	
var storageRef= firebase.storage().ref().child("USER_pic").child(DD).child("PROFIL_pic/"+file.name);

var task=storageRef.put(file);  /// ova funkcionira kako sto treba

task.on('state_changed',

function progress(snapshot){
var percentage=(snapshot.bytesTransferred / snapshot.totalBytes)*100;
uploadPROCENT.value=percentage;},


function error(err){},

function complete (){
//FOTO	link


reader = new FileReader();
reader.onload = function (){ 
FTO_UPLOAD_view.src =reader.result;}
reader.readAsDataURL(file);

firebase.database().ref().child("URLuser").child(DD).child("PROFIL").child("FOTO").child("Fime").set(file.name);

NOVO_FOTO_iME=file.name;



storageRef.getDownloadURL().then(function(url) {
  // `url` is the download URL for 'images/stars.jpg'

  // This can be downloaded directly:
  var xhr = new XMLHttpRequest();
  xhr.responseType = 'blob';
  xhr.onload = function(event) {
    var blob = xhr.response;
  };
  xhr.open('GET', url);
  xhr.send();
  FTO_url=url;

}).catch(function(error) {
  // Handle any errors
});



}

);
	}); 


function UPD_PROFILO(T){
	
// se ubacuvat datada u data baza..
// se updejtnuva datata so LOKALNITE promeni

/// ako se uploadne slika na sajtot i pritisne update , togas da se turi na firabaze
/// ako ne da ne je uploadnuva istata slika
promSTATUS();
promeniTUKA();
promeniPRO_CONTACTO();

T.parentElement.children[0].click();// da closne modale
}

function promSTATUS(){b=GTD["PROFIL"]["SETINGS"]["PROFIL_SEY"];
a=document.getElementById("PROFIL_status").value.slice(0,200);
document.getElementById("PRO_STATUS").innerHTML=a;

if(b!=a){
firebase.database().ref().child("URLuser").child(DD).child("PROFIL").child("SETINGS").child("PROFIL_SEY").set(a);}}

function promeniTUKA(){
	if(FTO_url!=false){
stara_FTOname=GTD["PROFIL"]["FOTO"]["Fime"];
if(stara_FTOname!=NOVO_FOTO_iME){
document.getElementById("PROFI_pic").src=FTO_url;
firebase.database().ref().child("URLuser").child(DD).child("PROFIL").child("FOTO").child("Flink").set(FTO_url);}

}}

function promeniPRO_CONTACTO (){//stari vrednosti ppredo  prmenata 
b=GTD["PROFIL"]["CONTACT"]["MYALL"];  M_btn=document.getElementById("MYALLbtn");
M_box=document.getElementById("myallBOX").checked; 

c_text=GTD["PROFIL"]["CONTACT"]["C_text"]; C_contact_SHOW=document.getElementsByClassName("Contact_txt")[0];
C_contact_INput=document.getElementById("PROFIL_contact").value;



if(M_box){
C_contact_SHOW.style.display="none";
M_btn.style.display="inherit";
	/// da se dodade tkstot kako linkot za otvaranje
U="https://myall.sytes.net/"+C_contact_INput;
M_btn.onclick = function() {window.open(U);}

}else{
C_contact_SHOW.innerHTML=C_contact_INput;
C_contact_SHOW.style.display="block";
M_btn.style.display="none";	
}


V=M_box;
firebase.database().ref().child("URLuser").child(DD).child("PROFIL").child("CONTACT").child("MYALL").set(V);

if(c_text!=C_contact_INput){a=C_contact_INput;
firebase.database().ref().child("URLuser").child(DD).child("PROFIL").child("CONTACT").child("C_text").set(a);}

}


if(screen.width<400){
document.getElementById("PRO_STATUS").style="font-size:16px;position:absolute;z-index:1;display:table-caption;text-align:center;left: 20%;width:60%;"
}else{
document.getElementById("PRO_STATUS").style="position:absolute;z-index:1;display:table-caption;text-align:center;left: 20%;width:60%;"}



function BYproces(){txt="https://www.paypal.com/paypalme/MyallStar"; window.open(txt);}


function DROPdwnbtn(){
	if(LOPCI.style.display=="block"){LOPCI.style="display: none;";}else{LOPCI.style="display:block;";}}

function par(a){
if(a==0){modal_JOB.style.display="none";}else//close
if(a==1){}else//copi link /!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
if(a==2){document.getElementsByClassName("dropbtn")[0].click();}else//cancel
if(a==3){modal_JOB.style.display="none";DELtablata(j_oglas)}//delete
LOPCI.style="display: none;";}





function Job_Formular(){
//jobsemata sa se updajtira so taa od SJ da ne se zaboravi !!

JOB_SCHEMA={J_TITLE:"",J_DES:"",J_STATUS:false,J_CAT:[0],J_ADDRESE:"",J_PEY:[0,[0]],J_TIME:[[0,0],[0,0]],J_CONTACT:["",[false]],J_JOBREF:"",

       J_FOTO:[
		   {Fname:"",Flink:""},
		   {Fname:"",Flink:""},
		   {Fname:"",Flink:""},
		   {Fname:"",Flink:""},
		   {Fname:"",Flink:""},
		   {Fname:"",Flink:""},
		   {Fname:"",Flink:""},
	       {Fname:"",Flink:""},
	       {Fname:"",Flink:""},
		   {Fname:"",Flink:""},
		   {Fname:"",Flink:""},
		   {Fname:"",Flink:""}
           ]};
		   

	JOB_SCHEMA["J_STATUS"]=document.getElementsByClassName("j_status")[0].children[0].checked;
	JOB_SCHEMA["J_CONTACT"][1][0]=document.getElementsByClassName("CBmyall")[0].checked;
	t=document.getElementsByClassName("inputTXT");
	JOB_SCHEMA["J_TITLE"]=     t[0].value;
	JOB_SCHEMA["J_DES"]=       t[1].value;
	JOB_SCHEMA["J_ADDRESE"]=   t[2].value;
	JOB_SCHEMA["J_CAT"]=       t[3].value;
	JOB_SCHEMA["J_PEY"][0]=    t[4].value;
	JOB_SCHEMA["J_CONTACT"][0]=t[5].value;
	JOB_SCHEMA["J_JOBREF"]=    t[6].value;
	
	o=document.getElementsByClassName("SLKT");
	JOB_SCHEMA["J_TIME"][0][0]=o[0].value;
	JOB_SCHEMA["J_TIME"][0][1]=o[1].value;
	JOB_SCHEMA["J_TIME"][1][0]=o[2].value;
	JOB_SCHEMA["J_TIME"][1][1]=o[3].value;
	JOB_SCHEMA["J_PEY"][1][0] =o[4].value;
	
	return JOB_SCHEMA;}


function JOB_update(){           ///////// na okej baton se pravi ovaaa F

JOB_SCHEMA=Job_Formular();

if(j_oglas==null){

t=new Date().getTime();T=t.toString(36);T=T.slice(2);//kgmrv45x  ==> mrv45x
JOB_COD=T;          
DnS=DD+"#"+JOB_COD;
j_oglas=JOB_COD;

OutJ_L=GTD["JOB_LINKS"]["J_Links"];
UpJ_L=OutJ_L;  UpJ_L.push(JOB_COD);

OutJ_DNS=GTD["J_DNS"]["j_dns"];
UpJ_DNS=OutJ_DNS; UpJ_DNS.push(DnS);


	firebase.database().ref().child("URLuser").child(DD).child("JOB_LISTA/"+JOB_COD).push("");//kreira prazno takvo JOB ime e imeto na toa childot!!
    firebase.database().ref().child("URLuser").child(DD).child("JOB_LINKS/J_Links").set(UpJ_L);
    
	firebase.database().ref().child("URLuser").child(DD).child("J_DNS/j_dns").set(UpJ_DNS);
	
}else{JOB_COD=j_oglas;

for(i=0;i<12;i++){
	JOB_SCHEMA["J_FOTO"][i]["Fname"]=GTD["JOB_LISTA"][JOB_COD]["J_FOTO"][i]["Fname"];
	JOB_SCHEMA["J_FOTO"][i]["Flink"]=GTD["JOB_LISTA"][JOB_COD]["J_FOTO"][i]["Flink"];
}

}






firebase.database().ref().child("URLuser").child(DD).child("JOB_LISTA/"+JOB_COD).set(JOB_SCHEMA);
	
	modal_JOB.style.display="none";
	
DAJval("PROFIL","RANK",0);// kolku da go dada g t d
}



var SW=document.getElementsByClassName("switch")[0].children[0];
function GETaccSTATUS(a){if(SW.checked!=a){SW.parentElement.click();}}

function STATS(A){a=A.checked;
if(GTD["PROFIL"]["SETINGS"]["PROFIL_STATUS"]!=a){
MyallBase.child("URLuser").child(DD).child("PROFIL").child("SETINGS").child("PROFIL_STATUS").set(a);}}





function LOADNIall(){
	
DAJval("PROFIL","RANK",0);
	
};


function puniLokalno(){
GETaccSTATUS(GTD["PROFIL"]["SETINGS"]["PROFIL_STATUS"]);


E_status=GTD["PROFIL"]["REG"]["veri"];
SND_vrf(E_status);


fotoLINK=GTD["PROFIL"]["FOTO"]["Flink"];

if(fotoLINK==false){
document.getElementById("PROFI_pic").src="../img/deflat.png";
}else{document.getElementById("PROFI_pic").src=fotoLINK;}
	
document.getElementById("PRO_STATUS").innerHTML=GTD["PROFIL"]["SETINGS"]["PROFIL_SEY"];



if(GTD["PROFIL"]["CONTACT"]["MYALL"]){
document.getElementsByClassName("Contact_txt")[0].style.display="none";

document.getElementById("MYALLbtn").style.display="inherit";
U="https://myall.sytes.net/"+GTD["PROFIL"]["CONTACT"]["C_text"];
document.getElementById("MYALLbtn").onclick = function() {window.open(U);}
}else{
	
document.getElementsByClassName("Contact_txt")[0].style.display="block";
document.getElementsByClassName("Contact_txt")[0].innerHTML=GTD["PROFIL"]["CONTACT"]["C_text"];}

document.getElementById("myallBOX").checked=    GTD["PROFIL"]["CONTACT"]["MYALL"];
document.getElementById("PROFIL_contact").value=GTD["PROFIL"]["CONTACT"]["C_text"];







PUNItablata();/// loadne





}
 
 
var GTD;
function DAJval(a,b,ELEM){LINKtxt="URLuser/"+DD+"/"+a+"/"+b;  
MyallBase.child(LINKtxt);
MyallBase.once("value")
  .then(function(snapshot) {
     toBACK = snapshot.val();
	 GTD=toBACK["URLuser"][DD];
 toBACK=toBACK["URLuser"][DD][a][b];
 
 //UPDATE(ELEM,toBACK);
puniLokalno();

  });	
}

function MDL_JOB(a){  PREmodSET(a);
	
if(a){
A=a.parentElement.children[0].children[0].getAttribute("j_id");
JOB_data(A);      j_oglas=A;
}else{DefalSET(); j_oglas=a;}


	
modal_JOB.style.display="grid";}

function PREmodSET(a){if(a){
document.getElementsByClassName("InfoMode")[0].style.display="none";
document.getElementsByClassName("w3-main w3-content")[0].style.display="contents";
}else{
document.getElementsByClassName("InfoMode")[0].style.display="block";
document.getElementsByClassName("w3-main w3-content")[0].style.display="none";}}
		
function DefalSET(){
document.getElementById("SHW_link").innerHTML="/"+DD+"#jobID";
	
	document.getElementsByClassName("j_status")[0].children[0].checked=true;
	if(document.getElementsByClassName("j_status")[0].children[0].checked!=true){
	document.getElementsByClassName("j_status")[0].click();//lontra i klik
	}
	textove=document.getElementsByClassName("inputTXT");
	for(i=0;i<textove.length;i++){textove[i].value="";}
	
	NoImG=document.getElementsByClassName("far fa-image blankIMG");
	Simg=document.getElementsByClassName("SHOWimg");
	for(i=0;i<12;i++){
		Simg[i].style.display="none";	
		Simg[i].removeAttribute('src');
		NoImG[i].style.display="inline-block";}
		
	
	opcite=document.getElementsByClassName("SLKT");
	for(i=0;i<opcite.length;i++){opcite[i].value=0;}
	document.getElementsByClassName("CBmyall")[0].checked=false;
	
	
	
	}


function JOB_data(a){ THIS_JOB=GTD["JOB_LISTA"][a];
		
//	JOB_SCHEMA:{J_TITLE:"",J_DES:"",J_STATUS:false,J_CAT:[0],J_ADDRESE:"",J_PEY:[0,[0]],J_TIME:[[0,0],[0,0]],J_CONTACT:["",[false]],J_JOBREF:"",J_FOTO:{f0:"",f1:"",f2:"",f3:"",f4:"",f5:"",f6:"",f7:"",f8:"",f9:"",f10:"",f11:""}},

document.getElementById("SHW_link").innerHTML="/"+DD+"#"+a;
	
	if(document.getElementsByClassName("j_status")[0].children[0].checked!=THIS_JOB["J_STATUS"]){
	document.getElementsByClassName("j_status")[0].click();/// kontra i klik	
	document.getElementsByClassName("j_status")[0].children[0].checked=THIS_JOB["J_STATUS"];}
	
	
	document.getElementsByClassName("CBmyall")[0].checked=THIS_JOB["J_CONTACT"][1][0];
	t=document.getElementsByClassName("inputTXT");
	t[0].value=THIS_JOB["J_TITLE"];
	t[1].value=THIS_JOB["J_DES"];
	t[2].value=THIS_JOB["J_ADDRESE"];
	t[3].value=THIS_JOB["J_CAT"];
	t[4].value=THIS_JOB["J_PEY"][0];
	t[5].value=THIS_JOB["J_CONTACT"][0];
	t[6].value=THIS_JOB["J_JOBREF"];
	
	
	NoImG=document.getElementsByClassName("far fa-image blankIMG");
	Simg=document.getElementsByClassName("SHOWimg");
	
	
	for(i=0;i<12;i++){
		if(THIS_JOB["J_FOTO"][i]["Flink"]!=""){
		Simg[i].style.display="block";	
		Simg[i].src=THIS_JOB["J_FOTO"][i]["Flink"];
		NoImG[i].style.display="none";}
		else{
		Simg[i].style.display="none";	
		Simg[i].removeAttribute('src');
		NoImG[i].style.display="inline-block";}
	}
//	GTD["JOB_LISTA"][J_ID]["J_FOTO"][F_N]["Fname"]
//	GTD["JOB_LISTA"][J_ID]["J_FOTO"][F_N]["Fname"]
	
	o=document.getElementsByClassName("SLKT");
	o[0].value=THIS_JOB["J_TIME"][0][0];
	o[1].value=THIS_JOB["J_TIME"][0][1];
	o[2].value=THIS_JOB["J_TIME"][1][0];
	o[3].value=THIS_JOB["J_TIME"][1][1];
	o[4].value=THIS_JOB["J_PEY"][1][0];
	
}

///////////////////////////////////////////////////////
var FOTO_model=document.getElementById("Modal_FOTOset");FOTO_model.style="z-index:3;";
var FTO_J_preview=document.getElementsByClassName("View_FOTO")[0];

var J_FOTO_url=false; var NOVO_J_FOTO_iME=null;

var UPD_PicJ_FOTO=document.getElementById("fileButonJ_FOTO");
UPD_PicJ_FOTO.addEventListener("change", function(e){   J_FOTO_url=false; NOVO_J_FOTO_iME=null;
	

 F_N=FOTO_model.getAttribute("j_f_n");
J_ID=FOTO_model.getAttribute("job_id");	
	
	var file = e.target.files[0];
	
var storageRef= firebase.storage().ref().child("USER_pic").child(DD).child("JOB_ID/"+J_ID+"/"+file.name);

var task=storageRef.put(file);  /// ova funkcionira kako sto treba

task.on('state_changed',

function progress(snapshot){
var percentage=(snapshot.bytesTransferred / snapshot.totalBytes)*100;
uploadPROCENT.value=percentage;},


function error(err){},

function complete (){
//FOTO	link


reader = new FileReader();
reader.onload = function (){

FTO_J_preview.style="table-caption;";
document.getElementById("noFOTO").style="display:none;";

FTO_J_preview.src =reader.result;}
reader.readAsDataURL(file);

firebase.database().ref().child("URLuser").child(DD).child("JOB_LISTA").child(J_ID).child("J_FOTO").child(F_N).child("Fname").set(file.name);

NOVO_J_FOTO_iME=file.name;



storageRef.getDownloadURL().then(function(url) {
  // `url` is the download URL for 'images/stars.jpg'

  // This can be downloaded directly:
  var xhr = new XMLHttpRequest();
  xhr.responseType = 'blob';
  xhr.onload = function(event) {
    var blob = xhr.response;
  };
  xhr.open('GET', url);
  xhr.send();
  J_FOTO_url=url;

}).catch(function(error) {
  // Handle any errors
});



}

);
	}); 

function VIEW_foto_MODEL(a,b){FOTO_model.style="display:block;";N=parseInt(a);
FOTO_model.setAttribute("j_f_n",a); 
FOTO_model.setAttribute("job_id",b); 


if(document.getElementsByClassName("SHOWimg")[N].src!=""){
FTO_J_preview.style="table-caption;";
FTO_J_preview.src=document.getElementsByClassName("SHOWimg")[N].src;
document.getElementById("noFOTO").style="display:none;";}
else{
FTO_J_preview.style="display:none;";
document.getElementById("noFOTO").style="display:block;";}}

function FotoSETbtn(a){
 F_N=FOTO_model.getAttribute("j_f_n");
J_ID=FOTO_model.getAttribute("job_id");


if(a){// gi mesti
	if(J_FOTO_url){
stara_JOBfoto=GTD["JOB_LISTA"][J_ID]["J_FOTO"][F_N]["Fname"];
if(stara_JOBfoto!=NOVO_J_FOTO_iME){
document.getElementsByClassName("far fa-image blankIMG")[F_N].style.display="none";
document.getElementsByClassName("SHOWimg")[F_N].src=J_FOTO_url;
document.getElementsByClassName("SHOWimg")[F_N].style.display="block";
firebase.database().ref().child("URLuser").child(DD).child("JOB_LISTA").child(J_ID).child("J_FOTO").child(F_N).child("Fname").set(NOVO_J_FOTO_iME);
firebase.database().ref().child("URLuser").child(DD).child("JOB_LISTA").child(J_ID).child("J_FOTO").child(F_N).child("Flink").set(J_FOTO_url);
}
}FOTO_model.style='display:none;';}


else{// ja brise
document.getElementsByClassName("far fa-image blankIMG")[F_N].style.display="inline-block";
document.getElementsByClassName("SHOWimg")[F_N].style.display="none";
firebase.database().ref().child("URLuser").child(DD).child("JOB_LISTA").child(J_ID).child("J_FOTO").child(F_N).child("Fname").set("");
firebase.database().ref().child("URLuser").child(DD).child("JOB_LISTA").child(J_ID).child("J_FOTO").child(F_N).child("Flink").set("");

FTO_J_preview.style="display:none;";
document.getElementById("noFOTO").style="display:block;";}

DAJval("PROFIL","RANK",0);}

///////////var JOB_Link=["qwert","qaz","trute"]; ///// ova da bidat tie dns kodove
var OGLASmeni;
var staraTabela;
var  novaTabela;
function DELtablata(a){
	if(a){
	firebase.database().ref().child("URLuser").child(DD).child("JOB_LISTA/"+a).set(null);//kreira prazno takvo JOB ime e imeto na toa childot!!

staraTabela=GTD["JOB_LINKS"]["J_Links"];

for(i=0;i<staraTabela.length;i++){
	if(staraTabela[i]==a){staraTabela[i]=null;
	
novaTabela=staraTabela;
firebase.database().ref().child("URLuser").child(DD).child("JOB_LINKS/J_Links").set(novaTabela);

DAJval("PROFIL","RANK",0);		break;}}


}   	
	modal_JOB.style.display="none";
	
}



function T_J_switch(a){   V=a.checked;
sifra=a.parentElement.parentElement.children[0].children[0].getAttribute("j_id");

firebase.database().ref().child("URLuser").child(DD).child("JOB_LISTA/"+sifra+"/J_STATUS").set(V);

DAJval("PROFIL","RANK",0);	}   



function PUNItablata(){ MeniPRESET();
	
	N=0;
OGLASmeni=GTD["JOB_LISTA"];
JOB_Link=GTD["JOB_LINKS"]["J_Links"];
J_N=[null];
 ///// ova da bidat tie dns kodove
/// toa N to ebava bidejki ne se izaramneti J liks i J job list ... moze da se poprae ama nesmeta search
// zastita za gaden kod !!!
	for(i in OGLASmeni){  if(N){J_N[N]=i;  IMETO=J_N[N];   cl();	
	document.getElementsByClassName("REZLUTAT")[N-1].children[0].setAttribute("j_id",IMETO); 
	
	document.getElementsByClassName("REZLUTAT")[N-1].children[0].innerHTML=OGLASmeni[IMETO]["J_TITLE"];
	document.getElementsByClassName("REZLUTAT")[N-1].children[1].innerHTML=OGLASmeni[IMETO]["J_ADDRESE"];
	document.getElementsByClassName("REZLUTAT")[N-1].children[2].innerHTML=OGLASmeni[IMETO]["J_DES"];
	document.getElementsByClassName("REZLUTAT")[N-1].children[3].innerHTML=OGLASmeni[IMETO]["J_PEY"];
	document.getElementsByClassName("REZLUTAT")[N-1].children[4].innerHTML=OGLASmeni[IMETO]["J_JOBREF"];
	document.getElementsByClassName("REZLUTAT")[N-1].children[5].innerHTML=OGLASmeni[IMETO]["J_CAT"];
	document.getElementsByClassName("REZLUTAT")[N-1].children[6].innerHTML=OGLASmeni[IMETO]["J_CONTACT"];

document.getElementsByClassName("REZLUTAT")[N-1].nextElementSibling.children[0].checked=OGLASmeni[IMETO]["J_STATUS"];
	}
	
	N=N+1;}
	
	TablaTXT();}
	
function cl(){var itm = document.getElementById("BingoLinija").children[0];
var cln = itm.cloneNode(true);
document.getElementsByClassName("vertical-menu")[0].appendChild(cln);}


function MeniPRESET(){N=document.getElementsByClassName("vertical-menu")[0].childElementCount;
	for(i=1;i<N;i++){document.getElementsByClassName("vertical-menu")[0].children[1].remove();}}
	
function TablaTXT(){N=document.getElementsByClassName("vertical-menu")[0].childElementCount;
txt="No job in joblista..";if(N>1){txt="Smart search with ctrl+F";}
document.getElementsByClassName("vertical-menu")[0].children[0].innerHTML=txt;}	
	

//// rastestira KUNDE page
//// rastestira Oglas page
//// rastestira MIAIN oglasna tabla

//// da se onade toa za kategorite selekt



//da se rasciti kodot


//da se stavi takvo kako za sodrzina za ideto