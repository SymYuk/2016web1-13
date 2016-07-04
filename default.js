var vea='ヴェ';

var update=function()
{
	vea+='ア';
	
	document.getElementById('veaaa').textContent=vea;
	refresh();
}

var refresh =function()
{
  setTimeout(update,200);
}

function getFileName(){
  return window.location.href.split('/').pop();
}
var filename = getFileName();
var opt;
if(filename === 'other.html')
{
  opt = document.querySelector('option[value="other.html"]');
}
else
{
 opt = document.querySelector('option[value="index.html"]');
}
opt.selected=true;

document.getElementById('form').select.onchange=function(){
  location.href = document.getElementById('form').select.value
}

update();


