function check4(){
  var c=0;
  var q1 = document.quiz4.question1.value;
  var q2 = document.quiz4.question2.value;
  var q3 = document.quiz4.question3.value;
  var q4 = document.quiz4.question4.value;
  var q5 = document.quiz4.question5.value;
  var result4=document.getElementById('result4');
  var quiz4=document.getElementById("quiz4");
  if (q1=="flying near peter pan") {c++}
  if (q2=="flying near peter pan") {c++}
  if (q3=="helping peter pan") {c++}
  if (q4=="umbrella") {c++}
  if (q5=="black") {c++}
  quiz4.style.display="none";
  result.textContent=`${"Your score is " + c  + " " + "/ " + " 6" + ":)"}`;
}
