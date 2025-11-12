// after 4 seconds go to index.html
    // when page loads -> fade-in is already default
    setTimeout(function () {
      document.body.classList.add("fade-out");
      setTimeout(function () {
        window.location.href = "home.html";
      }, 950); // wait for fade animation
    }, 3500); //  original delay