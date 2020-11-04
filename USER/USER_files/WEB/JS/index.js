
var USER; var X_uID;  // da se mushne u provatno podzagradi !!!
function START_AKCIJA(A){    X_uID=A.uid;////////////// START AKCIJAA !!!!!!!!!!!////////
                REG="U_I_D/"+X_uID;
  SJ_BASE.child(REG).once("value")
  .then(function(snapshot) {
       CEKuser = snapshot.val();  
    if(CEKuser!=undefined){       USER=CEKuser["PROFIL"]["USER"];console.log("Star User ",USER);}
    else{                         USER=document.getElementById("username_field").value;
console.log("WELCOME back agein ",USER);u_email=A.email;
	                    ADNI_USER(USER, u_email,X_uID);}; 
						
document.getElementById("user_para").innerHTML = "https://sezonjobs.sytes.net<br>/"+ USER;
F_5();TablaF5();});
}




function CHEK_ADD_YEAR(X,G){var J=new Date();       var YEAR="J_"+J.getUTCFullYear();
                      if(G[YEAR]==undefined){ADD_YEAR(X,YEAR);}}
     function ADD_YEAR(a,j){                         J_0_DATA={M_1:{S_M_S:0,MMFU:0,UPLATA:0},M_2:{S_M_S:0,MMFU:0,UPLATA:0},M_3:{S_M_S:0,MMFU:0,UPLATA:0},M_4:{S_M_S:0,MMFU:0,UPLATA:0},M_5:{S_M_S:0,MMFU:0,UPLATA:0},M_6:{S_M_S:0,MMFU:0,UPLATA:0},M_7:{S_M_S:0,MMFU:0,UPLATA:0},M_8:{S_M_S:0,MMFU:0,UPLATA:0},M_9:{S_M_S:0,MMFU:0,UPLATA:0},M_10:{S_M_S:0,MMFU:0,UPLATA:0},M_11:{S_M_S:0,MMFU:0,UPLATA:0},M_12:{S_M_S:0,MMFU:0,UPLATA:0}};
SJ_BASE.child("U_I_D/"+a+"/PROFIL/BALANCE/J/"+j).set(J_0_DATA);}
					  
	////////!!!!!! nadvor od upotreba e dolnata funkcija
function CEK_BALANS(a){J=new Date();M=1+J.getUTCMonth();YEAR="J_"+J.getUTCFullYear();M="M_"+M;
	podatok=a["PROFIL"]["BALANCE"]["J"][YEAR][M];
	console.log(podatok);}	

function Aktiv(a,n){ b=a.children[0]; ///// tie togelite funkcionalnosi NA PROFIL i u tablata CSS funcija
if(n==0){ELEmentce=document.getElementById("STatusTxT");


PROFIL_STATUS(b.checked);


}
if(n==1){ELEmentce=document.getElementById("STATS_linkce");}

if(b.checked){
ELEmentce.innerHTML="Akctiv";
ELEmentce.style="color:green;";
a.children[1].style="background-color:#2196F3;";}else{
ELEmentce.style="color:red;";
ELEmentce.innerHTML="Deactiv";
a.children[1].style="background-color:red;";}

}


//////////////////// modalo

// Get the modal
var modal_JOB = document.getElementById("myModal");
var modal_PROFIL = document.getElementById("Modal_PROFIL");

var DROPdwnBTN=document.getElementById("MENIlink");
var LOPCI=document.getElementById("Lopci");

window.onclick = function(event) {// When the user clicks anywhere outside of the modal, close it
  if (event.target == modal_JOB) {
    modal_JOB.style.display = "none";
	LOPCI.style.display="none";
	 }
  
  
  if (event.target == modal_PROFIL) {
  modal_PROFIL.style.display = "none";
  }

  
}


function MDL_PROFIL(){modal_PROFIL.style.display = "block";
a=GTD["PROFIL"]["REG"]["veri"];
if(a==true){
document.getElementById("E_status").innerHTML="verifyed";}else{
document.getElementById("E_status").innerHTML="unverified";}
}
	


