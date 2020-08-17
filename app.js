function daysInMonth(month, year) {
	let d = new Date(year, month, 32);
	return 32 - d.getDate();
}

function showCalendar(month, year) {
	/* month: number (0-indexed), year: number 
	*/
	monthYear.innerHTML = MONTHS[month] + " " + year;

	let firstDay = (new Date(year, month)).getDay();
	let nDays = daysInMonth(month, year);
	let cell;

	tle.innerHTML = "";

	let topRow = document.createElement("tr");
	for (let i=0; i<7; i++) {
		let th = document.createElement("th");
		th.appendChild(document.createTextNode(DAYS[i]));
		topRow.appendChild(th);
		if (i === 0 || i === 6) {
			th.setAttribute("id", "weekends");
		}
	}
	tle.appendChild(topRow);

	let date = 1;

	for (let i=0; i<6; i++) {	// upto 6 weeks in each month
		let row = document.createElement("tr");
		for (let j=0; j<7; j++) {	// 7 days
			if (date <= nDays) {
				if (i===0 && j < firstDay) {
					cell = document.createElement("td");
					cell.appendChild(document.createTextNode(""));
				} else {
					cell = document.createElement("td");
					cell.appendChild(document.createTextNode(date));
					if (date === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
						cell.setAttribute("id", "today-date");
					}
					else if (j === 0 || j === 6) {	// set different color for weekends
						cell.setAttribute("id", "weekends");
					}
					date++;
				}
				row.appendChild(cell);
			}
		}
		tle.appendChild(row);
	}
	// document.getElementById("calContainer").appendChild(tle);
}

function previousMonth() {
	curYear = (curMonth === 0) ? curYear - 1 : curYear;
	curMonth = (curMonth === 0) ? 11 : curMonth-1;
	
	showCalendar(curMonth, curYear);
}

function nextMonth() {
	curYear = (curMonth === 11) ? curYear + 1 : curYear;
	curMonth = (curMonth+1) % 12;

	showCalendar(curMonth, curYear);
}

const MONTHS = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

var today = new Date();
var curYear = today.getFullYear(), curMonth = today.getMonth(), curDate = today.getDate();

const tle = document.getElementById("calendar");

showCalendar(curMonth,curYear);