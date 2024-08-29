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
    let score6 = 0;
    let score7 = 0;
    let score8 = 0;
    let score9 = 0;
    let score10 = 0;
    let score11 = 0;
    let score12 = 0;
    let score13 = 0;


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
    } else if (avgEngIG > 6) {
        score2 = 13; 
    } else if (avgEngIG > 5) {
        score2 = 12; 
    } else if (avgEngIG > 4) {
        score2 = 11; 
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
        score4 = -1; // Assign score4 to -1 if avgEngIG is NaN
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
        score5 = -1; // Assign score5 to -1 if costEng is NaN
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

    // 6. # Average Likes (IG) Scoring
    if (isNaN(avgLikesIG)) {
        score6 = -1; // Assign score6 to -1 if avgEngIG is NaN
    } else if (avgLikesIG > 5000) {
        score6 = 13; 
    } else if (avgLikesIG > 2500) {
        score6 = 12;
    } else if (avgLikesIG > 1000) {
        score6 = 11; 
    } else if (avgLikesIG > 800) {
        score6 = 10; 
    } else if (avgLikesIG > 600) {
        score6 = 9; 
    } else if (avgLikesIG > 500) {
        score6 = 8; 
    } else if (avgLikesIG > 400) {
        score6 = 7; 
    } else if (avgLikesIG > 300) {
        score6 = 6;
    } else if (avgLikesIG > 200) {
        score6 = 5;
    } else if (avgLikesIG > 100) {
        score6 = 4;
    } else if (avgLikesIG > 60) {
        score6 = 3;
    } else if (avgLikesIG > 40) {
        score6 = 2;
    } else if (avgLikesIG > 20) {
        score6 = 1;
    } else {
        score6 = 0; 
    }


    // 7. # Average Comments (IG) Scoring
    if (isNaN(avgComIG)) {
        score7 = -1; // Assign score7 to -1 if avgEngIG is NaN
    } else if (avgComIG > 200) {
        score7 = 10; 
    } else if (avgComIG > 100) {
        score7 = 9;
    } else if (avgComIG > 50) {
        score7 = 8; 
    } else if (avgComIG > 30) {
        score7 = 7; 
    } else if (avgComIG > 20) {
        score7 = 6; 
    } else if (avgComIG > 10) {
        score7 = 5; 
    } else if (avgComIG > 6) {
        score7 = 4; 
    } else if (avgComIG > 4) {
        score7 = 3;
    } else if (avgComIG > 3) {
        score7 = 2;
    } else if (avgComIG > 1) {
        score7 = 1;
    } else {
        score7 = 0; 
    }


    // 8. % Brand Mention Saturation Rate Scoring
    if (isNaN(bmSaturation)) {
        score8 = -1; // Assign score8 to -1 if bmSaturation is NaN
    } else if (bmSaturation < 10) {
        score8 = 10; 
    } else if (bmSaturation < 20) {
        score8 = 9;
    } else if (bmSaturation < 30) {
        score8 = 8; 
    } else if (bmSaturation < 40) {
        score8 = 7; 
    } else if (bmSaturation < 50) {
        score8 = 6; 
    } else if (bmSaturation < 60) {
        score8 = 5; 
    } else if (bmSaturation < 70) {
        score8 = 4; 
    } else if (bmSaturation < 80) {
        score8 = 3;
    } else if (bmSaturation < 90) {
        score8 = 2;
    } else if (bmSaturation < 100) {
        score8 = 1;
    } else {
        score8 = 0; 
    }

    // 9. % Brand Mention Post Effectiveness Scoring
    if (isNaN(bmEffective)) {
        score9 = -1; // Assign score9 to -1 if bmEffective is NaN
    } else if (bmEffective > 110) {
        score9 = 12;
    } else if (bmEffective > 100) {
        score9 = 11;
    } else if (bmEffective > 90) {
        score9 = 10; 
    } else if (bmEffective > 80) {
        score9 = 9;
    } else if (bmEffective > 70) {
        score9 = 8; 
    } else if (bmEffective > 60) {
        score9 = 7; 
    } else if (bmEffective > 50) {
        score9 = 6; 
    } else if (bmEffective > 40) {
        score9 = 5; 
    } else if (bmEffective > 30) {
        score9 = 4; 
    } else if (bmEffective > 20) {
        score9 = 3;
    } else if (bmEffective > 10) {
        score9 = 2;
    } else if (bmEffective > 5) {
        score9 = 1;
    } else {
        score9 = 0; 
    }


    // 10. # Average Views (TT) Scoring
    if (isNaN(avgViewsTT)) {
        score10 = -1; // Assign score10 to -1 if avgViewsTT is NaN
    } else if (avgViewsTT > 1000000) {
        score10 = 13; 
    } else if (avgViewsTT > 500000) {
        score10 = 12; 
    } else if (avgViewsTT > 200000) {
        score10 = 11; 
    } else if (avgViewsTT > 100000) {
        score10 = 10; 
    } else if (avgViewsTT > 10000) {
        score10 = 9;
    } else if (avgViewsTT > 5000) {
        score10 = 8; 
    } else if (avgViewsTT > 1000) {
        score10 = 7; 
    } else if (avgViewsTT > 500) {
        score10 = 6; 
    } else if (avgViewsTT > 300) {
        score10 = 5; 
    } else if (avgViewsTT > 200) {
        score10 = 4; 
    } else if (avgViewsTT > 100) {
        score10 = 3;
    } else if (avgViewsTT > 50) {
        score10 = 2;
    } else if (avgViewsTT > 1) {
        score10 = 1;
    } else {
        score10 = 0; 
    }


    // 11. # Average Likes (TT) Scoring
    if (isNaN(avgLikesTT)) {
        score11 = -1; // Assign score11 to -1 if avgLikesTT is NaN
    } else if (avgLikesTT > 10000) {
        score11 = 13; 
    } else if (avgLikesTT > 5000) {
        score11 = 12; 
    } else if (avgLikesTT > 2000) {
        score11 = 11; 
    } else if (avgLikesTT > 1000) {
        score11 = 10; 
    } else if (avgLikesTT > 800) {
        score11 = 9;
    } else if (avgLikesTT > 600) {
        score11 = 8; 
    } else if (avgLikesTT > 400) {
        score11 = 7; 
    } else if (avgLikesTT > 300) {
        score11 = 6; 
    } else if (avgLikesTT > 200) {
        score11 = 5; 
    } else if (avgLikesTT > 100) {
        score11 = 4; 
    } else if (avgLikesTT > 50) {
        score11 = 3;
    } else if (avgLikesTT > 25) {
        score11 = 2;
    } else if (avgLikesTT > 1) {
        score11 = 1;
    } else {
        score11 = 0; 
    }


    // 12. # Average Shares (TT) Scoring
    if (isNaN(avgSharesTT)) {
        score12 = -1; // Assign score12 to -1 if avgSharesTT is NaN
    } else if (avgSharesTT > 2000) {
        score12 = 13; 
    } else if (avgSharesTT > 1000) {
        score12 = 12; 
    } else if (avgSharesTT > 500) {
        score12 = 11; 
    } else if (avgSharesTT > 400) {
        score12 = 10; 
    } else if (avgSharesTT > 300) {
        score12 = 9;
    } else if (avgSharesTT > 200) {
        score12 = 8; 
    } else if (avgSharesTT > 100) {
        score12 = 7; 
    } else if (avgSharesTT > 50) {
        score12 = 6; 
    } else if (avgSharesTT > 10) {
        score12 = 5; 
    } else if (avgSharesTT > 5) {
        score12 = 4; 
    } else if (avgSharesTT > 3) {
        score12 = 3;
    } else if (avgSharesTT > 2) {
        score12 = 2;
    } else if (avgSharesTT > 1) {
        score12 = 1;
    } else {
        score12 = 0; 
    }


    // 13. # Average Comments (TT) Scoring
    if (isNaN(avgComTT)) {
        score13 = -1; // Assign score13 to -1 if avgComTT is NaN
    } else if (avgComTT > 100) {
        score13 = 13; 
    } else if (avgComTT > 50) {
        score13 = 12; 
    } else if (avgComTT > 30) {
        score13 = 11; 
    } else if (avgComTT > 20) {
        score13 = 10; 
    } else if (avgComTT > 10) {
        score13 = 9;
    } else if (avgComTT > 5) {
        score13 = 8; 
    } else if (avgComTT > 4) {
        score13 = 7; 
    } else if (avgComTT > 3) {
        score13 = 6; 
    } else if (avgComTT > 2) {
        score13 = 5; 
    } else if (avgComTT > 1) {
        score13 = 4; 
    } else if (avgComTT > 0.5) {
        score13 = 3;
    } else if (avgComTT > 0.2) {
        score13 = 2;
    } else if (avgComTT > 0.01) {
        score13 = 1;
    } else {
        score13 = 0; 
    }


    // Omit blank inputs
    let scores = [];

    if (score1 !== -1) scores.push(score1);
    if (score2 !== -1) scores.push(score2);
    if (score3 !== -1) scores.push(score3);
    if (score4 !== -1) scores.push(score4);
    if (score5 !== -1) scores.push(score5);
    if (score6 !== -1) scores.push(score6);
    if (score7 !== -1) scores.push(score7);
    if (score8 !== -1) scores.push(score8);
    if (score9 !== -1) scores.push(score9);
    if (score10 !== -1) scores.push(score10);
    if (score11 !== -1) scores.push(score11);
    if (score12 !== -1) scores.push(score12);
    if (score13 !== -1) scores.push(score13);


    // Perform the calculation 
    let totalScore = scores.reduce((sum, score) => sum + score, 0) / scores.length;
    let maxScore = 10;  // This should match the total maximum possible score from your questions
    let scoreOutOf10 = (totalScore / maxScore) * 10;
    
    // Display the result
    document.getElementById("result").innerText = `Creator Quality Score: ${scoreOutOf10.toFixed(1)} out of 10`;
});
