
/*
Get a URL parameter from the name
*/
function getURLParameter(paramName) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');
    var n, valPair;
    
    for( n=0; n < vars.length; n++) {
        valPair = vars[n].split("="); 
        if (decodeURIComponent( valPair[0] ) == paramName ) {
            var decoded = decodeURI( valPair[1] );
            decoded = decoded.replace(/\+/g, ' ');
            console.log('The parameter ' + paramName + ' = ' + valPair[1] );
            return decoded;
        }
    }
    
    console.log('DOH! The parameter ' + paramName + ' not found!');
    return null;
}

/*
    Do the MADLib 
*/
function MADLib() {
    var submitted = getURLParameter('submitted');
    
    if ( submitted === null) { 
        $("#output").html(' ');
        return; 
    }
    
    var answer;
    var retHTML = '<h1>Your MadLib</h1>';
    
    var answerArray = new Array("","answer1","answer2","answer3","answer4","answer5","answer6","answer7","answer8","answer9","answer10","answer11");
    var madLibArray = new Array( 
        "Two " , 
        " both alike in dignity, <br> In fair ",
        ", where we lay our scene,<br />From ancient  " , 
        "  break to new mutiny, <br /> Where civil blood makes civil hands unclean. <br /> From forth the fatal loins of these two foes <br /> A pair of star-cross'd " , 
        "  take their life; <br /> Whole misadventured piteous overthrows <br /> Do with their " ,
        "  bury their parents' strife. <br /> The fearful passage of their " , 
        "  love, <br /> And the continuance of their parents' rage, <br />Which, but their children's end, nought could " , 
        " <br /> Is now the " , 
        "  hours' traffic of our stage; <br /> The which if you with " ,
        "" ,
        "  attend, <br /> What here shall  " , 
        " , our toil shall strive to mend. ");
    
    var i;
    for(i=0; i < madLibArray.length; i++) {
        answer = getURLParameter(answerArray[i]);
        
        if (answer === null) {
            retHTML = retHTML + madLibArray[i];
        } else {
            retHTML = retHTML + "<b>" + answer + "</b>" + madLibArray[i];
        }
    }
    $("#output").html(retHTML);

}


