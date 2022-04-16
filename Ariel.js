function check6(){
  var c=0;
  var q1 = document.quiz6.question1.value;
  var q2 = document.quiz6.question2.value;
  var q3 = document.quiz6.question3.value;
  var q4 = document.quiz6.question4.value;
  var q5 = document.quiz6.question5.value;
  var q6 = document.quiz6.question6.value;
  var result6=document.getElementById('result6');
  var quiz6=document.getElementById("quiz6");
  if (q1=="6") {c++}
  if (q2=="yellow") {c++}
  if (q3=="blue") {c++}
  if (q4=="brown") {c++}
  if (q5=="holding hands") {c++}
  if (q6=="light blue") {c++}
  quiz6.style.display="none";
  result.textContent=`${"Your score is " + c  + " " + "/ " + " 5" + ":)"}`
}
