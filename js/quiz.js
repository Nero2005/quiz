var total = 0;


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
                }
                else {
                    console.log(correct[i]);
                    var inc = document.getElementById(correct[i]);
                    inc.parentElement.style.backgroundColor = "rgb(50, 200, 0)";
                }
            }
        }
    }
    var r = document.getElementById("results");
    if(!r.innerHTML){
        r.innerHTML = "You scored " + window.total + " out of " + questions.length;
    }
}
