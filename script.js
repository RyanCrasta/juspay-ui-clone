function checkIfMobile() {
  let check = false;
  (function (a) {
    if (
      /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
        a
      ) ||
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
        a.substr(0, 4)
      )
    )
      check = true;
  })(navigator.userAgent || navigator.vendor || window.opera);
  return check;
}

let tl = gsap.timeline();

tl.to("#headingTextContainer h1, #ctaContainer h2", {
  opacity: 1,
  y: 0,
  duration: 1,
});

tl.to(".navItemsCtn > a", {
  duration: 1,
  y: 0,
  stagger: 0.5,
  opacity: 1,
});

tl.to(".globeNav", {
  height: "100%",
});

tl.fromTo(
  "#logoImage",
  {
    x: "40px",
    opacity: 0,
    rotate: 180,
  },
  {
    duration: 1,
    x: 0,
    opacity: 1,
    rotate: 0,
  },
  "-=2"
);

tl.to(
  ".pairThree",
  {
    opacity: 1,
  },
  "-=1.5"
);

tl.to(
  ".pairTwo",

  {
    opacity: 1,
    y: 0,
    duration: 0.5,
  },
  "-=1.5"
);

tl.to(
  ".pairOne",

  {
    opacity: 1,
    y: 0,
    duration: 0.5,
  },
  "-=1.5"
);

tl.fromTo(
  "#ctaButton",
  {
    width: "90px",
    opacity: 0,
  },
  {
    width: "14.5rem",
    opacity: 1,
    duration: 1,
  },
  "-=2"
);

tl.fromTo(
  ".ctaButtonText",
  {
    width: "10px",
  },
  {
    width: "100%",
    duration: 1,
  },
  "-=2"
);

function bannerTextAnimation(
  rowId,
  time1,
  time2,
  time3,
  time4,
  time5,
  time6,
  time7,
  opacity
) {
  tl.to(
    `.${rowId}-onePair`,
    {
      y: "-300%",
      duration: 1,
      opacity: opacity,
    },
    `-=${time1}`
  );

  tl.to(
    `.${rowId}-secondPair`,
    {
      y: "-300%",
      duration: 1,
      opacity: opacity,
    },
    `-=${time2}`
  );

  tl.to(
    `.${rowId}-thirdPair`,
    {
      y: "-300%",
      duration: 1,
      opacity: opacity,
    },
    `-=${time3}`
  );

  tl.to(
    `.${rowId}-fourthPair`,
    {
      y: "-300%",
      duration: 1,
      opacity: opacity,
    },
    `-=${time4}`
  );

  tl.to(
    `.${rowId}-fifthPair`,
    {
      y: "-300%",
      duration: 1,
      opacity: opacity,
    },
    `-=${time5}`
  );

  tl.to(
    `.${rowId}-sixthPair`,
    {
      y: "-300%",
      duration: 1,
      opacity: opacity,
    },
    `-=${time6}`
  );

  tl.to(
    `.${rowId}-seventhPair`,
    {
      y: "-300%",
      duration: 1,
      opacity: opacity,
    },
    `-=${time7}`
  );
}

function bannerTextAnimationForMobile(
  rowId,
  time1,
  time2,
  time3,
  time4,
  time5,
  time6,
  time7,
  opacity
) {
  tl.to(
    `.${rowId}-onePair-left`,
    {
      y: "-165%",
      duration: 1,
      opacity: opacity,
    },
    `-=${time1}`
  );

  tl.to(
    `.${rowId}-onePair-right`,
    {
      y: "-305%",
      duration: 1,
      opacity: opacity,
    },
    `-=${time1}`
  );

  tl.to(
    `.${rowId}-secondPair-left`,
    {
      y: "-165%",
      duration: 1,
      opacity: opacity,
    },
    `-=${time2}`
  );

  tl.to(
    `.${rowId}-secondPair-right`,
    {
      y: "-305%",
      duration: 1,
      opacity: opacity,
    },
    `-=${time2}`
  );

  tl.to(
    `.${rowId}-thirdPair-left`,
    {
      y: "-165%",
      duration: 1,
      opacity: opacity,
    },
    `-=${time3}`
  );

  tl.to(
    `.${rowId}-thirdPair-right`,
    {
      y: "-305%",
      duration: 1,
      opacity: opacity,
    },
    `-=${time3}`
  );

  tl.to(
    `.${rowId}-fourthPair-left`,
    {
      y: "-165%",
      duration: 1,
      opacity: opacity,
    },
    `-=${time4}`
  );

  tl.to(
    `.${rowId}-fourthPair-right`,
    {
      y: "-305%",
      duration: 1,
      opacity: opacity,
    },
    `-=${time4}`
  );

  tl.to(
    `.${rowId}-fifthPair-left`,
    {
      y: "-165%",
      duration: 1,
      opacity: opacity,
    },
    `-=${time5}`
  );

  tl.to(
    `.${rowId}-fifthPair-right`,
    {
      y: "-305%",
      duration: 1,
      opacity: opacity,
    },
    `-=${time5}`
  );

  tl.to(
    `.${rowId}-sixthPair-left`,
    {
      y: "-165%",
      duration: 1,
      opacity: opacity,
    },
    `-=${time6}`
  );

  tl.to(
    `.${rowId}-sixthPair-right`,
    {
      y: "-305%",
      duration: 1,
      opacity: opacity,
    },
    `-=${time6}`
  );

  tl.to(
    `.${rowId}-seventhPair-left`,
    {
      y: "-305%",
      duration: 1,
      opacity: opacity,
    },
    `-=${time7}`
  );

  tl.to(
    `.${rowId}-seventhPair-right`,
    {
      y: "-305%",
      duration: 1,
      opacity: opacity,
    },
    `-=${time7}`
  );
}

