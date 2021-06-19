// We are using Jquery

$(document).ready(function() {
    // 1
    console.log("we are in ready 1");

    $("#edu").ready(function() {
        console.log("button clicked");
        makeRequest();
    });

    // 2
    console.log("2");
});

function makeRequest() {
    console.log("Making request");

    let httpRequest = new XMLHttpRequest();

    if (!httpRequest) {
        alert("Problem making request");
        return false;
    }

    // what happends here is after whats below
    httpRequest.onreadystatechange = function() {
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            if (httpRequest.status === 200) {
                // this is good
                console.log("Results -> ", httpRequest.responseText);
                // still need to do some work
                let myArray = JSON.parse(httpRequest.responseText).my_degrees;
                if (Array.isArray(myArray)) {
                    myArray.forEach(element => {
                        // this is a loop
                        $("#resultsGoHere").append(
                            '<table><tr><td colspan="2">' +
                            element.degree.link +
                            '</td></tr>' +
                            '<tr><th colspan="2">' + element.degree.school + '</th><td>' +
                            '</td></tr>' +
                            '<tr><td>Major:</td><td>' +
                            element.degree.major +
                            '</td></tr>' +
                            '<tr><td>Degree:</td><td>' +
                            element.degree.type +
                            '</td></tr>' +
                            '<tr><td>Year Awarded:</td><td>' +
                            element.degree.year +
                            '</td></tr></table>'
                        );
                    });
                } else {
                    console.log("Its not an array ", myArray);
                }
            } else {
                // there was an issue
                alert("There was a problem with the request " + httpRequest.status);
            }
        } else {
            console.log("Progress = ", httpRequest.readyState);
        }
    };

    // this is how we fire the function above
    httpRequest.open("GET", "my_degrees.json");
    httpRequest.send();
}