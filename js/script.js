const swiper = new Swiper('.swiper', {
  // Default parameters
  loopedSlides: 6,
  width: 274,
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  },

  breakpoints: {
    768: {
      width: 400,
    }
  }
});

//アコーディオン
$(".faq__list-question").on("click", function () {
  $(this).next().slideToggle();
  $(this).toggleClass("is-open");
  $('.faq__list-question').not($(this)).next().slideUp();
  $('.faq__list-question').not($(this)).removeClass("is-open");
})

//スクロールによるボタン表示
$(window).on("scroll", function () {//スクロール検知
  if ($(this).scrollTop() > 200) {//トップから200px以上スクロールしたら
    $(".to-top").addClass("is-show");
  } else {
    $(".to-top").removeClass("is-show");
  }
});

$(".to-top").click(function () {
  $('body,html').animate({
    scrollTop: 0
  }, 700);
  return false;
});

//スムーススクロール
$("a[href^='#']").on("click", function () { //hrefの先頭に＃が付いたaタグをクリックした時に

  var header = $(".header").innerHeight();//headerの高さを取得
  var id = $(this).attr("href"); //変数でherfの先頭が＃で始まるaタグのhref属性の値を取得 attr()→属性取得メソッド
  var position = 0;//初期値のtop位置0を指定する（idが＃だけの場合は、topへ戻る記述）
  if (id != "#") { //idの値が＃だけじゃない場合
    position = $(id).offset().top - header;//topからの位置を取得(headerの高さ分だけ引く) offset()→位置取得メソッド
  }

  $("html, body").animate({ //指定位置までの移動する
    scrollTop: position
  },
    500);//動く速さの記述(単位：ミリ秒)
});

//ドロワーメニュー
$(".drawer-icon").on("click", function (e) {
  e.preventDefault();//無効化（クリックイベント時に使用）
  $(".drawer-icon").toggleClass("is-active");
  $(".drawer__background").toggleClass("is-active");
  $(".drawer__nav-content").toggleClass("is-active");
  return false;//古いブラウザ用
});

$(".drawer__nav-item-link").on("click", function (e) {
  e.preventDefault();//無効化（クリックイベント時に使用）
  $(".drawer-icon").toggleClass("is-active");
  $(".drawer__background").toggleClass("is-active");
  $(".drawer__nav-content").toggleClass("is-active");
  return false;//古いブラウザ用
});

$(".drawer__background").on("click", function (e) {
  e.preventDefault();//無効化（クリックイベント時に使用）
  $(".drawer-icon").toggleClass("is-active");
  $(".drawer__background").toggleClass("is-active");
  $(".drawer__nav-content").toggleClass("is-active");
  return false;//古いブラウザ用
});

$(".drawer__nav-content").on("click", function (e) {
  e.preventDefault();//無効化（クリックイベント時に使用）
  $(".drawer-icon").toggleClass("is-active");
  $(".drawer__background").toggleClass("is-active");
  $(".drawer__nav-content").toggleClass("is-active");
  return false;//古いブラウザ用
});

//submitボタンの監視
// フォームの必須項目を監視し、必要な条件を満たした場合にsubmitボタンの背景色を変更する
const form = document.getElementById('js-form');
const submitButton = document.getElementById('js-submit');
const nameInput = document.querySelector('input[name="name"]');
const furiganaInput = document.querySelector('input[name="furigana"]');
const privacyCheckbox = document.querySelector('input[name="privacy"]');

// 入力状態を監視する関数
function checkFormValidity() {
  if (nameInput.value !== '' && furiganaInput.value !== '' && privacyCheckbox.checked) {
    submitButton.removeAttribute('disabled');
    submitButton.classList.add('enabled');
  } else {
    submitButton.setAttribute('disabled', 'disabled');
    submitButton.classList.remove('enabled');
  }
}

// フォームの入力状態を監視するイベントリスナーを追加
form.addEventListener('input', checkFormValidity);

// 初期状態でフォームの妥当性をチェック
checkFormValidity();