function UPD_PROFILO(){
	modal_PROFIL.style="display:none;";
promSTATUS();
promeniTUKA();
promeniPRO_CONTACTO();}

function promSTATUS(){b=GTD["PROFIL"]["SETINGS"]["PROFIL_SEY"];
a=document.getElementById("PROFIL_status").value.slice(0,200);
document.getElementById("PRO_STATUS").innerHTML=a;

if(b!=a){
SJ_BASE.child("U_I_D/"+X_uID+"/PROFIL/SETINGS/PROFIL_SEY").set(a);
SJ_BASE.child("J_DB/USER_BEKAP"+USER+"/PROFIL/SETINGS/PROFIL_SEY").set(a);}}

function promeniTUKA(){
	if(FTO_url!=false){
stara_FTOname=GTD["PROFIL"]["FOTO"]["Fime"];
if(stara_FTOname!=NOVO_FOTO_iME){
document.getElementById("PROFI_pic").src=FTO_url;
SJ_BASE.child("U_I_D/"+X_uID+"/PROFIL/FOTO/Flink").set(FTO_url);
SJ_BASE.child("J_DB/USER_BEKAP"+USER+"/PROFIL/FOTO/Flink").set(FTO_url);}

}}


function promeniPRO_CONTACTO (){
	//stari vrednosti ppredo  prmenata 
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
SJ_BASE.child("U_I_D/"+X_uID+"/PROFIL/CONTACT/MYALL").set(V);
SJ_BASE.child("J_DB/USER_BEKAP"+USER+"/PROFIL/CONTACT/MYALL").set(V);

if(c_text!=C_contact_INput){a=C_contact_INput;
SJ_BASE.child("U_I_D/"+X_uID+"/PROFIL/CONTACT/C_text").set(a);
SJ_BASE.child("J_DB/USER_BEKAP"+USER+"/PROFIL/CONTACT/C_text").set(a);}

}



function BYproces(){txt="https://www.paypal.com/paypalme/MyallStar"; window.open(txt);}


function DROPdwnbtn(){
	if(LOPCI.style.display=="block"){LOPCI.style="display: none;";}else{LOPCI.style="display:block;";}}

