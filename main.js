// code runner window 단축키 : ctrl + alt + n
const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

var date = new Date();
var calendarYear = date.getFullYear(); // 달력 연도
var calendarMonth = date.getMonth() + 1; // 달력 월 . getMonth는 1월을 0, 12월을 11로 표기
var calendarToday = date.getDate(); // 달력 일
// 날짜를 기준으로 월의 마지막 일자 구하기.
var calendarMonthLastDate = monthDays[date.getMonth()];
var monthStartDay = new Date(calendarYear, date.getMonth(), 1); // 달력 월의 시작 요일
var calendarMonthStartDay = monthStartDay.getDay(); // getDay() : 일요일이면 0, 월요일이면 1 리턴
// 달에 필요한 주 수 계산
// 캘린더 1일의 요일(0~6)과 해당 달의 총 일수를 더한 후 일주일인 7로 나누면 주 단위로 나뉜 값이 나온다
// 나눈 값을 올림처리하면 소수점 이하 값에 관계없이 반올림되어 정수로 반환된다.
var calendarWeekCount = Math.ceil(
  (calendarMonthStartDay + calendarMonthLastDate) / 7
);

// 윤년 계산
// 4로 나누어 떨어지면 윤년, 100으로 나누어 떨어지면 윤년아님, 400으로 나누어 떨어지면 윤년
if (calendarYear % 400 == 0) {
  monthDays[1] = 29;
} else if (calendarYear % 100 == 0) {
  monthDays[1] = 28;
} else if (calendarYear % 4 == 0) {
  monthDays[1] = 29;
}

var tbody = document.getElementById("tb_body"); // tbody 요소 가져오기
tbody.innerHTML = ""; // tbody 내용 초기화
var monthlyFirst = 0; // 현재 달력 행에서 출력할 첫 번째 날
var monthlyDay = 1;
for (var i = 0; i < calendarWeekCount; i++) {
  var row = tbody.insertRow();
  for (var j = 0; j < 7; j++) {
    var cell = row.insertCell();
    if (
      calendarMonthStartDay <= monthlyFirst &&
      monthlyDay <= calendarMonthLastDate
    ) {
      // 현재 출력하려는 날짜가 현재 월의 첫째 날 이후인 경우만 출력

      cell.textContent = monthlyDay++;
    }
    monthlyFirst++;
  }
  // row = tbody.insertRow();
}

// 테이블에 날짜를 채워넣는 과정에서 는 for문으로 1부터 마지막일까지 채워넣으며 행이 생성된 후  7로나눠서 다음 행으로 이동하는 코드를 짜고
// 해당 월의 1일에 해당하는 요일에 맞춰 넣으려니까 코드가 잘 안짜졌음
// var tbody = document.getElementById("tb_body"); // tbody 요소 가져오기
// tbody.innerHTML = ""; // tbody 내용 초기화

// var row = tbody.insertRow(); // 테이블에 날짜 채워넣기
// var dayCount = 1;
// for (var i = 1; i <= 8; i++) {
//     var cell = row.insertCell();
//     cell.textContent = dayCount;
//     dayCount++;
//     if (i % 7 === 0) {
//         row = tbody.insertRow();
//     }
// }
// 빈 테이블을 먼저 작성 후 요일에 맞춰 넣으려는 코드로 변경함.
