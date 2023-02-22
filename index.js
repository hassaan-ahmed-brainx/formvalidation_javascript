

let fname =false;
let lname=false;
let email=false;
let age=false;
let password=true;
let confirm=true;
let number=true;
let pwd1=false;


document.getElementById("firstname").addEventListener("change", (e) => verifyfirstname(e));
document.getElementById("lastname").addEventListener("change", (e) => verifylastname(e));
document.getElementById("email").addEventListener("change", (e) => verifyemail(e));
document.getElementById("password").addEventListener("change", (e) => verifypassword(e));
document.getElementById("confirm").addEventListener("change", (e) => verifyconfirm(e));
document.getElementById("age").addEventListener("change", (e) => verifyage(e));
document.getElementById("contact").addEventListener("change", (e) => verifycontact(e));
document.getElementById("myBtn").addEventListener("click", (e) => submit(e));




function submit(e)
{
    e.preventDefault();
    window.location.replace("https://www.google.com/");
}


function verifyemail(e)
{
    let flag = true;
    e.preventDefault();
    var value = document.form1.email.value;
    if(value.length==0  || value=="" || value ==" ")
    {
        alert("Email cannot be empty");
        email=false;

    }

    else
    {
        var emails = value.split(',');
        var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        for (var i = 0; i < emails.length; i++) {
            if( emails[i] === "" || !regex.test(emails[i].replace(/\s/g, ""))){
                alert("Invalid Email");
                flag= false;
                break;  
            }

        }
if(flag ==true)
{
    email= true;
    alert("Correct Email!!");

}
else
{
    email = false;
}

    }

if(fname== true && lname==true && email ==true && password==true && age ==true && confirm ==true && number==true)
{

   document.form1.myBtn.removeAttribute('disabled');

}
else
{
    document.form1.myBtn.setAttribute('disabled', 'disabled');   
}

}



function verifypassword(e)
{
    e.preventDefault();
    var pwd = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    var value = document.form1.password.value;
    var value1 = document.form1.confirm.value;


    if(value== "" || value== " " || value.length==0)
    {
        if(value1.length!=0)
        {
            password = false;
        }
        else 
        {
        password=true;
        pwd1=true;
        confirm =true;
        }
        
    }    

    else if (value.length<8 && value.length>0)
    {
        alert("Password must be atleast of length 8");
        password= false;
    }
    else
    {
        if(value.match(pwd))
        {

            password=true;
            confirm = false;
            if(value1.length !=0 && value == value1)
            {
                confirm = true;
            }


        }
        else
        {
            password=false;
        }
    }

if(fname== true && lname==true && email ==true && password==true && age ==true && confirm ==true && number==true)
{

   document.form1.myBtn.removeAttribute('disabled');
   
}

else
{
    document.form1.myBtn.setAttribute('disabled', 'disabled');   
}

}



function verifyconfirm(e)
{
    e.preventDefault();
    var value = document.form1.confirm.value;
    var value1 = document.form1.password.value;
    if(pwd1 == true)
    {
        if (value=="" || value==" ")
        {
            confirm = true;
        }
        else
        {
            alert("Password and Confirm Password must match!!");
            confirm=false;
        }
    }
    if(pwd1==false)
    {
        if(value.length==0 || value=="" || value==" ")
        {

            if(value1.length==0)
            {
                confirm = true;
                password = true;
            }
            else
            {
            alert("Password and Confirm Password must match!!");
            confirm = false;
            }
            
        }
    }


    if(value.length>1)
    {
        if(password == true)
        {
            if(value == value1)
            {
                alert("Passwords Matched");
                confirm = true;

            }
            else
            {
                alert("Password and Confirm Password must match!!");
                confirm= false;
            }
        }
    }



if(fname== true && lname==true && email ==true && password==true && age ==true && confirm ==true && number==true)
{

   document.form1.myBtn.removeAttribute('disabled');
   
}
else
{
    document.form1.myBtn.setAttribute('disabled', 'disabled');   
}


}






function verifyfirstname(e)
{
    e.preventDefault();
    var value = document.form1.firstname.value;
    if(value== "" || value== " ")
    {
        alert("First Name cannot be empty");
    }    
    else
    {

    var letters = /^[A-Za-z0-9]+$/;
    var letters1 = /^[0-9]+$/;


    if(value.match(letters1))
    {
        alert("Must Contain Characters");
    }
    else    
    {
    if(value.match(letters) )
     {
      fname = true;
     }
    else
     {
        alert("Name can be either letters or letters+ numbers Only");
     fname= false;
     }
    }
    
    }
    if(fname== true && lname==true && email ==true && password==true && age ==true && confirm ==true && number==true)
{

   document.form1.myBtn.removeAttribute('disabled');
   
}
else
{
    document.form1.myBtn.setAttribute('disabled', 'disabled');   
}

}


function verifylastname(e)
{
    e.preventDefault();
    var value = document.form1.lastname.value;
    if(value== "" || value== " ")
    {
        alert("Last Name cannot be empty");
    }    
    else
    {

        var letters = /^[A-Za-z0-9]+$/;
        var letters1 = /^[0-9]+$/;
    
    
        if(value.match(letters1))
        {
            alert("Must Contain Characters");
        }
        else    
        {
        if(value.match(letters) )
         {
          lname = true;
         }
        else
         {
            alert("Name can be either letters or letters+ numbers Only");
            lname    = false;
         }
        }
    
     }

    

    if(fname== true && lname==true && email ==true && password==true && age ==true && confirm ==true && number==true)
{

   document.form1.myBtn.removeAttribute('disabled');
   
}
else
{
    document.form1.myBtn.setAttribute('disabled', 'disabled');   
}

}





function verifyage(e)
{
    e.preventDefault();
    var value = document.form1.age.value;
    if(value== "" || value== " ")
    {
        alert("Age field cannot be empty");
        age = false;
    }    
    else
    {
        if(value>=18 && value<=151)
        {
            age= true;

        }
        else
        {
            alert("Age must be between 18 and 151");
            age = false;
        }

    }

    console.log(fname);
    console.log(lname);
    console.log(email);
    console.log(password);
    console.log(age);
    console.log(confirm);
    console.log(number);


    if(fname== true && lname==true && email ==true && password==true && age ==true && confirm ==true && number==true)
{

   document.form1.myBtn.removeAttribute('disabled');
   
}
else
{
    document.form1.myBtn.setAttribute('disabled', 'disabled');   
}

}

function verifycontact(e)
{
    e.preventDefault();
    var value = document.form1.contact.value;
    if(value =="" || value==" ")
    {
        number=true;
    }
    else if(value.length <11 || value.length>11)
    {
        alert("Contact Number Must be equal 11 digits");
        number= false;
    }    
    else
    {
            if(value[0] !="0" || value[1] !="3")
            {
                alert("Number must start with 03");
                number= false;
                
            }
            else
            {
                number=true;
            }

    }

if(fname== true && lname==true && email ==true && password==true && age ==true && confirm ==true && number==true)
{


   document.form1.myBtn.removeAttribute('disabled');
   
}
else
{
    document.form1.myBtn.setAttribute('disabled', 'disabled');   
}


}