function par(a){
if(a==0){modal_JOB.style.display="none";}else//close
if(a==1){}else//copi link /!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
if(a==2){document.getElementsByClassName("dropbtn")[0].click();}else//cancel
if(a==3){DELtablata(modal_JOB.getAttribute("j_id"))}
LOPCI.style="display: none;";}


  
function Job_Formular(){   // Praznata Job formular
//jobsemata sa se updajtira so taa od SJ da ne se zaboravi !!

JOB_SCHEMA={J_TITLE:"",J_DES:"",J_STATUS:false,J_CAT:[0],J_LOKATION:[0,0],J_ADDRESE:"",J_PEY:[0,[0]],J_TIME:[[0,0],[0,0]],J_CONTACT:["",[false]],J_JOBREF:"",

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
	JOB_SCHEMA["J_TITLE"]=    	  t[0].value;
	JOB_SCHEMA["J_DES"]=     	  t[1].value;
	JOB_SCHEMA["J_ADDRESE"]=  	  t[2].value;
	JOB_SCHEMA["J_CAT"]=     	  t[3].value;                
	JOB_SCHEMA["J_PEY"][0]=    	  t[4].value;
	JOB_SCHEMA["J_CONTACT"][0]=   t[5].value;
	JOB_SCHEMA["J_JOBREF"]=       t[6].value;
	
	J_lokacija=[0,0];
	J_lokacija[0]=document.getElementById("Drzavi").value;
	J_lokacija[1]=document.getElementById("RegionS").value;
		JOB_SCHEMA["J_LOKATION"]=J_lokacija;
	
	o=document.getElementsByClassName("SLKT");
	JOB_SCHEMA["J_TIME"][0][0]=o[0].value;
	JOB_SCHEMA["J_TIME"][0][1]=o[1].value;
	JOB_SCHEMA["J_TIME"][1][0]=o[2].value;
	JOB_SCHEMA["J_TIME"][1][1]=o[3].value;
	JOB_SCHEMA["J_PEY"][1][0] =o[4].value;
	
	return JOB_SCHEMA;}

 var DnS;       var S_DNS;         var Dr_n; var Re_n; var A_D; //// za testiraneje

function ADD_NEW_JOB(){           ///////// OK SAVE BUTTTONOT DA ADNE NOVA JOB 
                                      JOB_ID=modal_JOB.getAttribute("j_id"); 
JOB_SCHEMA=Job_Formular();         if(JOB_ID=="null"){
                           t=new Date().getTime();
                         T=t.toString(36);
                       T=T.slice(2);//kgmrv45x  ==> mrv45x
			   JOB_COD=T;}else{JOB_COD=JOB_ID;
								for(i=0;i<12;i++){ 
								JOB_SCHEMA["J_FOTO"][i]["Fname"]=GTD["JOB_LISTA"][JOB_COD]["J_FOTO"][i]["Fname"];
								JOB_SCHEMA["J_FOTO"][i]["Flink"]=GTD["JOB_LISTA"][JOB_COD]["J_FOTO"][i]["Flink"];}
			 			     }    





			   
S_DNS=USER;///+"@/";//+JOB_COD;              ///////////// !!!!!!!!!!!  editnat e @/  +@+
  DnS=USER+"#"+JOB_COD;
       
    SJ_BASE.child("U_I_D/"+X_uID+"/JOB_LISTA/"+JOB_COD).set(JOB_SCHEMA);//kreira prazno takvo JOB ime e imeto na toa childot!!
    SJ_BASE.child("U_I_D/"+X_uID+"/JOB_LINKS/J_Links/"+JOB_COD).set(DnS);
	SJ_BASE.child("U_I_D/"+X_uID+"/J_DNS/j_dns/"+JOB_COD).set(true);
	
	

	
//	SJ_BASE.child("J_DB/JOBS/"+S_DNS+"/"+JOB_COD).push("");
SJ_BASE.child("J_DB/JOBS/"+S_DNS+"/"+JOB_COD).set(JOB_SCHEMA);

Dr_n="Dr"+JOB_SCHEMA["J_LOKATION"][0];
Re_n="Re"+JOB_SCHEMA["J_LOKATION"][1];

if(JOB_SCHEMA["J_STATUS"]){A_D="A";

SJ_BASE.child("ACTIV_NAME/"+Dr_n+"/"+Re_n+"/E/0").set(true);
}else{A_D="D";}


GET_N_SET_JOBNAME(JOB_SCHEMA["J_STATUS"],"ACTIV_NAME/"+Dr_n+"/"+Re_n+"/A",DnS);

SJ_BASE.child("J_SEARCH/"+Dr_n+"/"+Re_n+"/"+A_D+"/"+S_DNS+"/"+JOB_COD).set(JOB_SCHEMA);

modal_JOB.style.display="none";F_5();}





function GET_N_SET_JOBNAME(JOBstatus,Job_parh,JOBdns){ /// ZIMA PODATOCI OD DATABAZATA I GI OBNOVUVA VIDLIVATA TABLA
LINKtxt=Job_parh;
SJ_BASE.child(LINKtxt).once("value")
  .then(function(snapshot) {
        TaaDATA =snapshot.val();

if(JOBstatus){  var I=0; for(i in TaaDATA){I=I+1;} var NOV_N_br="/"+I;
		
var updates = {}; updates[ NOV_N_br] = DnS;

SJ_BASE.child(Job_parh).update(updates);}
else{var Z=-1;
  for(i in TaaDATA){Z=Z+1; if(TaaDATA[i]==JOBdns){ SJ_BASE.child(Job_parh+"/"+Z).set(null);}  ///"""!!!!
	                break;} 
			   
		}
		
  });	

}


function STATS(A){a=A.checked;                 ///// GLAVEN SWICH PROFIL DA LOCKNUVA sednuva akcija
if(GTD["PROFIL"]["SETINGS"]["PROFIL_STATUS"]!=a){
SJ_BASE.child("U_I_D/"+X_uID+"/PROFIL/SETINGS/PROFIL_STATUS").set(a);
SJ_BASE.child("J_DB/USER_BEKAP"+USER+"/PROFIL/SETINGS/PROFIL_STATUS").set(a);

}}
var SW=document.getElementsByClassName("switch")[0].children[0];
function GETaccSTATUS(a){if(SW.checked!=a){SW.parentElement.click();}}




function puniLokalno(X,G){  //REFRESIRA NESTO VIDLIVITE ELEMENTI
	   CHEK_ADD_YEAR(X,G["PROFIL"]["BALANCE"]["J"]);//adnuva godinski bilans

GETaccSTATUS(G["PROFIL"]["SETINGS"]["PROFIL_STATUS"]);

////////// 

E_status=G["PROFIL"]["REG"]["veri"];
SND_vrf(E_status);


fotoLINK=G["PROFIL"]["FOTO"]["Flink"];

if(fotoLINK==false){
document.getElementById("PROFI_pic").src="../img/deflat.png";
}else{document.getElementById("PROFI_pic").src=fotoLINK;}
	
document.getElementById("PRO_STATUS").innerHTML=G["PROFIL"]["SETINGS"]["PROFIL_SEY"];



if(G["PROFIL"]["CONTACT"]["MYALL"]){
document.getElementsByClassName("Contact_txt")[0].style.display="none";

document.getElementById("MYALLbtn").style.display="inherit";
U="https://myall.sytes.net/"+G["PROFIL"]["CONTACT"]["C_text"];
document.getElementById("MYALLbtn").onclick = function() {window.open(U);}
}else{
	
document.getElementsByClassName("Contact_txt")[0].style.display="block";
document.getElementsByClassName("Contact_txt")[0].innerHTML=G["PROFIL"]["CONTACT"]["C_text"];}

document.getElementById("myallBOX").checked=    G["PROFIL"]["CONTACT"]["MYALL"];
document.getElementById("PROFIL_contact").value=G["PROFIL"]["CONTACT"]["C_text"];


TablaF5();

}
 
 
var GTD;  ///// da se trgne od publick bi bilo ok

function F_5(){ /// ZIMA PODATOCI OD DATABAZATA I GI OBNOVUVA VIDLIVATA TABLA
LINKtxt="U_I_D/"+X_uID;
SJ_BASE.child(LINKtxt).once("value")
  .then(function(snapshot) {
                  GTD=snapshot.val();
puniLokalno(X_uID,GTD);

  });	
}

function MDL_JOB(a){   /// LOADNUVA MODEL ZA JOB FORMULAR EDID  i adnuvanje nova
PREmodSET(a); var A="null";
       if(a){     A=a.parentElement.children[0].children[0].getAttribute("j_id");  modal_JOB.setAttribute("j_id",A);
         JOB_data();}else{DefalSET();  modal_JOB.setAttribute("j_id",A);}
	
modal_JOB.style.display="grid";}


function PREmodSET(a){///DA GI STAVI SLIKICITE ZA EDITNA  ONADUVANJE !!! NEKA STOE OVAKA 
 OKbtn(a);    if(a){
document.getElementsByClassName("InfoMode")[0].style.display="none";
document.getElementsByClassName("w3-main w3-content")[0].style.display="contents";
}else{
document.getElementsByClassName("InfoMode")[0].style.display="block";
document.getElementsByClassName("w3-main w3-content")[0].style.display="none";}}
		
function DefalSET(){/// DEFALTH SET NA JOB FORMULAR Za RABOTA.. GI RESETIRA SAMO VIDLIVITE NESTA 
document.getElementById("SHW_link").innerHTML="/"+USER+"#jobID";	
	document.getElementsByClassName("j_status")[0].children[0].checked=true;
	if(document.getElementsByClassName("j_status")[0].children[0].checked!=true){
	document.getElementsByClassName("j_status")[0].click();//lontra i klik
	}
	textove=document.getElementsByClassName("inputTXT");
	for(i=0;i<textove.length;i++){textove[i].value="";}
	
	document.getElementById("Drzavi").value=0;
    document.getElementById("RegionS").style.display="none";
	CEKIRAJ_cat(null);
	fixiraj_DrRe();
	
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

function JOB_data(){ /// EDITNA VERZIJA NA COBO ZA MODELSKO 
a=modal_JOB.getAttribute("j_id");          
THIS_JOB=GTD["JOB_LISTA"][a]; 
  S_DNS=USER;///+"@/"+a;		
document.getElementById("SHW_link").innerHTML="/"+USER+"#"+a;          
   

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
	
     document.getElementById("Drzavi").value=THIS_JOB["J_LOKATION"][0];  RegionS(THIS_JOB["J_LOKATION"][0]);
    document.getElementById("RegionS").value=THIS_JOB["J_LOKATION"][1];  fixiraj_DrRe();
		
	                 	CEKIRAJ_cat(THIS_JOB["J_CAT"]);             /////////////   !!!!!! ova ebava ??
		 
	add_FOTO_btn=document.getElementsByClassName("UPLOUDbtn");
	NoImG=document.getElementsByClassName("far fa-image blankIMG");
	Simg=document.getElementsByClassName("SHOWimg");
	                  	                                                                      
for(i=0;i<12;i++){add_FOTO_btn[i].onclick=function(){VIEW_foto_MODEL(this.parentElement.attributes.value.value,modal_JOB.getAttribute("j_id"))};
		if(THIS_JOB["J_FOTO"][i]["Flink"]!=""){
		Simg[i].style.display="block";	
		Simg[i].src=THIS_JOB["J_FOTO"][i]["Flink"];
		NoImG[i].style.display="none";}
		else{
		Simg[i].style.display="none";	
		Simg[i].removeAttribute('src');
		NoImG[i].style.display="inline-block";}
	}
	
	
	o=document.getElementsByClassName("SLKT");
	o[0].value=THIS_JOB["J_TIME"][0][0];
	o[1].value=THIS_JOB["J_TIME"][0][1];
	o[2].value=THIS_JOB["J_TIME"][1][0];
	o[3].value=THIS_JOB["J_TIME"][1][1];
	o[4].value=THIS_JOB["J_PEY"][1][0];
	
}
function fixiraj_DrRe(){// lock regions DA GI LOCKNE I RESETIRA
K=document.getElementById("Katanec"); 
a=document.getElementById("Drzavi");
b=document.getElementById("RegionS");

if((a.selectedIndex!=0)&&(b.selectedIndex!=0)){
a.disabled=true;	 b.disabled=true;    
          K.style.display="unset";
                }else{
	      K.style.display="none";
a.disabled=false;    b.disabled=false;}}
function RegionS(a){  /// RESETIRANJE NA SELEKCIJATA NA LOKACIJA NA DEFALTH	
	if(a!=0){      
document.getElementById("RegionS").style="margin: 15px;max-width:120px;";
document.getElementById("RegionS").value=0;

for(i=1;i<33;i++){
  if(i<Drzavi[a][1].length+1){                  
    document.getElementById("RegionS").children[i].style="display:block;";
    document.getElementById("RegionS").children[i].innerHTML=Drzavi[a][1][i-1];
  }else{document.getElementById("RegionS").children[i].style="display:none;";}}
  }else{document.getElementById("RegionS").style="display:none;"; OKbtn(null); }}/// da se stave value 0
 
function OKbtn(a){SAVE_btn=document.getElementById("OKbtn"); ///// SHOW HIDE KOPCETO ZA SAVE AKO NEMA REGION SELECTED
	        if(a){SAVE_btn.disabled=false; SAVE_btn.style="float:left;width: auto;margin: 10px;";}
			 else{SAVE_btn.disabled=true; SAVE_btn.style="float:left;width: auto;margin: 10px;color: dimgrey;background-color: #f0f0f0;border: unset;";}}


function VIEW_foto_MODEL(a,b){
	FOTO_model.style="display:block;";N=parseInt(a);
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
SJ_BASE.child("U_I_D/"+X_uID+"/JOB_LISTA").child(J_ID).child("J_FOTO").child(F_N).child("Fname").set(NOVO_J_FOTO_iME);
SJ_BASE.child("U_I_D/"+X_uID+"/JOB_LISTA").child(J_ID).child("J_FOTO").child(F_N).child("Flink").set(J_FOTO_url);
}
}FOTO_model.style='display:none;'; F_5();}


