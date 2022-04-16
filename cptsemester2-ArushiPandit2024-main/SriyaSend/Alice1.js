function check3(){
  var c=0;
  var q1 = document.quiz3.question1.value;
  var q2 = document.quiz3.question2.value;
  var q3 = document.quiz3.question3.value;
  var q4 = document.quiz3.question4.value;
  var q5 = document.quiz3.question5.value;
  var q6 = document.quiz3.question6.value;
  var result3=document.getElementById('result3');
  var quiz3=document.getElementById("quiz3");
  if (q1=="teal") {c++}
  if (q2=="on the mushroom") {c++}
  if (q3=="pointing") {c++}
  if (q4=="next to alice") {c++}
  if (q5=="right") {c++}
  if (q6=="25") {c++}
  quiz3.style.display="none";
  result.textContent=`${ "Your score is " + c + " " + "/ " + " 6" + ":)"}`;
}
