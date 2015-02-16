window.onload = function()
{
	document.getElementById('output').innerHTML = 'no results';
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
	var pageCheck = localStorage.getItem("userStorePages");

	for (var i = 0; i < pageCheck; ++i)
	{
		var req = new XMLHttpRequest();
		if (!req)
		{
			throw 'Unable to create HTTPRequest';
		}

	
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

				}

		}

		var url = "https://api.github.com/gists/public";
		url = createURL(url, i+1);

		req.open('GET', url, true);
		req.send(null);

		//displayLocalStorage("ServerResponse");
		displayLocalStorage("newArray");
	}

}

function createURL(initialURL, page)
{
	var newURL = initialURL;

	
		newURL += ("?page=" + page);
	
	return newURL;
}

function displayLocalStorage(item)
{
	//document.getElementById('output').innerHTML = localStorage.getItem(item); 


	var listContainer = document.createElement("div");
	document.getElementById('output').appendChild(listContainer);
	var listElement = document.createElement("ul");
	listContainer.appendCHild(listElement);
	var numberOfListItems = item.length;

	for (var i = 0; i < numberOfListItems; ++i)
	{
		var listItem = document.createELement("li");
		listItem.innerHTML = item[i];
		listElement.appendChild(listItem);
	}
	
	
}
/*createResultList(listTarget, dataList)
{
	dataList.forEach(function(entry)
	{
		document
	});
	
}*/