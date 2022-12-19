var cl = console.log;

var stdArray = [{
    fname: "Tony",
    lname: "Stark",
    nickname: "Ironman",
    email: "tony@stark.com"
},
{
    fname: "Peter",
    lname: "Parker",
    nickname: "Spiderman",
    email: "peter@stark.com"
},
{
    fname: "Bruce",
    lname: "Wayne",
    nickname: "Batman",
    email: "bruce@wayne.com"
},
{
    fname: "Stephen",
    lname: "Strange",
    nickname: "Dr. Strange",
    email: "stephen@strange.com"
}]

var result = '';

var stdInfoContainer = document.getElementById("stdInfoContainer");
for (var i = 0; i < stdArray.length; i++) {
    result += "<tr>";
    result += "<td>" + (i + 1) +"</td>"
    result += "<td>" + stdArray[i].fname + "</td>";
    result += "<td>" + stdArray[i].lname + "</td>";
    result += "<td>" + stdArray[i].nickname + "</td>";
    result += "<td>" + stdArray[i].email + "</td>";
    result += "</tr>"
}

cl(result);

stdInfoContainer.innerHTML = result;