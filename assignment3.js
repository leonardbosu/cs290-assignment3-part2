window.onload = function()
{
	if (localStorage.getItem("faveList") === null)
	{
	
	}
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
		displayLocalStorage("faveList");
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
	if(item != null){

	var passedString = localStorage.getItem(item);
	var newArray = passedString.split(',');

	//below taken from javascript-examples.net/item/an-html-list-from-a-javascript-array

	var listContainer = document.createElement("div");
	document.getElementById('output').appendChild(listContainer);
	var listElement = document.createElement("ul");
	listContainer.appendChild(listElement);
	var numberOfListItems = newArray.length;

	for (var i = 0; i < numberOfListItems; ++i)
	{
		var listItemContainer = document.createElement("div");
		listItemContainer.id = newArray[i];
		listElement.appendChild(listItemContainer);

		var listItem = document.createElement("li");
		listItemContainer.appendChild(listItem);

		var listLink = document.createElement("a");
		listLink.href = newArray[i];
		listItem.appendChild(listLink);

		var linkText = document.createTextNode(newArray[i]);
		listLink.appendChild(linkText);

		var btn = document.createElement("Button");
		var btnText = document.createTextNode("Add to Favorites");
		btn.appendChild(btnText);
		btn.onclick = function()
		{
			var tempList = localStorage.getItem("faveList");
			tempList = tempList + "," + newArray[i];
			localStorage.setItem("faveList", tempList);
		};
		listItem.appendChild(btn);

	}
	}

}
function addToFavorites(index, value)
{
	var tempList = localStorage.getItem("faveList");
	tempList = tempList + "," + value;
	localStorage.setItem("faveList", tempList);
}