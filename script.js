var vea='ヴェア';

document.write('あ');

var update=function()
{
	vea +='ア';
	document.write(vea);
	refresh();
}

var refresh=function()
{
	setTimeout(update,200);
}
update();
