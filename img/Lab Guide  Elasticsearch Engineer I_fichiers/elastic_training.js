function showAnswer(id) {
  var question = document.getElementById("question"+id);
  var solution = document.getElementById("answer"+id);
  var ressource = document.querySelector("#answer"+id+" video");
  if (ressource !== null)  {
    ressource.src = ressource.getAttribute('data-src');
  }
  solution.style.display = "block";
  question.onclick = function() { hideAnswer(id) };
  var value = question.dataset.value || "answer";
  question.value = "Hide " + value;
}

function hideAnswer(id) {
  var question = document.getElementById("question"+id);
  var solution = document.getElementById("answer"+id);
  solution.style.display = "none";
  question.onclick = function() { showAnswer(id) };
  var value = question.dataset.value || "answer";
  question.value = "Show " + value;
}

function build_solutions() {
  var solutions = document.getElementsByClassName("solution");
  for (var i = 0; i < solutions.length; i++) {
    solution = solutions[i];
    solution.id = "solution" + i;
    var text = solution.innerHTML;
    solution.innerHTML = "";

    // create question input
    var question = document.createElement("input");
    question.id = "question" + i;
    question.onclick = (function(id) { //avoid closure
        return function() { showAnswer(id) }
    })(i);
    // value example: <div data-value="tutorial">
    question.dataset.value = solution.dataset.value || "answer";
    question.value = "Show " + question.dataset.value;
    question.type = "button";
    question.className = "answerInput"
    solution.appendChild(question);

    // create answer div
    var answer = document.createElement("div");
    answer.id = "answer" + i;
    answer.innerHTML = text;
    answer.style.display = "none";
    solution.appendChild(answer)
  }
}

function show_virtual() {
  var lab1 = document.getElementsByClassName("virtual");
  for (var i = 0; i < lab1.length; i++) {
    lab1[i].style.display = "block";
  }
  var lab1 = document.getElementsByClassName("classroom");
  for (var i = 0; i < lab1.length; i++) {
    lab1[i].style.display = "none";
  }
  var lab1_buttons = document.getElementsByClassName("lab1_toggle");
  for (var i = 0; i < lab1_buttons.length; i++) {
    button = lab1_buttons[i];
    button.value = "Show instructions for in-person classroom training";
    button.onclick = (function(id) {
      return function() { hide_virtual() }
    })(i);
  }
}

function hide_virtual() {
  var lab1 = document.getElementsByClassName("virtual");
  for (var i = 0; i < lab1.length; i++) {
    lab1[i].style.display = "none";
  }
  var lab1 = document.getElementsByClassName("classroom");
  for (var i = 0; i < lab1.length; i++) {
    lab1[i].style.display = "block";
  }
  var lab1_buttons = document.getElementsByClassName("lab1_toggle");
  for (var i = 0; i < lab1_buttons.length; i++) {
    button = lab1_buttons[i];
    button.value = "Show instructions for virtual classroom training";
    button.onclick = (function(id) {
      return function() { show_virtual() }
    })(i);
  }
}
