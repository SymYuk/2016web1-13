var vea='ヴェア';

document.write('あ');

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
