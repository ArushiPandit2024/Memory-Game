function check5(){
  var c=0;
  var q1 = document.quiz5.question1.value;
  var q2 = document.quiz5.question2.value;
  var q3 = document.quiz5.question3.value;
  var q4 = document.quiz5.question4.value;
  var q5 = document.quiz5.question5.value;
  var result5=document.getElementById('result5');
  var quiz5=document.getElementById("quiz5");
  if (q1=="spaghetti") {c++}
  if (q2=="night") {c++}
  if (q3=="blue") {c++}
  if (q4=="brick building") {c++}
  if (q5=="green") {c++}
  quiz5.style.display="none";
  result.textContent=`${"Your score is " + c  + " " + "/ " + " 5" + ":)"}`;
}
