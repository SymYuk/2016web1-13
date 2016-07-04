var vea='ヴェ';

var update=function()
{
	vea+='ア';
	document.clear();
	document.write(vea);
	refresh();
}

var refresh=function()
{
	setTimeout(update,1000);
}
update();

function getFileName()
{
	return window.location.href.split('/').pop();
}

var filename=getFileName();
var opt;
if(filename==='index.html')
	opt=document.querySelector('option[value="index.html"]');
else
	opt=document.querySelector('option[value="nothing.html"]');
opt.selected=true;

document.getElementById('form').select.onchange=function()
{
	location.href=document.getElementById('form').select.value;
}
