function validateLogin()
{
	var box = document.getElementById("email")
	if (box.value.endsWith("andela.com") && box.value.length > 11)
	{
		return true;
	}
	else 
	{
		box.focus();
		box.style.border ="2px solid red";
		box.value = "Enter a valid email!";
		return false;
    }
}