else{
document.getElementsByClassName("far fa-image blankIMG")[F_N].style.display="inline-block";
document.getElementsByClassName("SHOWimg")[F_N].style.display="none";
SJ_BASE.child("U_I_D/"+X_uID+"/JOB_LISTA").child(J_ID).child("J_FOTO").child(F_N).child("Fname").set("");
SJ_BASE.child("U_I_D/"+X_uID+"/JOB_LISTA").child(J_ID).child("J_FOTO").child(F_N).child("Flink").set("");

FTO_J_preview.style="display:none;";
document.getElementById("noFOTO").style="display:block;";F_5(); }

}

//\\\\FOTO MODEL END AKTION /////


///////////////////////////////////////////////balance model  
var BLNC_M=document.getElementById("Modal_BALANCE");BLNC_M.style="z-index:3;";


function OPEN_BALANCE(){BLNC_M.style.display="block";
	XX="ova se dodava sea !!";
	PUNI_T_BALANCE(XX);                          //uerskoto ime
}
///////////////////////////////


///////////////////////////////
function PUNI_T_BALANCE(a){/// a parametar
S_MESEC_SALDO=	document.getElementsByClassName("B_SS")[0];
UPLATA=			document.getElementsByClassName("B_IN")[0];
MAX_F_U=		document.getElementsByClassName("B_MMFU")[0];
E_MESEC_SALDO=	document.getElementsByClassName("B_ES")[0];


}

