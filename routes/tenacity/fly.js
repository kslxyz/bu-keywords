var count=0;
var length;
var mar=140;
var myloop;
var message;
var size;
var color;
var style;
var other=0;
var message_array;

function flydum(mycontent,mysize,mycolor,mystyle)
{
	message=mycontent;
	color=mycolor;
	size=mysize;
	style=mystyle;
	other=1;
	fly();
}
function fly()
{
	if(other==1)
	{
	}
	else
	{
		message=var_content;
		size=var_size;
		color=var_color;
		style=var_style;
	}
	
	message_array=message.split(' ');
	length=message_array.length;
	
	for(var i=0;i<length;i++)
	{
		if(message_array[i]==" ")
		{
			message_array[i]="&nbsp;";
		}
		$('.container').append("<span class='fly' style='position:absolute; opacity:0; top:100px;'id='"+i+"'>"+message_array[i]+"</span>");
		$(".fly").css({"font-size":size+"px","color":"#"+color,"font-family":style});
		$(".container .fly").animate({opacity:0},0);
	}
	start();	
}

function play()
{
	$("#pause").show();
	$("#play").hide();
	count=0;
	mar=140;
	for(var j=0;j<length;j++)
	{
		$(".container #"+j+"").html(message_array[j]).animate({opacity:0},500);
		$(".container #"+j+"").html(message_array[j]).animate({marginLeft:0},100);
	}
	start();
	
}

function pause()
{
	clearInterval(myloop);
	$("#pause").hide();
	$("#play").show();
}

function start()
{
	myloop=setInterval(function(){
		change(count)
	},1000);
}	
	
function change(myunit)
{
	$(".container #"+count+"").html(message_array[myunit]).animate({opacity:1, marginLeft:mar},500);
	var mov=$("#"+count+"").width();
	mar=mar+mov+5;
	count++;
	if(count==length)
	{
		
		clearInterval(myloop);
		$("#pause").hide();
		$("#play").show();
		
	}
}   