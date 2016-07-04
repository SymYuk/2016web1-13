function setCookie(c_name,value,expiredays)
{
	var extime=new Date().getTime();
	var citime=new Date(extime+(60*60*24*1000*expiredays));
	var exdate=citime.toUTCString();
	var s="";
	s+=c_name+"="+escape(value);
	s+="; path="+location.pathname;
	if(expiredays)
		s+="; wxpires=" +exdate+"; ";
	else
		s+="; ";
		document.cookie=s;
}

function getCookie(c_name)
{
	var st="";
	var ed="";
	if(0<document.cookie.length)
	{
		st=document.cookie.indexOf(c_name+"=");
		if(st!=-1)
		{
			st=st+c_name.length+1;
			ed=document.cookie.indexOf(";",st);
			if(ed==-1)
				ed=document.cookie.length;
				return unescape(document.cookie.substring(st,ed));
		}
	}
	return "";
}

var last_date = getCookie('lastDate');
if(last_date)
  document.getElementById('cookie').textContent= 'おひさしぶり。最終訪問：' + last_date;
else
  document.getElementById('cookie').textContent= 'はじめまして';

var current_time = new Date();
setCookie('lastDate', current_time.toString(),7);


var vea='ヴェ';

var update=function()
{
	vea+='ア';
	
	document.getElementById('veaaa').textContent=vea;
	refresh();
}

var refresh =function()
{
  setTimeout(update,1000);
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