///////////////////////////////////////////////////////

function PROFIL_STATUS(a){
g=GTD["PROFIL"]["SETINGS"]["PROFIL_STATUS"].value;	
T="U_I_D/"+X_uID;
t="J_DB/USER_BEKAP/"+USER;
G="/PROFIL/SETINGS/PROFIL_STATUS";
if(a!=g){
SJ_BASE.child(T+G).set(a);
SJ_BASE.child(t+G).set(a);}}

function T_J_switch(a){V=a.checked; var a_d;  
sifra=a.parentElement.parentElement.children[0].children[0].getAttribute("j_id");
SEGASNOTO=GTD["JOB_LISTA"][sifra]; SEGASNOTO["J_STATUS"]=V; s_dns=USER+"/"+sifra;

var Contra_AD;if(V){a_d="A";Contra_AD="D";}else{a_d="D";Contra_AD="A";}

Dr="Dr"+GTD["JOB_LISTA"][sifra]["J_LOKATION"][0];
Re="Re"+GTD["JOB_LISTA"][sifra]["J_LOKATION"][1];


ADD_KODinJD="J_DB/JOBS/"+s_dns;
SJ_BASE.child(ADD_KODinJD).set(SEGASNOTO);

////////////////////////////////////////   da se sredi J_DB    ////  !!!
ADD_KOD="J_SEARCH/"+Dr+"/"+Re+"/"+a_d+"/"+s_dns;
SJ_BASE.child(ADD_KOD).set(SEGASNOTO);

DEL_KOD="J_SEARCH/"+Dr+"/"+Re+"/"+Contra_AD+"/"+s_dns;
SJ_BASE.child(DEL_KOD).set(null);

SJ_BASE.child("U_I_D/"+X_uID+"/JOB_LISTA/"+sifra+"/J_STATUS").set(V);

F_5();	}   


