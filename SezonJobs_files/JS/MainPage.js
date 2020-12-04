var INFO=document.getElementById("info");
var SLKT=[0,0];
var SiteRaboti;// gi fakja tie stringovite od A i gi stava u niza
var DnS=[];//gi onade za zimanje na selektiranta rabota A/U/S
var Tabla=document.getElementById("accordion3");



	var load = function () {/// load bodito neka stoe ovaka
      var accordion3 = new A11yAccordion({
        parentSelector: '#accordion3',
        hiddenLinkDescription: '',
        showOne: true,
        searchActionType: 'collapse',
      
	  
	  
	  overallSearch: true
      });accordion3.uncollapseRow(0);
//document.getElementById("a11yAccordion-row-0").id="adios";
//document.getElementById("adios").classList="adios";
//document.getElementsByClassName("adios")[0].style="display:none;";
//document.getElementsByClassName("bingo")[0].style="display:none;";
document.getElementById("a11yAccordion-searchPanel").style="margin-top: -10px;";

document.getElementById("a11yAccordion-searchPanel").children[0].oninput=function(){
	
	CEKeyWORD(this.value);};


AdLISNER(); 
ShowTIME(CAT_SELECT);
};



function cl(){var itm = document.getElementsByClassName("a11yAccordionItem")[0];
var cln = itm.cloneNode(true);cln.children[0].classList="a11yAccordionItemHeader";
Tabla.appendChild(cln);}


////////////////////////////// funkci na preiset  prvite 2

function RegionS(a){ if(a!=0){      /// da se nasteli na takvo od kade bi zimalo originalni drzavi da ne se zaboravi
document.getElementById("RegionS").style="margin: 15px;float:right;max-width:120px;";
document.getElementById("RegionS").value=0;

SLKT[0]=parseInt(a);

for(i=1;i<33;i++){
  if(i<Drzavi[a][1].length+1){
    document.getElementById("RegionS").children[i].style="display:block;";
    document.getElementById("RegionS").children[i].innerHTML=Drzavi[a][1][i-1];
  }else{
    document.getElementById("RegionS").children[i].style="display:none;";}}
}else{SERCtabele(0);
 document.getElementById("RegionS").style="display:none;";}}
 

function SERCtabele(a){  
if(a!=0){Tabla.style="display: contents;"; document.getElementById("CAT_SELEKT").style.display="block ruby";
defalNULA(); 

SLKT[1]=parseInt(a);  GET_DR_RE(SLKT);}
   else{Tabla.style="display:none;";document.getElementById("CAT_SELEKT").style.display="none";}}



function CEKeyWORD(a){ 


 if(a.length>2){  ShowTIME(CAT_SELECT);

for(i=1;i<Tabla.childElementCount;i++){
if(Tabla.children[i].innerHTML.includes('<mark class')){
  if(Tabla.children[i].style!="display:block;"){
     Tabla.children[i].style="display:block;";}
}else{
  if(Tabla.children[i].style!="display:none;"){
     Tabla.children[i].style="display:none;";}}
	 
 }	 
}else{
for(i=1;i<Tabla.childElementCount;i++){
  if(Tabla.children[i].style!="display:block;"){
     Tabla.children[i].style="display:block;";}}
 }



}


function GET_DR_RE(a){
chekURL="ACTIV_NAME/Dr"+a[0]+"/Re"+a[1]+"/A";

SJ_BASE.child(chekURL).once("value")
  .then(function(snapshot) {CHEK = snapshot.val();
	
	if(CHEK!=undefined){  SiteRaboti=UBAV(CHEK); Skladiraj(SiteRaboti); GET_JOB(DnS);  }else{
JobN.innerHTML=" 0 jobs";TuriSTALAZI(0);
  }});
}

function UBAV(a){ var UBAVariya=[]; //// da se ture i vo glavnoto takvo ova
	for(i in a){UBAVariya.push(a[i]);} return UBAVariya;}
	
function Skladiraj(a){ var CelSTR; var S_1; var S_2;//// da se ture i vo glavnoto takvo ova
	for(i in a){CelSTR=a[i];  S_1=CelSTR.slice(0,-7); S_2=CelSTR.slice(CelSTR.length-6);
		    DnS[i]=[S_1,S_2];}
	      L=DnS.length;
TuriSTALAZI(L);
	
}
var Limit;
function GET_JOB(a){Limit=0;
	for(i in a){Q=a[i][0];q=a[i][1];GetJobALL(Q,q);Limit=Limit+1}
	JobN.innerHTML=" "+Limit+" jobs";}

