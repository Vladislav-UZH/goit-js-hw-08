!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=function(e,t){try{var n=JSON.stringify(t);localStorage.setItem(e,n)}catch(e){console.log("Set state error:",e.message)}},o=function(e){try{var t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.log("Get state error:",e.message)}},a=function(e){try{localStorage.removeItem(e),console.log("This key: -".concat(e,"- was removed, -").concat(e,"-: ").concat(localStorage.getItem(e)))}catch(e){console.log("Remove state error:",e.message)}},i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var u="Expected a function",f=/^\s+|\s+$/g,c=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,d=/^0o[0-7]+$/i,s=parseInt,v="object"==typeof n&&n&&n.Object===Object&&n,m="object"==typeof self&&self&&self.Object===Object&&self,p=v||m||Function("return this")(),g=Object.prototype.toString,b=Math.max,y=Math.min,h=function(){return p.Date.now()};function S(e,t,n){var r,o,a,i,f,c,l=0,d=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError(u);function m(t){var n=r,a=o;return r=o=void 0,l=t,i=e.apply(a,n)}function p(e){return l=e,f=setTimeout(S,t),d?m(e):i}function g(e){var n=e-c;return void 0===c||n>=t||n<0||s&&e-l>=a}function S(){var e=h();if(g(e))return T(e);f=setTimeout(S,function(e){var n=t-(e-c);return s?y(n,a-(e-l)):n}(e))}function T(e){return f=void 0,v&&r?m(e):(r=o=void 0,i)}function k(){var e=h(),n=g(e);if(r=arguments,o=this,c=e,n){if(void 0===f)return p(c);if(s)return f=setTimeout(S,t),m(c)}return void 0===f&&(f=setTimeout(S,t)),i}return t=x(t)||0,j(n)&&(d=!!n.leading,a=(s="maxWait"in n)?b(x(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),k.cancel=function(){void 0!==f&&clearTimeout(f),l=0,r=c=o=f=void 0},k.flush=function(){return void 0===f?i:T(h())},k}function j(t){var n=void 0===t?"undefined":e(i)(t);return!!t&&("object"==n||"function"==n)}function x(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(i)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==g.call(t)}(t))return NaN;if(j(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=j(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(f,"");var r=l.test(t);return r||d.test(t)?s(t.slice(2),r?2:8):c.test(t)?NaN:+t}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError(u);return j(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),S(e,t,{leading:r,maxWait:t,trailing:o})};var T={form:document.querySelector(".feedback-form"),input:document.querySelector(".feedback-form input"),textarea:document.querySelector(".feedback-form textarea")},k="feedback-form-state";T.form.addEventListener("submit",(function(e){e.preventDefault(),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.inputValue,n=e.feedbackValue;console.log({inputValue:t,feedbackValue:n})}({inputValue:T.input.value,feedbackValue:T.textarea.value}),e.currentTarget.reset(),a(k)})),T.form.addEventListener("input",e(t)((function(){var e={inputValue:T.input.value,feedbackValue:T.textarea.value};return r(k,e)}),500)),function(){var e=o(k);if(!e)return;var t=e.inputValue,n=e.feedbackValue;T.input.value=t,T.textarea.value=n}()}();
//# sourceMappingURL=03-feedback.c5cf0a73.js.map
