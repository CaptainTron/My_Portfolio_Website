// This Piece of code is to validate the entered e-mail address
 
function validateemail(){
  let email_id = document.getElementById('E-mail').value
  const regex_pattern =      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
  if (regex_pattern.test(email_id)) {
    document.getElementById('Emailerror').innerHTML = ""
      // console.log('The email address is valid');
  }
  else {
    document.getElementById('Emailerror').innerHTML = "Not a correct E-Mail Address"
      // console.log('The email address is not valid');
      return
  }
}







// Form validation javascript code here
let fullname = document.getElementById('fname')
let subjects = document.getElementById('subject')
let text = document.getElementById('textbody')
let email = document.getElementById('E-mail')

function formvalidation(){
  let flag = 0;
    if(fullname.value==""){ 
    document.getElementById('fnameerror').innerHTML = "Full_Name Field Can't be blank";
    return
    }
    else{
      document.getElementById('fnameerror').innerHTML = "";
    }

    if(email.value==""){
      document.getElementById('Emailerror').innerHTML = "This Field Can't be Blank"
      return
    }
    else{
      document.getElementById('Emailerror').innerHTML = "";
    }
    if(subjects.value==""){ 
      document.getElementById('subjecterror').innerHTML = "Subject Field Can't be blank";
      return
      }
      else{
        document.getElementById('subjecterror').innerHTML = "";
      }


     if(text.value.length <= 150){
      document.getElementById('texterror').innerHTML = "Word length Should be greater than 150";
      return
     }
     else{
      document.getElementById('texterror').innerHTML = "";
     }

}
// Form Declaration Ends here
// Form declaration ends here

