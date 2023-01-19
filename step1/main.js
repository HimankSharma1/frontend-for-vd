var audio = new Audio('namaste_female.mp3');
audio.play();
var focus_otp=0;
var focus_phone=1;

var phone_no = "";
var phone_entry = document.querySelector("#numberinput");
var otp = "";
var otp_no = document.querySelector("#otpinput");

document.querySelector('#numberbutton').disabled=true;
phone_entry.innerHTML = phone_no;
function add_num(num, add, del, clr) {
  document.getElementById("numberinput").style.color = "black";
  if (focus_phone == 1){
    if (add == 1) {
document.querySelector('#numberbutton').disabled=false;
      if (String(phone_no).length != 10) {
        phone_no = phone_no + num;
      }
    }
  if (del == 1) {
    phone_no = phone_no.substring(0, phone_no.length - 1);
    if (String(phone_no).length == 0) {
document.querySelector('#numberbutton').disabled=true;
      
    }
  }
  if (clr == 1) {
document.querySelector('#numberbutton').disabled=true;

    phone_no = "";
  }
  // console.log(String(phone_no))
  phone_entry.innerHTML = phone_no;
}

if (focus_otp==1){
    if (add == 1) {
        if (String(otp).length != 10) {
          otp = otp + num;
        }
      }
    if (del == 1) {
      otp = otp.substring(0, otp.length - 1);
    }
    if (clr == 1) {
      otp = "";
    }
    // console.log(String(phone_no))
    otp_no.innerHTML = otp;
}
}

function sendphone_num(){
  // url='https://himank.pythonanywhere.com/phoneno/number/'+phone_no
  // fetch(url)
  // .then(response => {
  //   if (!response.ok) {
  //     throw new Error('HTTP error, status = ' + response.status);
  //   }
  //   return response.json();
  // })
  // .then(data => {
    data=1;
    if(data==1){
      audio = new Audio('otp.mp3');
      audio.play();
      focus_otp=1;
      focus_phone=0;
    }
    else{
      audio = new Audio('wrong_num.mp3');
      audio.play();
      document.getElementById("numberinput").style.color = "red";
    }
  //   // do something with the data here
  // })
  // .catch(error => {
  //   console.log(error);
  // });


}
// Get the element with the animation


// Create the event listener function
function handleAnimationEnd() {
  document.querySelector("#buttonmask").classList.remove('buttoncooldown')
  document.querySelector("numberbutton").disabled =false;
}

// Attach the event listener to the element
document.querySelector("#buttonmask").addEventListener("animationend", handleAnimationEnd);

function play_animation(){
  document.querySelector("#buttonmask").classList.add('buttoncooldown')
  document.querySelector("numberbutton").disabled=true
}
function send_otp(){
  // url='https://himank.pythonanywhere.com/phoneno/otp/'+ otp
  // fetch(url)
  // .then(response => {
  //   if (!response.ok) {
  //     throw new Error('HTTP error, status = ' + response.status);
  //   }
  //   return response.json();
  // })
  // .then(data => {
    data=1
    if(data==1){
      // audio = new Audio('otp.mp3');
      // audio.play();
      ;window.location.href='../step2/index.html'
    }
    else{
      audio = new Audio('wrong_otp.m4a');
      audio.play();
      play_animation()
      document.getElementById("otpinput").style.color = "red";
    }
  // })
  // .catch(error => {
  //   console.log(error);
  // });
  //   // audio = new Audio('otp.mp3');
  //   // audio.play();

 focus_otp=1;
 focus_phone=0;
}