function DELtablata(a){    ///////// DELETE BUTNON AKCIJAA   G===GTD
if(a){ 
	
D_r="Dr"+GTD["JOB_LISTA"][a]["J_LOKATION"][0];
R_e="Re"+GTD["JOB_LISTA"][a]["J_LOKATION"][1];
Sdns=USER+"/"+a;
var ad;if(GTD["J_STATUS"]){ad="A";}else{ad="D";}
ADD_KOD="J_SEARCH/"+D_r+"/"+R_e+"/"+ad+"/"+Sdns;
SJ_BASE.child(ADD_KOD).set(null);	


ADD_KOD_JD="J_DB/JOBS/"+Sdns;
SJ_BASE.child(ADD_KOD_JD).set(null);	
		
		
	SJ_BASE.child("U_I_D/"+X_uID+"/JOB_LISTA/"+a).set(null);//kreira prazno takvo JOB ime e imeto na toa childot!!

staraTabela=GTD["JOB_LINKS"]["J_Links"];           //////////// 

for(i=0;i<staraTabela.length;i++){           /////////////// ne e bas testirano ova ama neka stoe
	if(staraTabela[i]==a){staraTabela[i]=null;
	
novaTabela=staraTabela;
SJ_BASE.child("U_I_D/"+X_uID+"/JOB_LINKS/J_Links").set(novaTabela);

		break;}}

}TablaF5();
LOPCI.style="display: none;";modal_JOB.style.display="none";}