if (checkIfMobile()) {
  bannerTextAnimationForMobile(
    "firstRow",
    1.9,
    1.89,
    1.88,
    1.87,
    1.86,
    1.85,
    1.84,
    0
  );

  bannerTextAnimationForMobile(
    "secondRow",
    1.92,
    1.91,
    1.9,
    1.89,
    1.88,
    1.87,
    1.86,
    0
  );

  bannerTextAnimationForMobile(
    "thirdRow",
    1.94,
    1.93,
    1.92,
    1.91,
    1.9,
    1.89,
    1.88,
    0
  );

  bannerTextAnimationForMobile(
    "fourthRow",
    1.96,
    1.95,
    1.94,
    1.93,
    1.92,
    1.91,
    1.9,
    1
  );
} else {
  bannerTextAnimation("firstRow", 1.9, 1.89, 1.88, 1.87, 1.86, 1.85, 1.84, 0);

  bannerTextAnimation("secondRow", 1.92, 1.91, 1.9, 1.89, 1.88, 1.87, 1.86, 0);

  bannerTextAnimation("thirdRow", 1.94, 1.93, 1.92, 1.91, 1.9, 1.89, 1.88, 1);

  bannerTextAnimation("fourthRow", 1.96, 1.95, 1.94, 1.93, 1.92, 1.91, 1.9, 1);
}

function getMousePosition(canvas, e) {
  var rect = canvas.getBoundingClientRect();

  return {
    xx:
      parseInt(e.clientX) -
      parseInt(rect.left) -
      $("#followCursor").height() / 2,
    yy:
      parseInt(e.clientY) -
      parseInt(rect.top) -
      $("#followCursor").height() / 2,
  };
}

let hide = false;

function cursorEffect(cursorId, pageContent) {
  pageContent.addEventListener("mousemove", function (e) {
    var { xx, yy } = getMousePosition(pageContent, e);

    if (e.clientX === 0) {
      scaleDown();
    } else {
      if (!hide) {
        scaleUp();
        gsap.to(cursorId, {
          x: xx,
          y: yy,
          opacity: 1,
        });
      }
    }
  });

  function scaleUp() {
    gsap.to(cursorId, {
      scale: 1,
      opacity: 1,
    });
  }

  function scaleDown() {
    gsap.to(cursorId, {
      scale: 0,
      opacity: 0,
    });
  }

  document.querySelector("#firstColumn").addEventListener("mouseleave", () => {
    hide = true;
    scaleDown();
  });

  document.querySelector("#firstColumn").addEventListener("mouseenter", () => {
    // document.querySelector("#followCursor").style.backgroundColor = "orange";

    $("#followCursor img").attr("src", "./images/general-hover.svg");

    document.querySelector("#cursorInfoLineOne").textContent = "125Mn+";
    document.querySelector("#cursorInfoLineTwo").textContent = "Daily Trans";
    document.querySelector("#cursorInfo").style.bottom = "unset";
    document.querySelector("#cursorInfo").style.top = "60%";
    hide = false;
    scaleUp();
  });

  document.querySelector("#secondColumn").addEventListener("mouseenter", () => {
    // document.querySelector("#followCursor").style.backgroundColor = "green";

    $("#followCursor img").attr("src", "./images/global-hover.svg");
    document.querySelector("#cursorInfoLineOne").textContent = "99.99%";
    document.querySelector("#cursorInfoLineTwo").textContent = "Uptime";
    document.querySelector("#cursorInfo").style.bottom = "unset";
    document.querySelector("#cursorInfo").style.top = "60%";
    hide = false;
    scaleUp();
  });

  document.querySelector("#secondColumn").addEventListener("mouseleave", () => {
    hide = true;
    scaleDown();
  });

  document.querySelector("#thirdColumn").addEventListener("mouseenter", () => {
    // document.querySelector("#followCursor").style.backgroundColor = "red";
    $("#followCursor img").attr("src", "./images/juspay-hover.svg");
    document.querySelector("#cursorInfoLineOne").textContent = "$500Bn+";
    document.querySelector("#cursorInfoLineTwo").textContent = "Annual TPV";

    document.querySelector("#cursorInfo").style.bottom = "60%";
    document.querySelector("#cursorInfo").style.top = "unset";

    hide = false;
    scaleUp();
  });

  document.querySelector("#thirdColumn").addEventListener("mouseleave", () => {
    hide = true;
    scaleDown();
  });

  document
    .querySelector("#headingTextContainer, #ctaContainer")
    .addEventListener("mouseenter", () => {
      hide = true;
      scaleDown();
    });
}

if (!checkIfMobile()) {
  cursorEffect("#followCursor", document.querySelector("#columnsCtn"));
}

// marquee logic
const scrollers = document.querySelectorAll(".scroller");

// If a user hasn't opted in for recuded motion, then we add the animation
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    // add data-animated="true" to every `.scroller` on the page
    scroller.setAttribute("data-animated", true);

    // Make an array from the elements within `.scroller-inner`
    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    // For each item in the array, clone it
    // add aria-hidden to it
    // add it into the `.scroller-inner`
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}

let click = 0;

document.querySelector("#hamburgerBtn").addEventListener("click", () => {
  click += 1;

  if (click % 2 !== 0) {
    $(".hamburgerBtnImage").attr("src", "./images/close-icon.svg");
    document.querySelector(".mobileNavigation").style.display = "block";
  } else {
    $(".hamburgerBtnImage").attr("src", "./images/hamburger-icon.svg");
    document.querySelector(".mobileNavigation").style.display = "none";
  }
});
