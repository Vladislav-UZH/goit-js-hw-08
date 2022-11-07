!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=function(e,t){try{var n=JSON.stringify(t);localStorage.setItem(e,n)}catch(e){console.log("Set state error:",e.message)}},o=function(e){try{var t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.log("Get state error:",e.message)}},a=function(e){try{localStorage.removeItem(e),console.log("This key: -".concat(e,"- was removed, -").concat(e,"-: ").concat(localStorage.getItem(e)))}catch(e){console.log("Remove state error:",e.message)}},i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var u="Expected a function",f=/^\s+|\s+$/g,c=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,s=/^0o[0-7]+$/i,d=parseInt,v="object"==typeof n&&n&&n.Object===Object&&n,m="object"==typeof self&&self&&self.Object===Object&&self,g=v||m||Function("return this")(),p=Object.prototype.toString,y=Math.max,b=Math.min,h=function(){return g.Date.now()};function S(e,t,n){var r,o,a,i,f,c,l=0,s=!1,d=!1,v=!0;if("function"!=typeof e)throw new TypeError(u);function m(t){var n=r,a=o;return r=o=void 0,l=t,i=e.apply(a,n)}function g(e){return l=e,f=setTimeout(S,t),s?m(e):i}function p(e){var n=e-c;return void 0===c||n>=t||n<0||d&&e-l>=a}function S(){var e=h();if(p(e))return T(e);f=setTimeout(S,function(e){var n=t-(e-c);return d?b(n,a-(e-l)):n}(e))}function T(e){return f=void 0,v&&r?m(e):(r=o=void 0,i)}function w(){var e=h(),n=p(e);if(r=arguments,o=this,c=e,n){if(void 0===f)return g(c);if(d)return f=setTimeout(S,t),m(c)}return void 0===f&&(f=setTimeout(S,t)),i}return t=j(t)||0,x(n)&&(s=!!n.leading,a=(d="maxWait"in n)?y(j(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),w.cancel=function(){void 0!==f&&clearTimeout(f),l=0,r=c=o=f=void 0},w.flush=function(){return void 0===f?i:T(h())},w}function x(t){var n=void 0===t?"undefined":e(i)(t);return!!t&&("object"==n||"function"==n)}function j(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(i)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==p.call(t)}(t))return NaN;if(x(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=x(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(f,"");var r=l.test(t);return r||s.test(t)?d(t.slice(2),r?2:8):c.test(t)?NaN:+t}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError(u);return x(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),S(e,t,{leading:r,maxWait:t,trailing:o})};var T={form:document.querySelector(".feedback-form"),input:document.querySelector(".feedback-form input"),textarea:document.querySelector(".feedback-form textarea")},w="feedback-form-state";T.form.addEventListener("submit",(function(e){e.preventDefault(),T.input.value&&T.textarea.value&&(!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.email,n=e.message;console.log({email:t,message:n})}({email:T.input.value,message:T.textarea.value}),e.currentTarget.reset(),a(w));return})),T.form.addEventListener("input",e(t)((function(){var e={inputValue:T.input.value,feedbackValue:T.textarea.value};return r(w,e)}),500)),function(){var e=o(w);if(!e)return;var t=e.inputValue,n=e.feedbackValue;T.input.value=t,T.textarea.value=n}()}();
//# sourceMappingURL=03-feedback.57a4848b.js.map
