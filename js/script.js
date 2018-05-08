function signup(){
	 var b = document.getElementById('fname').value;
	 var c = document.getElementById('lname').value;
	 var d = document.getElementById('email').value;
	 var e = document.getElementById('mbn').value;
	 var f = document.getElementById('pswd').value;
	 var g = document.getElementById('cpswd').value;
	 var h = document.getElementById('addr').value;
     
	 
	 if(b == "")
	{
	    document.getElementById("fname").style.borderColor="red";
		document.getElementById("nameerror").innerHTML="";
		document.getElementById("nameerror").style.color="red";
    }
    else{
    	document.getElementById("fname").style.borderColor="";
		document.getElementById("nameerror").innerHTML=" ";
    }
   
     //firstname error end
	
	
	if(c == "")
	{
	    document.getElementById("lname").style.borderColor="red";
		document.getElementById("lstnameerror").innerHTML="";
		document.getElementById("lstnameerror").style.color="red";
    }
    else{
    	document.getElementById("lname").style.borderColor="";
		document.getElementById("lstnameerror").innerHTML=" ";
    }
    //lastname error end

	
    if(d == "")
	{
	    document.getElementById("email").style.borderColor="red";
		document.getElementById("emailid").innerHTML="";
		document.getElementById("emailid").style.color="red";
    }
    else{
    	document.getElementById("email").style.borderColor="";
		document.getElementById("emailid").innerHTML=" ";
    }
    //email end here

    if( (e == "") || (e.length < 10) || (isNaN(e)))
	{
	    document.getElementById("mbn").style.borderColor="red";
		document.getElementById("mobileerror").innerHTML="";
		document.getElementById("mobileerror").style.color="red";
    }
    else{
    	document.getElementById("mbn").style.borderColor="";
		document.getElementById("mobileerror").innerHTML=" ";
    }
    //mobile error ends here
    
    if(f == ""){
		document.getElementById("pswd").style.borderColor="red";
		document.getElementById("pswderror").innerHTML="";
		document.getElementById("pswderror").style.color="red";
	} else{
		document.getElementById("pswd").style.borderColor="";
		document.getElementById("pswderror").innerHTML=" ";
	}
    //pswrd ends here
	
	if(g == ""){
		document.getElementById("cpswd").style.borderColor="red";
		document.getElementById("cpswderror").innerHTML="";
		document.getElementById("cpswderror").style.color="red";
	} else{
		document.getElementById("cpswd").style.borderColor="";
		document.getElementById("cpswderror").innerHTML=" ";
	}
    //confirm pswrd ends here
	
	if(h == ""){
		document.getElementById("addr").style.borderColor="red";
		document.getElementById("addrerror").innerHTML="";
		document.getElementById("addrerror").style.color="red";
	} else{
		document.getElementById("addr").style.borderColor="";
		document.getElementById("addrerror").innerHTML=" ";
	}
    //address ends here
}