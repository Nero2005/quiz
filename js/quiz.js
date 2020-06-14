var total = 0;


function clear_select(optname){
    var option = document.getElementsByName(optname);
    for(let opt of option){
        opt.checked = false;
    }
}

function check_mark(containerid){
    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", "50");
    svg.setAttribute("height", "50");
    var re1 = document.createElementNS("http://www.w3.org/2000/svg", "line");
    var re2 = document.createElementNS("http://www.w3.org/2000/svg", "line");
    re1.setAttribute("stroke", "green");
    re2.setAttribute("stroke", "green");
    re1.setAttribute("x1", 25);
    re1.setAttribute("y1", 25);
    re1.setAttribute("x2", 30);
    re1.setAttribute("y2", 30);
    re2.setAttribute("x1", 30);
    re2.setAttribute("y1", 30);
    re2.setAttribute("x2", 40);
    re2.setAttribute("y2", 20);
    svg.appendChild(re1);
    svg.appendChild(re2);
    var container = document.getElementById(containerid);
    console.log(svg, re1, re2);
    container.appendChild(svg);
    svg.style.alignSelf = "left";
}


function cross_mark(containerid){
    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", "25");
    svg.setAttribute("height", "25");
    var re1 = document.createElementNS("http://www.w3.org/2000/svg", "line");
    var re2 = document.createElementNS("http://www.w3.org/2000/svg", "line");
    re1.setAttribute("stroke", "red");
    re2.setAttribute("stroke", "red");
    re1.setAttribute("x1", 20);
    re1.setAttribute("y1", 20);
    re1.setAttribute("x2", 30);
    re1.setAttribute("y2", 30);
    re2.setAttribute("x1", 10);
    re2.setAttribute("y1", 10);
    re2.setAttribute("x2", 30);
    re2.setAttribute("y2", 30);
    svg.appendChild(re1);
    svg.appendChild(re2);
    var container = document.getElementById(containerid);
    container.appendChild(svg);
}


function result(correct, q_options){
    /*Gets the questions in the quiz, the var required for the respective list of options
    and the list of the correct ids
    */
    var questions = document.getElementsByTagName("section");
    for (let i = 0; i < questions.length; i++){
        //Traverses the questions
        //Gets the list of options
        var li_options = document.getElementsByName(q_options[i]);
        for (let j of li_options){
            if (j.checked){
                if (j.id == correct[i]){
                    window.total += 1;
                    var inc = document.getElementById(j.id);
                    inc.parentElement.style.backgroundColor = "rgb(50, 200, 0)";
                    var par = inc.parentElement.parentElement;
                    var ch = par.children[1];
                    var ques = par.children[0];
                    ques.style.color = "rgb(50, 200, 0)";
                    ch.innerHTML = "5/5";
                }
                else {
                    var inc = document.getElementById(correct[i]);
                    inc.parentElement.style.backgroundColor = "rgb(50, 200, 0)";
                    var cor = document.getElementById(j.id);
                    cor.parentElement.style.backgroundColor = "rgb(200, 50, 0)";
                    var par = inc.parentElement.parentElement;
                    var ch = par.children[1];
                    var ques = par.children[0];
                    ques.style.color = "rgb(200, 50, 0)";
                    ch.innerHTML = "0/5";
                }
            }
        }
    }
    var r = document.getElementById("results");
    if(!r.innerHTML){
        r.innerHTML = "You scored " + window.total + " out of " + questions.length;
    }
}
