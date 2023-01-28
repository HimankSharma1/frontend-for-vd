var audio = new Audio('age.mp3');
audio.play();
var focus_age=1;
var age_no = "";
var age_entry = document.querySelector("#numberinput");
var otp = "";
var otp_no = document.querySelector("#otpinput");

document.querySelector('#numberbutton').disabled=true;
age_entry.innerHTML = age_no;
function add_num(num, add, del, clr) {
    document.getElementById("numberinput").style.color = "black";
    if (focus_age == 1){
        if (add == 1) {
            document.querySelector('#numberbutton').disabled=false;
            if (String(age_no).length != 2) {
                age_no = age_no + num;
            }
        }
        if (del == 1) {
            age_no = age_no.substring(0, age_no.length - 1);
            if (String(age_no).length == 0) {
                document.querySelector('#numberbutton').disabled=true;
                
            }
        }
        if (clr == 1) {
            document.querySelector('#numberbutton').disabled=true;
            
            age_no = "";
        }
        age_entry.innerHTML = age_no;
    }
    
}

function sendage(){
    window.location.href='../virtual_program/index.html'
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
        focus_age=0;
    }
//   // do something with the data here
  // })
  // .catch(error => {
  //   console.log(error);
  // });

 focus_otp=1;
 focus_phone=0;
}