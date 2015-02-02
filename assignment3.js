window.onload = function()
{
	document.getElementById('output').innerHTML = 'test';
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

			var newGistArray = new Array();
	
			for(var i = 0; i < resp.length; ++i)
			{
				newGistArray.push(resp[i].url);
			}

			localStorage.setItem("newArray", newGistArray);

			createResultList(document.getElementById(outputList), newGistArray);

		}

	}

	url = createURL(url);

	req.open('GET', url, true);
	req.send(null);

	//displayLocalStorage("ServerResponse");
	displayLocalStorage("newArray");

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

function displayLocalStorage(item)
{
	document.getElementById('output').innerHTML = localStorage.getItem(item);
	
}

createResultList(listTarget, dataList)
{
	dataList.forEach(function(entry)
	{
		document
	}
	
}