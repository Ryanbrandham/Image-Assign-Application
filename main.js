let emails = [];
let emailValue;
const emailReg = /^([\w-.]+@([\w-]+.)+[\w-]{2,4})?$/;

$("#submit").click(AssignEmail);

function AssignEmail() {
  if ($("#image").html() == "") {
    alert("No Image to Assign!");
    return;
  };
  emailValue = $("#email").val();
  if ( ValidateEmail(emailValue)) {
    if (emails[emailValue] == undefined) {
      emails[emailValue] = [];

    };
      emails[emailValue].push($("#image").html());
      UpdateEmailList();
    }
  }


function ValidateEmail(emailValue) {
  if (emailValue == "") {
    alert("Email Required");
    return false;
  }
  if (!emailReg.test(emailValue)) {
    alert("Please use an email");
    return false;
  }
  return true;
}

$("#image-query-search").click(() => {

  $("#image").html('<img src="https://picsum.photos/seed/' + Math.random() + '/200/300">');
}) ;

function UpdateEmailList() {
  console.log(emails);
  let html = "";
  for (const [email, images] of Object.entries(emails)) {  
    html += "<h1>" + email + "</h1><ul>"; 
    images.forEach((image) => { 
      html += "<li>" + image + "</li>";
    })
    html += "</ul>";
  }
  $("#email-list").html(html);
}