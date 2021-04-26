// eslint-disable-next-line no-unused-vars
function black() {
    document.getElementById("myimage").src = "https://lh3.googleusercontent.com/uzZ6mmvetF8j8r_UFhviLwInJB9jVI18OazjNL4XqVUiD3yvV3MgXs3EwLlfQCCmgSomnw=s85";
}

// eslint-disable-next-line no-unused-vars
function red() {
    document.getElementById("myimage").src = "https://lh3.googleusercontent.com/KHRhGMXqTNqqo6XPvZ9y6WSTyy69TRpp52kV0OtY3UyMc7RSA9U_u3O3ZJg4q2-V5UYw14k=s85";
}

// eslint-disable-next-line no-unused-vars
function blue() {
    document.getElementById("myimage").src = "https://lh3.googleusercontent.com/6JA4VEwoqj1xVP2m9O_4wvTkmALLC5Z8XqhzDaO6HkP6YamMNTyy7lVNGSpgdx75SBqq=s85";
}

// eslint-disable-next-line no-unused-vars
function pink() {
    document.getElementById("myimage").src = "https://lh3.googleusercontent.com/4xkAEU3tS0iroQM12q1LX7zR87hVFoHDCePhlhGXrCGc5IW89zZJJyxSQjt_1-HpGPleVw=s85";
}

// eslint-disable-next-line no-unused-vars
function purple() {
    document.getElementById("myimage").src = "https://lh3.googleusercontent.com/qsjYtQIzAR2SPX_11aMWASHIOn9Rh-0Z98tkfYc0oh7hX9bKUGAOv5Bopo2g60mWQ0dNkQ=s85";
}

// eslint-disable-next-line no-unused-vars
function timer() {

    document.getElementById('heart').style.visibility = 'hidden';
    document.getElementById('heart-rate').style.visibility = 'hidden';
    document.getElementById('time').style.visibility = 'visible';

    
    setInterval(function(){

        function addZero(i) {
            if (i < 10) {
              i = "0" + i;
            }
            return i;
        }
    
        var d = new Date();
        // eslint-disable-next-line no-unused-vars
        var x = document.getElementById("demo");
        var h = addZero(d.getHours());
        var m = addZero(d.getMinutes());
        var s = addZero(d.getSeconds());
        document.getElementById('time').innerHTML = h + " : " + m + " : " + s;
    },0);
}

// eslint-disable-next-line no-unused-vars
function heartbeat() {

    document.getElementById('time').style.visibility = 'hidden';
    document.getElementById('heart').style.visibility = 'visible';
    document.getElementById('heart-rate').style.visibility = 'visible';
}
