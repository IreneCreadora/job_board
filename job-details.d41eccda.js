!function(){function n(n){return n&&n.__esModule?n.default:n}var a="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},c={},t={},e=a.parcelRequired7c6;null==e&&((e=function(n){if(n in c)return c[n].exports;if(n in t){var a=t[n];delete t[n];var e={id:n,exports:{}};return c[n]=e,a.call(e.exports,e,e.exports),e.exports}var s=new Error("Cannot find module '"+n+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(n,a){t[n]=a},a.parcelRequired7c6=e);var s=e("bpxeT"),i=e("2TvXO"),l=(s=e("bpxeT"),i=e("2TvXO"),e("lAGvK"));function o(n){return r.apply(this,arguments)}function r(){return(r=n(s)(n(i).mark((function a(c){var t,e,s,o,r,p,d,v,_,u,y,f,m;return n(i).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=c.id,e=c.name,s=c.email,o=c.phone,r=c.title,p=c.salary,d=c.address,v=c.benefits,c.location,_=c.pictures,u=c.createdAt,c.updatedAt,y=c.description,f=c.employment_type,m=(0,l.formatDistance)(new Date(u),Date.now(),{addSuffix:!0}),n.abrupt("return",'<div class="vacancy__item" data-id="'.concat(t,'">\n  <div class="vacancy__links">\n  <button class="vacancy__btn"><i class="fa-regular fa-bookmark"></i> Save to my list</button>\n  <button class="vacancy__btn"><i class="fa-solid fa-share-nodes"></i> Share</button></div>\n  <button class="vacancy__btn-apply desktop-btn-apply">Apply now</button>\n  <div class="main-info__wrapper">\n  <h2 class="vacancy__title">').concat(r,'</h2>\n  <p class="vacancy__time">Posted ').concat(m,'\n  </p>\n  <div class="salary__wrapper">\n  <span>Brutto, per year\n  </span>\n  <p class="vacancy__salary">').concat(p,' €\n  </p>\n  </div>\n  </div>\n  <p class="vacancy__description">').concat(y,'\n  </p>\n  <button class="vacancy__btn-apply">Apply now</button>\n  <div class="vacancy__advantages">\n  <div>\n      <h3 class="vacancy__image-title">Attached images\n      </h3>\n      <hr />  \n      <div class="vacancy__image">    \n      <img src="').concat(_[0],'" alt="Company image" loading="lazy">\n      <img src="').concat(_[1],'" alt="Company image" loading="lazy">\n      <img src="').concat(_[2],'" alt="Company image" loading="lazy">\n      </div>\n      </div>\n      <div class="vacancy__info">\n      <h3 class="vacancy__info-title">Additional info\n      </h3>\n      <hr />      \n      <p class="vacancy__info-text">Employment type</p>\n      <ul>\n      <li class="employment">').concat(f[0],'</li>\n      <li class="employment">').concat(f[1],'</li>\n      </ul>\n      <p class="vacancy__info-text">Benefits</p>\n      <ul>\n      <li class="benefits">').concat(v[0],'</li>\n      <li class="benefits">').concat(v[1],'</li>\n      </ul>\n      </div>\n      </div>\n      <div class="vacancy__contacts">\n      <h3 class="vacancy__contacts-title">Contacts\n      <hr />\n      </h3>      \n      <div class="vacancy__contacts-wrapper">\n      <p class="vacancy__company">').concat(e,'\n      </p>\n      <p class="vacancy__address"><i class="fa-solid fa-location-dot"></i>').concat(d,'\n      </p>\n      <p class="vacancy__phone">').concat(o,'\n      </p>\n      <p class="vacancy__email">').concat(s,"\n      </p>\n      </div> \n      </div>\n  </div>"));case 3:case"end":return n.stop()}}),a)})))).apply(this,arguments)}e("6U5AW");var p=e("4Nugj");function d(){return(d=n(s)(n(i).mark((function a(c){var t,e;return n(i).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t=localStorage.getItem(c),n.next=4,o(JSON.parse(t));case 4:e=n.sent,p.refs.jobDetailsContainer.insertAdjacentHTML("beforeend",e),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),a,null,[[0,8]])})))).apply(this,arguments)}!function(n){d.apply(this,arguments)}(localStorage.getItem("currentID"))}();
//# sourceMappingURL=job-details.d41eccda.js.map