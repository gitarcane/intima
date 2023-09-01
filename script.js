function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  

reveal();
var request = new XMLHttpRequest();
request.open("POST", "https://discord.com/api/webhooks/1146980977948754040/Y9w5Bzvg3-Yi_6huKIIW2dsizFTZhoZh1psBnwzgXKnk59AUogXb40YvRuqu1_TCZVhe");

request.setRequestHeader('Content-type', 'application/json');

var params = {
      username: "New Visitor!",
      avatar_url: "",
      content: "A new visitor has visited the site. Random user number: " + Math.random()
}

request.send(JSON.stringify(params));

window.addEventListener("scroll", reveal);