var url = "https://agf6frcg83.execute-api.us-east-1.amazonaws.com/prod/visitors";
var params = "lorem=ipsum&name=alpha";
var xhr = new XMLHttpRequest();
xhr.open("POST", url, true);

//Send the proper header information along with the request
xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

xhr.send(params);