function GetJobALL(a,b){
URL="J_DB/JOBS/"+a+"/"+b;
SJ_BASE.child(URL).once("value")
  .then(function(snapshot) {A = snapshot.val();if(A!=undefined){ PreDef(N); UPDEJT_JOB(A);N=N+1;}});}
  
  
var N;
function UPDEJT_JOB(a){BB=a["J_CAT"].toString().slice(0,-1).split(' ');//.join('_');

for(i in BB){CAT.classList.add(BB[i]);}
	TITLE.innerHTML=a["J_TITLE"];

	DESC.innerHTML=a["J_DES"];
//	ADRES.
//	PEU.
	FotoN.innerHTML=a["FOTO_N"]+" <i class='fas fa-camera'></i>";
}
var CAT,TITLE,DESC,ADRES,PEU,FotoN;

function PreDef(a){
	TITLE=document.getElementsByClassName("TITLE")[a];
	CAT=TITLE.parentElement.parentElement.parentElement;
	DESC=document.getElementsByClassName("DESC")[a];
//	ADRES=document.getElementsByClassName("")[a];
//	PEU=document.getElementsByClassName("")[a];
	FotoN=document.getElementsByClassName("FtoN")[a];
//	=document.getElementsByClassName("")[a];
//	=document.getElementsByClassName("")[a];
//	=document.getElementsByClassName("")[a];
//a["J_ADDRESE"]

//a["J_CONTACT"]: Array [ "", (1) […] ]
//a["J_FOTO"]: Array(12) [ {…}, {…}, {…}, … ]
///a["J_JOBREF"]
//a["J_LOKATION"]: Array [ "1", "1" ]
//a["J_PEY"]: Array [ "", (1) […] ]
//a["J_STATUS"]: true
//a["J_TIME"]: Array [ (2) […], (2) […] ]


//document.getElementsByClassName("info")[N].innerHTML=;
//document.getElementsByClassName("LINK")[N].innerHTML=;


//Tabla.children[j].children[0].innerHTML="jas sum brojkata "+j+" aadaaa";
}


var JobN;function AdLISNER(){
JobN=document.getElementsByClassName("caret")[0];
JobN.classList.add("JobN");

b=document.getElementsByClassName("btn btn-default dropdown-toggle")[0];
b.onclick=function(){ShowTIME(CAT_SELECT);}
var cekbox=document.getElementsByClassName("dropdown-menu")[0].childNodes;
window.onclick = function(event) {if (event.target != cekbox) {ShowTIME(CAT_SELECT)}};}


function FilterN(){
a=document.getElementsByClassName("BINGO");W=0;
for(i=0;i<a.length-1;i++){if(a[i].style.display=="block"){W=W+1;}}
t=" "+W+" jobs";
JobN.innerHTML=t;}

var C;
function ShowTIME(c){A=document.getElementsByClassName("BINGO"); 
if(c!=""){c=c.slice(0,-1); 
C=c.split(' ');//.join('_');
for(i=0;i<A.length-1;i++){B=A[i];


	for(q in C){
		for(p in C){			
	if(B.classList.value.includes(C[p])){B.style="display:block;";break;}else{B.style="display:none;";}
        }}
		
		
}}else{
	
for(i=0;i<A.length-1;i++){A[i].style="display:block;";} } 
FilterN();}
  
function TuriSTALAZI(a){N=0;           defalNULA();
	allStalazi=document.getElementsByClassName("a11yAccordionItem");
	for(I=0;I<allStalazi.length-1;I++){allStalazi[I].remove();}
	for(I=0;I<allStalazi.length-1;I++){allStalazi[I].remove();}

	if(a){for(i=0;i<a;i++){cl();}
	
if(document.getElementById("a11yAccordion-noResultsItem")!=undefined){document.getElementById("a11yAccordion-noResultsItem").remove();}

if(document.getElementById("a11yAccordion-searchPanel")!=undefined){document.getElementById("a11yAccordion-searchPanel").remove();}
load();

if(document.getElementById("a11yAccordion-noResultsItem")!=undefined){document.getElementById("a11yAccordion-noResultsItem").remove();}

}

}
	

  
  
  
PreSet();  
function PreSet(){ 
document.getElementById("Drzavi").value=0;
document.getElementById("RegionS").value=0;
	
SERCtabele(0);
//TuriSTALAZI(0);
}