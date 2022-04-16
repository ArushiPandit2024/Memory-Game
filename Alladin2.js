function check2(){
  var c=0;
  var q1 = document.quiz2.question1.value;
  var q2 = document.quiz2.question2.value;
  var q3 = document.quiz2.question3.value;
  var q4 = document.quiz2.question4.value;
  var q5 = document.quiz2.question5.value;
  var q6 = document.quiz2.question6.value;
  var result2=document.getElementById('result2');
  var quiz2=document.getElementById("quiz2");
  if (q1=="green") {c++}
  if (q2=="on the ground") {c++}
  if (q3=="gold") {c++}
  if (q4=="teal dress") {c++}
  if (q5=="purple") {c++}
  if (q6=="flying") {c++}
  quiz2.style.display="none";
  result.textContent=`${"Your score is " + c  + " " + "/ " + " 5" + ":)"}`;
}
