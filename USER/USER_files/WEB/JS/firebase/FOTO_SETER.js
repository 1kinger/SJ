/////// FOTO MODEL AKCIJA FRONTEND AND BACKEND (prakja fotka do databaza) \\\\\\\\\

var FOTO_model=document.getElementById("Modal_FOTOset");FOTO_model.style="z-index:3;";
var FTO_J_preview=document.getElementsByClassName("View_FOTO")[0];

var J_FOTO_url=false; var NOVO_J_FOTO_iME=null;
var UPD_PicJ_FOTO=document.getElementById("fileButonJ_FOTO");

UPD_PicJ_FOTO.addEventListener("change", function(e){   J_FOTO_url=false; NOVO_J_FOTO_iME=null;
	

 F_N=FOTO_model.getAttribute("j_f_n");
J_ID=FOTO_model.getAttribute("job_id");	
	
	var file = e.target.files[0];
	/////////////// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
var storageRef= firebase.storage().ref().child("USER_pic/"+X_uID+"/JOB_ID/"+J_ID+"/"+file.name);

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

SJ_BASE.child("U_I_D/"+X_uID+"/JOB_LISTA").child(J_ID).child("J_FOTO").child(F_N).child("Fname").set(file.name);

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


///////////////////////////////////////////////////////////////////


/////////////////   UPLUDIRA PRFILSKA FOTO MODEL \\\\\\\\\/
var FTO_UPLOAD_view=document.getElementsByClassName("ProfilFOTOpreview")[0];
var FTO_url=false; var NOVO_FOTO_iME=null;

var uploadPROCENT=0;
var UPD_Pic=document.getElementById("fileButonP_FOTO");
UPD_Pic.addEventListener("change", function(e){
	
	var file = e.target.files[0];
	//////////////  !!!!!!!!!!!!!!!!!!!!!!! dali da se stavi userska papka ?? pred uid
var storageRef= firebase.storage().ref().child("USER_pic/"+X_uID+"/PROFIL_pic/"+file.name);

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

SJ_BASE.child("U_I_D/"+X_uID+"/PROFIL/FOTO/Fime").set(file.name);

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

//\\\\\\\\\\ END PROFIL FOTKA MODELS FOTO MODEL ////////