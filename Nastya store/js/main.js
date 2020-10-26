$(document).ready(function () {
  $(".burger").click(function () {
    $(".burger, .navigation__menu").toggleClass("active");
  });

  const cookieContainer = $(".banner");
  cookieContainer.click(function () {
    cookieContainer.removeClass("active");
    localStorage.setItem("cookieBanner", "true");
  });

  const saveToLocalStorage = localStorage.getItem("cookieBanner");
  setTimeout(
    () => !saveToLocalStorage && cookieContainer.addClass("active"),
    3000
  );

  $("#getting-started").countdown("2020/12/11", function (event) {
    $("#days").text(event.strftime("%D"));
    $("#hours").text(event.strftime("%H"));
    $("#minutes").text(event.strftime("%M"));
    $("#seconds").text(event.strftime("%S"));
  });

  $(".mainslider").slick({
    dots: true,
    infinite: false,
    adaptiveHeight: true,
    speed: 500,
    autoplaySpeed: 4000,
  });

  $(window).scroll(function () {
    const scrollOfset = $(this).scrollTop();
    const introH = $(window).innerHeight()
    if ( scrollOfset >= introH ) {
      $(".header").addClass("sticky");

    } else if ( scrollOfset > 1) {
      $(".header").addClass("active");
    } else {
      $(".header").removeClass("sticky");
      $(".header").removeClass("active");
    }
  });

  const ratingItemList = $(".rating__star");
  const ratingItemArray = Array.prototype.slice.call(ratingItemList);

  ratingItemArray.forEach((item) =>
    item.addEventListener("click", () => {
      const { itemValue } = item.dataset;
      item.parentNode.dataset.totalValue = itemValue;
    })
  );
});
