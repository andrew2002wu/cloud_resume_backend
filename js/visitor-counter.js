function visitorCounter(){
    fetch("https://w7x81bgdy7.execute-api.us-east-1.amazonaws.com/visitorCounter")
        .then(response => response.text())
        .then((body) => {
            document.getElementById("visitor-counter").innerHTML=body;
            return body; //remove this if it doesnt work
        })
}