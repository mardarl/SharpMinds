var todayDay = document.getElementById('day');
var clock = document.getElementById('time');
var toNextYear = document.getElementById('nextyear');

(function() {
 		todayDate();
 		untilTheNextYear();
    setInterval(function() {
            currentTime(); 
        }, 1000);
 }());

function todayDate() {
	var day = new Date().getDate();
	var month = new Date().getMonth();
	var weekDay = new Date().getDay();
	var monthName = ['січня', 'лютого', 'березня', 'квітня', 'травня', 'червня', 'липня', 'серпня', 'вересня', 'жовтня', 'листопада', 'грудня'];
	var week = ['неділя', 'понеділок', 'вівторок', 'середа', 'четвер', 'п`ятниця', 'субота'];	  
  var dayStr = 'Сьогодні ' + week[weekDay] + ', ' + day + ' ' + monthName[month];
  todayDay.textContent = dayStr;
}

function currentTime() {
  var hours = new Date().getHours();
  var minutes = new Date().getMinutes();
  var seconds = new Date().getSeconds();
			  if (hours < 10) {
			    hours = '0' + hours;
			  }
			  if (minutes < 10) {
			    minutes = '0' + minutes;
			  }
			  if (seconds < 10) {
			    seconds = '0' + seconds;
			  }
  var clockStr = 'Поточний час: ' + hours + ' : ' + minutes + ' : ' + seconds;
  clock.textContent = clockStr;
}

function untilTheNextYear() {
var daysLeft = parseInt((new Date(2019,0,1) - new Date()) / (1000 * 60 * 60 * 24));
var days;
				if ((daysLeft % 10 == 1) && (daysLeft % 100 != 11)){
				    days = 'день';
				  }
				else if ((daysLeft % 10 > 1) && (daysLeft % 10 < 5) && !(daysLeft % 100 < 20)){
				    days = 'дні';
				  }
			  else {
				    days = 'днів';
				  }
var toNextYearStr = 'До 2019 року залишилось ' + daysLeft + ' ' + days;
  toNextYear.textContent = toNextYearStr;
}

