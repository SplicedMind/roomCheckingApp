function validateLogin()
{
	var box = document.getElementById("email").value;
	if (box === null || box === "")
	{
		document.getElementById('m').innerHTML = "Please enter your email";
		return false;
	}
	else if (box.endsWith("andela.com"))
	{	
		return true;		
	}
	else
	{
		document.getElementById('m').innerHTML = "Invalid email address, please enter a valid email";
		return false;
	}
}