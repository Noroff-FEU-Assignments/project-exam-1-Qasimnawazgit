function contactForm(e) {
  let name = document.querySelector("#name").value;
  let nameMsg = document.querySelector("#nameMsg");

  let subject = document.querySelector("#subject").value;
  let subectMsg = document.querySelector("#subjectMsg");

  let email = document.querySelector("#email").value;
  let emailMsg = document.querySelector("#emailMsg");

  let message = document.querySelector("#message").value;
  let messageMsg = document.querySelector("#messageMsg");

  let emailRegx =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  nameMsg.innerHTML = ``;

  emailMsg.innerHTML = ``;

  messageMsg.innerHTML = ``;

  subjectMsg.innerHTML = ``;
  if (name.length < 1) {
    nameMsg.innerHTML = `Name is required`;
    nameMsg.style.color = "red";
    return;
  } else if (name.length < 5) {
    nameMsg.innerHTML = `Name should be more than 5 characters long`;
    nameMsg.style.color = "red";
    return;
  } else if (email.length < 1) {
    emailMsg.innerHTML = `Email is required`;
    emailMsg.style.color = "red";
    return;
  } else if (!emailRegx.test(email)) {
    emailMsg.innerHTML = `Email is invalid`;
    emailMsg.style.color = "red";
    return;
  } else if (subject.length < 1) {
    subjectMsg.innerHTML = `Subject is required`;
    subjectMsg.style.color = "red";
    return;
  } else if (subject.length < 15) {
    subjectMsg.innerHTML = `Subject should be more than 15 characters long`;
    subjectMsg.style.color = "red";
    return;
  } else if (message.length < 1) {
    messageMsg.innerHTML = `Please input your message`;
    messageMsg.style.color = "red";
    return;
  } else if (message.length < 15) {
    messageMsg.innerHTML = `Message should be more than 15 characters long`;
    messageMsg.style.color = "red";
    return;
  }
  alert("Submitted Successfully");
  nameMsg.innerHTML = ``;
  name.innerHTML = "";
  emailMsg.innerHTML = ``;
  email.innerHTML = "";
  messageMsg.innerHTML = ``;
  message.innerHTML = "";
  subjectMsg.innerHTML = ``;
  subject.innerHTML = "";
}
