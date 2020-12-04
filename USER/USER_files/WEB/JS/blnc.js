
///////////////////////////////////////////////balance model           //// da se trgne tie //  
function DAssetrgneOdTestMode(){
var BLNC_M=document.getElementById("Modal_BALANCE");BLNC_M.style="z-index:3;";
}

function OPEN_BALANCE(){BLNC_M.style.display="block";
	XX="ova se dodava sea !!";
	PUNI_T_BALANCE(XX);                          //uerskoto ime
}
///////////////////////////////



function PreDEEF(){
S_MESEC_SALDO=	document.getElementsByClassName("B_SS");
UPLATA=			document.getElementsByClassName("B_IN");
MAX_F_U=		document.getElementsByClassName("B_MMFU");
E_MESEC_SALDO=	document.getElementsByClassName("B_ES");}



///////////////////////////////
function PUNI_T_BALANCE(a){
MSC={1:"(Jan)",2:"(Feb)",3:"(Mar)",4:"(Apr)",
5:"(May)",6:"(Jun)",7:"(Jul)",8:"(Aug)",
9:"(Sep)",10:"(Oct)",11:"(Nov)",12:"(Dec)"}

var dat=new Date();MON=dat.getMonth(); m=MON+1; 
for(i=0;i<4;i++){                    var M="M_"+(m-i); var M1="M_"+(m+1-i);
S_MESEC_SALDO[i].innerHTML=MSC[m-i]+" "+	a[M]["S_M_S"];
UPLATA[i].innerHTML=						a[M]["UPLATA"];	
MAX_F_U[i].innerHTML=						a[M]["MMFU"];
E_MESEC_SALDO[i].innerHTML= 				a[M1]["S_M_S"];
}
}

///////////////////////////////////////////////////////


/// empty
var TestM0={M_1:{S_M_S:0,MMFU:0,UPLATA:0},M_2:{S_M_S:0,MMFU:0,UPLATA:0},M_3:{S_M_S:0,MMFU:0,UPLATA:0},M_4:{S_M_S:0,MMFU:0,UPLATA:0},M_5:{S_M_S:0,MMFU:0,UPLATA:0},M_6:{S_M_S:0,MMFU:0,UPLATA:0},M_7:{S_M_S:0,MMFU:0,UPLATA:0},M_8:{S_M_S:0,MMFU:0,UPLATA:0},M_9:{S_M_S:0,MMFU:0,UPLATA:0},M_10:{S_M_S:0,MMFU:0,UPLATA:0},M_11:{S_M_S:0,MMFU:0,UPLATA:0},M_12:{S_M_S:0,MMFU:0,UPLATA:0}};


var TestMn={M_1:{S_M_S:0,MMFU:0,UPLATA:0},M_2:{S_M_S:0,MMFU:0,UPLATA:0},M_3:{S_M_S:0,MMFU:0,UPLATA:0},M_4:{S_M_S:0,MMFU:0,UPLATA:0},M_5:{S_M_S:0,MMFU:0,UPLATA:0},M_6:{S_M_S:0,MMFU:0,UPLATA:0},M_7:{S_M_S:0,MMFU:0,UPLATA:0},M_8:{S_M_S:0,MMFU:0,UPLATA:0},M_9:{S_M_S:0,MMFU:0,UPLATA:0},M_10:{S_M_S:0,MMFU:0,UPLATA:0},M_11:{S_M_S:0,MMFU:0,UPLATA:0},M_12:{S_M_S:0,MMFU:0,UPLATA:0}};



///sega sme  mesec maj
function MestiMESEC(a){
	
a["M_1"]["S_M_S"]=0;
a["M_1"]["MMFU"]=0;
a["M_1"]["UPLATA"]=50;

a["M_2"]["S_M_S"]=50;
a["M_2"]["MMFU"]=5;
a["M_2"]["UPLATA"]=0;

a["M_3"]["S_M_S"]=46.25;
a["M_3"]["MMFU"]=12;
a["M_3"]["UPLATA"]=0;

a["M_4"]["S_M_S"]=37.25;
a["M_4"]["MMFU"]=8;
a["M_4"]["UPLATA"]=0;

a["M_5"]["S_M_S"]=31.25;
a["M_5"]["MMFU"]=25;
a["M_5"]["UPLATA"]=0;

a["M_6"]["S_M_S"]=10;
a["M_6"]["MMFU"]=10;
a["M_6"]["UPLATA"]=10;

a["M_7"]["S_M_S"]=10;
a["M_7"]["MMFU"]=10;
a["M_7"]["UPLATA"]=10;

a["M_8"]["S_M_S"]=10;
a["M_8"]["MMFU"]=10;
a["M_8"]["UPLATA"]=10;

a["M_9"]["S_M_S"]=10;
a["M_9"]["MMFU"]=10;
a["M_9"]["UPLATA"]=10;

a["M_10"]["S_M_S"]=33;
a["M_10"]["MMFU"]=12;
a["M_10"]["UPLATA"]=0;

a["M_11"]["S_M_S"]=25;
a["M_11"]["MMFU"]=1;
a["M_11"]["UPLATA"]=0;

a["M_12"]["S_M_S"]=0;
a["M_12"]["MMFU"]=0;
a["M_12"]["UPLATA"]=0;

}
