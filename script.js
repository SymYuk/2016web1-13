

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

document.getElementById('form').select.onchange=function()
{
	location.href=document.getElementById('form').select.value;
}
