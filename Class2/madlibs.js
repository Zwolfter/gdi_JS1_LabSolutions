
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
        return; 
        document.write('<p>NOT SUBMITTED!!</p>');
    }
    

    
    var answer;
    var retHTML = '';
    
    /* Word 1 - Plural Noun */
    //answer = prompt("Noun (plural)","");
    answer = getURLParameter("answer1");
    retHTML = "Two <b>" + answer + "</b> both alike in dignity, <br> In fair ";
    
    
    /* Word 2 - PLACE */
    //answer = prompt("PLACE","");
    answer = getURLParameter("answer2");
    retHTML = retHTML + "<b>" + answer +  "</b>, where we lay our scene,<br />From ancient  ";
    
    /* Word 3 - NOUN */
    //answer = prompt("NOUN"," ");
    answer = getURLParameter("answer3");
    retHTML = retHTML + "<b>" + answer +  "</b>  break to new mutiny, <br /> Where civil blood makes civil hands unclean. <br /> From forth the fatal loins of these two foes <br /> A pair of star-cross'd ";
    
    /* Word 4 - NOUN (PLURAL)     */
    //answer = prompt("NOUN (PLURAL)"," ");
    answer = getURLParameter("answer4");
    retHTML = retHTML + "<b>" + answer +  "</b>  take their life; <br /> Whole misadventured piteous overthrows <br /> Do with their ";
    
    /* Word 5 - NOUN   */
    //answer = prompt("NOUN ","");
    answer = getURLParameter("answer5");
    retHTML = retHTML + "<b>" + answer +  "</b>  bury their parents` strife. <br /> The fearful passage of their ";
    
    /* Word 6 -  ADJECTIVE  */
    //answer = prompt("ADJECTIVE "," ");
    answer = getURLParameter("answer6");
    retHTML = retHTML + "<b>" + answer +  "</b>  love, <br /> And the continuance of their parents' rage, <br />Which, but their children's end, nought could ";
    
    /* Word 7 - VERB   */
    // answer = prompt("VERB ","");
    answer = getURLParameter("answer7");
    retHTML = retHTML + "<b>" + answer +  "</b> <br /> Is now the ";
    
    /* Word 8 - NUMBER    */
    //answer = prompt("NUMBER ","  ");
    answer = getURLParameter("answer8");
    retHTML = retHTML + "<b>" + answer +  "</b>  hours' traffic of our stage; <br /> The which if you with ";
    
    /* Word 9 - ADJECTIVE   */
    //answer = prompt("ADJECTIVE ","");
    answer = getURLParameter("answer9");
    retHTML = retHTML + "<b>" + answer +  "</b>  ";
    
    /* Word 10 - BODY PART    */
    //answer = prompt("BODY PART ","");
    answer = getURLParameter("answer10");
    retHTML = retHTML + "<b>" + answer +  "</b>  attend, <br /> What here shall  ";
    
    /* Word 11 - VERB   */
    //answer = prompt("VERB ","");
    answer = getURLParameter("answer11");
    retHTML = retHTML + "<b>" + answer +  "</b> , our toil shall strive to mend. ";
    
    document.write(retHTML);

}