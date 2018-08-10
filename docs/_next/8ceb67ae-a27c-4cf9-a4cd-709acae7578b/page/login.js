module.exports=__NEXT_REGISTER_PAGE("/login",function(){return{page:webpackJsonp([2],{199:function(e,t,n){e.exports=n(200)},200:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(5),r=n.n(o),a=n(201),i=n.n(a);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var s=function(e){function t(e){var n,o,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),o=this,r=(t.__proto__||Object.getPrototypeOf(t)).call(this,e),n=!r||"object"!==l(r)&&"function"!=typeof r?c(o):r,Object.defineProperty(c(n),"handleCredentialsChange",{configurable:!0,enumerable:!0,writable:!0,value:function(e){var t=n.state.credentials;t[e.target.name]=e.target.value,n.setState({credentials:t})}}),Object.defineProperty(c(n),"handleLoginSubmit",{configurable:!0,enumerable:!0,writable:!0,value:function(e){e.preventDefault(),n.setState({isLoginLoading:!0}),setTimeout(function(){n.setState({isLoginLoading:!1}),i.a.replace("/cars")},500)}}),n.state={isLoginLoading:!1,credentials:{email:null,password:null}},n}var n,o,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.a.Component),n=t,(o=[{key:"render",value:function(){var e=this.state.credentials;return r.a.createElement("div",null,r.a.createElement("h1",null,"Login"),r.a.createElement("form",null,r.a.createElement("input",{id:"formEmail",name:"email",type:"text",value:e.email,onChange:this.handleCredentialsChange}),r.a.createElement("input",{name:"password",type:"password",value:e.password,onChange:this.handleCredentialsChange}),r.a.createElement("button",{id:"loginSubmit",onClick:this.handleLoginSubmit},this.state.isLoginLoading?"Logging in...":"Log in")))}}])&&u(n.prototype,o),a&&u(n,a),t}();t.default=function(){return r.a.createElement(s,null)}},201:function(e,t,n){e.exports=n(43)}},[199]).default}});