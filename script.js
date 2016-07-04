var vea='ヴェ';

var update=function()
{
	vea+='ア';
	document.clear();
	document.clear();
	document.clear();
	document.write(vea);
	refresh();
}

var refresh=function()
{
	setTimeout(update,1000);
}
update();

