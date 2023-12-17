document.addEventListener("DOMContentLoaded", function () {
  var links = document.querySelectorAll("a");
  
  links.forEach(function (link) {
    link.addEventListener("click", function (event) {
      if (this.hash !== "") {
        event.preventDefault();
  
        var hash = this.hash;
  
        document.querySelector(hash).scrollIntoView({
          behavior: "smooth",
        });
  
        history.pushState(null, null, hash);
      }
    });
  });
});
