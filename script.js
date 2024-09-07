let tl = gsap.timeline();

tl.to("#headingTextContainer h1, #ctaContainer h2", {
  opacity: 1,
  y: 0,
  duration: 1,
});

tl.to(".navItemsCtn a", {
  duration: 1,
  y: 0,
  stagger: 0.5,
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
  "#ctaButtonText",
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

bannerTextAnimation("firstRow", 1.9, 1.89, 1.88, 1.87, 1.86, 1.85, 1.84, 0);

bannerTextAnimation("secondRow", 1.92, 1.91, 1.9, 1.89, 1.88, 1.87, 1.86, 0);

bannerTextAnimation("thirdRow", 1.94, 1.93, 1.92, 1.91, 1.9, 1.89, 1.88, 1);

bannerTextAnimation("fourthRow", 1.96, 1.95, 1.94, 1.93, 1.92, 1.91, 1.9, 1);

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
      console.log("pinku");
      hide = true;
      scaleDown();
    });
}

cursorEffect("#followCursor", document.querySelector("#columnsCtn"));
