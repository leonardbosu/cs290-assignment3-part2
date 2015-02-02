window.onload = function()
{

}



function saveSettings()
{
	var userSetPages = document.getElementById("userPages");
	localStorage.setItem("userStorePages", userSetPages.value);

	var userSetLangPython = document.getElementById("userLangPython");
	localStorage.setItem("userStoreLangPython",userSetLangPython.checked);

	var userSetLangJSON = document.getElementById("userLangJSON");
	localStorage.setItem("userStoreLangJSON",userSetLangJSON.checked);

	var userSetLangJS = document.getElementById("userLangJS");
	localStorage.setItem("userStoreLangJS",userSetLangJS.checked);

	var userSetLangSQL = document.getElementById("userLangSQL");
	localStorage.setItem("userStoreLangSQL",userSetLangSQL.checked);

}

function sendRequest()
{
	var req = new XMLHttpRequest();
	if (!req)
	{
		throw 'Unable to create HTTPRequest';
	}

	var url = "https://api.github.com/gists/public";

	req.onreadystatechange = function()
	{
		//process sever request
		if (this.readyState === 4)
		{
			var resp = JSON.parse(this.responseText);
			localStorage.setItem("ServerResponse", resp);
		}

	}

	url = createURL(url);

	req.open('GET', url, true);
	req.send(null);

}

function createURL(initialURL)
{
	//?page=3
	var pageCheck = localStorage.getItem("userStorePages");
	var newURL = initialURL;

	if (pageCheck > 0)
	{
		newURL += ("?page=" + pageCheck);
	}
	
	return newURL;
}