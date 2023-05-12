function printMessage(id,hint){
	document.getElementById(id).innerHTML=hint;
}

function validateInput(){
	//save all inputs
	var fn=document.reservationForm.fn.value;
	var ln=document.reservationForm.ln.value;
	var phone=document.reservationForm.phone.value;
	var email=document.reservationForm.email.value;
	var adults=document.reservationForm.adults.value;
	var children=document.reservationForm.children.value;
	var arrival=document.reservationForm.arrival.value;
	var today= new Date();
	var leaving=document.reservationForm.leaving.value;

	var fnRegEx=/^[А-Я][а-я]+(-[А-Я])?[а-я]+$/;
	var lnRegEx=/^[А-Я][а-я]+$/;
	var phoneRegEx=/^08[789]\d{7}$/;
	var emailRegEx=/^\S+@\S+\.\S+$/;


	//var indicating error- initial value-true
	var fnErr = lnErr = phoneErr = emailErr = adultsErr = childrenErr = arrivalErr = leavingErr = true;

	//first name
	if(fn == "") 
	{
		printMessage("fnErr", "Това поле е задължително!");
    }
    else
    {
	    if (!fnRegEx.test(fn)) 
	    {
	    	printMessage("fnErr","Въведете валидно име!");
	    }
	    else{
	    	printMessage("fnErr","");
	    	fnErr=false;
	    }
    }

    //last name
    if(ln == "") 
	{
		printMessage("lnErr", "Tова поле е задължително!");
    }
    else
    {
	    if (!lnRegEx.test(ln)) 
	    {
	    	printMessage("lnErr","Въведете валидна фамилия!");
	    }
	    else{
	    	printMessage("lnErr","");
	    	lnErr=false;
	    }
    }

    //phone number
    if(phone == "") 
	{
		printMessage("phoneErr", "Това поле е задължително!");
    }
    else
    {
	    if (!phoneRegEx.test(phone)) 
	    {
	    	printMessage("phoneErr","Въведете 10 цифри!(08(7,8,9)...)");
	    }
	    else{
	    	printMessage("phoneErr","");
	    	phoneErr=false;
	    }
    }

    //email
   if(email == "") 
	{
		printMessage("emailErr", "Това поле е задължително!");
    }
    else
    {
	    if (!emailRegEx.test(email)) 
	    {
	    	printMessage("emailErr","Въведете валиден имейл!");
	    }
	    else{
	    	printMessage("emailErr","");
	    	emailErr=false;
	    }
    }

    // adults
     if(adults == "---") 
	{
		printMessage("adultsErr", "Това поле е задължително!");
    }
 
	else
	{
	    printMessage("adultsErr","");
	    adultsErr=false;
	}
	// children
	 if(children == "---") 
	{
		printMessage("childrenErr", "Това поле е задължително!");
    }
 
	else
	{
	    printMessage("childrenErr","");
	    childrenErr=false;
	}

	//date arrival
	 if(arrival== "") 
	{
		printMessage("arrivalErr", "Това поле е задължително!");
    }
    else
    {
    	
	    if (new Date(arrival).getTime()<today.getTime()) 
	    {
	    	printMessage("arrivalErr","Датата трябва да е по-голяма от днешната!");
	    }
	    else{
	    	printMessage("arrivalErr","");
	    	arrivalErr=false;
	    }
    }

    //date leaving
	 if(leaving== "") 
	{
		printMessage("leavingErr", "Това поле е задължително!");
    }
    else
    {
    	
	    if (new Date(arrival).getTime()>= new Date(leaving).getTime()) 
	    {
	    	printMessage("leavingErr","Датата на напускане трябва да е след датата на пристигане!");
	    }
	    else{
	    	printMessage("leavingErr","");
	    	leavingErr=false;
	    }
    }
    
    



 // Prevent the form from being submitted if there are any errors
    if(fnErr || lnErr || phoneErr || emailErr || adultsErr || childrenErr || arrivalErr || leavingErr == true){
    	return false;
    }
    alert("Данните Ви бяха успешно въведени! Ще получите имейл с отговор.")
    return true;
   
   

}

