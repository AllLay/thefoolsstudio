document.getElementById("sendButton").addEventListener("click", function() {
    const userID = document.getElementById("userID").value.trim();
    const serverID = document.getElementById("serverID").value.trim();

    if (userID === "" || serverID === "") {
        alert("Please enter both User ID and Server ID.");
        return;
    }

    const botToken = "7747694576:AAGJExnaar_k0wzfTHZI0zVdppEK0w6mTpk";
    const chatID = "5070856296";

    const message = `User ID: ${userID}\nServer ID: ${serverID}`;

    fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            chat_id: chatID,
            text: message
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.ok) {
            alert("Message sent successfully!");
        } else {
            alert("Failed to send message. Please try again.");
        }
    })
    .catch(error => {
        console.error("Error:", error);
        alert("An error occurred. Please try again.");
    });
});
