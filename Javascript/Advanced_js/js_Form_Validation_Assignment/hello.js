//to display error msg
function printError(elemId,hintMsg){
    document.getElementById(elemId).innerHTML=hintMsg;
}

//validation form

function validateForm(){

    var name=document.contactForm.name.value;
    var email=document.contactForm.email.value;
    var mobile=document.contactForm.mobile.value;
    var country=document.contactForm.country.value;
    var gender=document.contactForm.gender.value;
    var hobbies=[];
    var checkboxes=document.getElementsByName("hobbies[]");

    for(var i=0;i<checkboxes.length;i++){
        if(checkboxes[i].checked){
            hobbies.push(checkboxes[i].value);
        }
    }

    var nameErr=emailErr=mobileErr=countryErr=genderErr=true;

    if(name == ""){  //mandatory logic check

        printError("nameErr","Please enter your name");
    }
    else {    //type of value check
        var regex=/^[a-zA-Z\s]+$/;
        if(regex.test(name)===false){
            printError("nameErr","Please enter valid name");

        }
        else{
            printError("nameErr","");
            nameErr=false;
        }
    }

    if(email==""){
        printError("emailErr","Please enter Email, it is mandatory");
    }
    else{
        var regex=/^\S+@\S+\.\S+$/;
        if(regex.test(email)===false){
            printError("emailErr","Please enter valid email ID");
        }
        else{
            printError("emailErr","");
            emailErr=false;
        }
    }

    if(mobile==""){
        printError("mobileErr","Please enter Mobile Number, It is Mandatory");

    }
    else{
        var regex=/^[1-9]\d{9}$/;

        if(regex.test(mobile)===false){
            printError("mobileErr","Please enter valid Mobile Number");
        }
        else{
            printError("mobileErr","");
            mobileErr=false;
        }
    }

    if(country=="Select"){
        printError("countryErr","Please enter value,it is mandatory");

    }
    else{
        printError("countryErr","");
        countryErr=false;
    }

    if(gender==""){
        printError("genderErr","Please select Gender Value:");
    }
    else{
        printError("genderErr","");
        genderErr=false;
    }

if((nameErr || emailErr || mobileErr || countryErr || genderErr)==true){
    return false;
}
else{
    var preview="You have entered followong details:\n" + 
    "Full Name: " + name +"\n"+ 
    "Email ID: " + email + "\n"+
    "Mobile Number: " + mobile + "\n"+ 
    "Country: " + country + "\n"+
    "Gender: " + gender + "\n";
    if(hobbies.length){
        preview += "Hobbies:" + hobbies.join(", ");
    } 

    alert(preview);
}
};