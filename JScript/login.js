function validateLogin()
{
	var box = document.getElementById("email").value;
	if (!box.endsWith("andela.com"))
	{
		
		alert("You have to enter a valid email!");
		return false;
	}
	
}