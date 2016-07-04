

var update=function()
{
	document.replace( /ヴェ/g , "" );
	document.write('ヴェア');
	document.write('ア');
	refresh();
}

var refresh=function()
{
	setTimeout(update,200);
}
update();
