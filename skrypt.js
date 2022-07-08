function zegar()
{
	var today = new Date();
	
	var day = today.getDate();
	if (day<10) day="0"+day;
	switch (month = today.getMonth()+1)
	{
		case 1: month="Stycznia";
		break;
		case 2: month="Lutego";
		break;
		case 3: month="Marca";
		break;
		case 4: month="Kwietnia";
		break;
		case 5: month="Maja";
		break;
		case 6: month="Czerwca";
		break;
		case 7: month="Lipca";
		break;
		case 8: month="Sierpnia";
		break;
		case 9: month="Września";
		break;
		case 10: month="Października";
		break;
		case 11: month="Listopada";
		break;
		case 12: month="Grudnia";
	}
	var year = today.getFullYear();
	var hour = today.getHours();
	if (hour<10) hour="0"+hour;
	var minute = today.getMinutes();
	if (minute<10) minute="0"+minute;
	var second = today.getSeconds();
	if (second<10) second="0"+second;
	
	document.getElementById("zegar").innerHTML=day+" "+month+" "+year+" Roku <br> Godzina "+hour+":"+minute+":"+second;
	
	setTimeout("zegar()",1000);
}