function TablaF5(){ 
	LINKtxt="U_I_D/"+X_uID+"/JOB_LISTA";
SJ_BASE.child(LINKtxt).once("value")
  .then(function(snapshot) {
                  G=snapshot.val();
      PUNItablata(G);
  });		
}

function PUNItablata(a){ MeniPRESET(); 
           OGLASmeni=a;  
	N=0;									REZkutati =document.getElementsByClassName("REZLUTAT");
	for(i in OGLASmeni){SIFRA=i; cl();      REZkutati[N].children[0].setAttribute("j_id",SIFRA); 
	
	REZkutati[N].children[0].innerHTML=OGLASmeni[SIFRA]["J_TITLE"];
	REZkutati[N].children[1].innerHTML=OGLASmeni[SIFRA]["J_ADDRESE"];
	REZkutati[N].children[2].innerHTML=OGLASmeni[SIFRA]["J_DES"];
	REZkutati[N].children[3].innerHTML=OGLASmeni[SIFRA]["J_PEY"];
	REZkutati[N].children[4].innerHTML=OGLASmeni[SIFRA]["J_JOBREF"];
	REZkutati[N].children[5].innerHTML=OGLASmeni[SIFRA]["J_CAT"];
	REZkutati[N].children[6].innerHTML=OGLASmeni[SIFRA]["J_CONTACT"];

REZkutati[N].nextElementSibling.children[0].checked=OGLASmeni[SIFRA]["J_STATUS"]; N=N+1;}
	
	TablaTXT();}
	
function cl(){var itm = document.getElementById("BingoLinija").children[0];
var cln = itm.cloneNode(true);
document.getElementsByClassName("vertical-menu")[0].appendChild(cln);}

function MeniPRESET(){N=document.getElementsByClassName("vertical-menu")[0].childElementCount;
	for(i=1;i<N;i++){document.getElementsByClassName("vertical-menu")[0].children[1].remove();}}
	
function TablaTXT(){N=document.getElementsByClassName("vertical-menu")[0].childElementCount;
txt="No job in joblista..";if(N>1){txt="Smart search with ctrl+F";}
document.getElementsByClassName("vertical-menu")[0].children[0].innerHTML=txt;}	
	
//\\\\\\\\\\\\   TABLATA UPDEJTSKI FUNKCI ////////
