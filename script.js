document.getElementById("questionForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Get the values from the form
    let question1 = parseInt(document.getElementById("question1").value);
    let question2 = parseInt(document.getElementById("question2").value);
    
    // Perform the calculation (this is just an example formula)
    let totalScore = question1 + question2;
    let maxScore = 10;  // This should match the total maximum possible score from your questions
    let scoreOutOf10 = (totalScore / maxScore) * 10;
    
    // Display the result
    document.getElementById("result").innerText = `Your score is: ${scoreOutOf10.toFixed(1)} out of 10`;
});
