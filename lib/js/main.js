const usernameElement = document.getElementById("username");
const messageElement = document.getElementById("message");
const button = document.getElementById("submitButton");
button.addEventListener("click",updateDB);

//Set database object here
let database = firebase.database().ref()

/**
 * Updates the database with the username and message.
 */
function updateDB(event){
    event.preventDefault();
    const username = usernameElement.value;
    const message = messageElement.value;
    console.log(username + " : " + message);

    usernameElement.value = "";
    messageElement.value  = "";

    let value = {
        NAME: username,
        MESSAGE: message
    }

    database.push(value);
    //Update database here

}

// Set database "child_added" event listener here
database.on("child_added", addMessage);
let msgContainer = document.querySelector(".allMessages")

function addMessage(data){
    const row = data.val();
    const name = row.NAME;
    const message = row.MESSAGE;

    const p = document.createElement("p");
    p.innerText = `${name}: ${message}`;
    msgContainer.appendChild(p)
}