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
    let avgLikesIG = parseInput(document.getElementById("question10").value); //text input
    let avgComIG = parseInput(document.getElementById("question11").value); //text input
    let bmSaturation = parseInt(document.getElementById("question12").value);
    let bmEffective = parseInt(document.getElementById("question13").value);
    let avgEngTT = parseInt(document.getElementById("question14").value);
    let avgViewsTT = parseInput(document.getElementById("question15").value); //text input
    let avgLikesTT = parseInput(document.getElementById("question16").value); //text input
    let avgSharesTT = parseInt(document.getElementById("question17").value);
    let avgComTT = parseInt(document.getElementById("question18").value);


    // Define scoring variables
    let score1 = 0;
    let score2 = 0;
    let score3 = 0;
    let score4 = 0;
    let score5 = 0;


    // 1. % Real Followers Scoring
    if (isNaN(realFollowers)) {
        score1 = -1; // Set score1 to -1 if realFollowers is NaN
    } else if (realFollowers >= 95) {
        score1 = 10;
    } else if (realFollowers >= 90) {
        score1 = 9;
    } else if (realFollowers >= 85) {
        score1 = 8;
    } else if (realFollowers >= 80) {
        score1 = 7;
    } else if (realFollowers >= 75) {
        score1 = 6;
    } else if (realFollowers >= 70) {
        score1 = 5;
    } else if (realFollowers >= 65) {
        score1 = 4;
    } else if (realFollowers >= 60) {
        score1 = 3;
    } else if (realFollowers >= 55) {
        score1 = 2;
    } else if (realFollowers >= 50) {
        score1 = 1;
    } else {
        score1 = 0; // Set score1 to 0 for all other cases
    }

    // 2. % Average Engagement Rate (IG) Scoring
    if (isNaN(avgEngIG)) {
        score2 = -1; // Assign score2 to -1 if avgEngIG is NaN
    } else if (avgEngIG > 3) {
        score2 = 10; 
    } else if (avgEngIG > 2) {
        score2 = 9;
    } else if (avgEngIG > 1) {
        score2 = 8; 
    } else if (avgEngIG > 0.8) {
        score2 = 7; 
    } else if (avgEngIG > 0.7) {
        score2 = 6; 
    } else if (avgEngIG > 0.6) {
        score2 = 5; 
    } else if (avgEngIG > 0.5) {
        score2 = 4; 
    } else if (avgEngIG > 0.3) {
        score2 = 3;
    } else if (avgEngIG > 0.2) {
        score2 = 2;
    } else if (avgEngIG > 0.1) {
        score2 = 1;
    } else {
        score2 = 0; 
    }

    // 3. % Followers Age Scoring
    let followersAgeSum23 = followers2 + followers3;
    let followersAgeSum1234 = followers1 + followers2 + followers3 + followers4; 

    if (isNaN(followersAgeSum23) || isNaN(followersAgeSum1234)) {
        score3 = -1; // Set score3 to -1 if either sum is NaN
    } else if (followersAgeSum23 > 60 && followersAgeSum1234 > 80) {
        score3 = 10;
    } else if (followersAgeSum23 > 50 && followersAgeSum1234 > 70) {
        score3 = 9;
    } else if (followersAgeSum23 > 40 && followersAgeSum1234 > 60) {
        score3 = 8;
    } else if (followersAgeSum23 > 30 && followersAgeSum1234 > 50) {
        score3 = 7;
    } else if (followersAgeSum23 > 20 && followersAgeSum1234 > 40) {
        score3 = 6;
    } else if (followersAgeSum23 > 15 && followersAgeSum1234 > 35) {
        score3 = 5;
    } else if (followersAgeSum23 > 10 && followersAgeSum1234 > 30) {
        score3 = 4;
    } else if (followersAgeSum23 > 5 && followersAgeSum1234 > 25) {
        score3 = 3;
    } else if (followersAgeSum23 > 0 && followersAgeSum1234 > 20) {
        score3 = 2;
    } else if (followersAgeSum23 > 0 && followersAgeSum1234 > 15) {
        score3 = 1;
    } else {
        score3 = 0; // Set score3 to 0 for any other conditions
    }


    // 4. % Followers US Scoring
    if (isNaN(followersUS)) {
        score4 = -1; // Assign score2 to -1 if avgEngIG is NaN
    } else if (followersUS > 80) {
        score4 = 10; 
    } else if (followersUS > 70) {
        score4 = 9;
    } else if (followersUS > 60) {
        score4 = 8; 
    } else if (followersUS > 50) {
        score4 = 7; 
    } else if (followersUS > 40) {
        score4 = 6; 
    } else if (followersUS > 35) {
        score4 = 5; 
    } else if (followersUS > 30) {
        score4 = 4; 
    } else if (followersUS > 25) {
        score4 = 3;
    } else if (followersUS > 20) {
        score4 = 2;
    } else if (followersUS > 15) {
        score4 = 1;
    } else {
        score4 = 0; 
    }


    // 5. $ Cost per Engagement (IG) Scoring
    if (isNaN(costEng)) {
        score5 = -1; // Assign score2 to -1 if avgEngIG is NaN
    } else if (costEng < 1) {
        score5 = 10; 
    } else if (costEng < 2) {
        score5 = 9;
    } else if (costEng < 3) {
        score5 = 8; 
    } else if (costEng < 4) {
        score5 = 7; 
    } else if (costEng < 5) {
        score5 = 6; 
    } else if (costEng < 6) {
        score5 = 5; 
    } else if (costEng < 7) {
        score5 = 4; 
    } else if (costEng < 8) {
        score5 = 3;
    } else if (costEng < 9) {
        score5 = 2;
    } else if (costEng < 10) {
        score5 = 1;
    } else {
        score5 = 0; 
    }


    // Omit blank inputs
    let scores = [];

    if (score1 !== -1) scores.push(score1);
    if (score2 !== -1) scores.push(score2);
    if (score3 !== -1) scores.push(score3);
    if (score4 !== -1) scores.push(score4);
    if (score5 !== -1) scores.push(score5);


    // Perform the calculation 
    let totalScore = scores.reduce((sum, score) => sum + score, 0) / scores.length;
    let maxScore = 10;  // This should match the total maximum possible score from your questions
    let scoreOutOf10 = (totalScore / maxScore) * 10;
    
    // Display the result
    document.getElementById("result").innerText = `Creator Quality Score: ${scoreOutOf10.toFixed(1)} out of 10`;
});
