var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},t={},c=n.parcelRequired7c6;null==c&&((c=function(n){if(n in a)return a[n].exports;if(n in t){var c=t[n];delete t[n];var e={id:n,exports:{}};return a[n]=e,c.call(e.exports,e,e.exports),e.exports}var s=new Error("Cannot find module '"+n+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(n,a){t[n]=a},n.parcelRequired7c6=c);var e=c("46BsY");function s(n){let a=[];console.log(n);for(let t of n){console.log(t);const n=`<li class="employment">${t}</li>`;a.push(n)}return a}function o(n){let a=[];console.log(n);for(let t of n){console.log(t);const n=`<li class="benefits">${t}</li>`;a.push(n)}return a}function l(n){let a=[];console.log(n);for(let t of n){console.log(t);const n=`<img src="${t}" alt="Company image" loading="lazy">`;a.push(n)}return a}var i=c("jN9CZ");async function r({id:n,name:a,email:t,phone:c,title:r,salary:p,address:d,benefits:_,location:v,pictures:y,createdAt:f,updatedAt:u,description:g,employment_type:m}){const h=(0,e.formatDistance)(new Date(f),Date.now(),{addSuffix:!0}),b=p.replaceAll("k"," 000"),$=s(m).join(""),w=o(_).join("");return`<div class="vacancy__item" data-id="${n}">\n  <div class="vacancy__links">\n  <button class="vacancy__btn"><i class="fa-regular fa-bookmark"></i> Save to my list</button>\n  <button class="vacancy__btn"><i class="fa-solid fa-share-nodes"></i> Share</button></div>\n  <button class="vacancy__btn-apply desktop-btn-apply">Apply now</button>\n  <div class="main-info__wrapper">\n  <h2 class="vacancy__title">${r}</h2>\n  <p class="vacancy__time">Posted ${h}\n  </p>\n  <div class="salary__wrapper">\n  <span>Brutto, per year\n  </span>\n  <p class="vacancy__salary"> € ${b}\n  </p>\n  </div>\n  </div>\n  <p class="vacancy__description">${g}\n  </p>\n  <button class="vacancy__btn-apply">Apply now</button>\n  <div class="vacancy__advantages">\n  <div>\n      <h3 class="vacancy__image-title">Attached images\n      </h3>\n      <hr />  \n      <div class="vacancy__image">${l(y).join("")}\n      </div>\n      </div>\n      <div class="vacancy__info">\n      <h3 class="vacancy__info-title">Additional info\n      </h3>\n      <hr />      \n      <p class="vacancy__info-text">Employment type</p>\n      <ul>${$}\n      </ul>\n      <p class="vacancy__info-text">Benefits</p>\n      <ul>${w}  \n      </ul>\n      </div>\n      </div>\n      <div class="vacancy__contacts">\n      <h3 class="vacancy__contacts-title">Contacts\n      <hr />\n      </h3>      \n      <div class="vacancy__contacts-wrapper">\n      <p class="vacancy__company">${a}\n      </p>\n      <p class="vacancy__address"><i class="fa-solid fa-location-dot"></i>${await(0,i.getLocationAddress)()}, ${d}\n      </p>\n      <p class="vacancy__phone">${c}\n      </p>\n      <p class="vacancy__email">${t}\n      </p>\n      </div> \n      </div>\n  </div>`}var p=c("krGWQ");!async function(n){try{const a=localStorage.getItem(n),t=await r(JSON.parse(a));p.refs.jobDetailsContainer.insertAdjacentHTML("beforeend",t)}catch(n){console.log(n)}}(localStorage.getItem("currentID"));
//# sourceMappingURL=job-details.57911ade.js.map