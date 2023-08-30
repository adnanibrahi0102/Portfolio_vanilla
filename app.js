document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const navlinks = document.getElementById('navlinks');

    menuToggle.addEventListener('click', function() {
        navlinks.classList.toggle('menu-open');
    });
});
const ContactForm=document.getElementById('contact')
const InputName=document.getElementById('name');
const InputEmail=document.getElementById('email');
const InputMessage=document.getElementById('message');

const sendEmail=()=>{
    event.preventDefault();
  const params={
    name:InputName.value,
    email:InputEmail.value,
    message:InputMessage.value
  }
  const serviceID = "service_bsngs6t";
  const templateID = "template_8awldq9";

  emailjs.send(serviceID,templateID,params).then(res=>{
    alert("💌 Your email has been successfully sent. Thank you for reaching out!");
    InputName.value='';
    InputEmail.value='';
    InputMessage.value='';
  }).catch(error=>console.log(error));
}