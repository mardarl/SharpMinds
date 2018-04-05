(function() {

    create.onclick = function(){
    	
var time = document.getElementById("time");
var day = document.getElementById("date");
var newAlarmClock = time + " " + day;
        //SaveAlarm(time.value, daн.value);
            AddAlarm(time.value,day.value);
            
            //countDown=new CountDown(alarm1.date);
            //alarm1.setAlarm(countDown.countLeftMiliseconds(), insert.counter);
    }
//create.onclick = SaveAlarm;

function SaveAlarm() {
	AddAlarm(time, day);
	//myWindow.close();
}
function AddAlarm(time, day) {	
	var div = document.getElementById('list');
	var ul = document.createElement('ul');
  div.appendChild(ul);
  var newAlarm = time + ' ' + day;
  var li = document.createElement('li');
  li.innerHTML = newAlarm;
  ul.appendChild(li);
  Alarm(newAlarm.date);
  /*setInterval(function() {
            Alarm(); 
        }, 1000);*/
}

function Alarm(newAlarm) {
	alert(newAlarm);
	if (new Date(newAlarm) == new Date()) {
		alert("Завершився час");
	}
	}

deleteButton.onclick = DeleteAlarm(newAlarm);


function DeleteAlarm(li) {
	li.parentNode.removeChild(li);
}
}());