$(function() {
    $('#change-skin').on('click', function () {
      $("body").toggleClass("page-dark-mode");

      // Check browser support
      if (typeof(Storage) !== "undefined") {
        // Retrieve
        const skin = localStorage.getItem("skin");
        if(typeof(skin) !== "undefined") {
          if(skin === "dark") {
            // Change back to light when cache is dark.
            BeautifulJekyllJS.changeSkin(false);
            localStorage.setItem("skin", "light");
          }
          else {
            // Change back to dark when cache is light.
            BeautifulJekyllJS.changeSkin(true);
            localStorage.setItem("skin", "dark");
          }
        }
        else {
          BeautifulJekyllJS.changeSkin(true);
          localStorage.setItem("skin", "dark");
        }
      } else {
        BeautifulJekyllJS.initNavbar();
      }
    });
  });