var email_input = document.getElementById("email"),
    submit_btn = document.getElementById("sub-btn"),
    error_msg = document.getElementById("error_msg");

    function submit(){
        if (email_input.value === ""){
           error_msg.innerHTML = "It looks like you forgot to add your email.";
           email_input.style.border = "2px solid rgba(134, 0, 0, 0.76)"; 
        } else if (!email_input.value.includes("@") ||
        !email_input.value.includes(".")) {
           error_msg.innerHTML = "Check your email please";
           email_input.style.border = "2px solid rgba(134, 0, 0, 0.76)"; 
        }
    }    