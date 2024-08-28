document.getElementById("questionForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Function to parse input values with suffixes
    function parseInput(value) {
        if (typeof value === "string") {
            value = value.trim(); // Remove whitespace
            if (value.endsWith('k')) {
                return parseFloat(value.slice(0, -1)) * 1000; // Convert "2.4k" to 2400
            } else if (value.endsWith('m')) {
                return parseFloat(value.slice(0, -1)) * 1000000; // Convert "2.4m" to 2400000
            } else {
                return parseFloat(value); // Regular numeric value
            }
        }
        return value; // Return the value as is if not a string
    }

    // Get the values from the form
    let question1 = parseInt(document.getElementById("question1").value);
    let question2 = parseInt(document.getElementById("question2").value);
    let question3 = parseInt(document.getElementById("question3").value);
    let question4 = parseInt(document.getElementById("question4").value);
    let question5 = parseInt(document.getElementById("question5").value);
    let question6 = parseInt(document.getElementById("question6").value);
    let question7 = parseInt(document.getElementById("question7").value);
    let question8 = parseInt(document.getElementById("question8").value);
    let question9 = parseInt(document.getElementById("question9").value);
    let question10 = parseInt(document.getElementById("question10").value);
    let question11 = parseInt(document.getElementById("question11").value);
    let question13 = parseInt(document.getElementById("question13").value);
    let question14 = parseInt(document.getElementById("question14").value);
    let question15 = parseInt(document.getElementById("question15").value);
    let question16 = parseInt(document.getElementById("question16").value);
    let question17 = parseInt(document.getElementById("question17").value);
    let question18 = parseInt(document.getElementById("question18").value);

    
    // Perform the calculation (this is just an example formula)
    let totalScore = question1 + question2;
    let maxScore = 10;  // This should match the total maximum possible score from your questions
    let scoreOutOf10 = (totalScore / maxScore) * 10;
    
    // Display the result
    document.getElementById("result").innerText = `Creator Quality Score: ${scoreOutOf10.toFixed(1)} out of 10`;
});
