$(document).ready(() => {
  new fullpage("#fullpage", {
    sectionSelector: ".section",
    navigation: true,
    navigationPosition: "right",
    anchors: ["home", "about", "portfolio", "contact"],
    menu: "#menu",
    scrollingSpeed: 700,
    autoScrolling: true,
    scrollOverflow: true, // 섹션 내 스크롤 활성화
    scrollOverflowReset: true, // 스크롤 오버플로우 리셋
    fitToSection: true, // 섹션에 맞춰 페이지 맞춤
    afterLoad: function (origin, destination, direction) {
      console.log("Section loaded: ", destination.anchor);
    },
    onLeave: function (origin, destination, direction) {
      console.log("Leaving section: ", origin.anchor);
    },
  });
});
