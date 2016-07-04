function getFileName(){
  return window.location.href.split('/').pop();
}
var filename = getFileName();
var opt;
if(filename === 'nothing.html')
{
  opt = document.querySelector('option[value="nothing.html"]');
}
else
{
 opt = document.querySelector('option[value="index.html"]');
}
opt.selected=true;

document.getElementById('form').select.onchange=function(){
  location.href = document.getElementById('form').select.value
}
