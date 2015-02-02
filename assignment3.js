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