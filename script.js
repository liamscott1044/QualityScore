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
    let realFollowers = parseInt(document.getElementById("question1").value);
    let avgEngIG = parseInt(document.getElementById("question2").value);
    let followers1 = parseInt(document.getElementById("question3").value);
    let followers2 = parseInt(document.getElementById("question4").value);
    let followers3 = parseInt(document.getElementById("question5").value);
    let followers4 = parseInt(document.getElementById("question6").value);
    let followers5 = parseInt(document.getElementById("question7").value);
    let followersUS = parseInt(document.getElementById("question8").value);
    let costEng = parseInt(document.getElementById("question9").value);
    let avgLikesIG = parseInt(document.getElementById("question10").value);
    let avgComIG = parseInt(document.getElementById("question11").value);
    let bmSaturation = parseInt(document.getElementById("question12").value);
    let bmEffective = parseInt(document.getElementById("question13").value);
    let avgEngTT = parseInt(document.getElementById("question14").value);
    let avgViewsTT = parseInt(document.getElementById("question15").value);
    let avgLikesTT = parseInt(document.getElementById("question16").value);
    let avgSharesTT = parseInt(document.getElementById("question17").value);
    let avgComTT = parseInt(document.getElementById("question18").value);


    // Define input variables
    let score1 = 0;


    // % Followers Age scoring
    let sum23 = followers2 + followers3;
    let sum1234 = followers1 + followers2 + followers3 + followers4; 

    if (sum23 > 50 && sum1234 > 80) {
        score1 = 10;
    } else if (sum23 > 40 && sum1234 > 70) {
        score1 = 9;
    } else if (sum23 > 30 && sum1234 > 60) {
        score1 = 8;
    } else if (sum23 > 20 && sum1234 > 50) {
        score1 = 7;
    } else if (sum23 > 15 && sum1234 > 40) {
        score1 = 6;
    } else if (sum23 > 10 && sum1234 > 30) {
        score1 = 5;
    } else if (sum23 > 5 && sum1234 > 20) {
        score1 = 4;
    } else if (sum23 > 2 && sum1234 > 10) {
        score1 = 3;
    } else if (sum23 > 0 && sum1234 > 5) {
        score1 = 2;
    } else if (sum23 > 0 && sum1234 > 0) {
        score1 = 1;
    } else {
        score1 = 0;
    }


    // Perform the calculation 
    let totalScore = score1;
    let maxScore = 10;  // This should match the total maximum possible score from your questions
    let scoreOutOf10 = (totalScore / maxScore) * 10;
    
    // Display the result
    document.getElementById("result").innerText = `Creator Quality Score: ${scoreOutOf10.toFixed(1)} out of 10`;
});
