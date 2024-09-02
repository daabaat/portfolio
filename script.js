// script.js
$(document).ready(() => {
  // 필터 버튼 클릭 시 필터링 기능
  $(".filter-button").on("click", function () {
    const filter = $(this).data("filter");

    // 버튼 스타일 업데이트
    $(".filter-button").removeClass("active");
    $(this).addClass("active");

    // 프로젝트 필터링
    $(".project-box").each(function () {
      if (filter === "all") {
        $(this).show();
      } else if ($(this).hasClass(filter)) {
        $(this).show();
      } else {
        $(this).hide();
      }
    });
  });

  // 타이핑 효과 구현
  let text = "안녕하세요 프론트엔드 개발자 손근영입니다.";
  let index = 0;
  let isAdding = true;
  let delay = 100; // 타이핑 속도

  function typeAndDelete() {
    if (isAdding) {
      // 타이핑 중
      if (index < text.length) {
        $("#intro").append(text.charAt(index));
        index++;
        setTimeout(typeAndDelete, delay);
      } else {
        // 타이핑이 끝나면 잠시 대기
        isAdding = false;
        setTimeout(typeAndDelete, 2000); // 지우기 전 대기 시간
      }
    } else {
      // 지우기 중
      if (index > 0) {
        index--;
        $("#intro").text(text.substring(0, index));
        setTimeout(typeAndDelete, delay);
      } else {
        // 지우기가 끝나면 타이핑 모드로 전환
        isAdding = true;
        setTimeout(typeAndDelete, 1000); // 다시 타이핑하기 전 대기 시간
      }
    }
  }

  // 타이핑 시작
  typeAndDelete();
});
