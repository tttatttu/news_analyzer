!function(t){var e={};function i(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=7)}([function(t,e,i){"use strict";function n(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}i.d(e,"a",(function(){return r}));class r{constructor(){n(this,"setDataNews",t=>{localStorage.setItem("cards",JSON.stringify(t))}),n(this,"setDataWord",t=>{localStorage.setItem("dataWord",JSON.stringify(t))}),n(this,"setDataGitCards",t=>{localStorage.setItem("gitCards",JSON.stringify(t))}),n(this,"getDataNews",()=>JSON.parse(localStorage.getItem("cards"))),n(this,"getDataWord",()=>JSON.parse(localStorage.getItem("dataWord"))),n(this,"getDataGitCards",()=>JSON.parse(localStorage.getItem("gitCards")))}clearStorage(){localStorage.clear()}}},function(t,e,i){"use strict";i.d(e,"a",(function(){return n}));const n=t=>{const e=new Date(t),i=e.getFullYear(),n=e.getDate(),r=e.getMonth();return"".concat(n," ").concat(["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"][r],", ").concat(i)}},function(t,e,i){},,,,,function(t,e,i){"use strict";i.r(e);i(2);const n={apiURL:"https://nomoreparties.co/news/v2/everything",apiKey:"be0bd687815b45b695ec6bc59130f0f7",apiLanguige:"ru",apiPage:"100"};var r=i(1);function a(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}class s{constructor(t,e,i){this._item=t,this._template=e.cloneNode(!0),this._link=this._template.querySelector(".news__page"),this._images=this._template.querySelector(".news__images"),this._data=this._template.querySelector(".news__data"),this._title=this._template.querySelector(".news__title"),this._subtitle=this._template.querySelector(".news__subtitle"),this._paragraph=this._template.querySelector(".news__paragraph"),this._patternCardDate=i}create(){return this._link.href=this._item.url,this._images.src=this._item.urlToImage,this._data.textContent=this._patternCardDate(this._item.publishedAt),this._title.textContent=this._item.title,this._subtitle.textContent=this._item.description,this._paragraph.textContent=this._item.source.name,this._template}}function o(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var c=i(0);function l(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function h(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}const u=document.querySelector(".news__cards"),d=document.querySelector(".news__button"),g=document.querySelector("#cardlist-template").content.querySelector(".news__card"),_=document.querySelector(".content__body"),p=document.querySelector(".search__field"),m=p.querySelector(".search__input"),y=new class{constructor(t,e,i){a(this,"_getResponseData",t=>t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))),a(this,"getNews",t=>fetch("".concat(this._apiURL,"?")+"q=".concat(t,"&")+"apiKey=".concat(this._apiKey,"&")+"to=".concat(this._currentDate(),"&")+"from=".concat(this._oneWeekAgoDate(this._currentDate),"&")+"language=".concat(this._languige,"&")+"pageSize=".concat(this._pageSize)).then(t=>this._getResponseData(t))),this._apiURL=t.apiURL,this._apiKey=t.apiKey,this._languige=t.apiLanguige,this._pageSize=t.apiPage,this._currentDate=e,this._oneWeekAgoDate=i}}(n,()=>{const t=new Date,e=t.getFullYear(),i=1===(t.getMonth()+1+"").length?"0"+(t.getMonth()+1):t.getMonth()+1,n=1===t.getDate().length?"0"+t.getDate():t.getDate();return"".concat(e,"-").concat(i,"-").concat(n)},()=>{const t=new Date;t.setDate(t.getDate()-6);const e=t.getFullYear(),i=1===(t.getMonth()+1+"").length?"0"+(t.getMonth()+1):t.getMonth()+1,n=1===t.getDate().length?"0"+t.getDate():t.getDate();return"".concat(e,"-").concat(i,"-").concat(n)}),b=new class{constructor(t,e,i,n,r){o(this,"addCard",t=>{this._list=t,this._renderCard()}),o(this,"_showCard",()=>{this._page++,this._renderCard(),this._setSubmitButtonState()}),o(this,"_setSubmitButtonState",()=>{this._click++,3*this._click>=this._list.length?this._searchButton.classList.add("hidden"):this._searchButton.classList.remove("hidden")}),o(this,"_renderCard",()=>{this._list.slice(3*this._page,3*(this._page+1)).forEach(t=>{const e=this._createCard(t,this._template,this.patternCardDate);this._container.append(e)})}),this._page=0,this._click=1,this._container=t,this._createCard=e,this._template=n,this._searchButton=i,this.patternCardDate=r}addEventListeners(){this._searchButton.addEventListener("click",()=>{this._showCard()})}}(u,(...t)=>new s(...t).create(),d,g,r.a),f=new c.a,S=new class{constructor(t){l(this,"toggleSearchContainer",t=>{t?this._bodyContainer.classList.add("hidden"):this._bodyContainer.classList.remove("hidden")}),l(this,"toggleWaitingContainer",t=>{t?this._waitingContainer.classList.add("hidden"):this._waitingContainer.classList.remove("hidden")}),l(this,"toggleErrorContiner",t=>{t?this._errorContiner.classList.add("hidden"):this._errorContiner.classList.remove("hidden")}),l(this,"toggleNewsContainer",t=>{t?this._newsContainer.classList.add("hidden"):this._newsContainer.classList.remove("hidden")}),this._bodyContainer=t,this._waitingContainer=this._bodyContainer.querySelector(".search-waiting"),this._errorContiner=this._bodyContainer.querySelector(".search-error"),this._newsContainer=this._bodyContainer.querySelector(".news")}}(_),C=new class{constructor(t,e){h(this,"_checkinputsValidity",t=>(t.setCustomValidity(""),t.validity.valueMissing?(t.setCustomValidity(this._errorMessages.emptyString),!1):t.validity.tooShort||t.validity.tooLong?(t.setCustomValidity(this._errorMessages.wrongLength),!1):t.checkValidity())),h(this,"_isFieldValid",t=>{const e=this._form.querySelector(".search__error"),i=this._checkinputsValidity(t);return e.textContent=t.validationMessage,i}),this._form=t,this._button=this._form.querySelector(".search__button"),this._errorMessages=e}setSubmitButtonState(t,e){e?this._button.removeAttribute("disabled"):this._button.setAttribute("disabled",!0)}setEventListeners(){this._form.addEventListener("input",t=>{const[...e]=this._form.querySelectorAll(".search__input");this._isFieldValid(t.target),this.setSubmitButtonState(this._button,e.every(this._checkinputsValidity))})}}(p,{emptyString:"Нужно ввести ключевое слово",wrongLength:"Длина должна быть 2-30 символов"},w);function w(t){S.toggleWaitingContainer(),S.toggleErrorContiner(!0),y.getNews(t).then(t=>{f.setDataNews(t.articles)}).catch(t=>{console.log("Ошибка. Запрос не выполнен: ",t),C.setSubmitButtonState(!0),S.toggleSearchContainer(!0)}).then(()=>{const t=f.getDataNews();_.querySelector(".news__cards").innerHTML="",b.addCard(t),S.toggleWaitingContainer(!0),S.toggleErrorContiner(!0),S.toggleNewsContainer(),0===t.length&&(S.toggleNewsContainer(!0),S.toggleErrorContiner())}),event.preventDefault(),p.reset()}C.setEventListeners(),p.addEventListener("submit",t=>{t.preventDefault(),S.toggleSearchContainer();const e=m.value;f.setDataWord(e),w(e)}),document.addEventListener("DOMContentLoaded",(function(){return f.getDataNews()&&"0"!==f.getDataNews()&&(S.toggleSearchContainer(),S.toggleNewsContainer(),b.addEventListeners(),b.addCard(f.getDataNews())),!0}),!1)}]);