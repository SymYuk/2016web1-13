document.write('ヴェア');

var update=function()
{
	document.write('ア');
	refresh();
}

var refresh=function()
{
	setTimeout(update,200);
}
update();
