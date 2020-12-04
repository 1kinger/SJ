
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

ScreenRedisng();function ScreenRedisng(){	
if(screen.width<400){//Velicina na scrinot pravi redisajn nekoj
document.getElementById("PRO_STATUS").style="font-size:16px;position:absolute;z-index:1;display:table-caption;text-align:center;left: 20%;width:60%;"}else{
document.getElementById("PRO_STATUS").style="position:absolute;z-index:1;display:table-caption;text-align:center;left: 20%;width:60%;"}}

var EROR_txt=document.getElementById("ErorTXT");
var p0,p1,p2;var Par=[p0,p1,p2]; for(i=0;i<3;i++){Par[i]=false;}

function Imenik (a){b="https://sezonjobs.sytes.net/";if(a.length>0){d="";}else{d="1kinger";}	
     document.getElementById("TitLINK").innerHTML=b+d+a;
if(a.length<4){EROR_txt.innerHTML="Username must be longer than 3 charakters";}
else{CEK_singupUSERNAME(a);}}

function CEK_singupUSERNAME(a){Par[0]=false;if(OKname(a)){snd2ckU(a);}
else{EROR_txt.innerHTML="los karakter";}}

function snd2ckU(a){SJ_BASE.child("REG@/user/"+a).once("value").then(function(snapshot){
B_data = snapshot.val();if(B_data){USER_FREE(false);}else{USER_FREE(true);}});}

function CKMail(A){if(A.length>4){a=A.slice(0,A.length-4);Par[1]=false;if(OKname(a)){snd2ckM(a);}
else{EROR_txt.innerHTML="Unsuported email type";}}else{EROR_txt.innerHTML="";}}

function snd2ckM(a){SJ_BASE.child("REG@/email/"+a).once("value").then(function(snapshot){
B_data = snapshot.val();if(B_data){MAIL_FREE(false);}else{MAIL_FREE(true);}});}

function USER_FREE(a){if(a)     {EROR_txt.innerHTML="";Par[0]=true;}else{EROR_txt.innerHTML="this username is alredy taken";    Par[0]=false;}}
function MAIL_FREE(a){if(a)     {EROR_txt.innerHTML="";Par[1]=true;}else{EROR_txt.innerHTML="this email is alredy used ";       Par[1]=false;}}
function PAS_L(a){if(a.length>7){EROR_txt.innerHTML="";Par[2]=true;}else{EROR_txt.innerHTML="pasword must be over 8 charakters";Par[2]=false;}}



function OKname(a){ ///// CEKIRA ZABRANETI KARAKTERI
if((a.includes("%"))||(a.includes("/"))||
   (a.includes("#"))||(a.includes("."))||
   (a.includes(","))||(a.includes("`"))||
   (a.includes("|"))||(a.includes("'"))||
   (a.includes('"'))||(a.includes(" "))||
   (a.includes("["))||(a.includes("]"))||(a.includes("USER")))
{return false;}else{EROR_txt.innerHTML="";return true;}}

function SUP(a){ if(a){
	EROR_txt.display="block";
    document.getElementById("Sup").style.display = "block";
	document.getElementById("Lin").style.display = "none";}else{
	EROR_txt.display="none";
    document.getElementById("Sup").style.display = "none";
	document.getElementById("Lin").style.display = "block";}} 

 firebase.auth().onAuthStateChanged(function(user) {

  if (user) { var user = firebase.auth().currentUser;// User is signed in.
    
    document.getElementById("user_div").style.display = "contents";
    document.getElementById("user_div").style.width = 37+"%";
    document.getElementById("login_div").style.display = "none";

     START_AKCIJA(user);}/// logira star user
    
   else {// No user is signed in.
    document.getElementById("user_div").style.display = "none";
    document.getElementById("user_div").style.width = 73+"%";
    document.getElementById("login_div").style.display = "block";}
  
  
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

function logout(){           firebase.auth().signOut();
  
document.getElementById("email_field_1").innerHTML="";
document.getElementById("password_field_1").innerHTML="";
document.getElementById("email_field_2").innerHTML="";
document.getElementById("password_field_2").innerHTML="";
  SUP(false);
  
}

function SingUP(){
	
	if((Par[0])&&(Par[1])&&(Par[2])){
  var u = document.getElementById("username_field").value;
  var email = document.getElementById("email_field_2").value;  
  var password = document.getElementById("password_field_2").value;
	
firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});



}else{if(Par[0]!=true){TXTO="heyy dude take other username..";}else
      if(Par[1]!=true){TXTO="this email is unvaeble for sign up..";}else
                            {TXTO="paswort to short,, dude comone think somthink long";}
          EROR_txt.innerHTML=TXTO;}}


function SND_vrf(a){var user = firebase.auth().currentUser;
	if(a==0){
user.sendEmailVerification().then(function() {
  // Email sent.
  
  
}).catch(function(error) {
  // An error happened.
});

}

if (user.emailVerified) {
if(a!=true){SJ_BASE.child("U_I_D/"+X_uID+"/PROFIL/REG/veri").set(true);}}
}


////////////////////////////////////////////////////////////////////////

function ADNI_USER(u,e,UI_X){SJ_NEW={
PROFIL:{
	USER:{0:"0"},
	FOTO:{Fime:"",Flink:false,FMMAX:0},
	REG:{ID:"",email:"",veri:0},
	UserLink:{URL:"",URL_status:false},
	SETINGS:{IME:"",PROFIL_STATUS:true,PROFIL_SEY:""},
	CONTACT:{C_text:"",MYALL:false},
	BALANCE:{ KUPON_COD:{0:"kupon_STATUS"},J:{0:"0"}}
	},
JOB_LISTA:{},
JOB_LINKS:{J_Links:[""]},
J_DNS:{j_dns:["ADDup"]}};

User_BEKAP={
PROFIL:{
	USER:{0:"0"},
	FOTO:{Fime:"",Flink:false,FMMAX:0},
	REG:{ID:"",email:"",veri:0},
	UserLink:{URL:"",URL_status:false},
	SETINGS:{IME:"",PROFIL_STATUS:true,PROFIL_SEY:""},
	CONTACT:{C_text:"",MYALL:false},
	BALANCE:{ KUPON_COD:{0:"kupon_STATUS"},J:{0:"0"}}
	}};

JOBS_BEKAP={
PROFIL:{
	USER:{0:"0"},
	JOB_LISTA:{J_Lista:[""]},
	JOB_LINKS:{J_Links:[""]},
	J_DNS:{j_dns:["ADDup"]}}};



// glavnoto e ovaa !!
SJ_BASE.child("U_I_D/"+UI_X).set(SJ_NEW);

                     var Jn=new Date();
          var YEARn="J_"+Jn.getUTCFullYear();
ADD_YEAR(UI_X,YEARn);
                                            
SJ_BASE.child("U_I_D/"+UI_X+"/PROFIL/USER").set(u);
                                                  em4=e.slice(0,e.length-4);
SJ_BASE.child("U_I_D/"+UI_X+"/PROFIL/email4").set(em4);
SJ_BASE.child("U_I_D/"+UI_X+"/PROFIL/REG/email").set(e);



//// ova e taj za bekap
SJ_BASE.child("J_DB/USER_BEKAP/"+u).set(User_BEKAP);
SJ_BASE.child("J_DB/USER_BEKAP/"+u+"/PROFIL/USER").set(u);
SJ_BASE.child("J_DB/USER_BEKAP/"+u+"/PROFIL/REG/email").set(e);


                         
SJ_BASE.child("REG@/email/"+em4).set(true);
SJ_BASE.child("REG@/user/"+u).set(true);

 

}


