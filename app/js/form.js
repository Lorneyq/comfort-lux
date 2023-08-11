// var sendRequest = (data) => {

//   fetch('http://comfortlux.by/node/request-call', {
//       method: 'POST',
//       mode: 'cors',
//       cache: 'no-cache',
//       credentials: 'same-origin',
//       headers: {
//           'Content-Type': 'application/json'
//       },
//       redirect: 'follow',
//       referrerPolicy: 'no-referrer',
//       body: JSON.stringify(data)
//   })
//   .then((data) =>  {
//       alert('Успешно отправлено.');
//   }).catch((er) => {
//       alert('Произошла какая-то ошибка');
//   });
// }

// const formElement = document.getElementById('request-form');

// formElement.addEventListener('submit', (e) => {
//   e.preventDefault();

//   const formData = new FormData(formElement);
//   const name = formData.get('person_name');
//   const phone = formData.get('person_phone');

//   const form_object = {
//       name,
//       phone
//   }

//   if(name && phone)  {
//       sendRequest(form_object);
//   } else {
//       alert('Пожалуйста, заполните все поля');
//   }
// });

const overlay = document.getElementById("overlay");
const PopUp = popup.querySelector("popup");
const nameInput = document.getElementById("name");

// Запрет на скролл
const scrollController = {
  scrollPosition: 0,
  disabledScroll() {
    scrollController.scrollPosition = window.scrollY;
    document.body.style.cssText = `
        overflow: hidden;
        position: fixed;
        top: -${scrollController.scrollPosition}px;
        left: 0;
        height: 100vh;
        width: 100vw;
        padding-right: ${window.innerWidth - document.body.offsetWidth}px
      `;
    document.documentElement.style.scrollBehavior = "unset";
  },
  enabledScroll() {
    document.body.style.cssText = "";
    window.scroll({ top: scrollController.scrollPosition });
    document.documentElement.style.scrollBehavior = "";
  },
};

// PopUp-окно
popup_open.addEventListener("click", function (e) {
  e.preventDefault();
  // popup.classList.add('open');
  if (areFieldsValid()) {
    scrollController.disabledScroll();
    overlay.style.display = "block";
    document.body.classList.add("loading");
    setTimeout(function () {
      overlay.style.display = "none";
      document.body.classList.remove("loading");
      popup.style.display = "block";
    }, 1200);
  }
});

popup_close.addEventListener("click", () => {
  // popup.classList.remove('open');
  scrollController.enabledScroll();
  popup.style.display = "none";
});

// Валидатор полей ввода
window.addEventListener("DOMContentLoaded", function () {
  const inputs = document.querySelectorAll('input[type="tel"]');

  Array.prototype.forEach.call(inputs, function (input) {
    new InputMask({
      selector: input,
      layout: input.dataset.mask,
    });
  });
});

function InputMask(options) {
  this.el = this.getElement(options.selector);
  if (!this.el) return console.log("Что-то не так с селектором");
  this.layout = options.layout || "+_ (___) ___-__-__";
  this.maskreg = this.getRegexp();

  this.setListeners();
}

InputMask.prototype.getRegexp = function () {
  var str = this.layout.replace(/_/g, "\\d");
  str = str.replace(/\(/g, "\\(");
  str = str.replace(/\)/g, "\\)");
  str = str.replace(/\+/g, "\\+");
  str = str.replace(/\s/g, "\\s");

  return str;
};

InputMask.prototype.mask = function (e) {
  let _this = e.target,
    matrix = this.layout,
    i = 0,
    def = matrix.replace(/\D/g, ""),
    val = _this.value.replace(/\D/g, "");

  if (def.length >= val.length) val = def;

  _this.value = matrix.replace(/./g, function (a) {
    return /[_\d]/.test(a) && i < val.length
      ? val.charAt(i++)
      : i >= val.length
      ? ""
      : a;
  });

  if (e.type == "blur") {
    var regexp = new RegExp(this.maskreg);
    if (!regexp.test(_this.value)) _this.value = "";
  } else {
    this.setCursorPosition(_this.value.length, _this);
  }
};

InputMask.prototype.setCursorPosition = function (pos, elem) {
  elem.focus();
  if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);
  else if (elem.createTextRange) {
    var range = elem.createTextRange();
    range.collapse(true);
    range.moveEnd("character", pos);
    range.moveStart("character", pos);
    range.select();
  }
};

InputMask.prototype.setListeners = function () {
  this.el.addEventListener("input", this.mask.bind(this), false);
  this.el.addEventListener("focus", this.mask.bind(this), false);
  this.el.addEventListener("blur", this.mask.bind(this), false);
};

InputMask.prototype.getElement = function (selector) {
  if (selector === undefined) return false;
  if (this.isElement(selector)) return selector;
  if (typeof selector == "string") {
    var el = document.querySelector(selector);
    if (this.isElement(el)) return el;
  }
  return false;
};

InputMask.prototype.isElement = function (element) {
  return element instanceof Element || element instanceof HTMLDocument;
};

function areFieldsValid() {
  const requiredFields = document.querySelectorAll(
    "input[required], textarea[required]"
  );
  for (let i = 0; i < requiredFields.length; i++) {
    if (!requiredFields[i].value) {
      return false;
    }
  }
  return true;
}

function noDigits(event) {
  if ("1234567890".indexOf(event.key) != -1)
    event.preventDefault();
    setCustomValidity("Пожалуйста, введите только буквы.");
}


