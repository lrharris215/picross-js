/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./public/styles/index.scss":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./public/styles/index.scss ***!
  \**********************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _images_mountain_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/mountain.jpg */ "./public/images/mountain.jpg");
/* harmony import */ var _images_X_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/X.png */ "./public/images/X.png");
/* harmony import */ var _images_question_mark_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/question_mark.png */ "./public/images/question_mark.png");
// Imports






var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_images_mountain_jpg__WEBPACK_IMPORTED_MODULE_3__.default);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_images_X_png__WEBPACK_IMPORTED_MODULE_4__.default);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_images_question_mark_png__WEBPACK_IMPORTED_MODULE_5__.default);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: cover;\n  background-position: center;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  height: 100vh;\n  width: 100vw;\n  margin: 0;\n}\nbody .footer {\n  display: flex;\n  justify-content: flex-end;\n  position: absolute;\n  z-index: 10;\n  bottom: 0;\n  right: 0;\n}\nbody .footer .link-box {\n  color: #2f4a62;\n  font-size: 3rem;\n  margin-right: 2em;\n}\nbody .footer .link-box a:visited {\n  color: #2f4a62;\n}\n\n.header {\n  display: flex;\n  flex-direction: column;\n}\n.header h1 {\n  font-family: \"Kiwi Maru\";\n  color: #2f4a62;\n  background-color: whitesmoke;\n  width: fit-content;\n  border-radius: 5%;\n  align-self: center;\n  padding: 0 0.5rem;\n  border: 2px outset whitesmoke;\n  box-shadow: 0.2rem 0.2rem 0.2rem #2f4a62;\n}\n.header .instructions-box {\n  font-family: \"Baloo 2\";\n  align-self: flex-end;\n  width: 40%;\n  z-index: 10;\n  display: flex;\n  justify-content: center;\n  position: relative;\n}\n.header .instructions-box .instructions-button {\n  font-weight: 600;\n  background-color: #e6cacf;\n  color: #2f4a62;\n  width: fit-content;\n  border: 2px outset #e6cacf;\n  padding: 0.5rem;\n  border-radius: 5px;\n  box-shadow: 0.2rem 0.2rem 0.2rem #2f4a62;\n}\n.header .instructions-box .instructions-button:hover {\n  cursor: pointer;\n}\n.header .instructions-box #instructions-detail {\n  position: absolute;\n  background-color: #e6cacf;\n  top: 4rem;\n  width: 80%;\n  text-align: left;\n  border-radius: 5px;\n  box-shadow: 2px 2px 2px #2f4a62;\n}\n.header .instructions-box #instructions-detail ul {\n  padding: 0 1rem;\n  margin: 1rem 2rem;\n}\n.header .instructions-box #instructions-detail p {\n  padding: 0 1rem;\n  margin: 1rem 2rem;\n}\n.header .instructions-box #instructions-detail p span {\n  font-weight: 600;\n}\n.header .instructions-box .hidden {\n  display: none;\n  height: 0;\n  width: 400px;\n}\n.header .instructions-box .active {\n  display: block;\n  height: fit-content;\n}\n\n.board-container {\n  background-color: #5481bd;\n  box-shadow: 2px 2px 2px #2f4a62;\n  border-radius: 20%;\n  width: fit-content;\n  padding: 0 4em;\n  margin: 0 auto;\n  min-height: 20em;\n  display: flex;\n  align-items: center;\n}\n.board-container .board {\n  width: fit-content;\n  margin: 0 auto;\n  position: relative;\n  text-align: center;\n}\n.board-container .board .topNums {\n  color: aquamarine;\n  position: relative;\n  display: flex;\n  top: 0;\n  border: 2px solid transparent;\n}\n.board-container .board .topNums > div {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  width: 1rem;\n  padding: 0.2rem 0.5rem;\n  border: 1px solid transparent;\n}\n.board-container .board .leftNums {\n  color: aquamarine;\n  position: absolute;\n  left: 0;\n  transform: translate(-105%);\n  display: flex;\n  flex-direction: column;\n  border: 2px solid transparent;\n}\n.board-container .board .leftNums > div {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  height: 1rem;\n  padding: 0.5rem 0.2rem;\n  border: 1px solid transparent;\n}\n.board-container .board .grid {\n  border: 2px solid black;\n}\n.board-container .board .grid .row-div {\n  display: flex;\n}\n.board-container .board .grid .row-div .square {\n  width: 2rem;\n  height: 2rem;\n  border: 1px outset black;\n}\n.board-container .board .grid .row-div .unclicked {\n  background-color: aquamarine;\n}\n.board-container .board .grid .row-div .filled {\n  background-color: teal;\n}\n.board-container .board .grid .row-div .exed {\n  background-color: aquamarine;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  background-position: center;\n  background-size: cover;\n}\n.board-container .board .grid .row-div .maybe {\n  background-color: aquamarine;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  background-position: center;\n  background-size: cover;\n}\n.board-container #board-modal {\n  width: 100%;\n  height: 100%;\n  z-index: 4;\n  position: absolute;\n  background-color: #5481bd;\n  opacity: 0.5;\n  left: 0;\n  top: 0;\n}\n.board-container .hidden {\n  display: none;\n}\n.board-container .active {\n  display: block;\n}\n\n.message-box {\n  color: whitesmoke;\n  font-size: 16px;\n  z-index: 10;\n  position: relative;\n  border: 1px solid #2f4a62;\n  border-radius: 0.5em;\n  background-color: #2f4a62;\n  box-shadow: 2px 2px 2px #2f4a62;\n  font-family: \"Kiwi Maru\";\n  width: 20rem;\n  height: 10rem;\n  margin: 3rem auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.message-box .outer-timer-box {\n  display: flex;\n  align-items: center;\n}\n.message-box .outer-timer-box .pause-box {\n  padding: 0.5em;\n  border: 3px dotted whitesmoke;\n  margin-left: 0.5em;\n  border-radius: 5px;\n}\n.message-box .outer-timer-box .pause-box:hover {\n  cursor: pointer;\n  background-color: whitesmoke;\n  color: #2f4a62;\n}\n.message-box .outer-timer-box .pause-box .pause {\n  padding: 0.5em;\n}\n.message-box .outer-timer-box .timer-box {\n  padding: 0.5em;\n  border: 3px dotted whitesmoke;\n  border-radius: 5px;\n}\n.message-box .outer-timer-box .timer-box #timer {\n  padding: 0.5em;\n}\n.message-box .hidden {\n  display: none;\n}\n.message-box .active {\n  display: inline-block;\n}\n.message-box #restart {\n  color: white;\n}\n.message-box #restart:visited {\n  color: white;\n}", "",{"version":3,"sources":["webpack://./main.scss","webpack://./index.scss","webpack://./colors.scss","webpack://./components/header.scss","webpack://./components/grid.scss","webpack://./components/message_box.scss"],"names":[],"mappings":"AAAA;EACI,yDAAA;EACA,sBAAA;EACA,2BAAA;EACA,kBAAA;EACA,aAAA;EACA,sBAAA;EACA,8BAAA;EACA,aAAA;EACA,YAAA;EACA,SAAA;ACCJ;ADAI;EACI,aAAA;EACA,yBAAA;EACA,kBAAA;EACA,WAAA;EACA,SAAA;EACA,QAAA;ACER;ADDQ;EACI,cEnBH;EFoBG,eAAA;EACA,iBAAA;ACGZ;ADFY;EACI,cEvBP;AD2BT;;AE3BA;EACI,aAAA;EACA,sBAAA;AF8BJ;AE7BI;EACI,wBAAA;EAKA,cDTC;ECUD,4BAAA;EACA,kBAAA;EACA,iBAAA;EACA,kBAAA;EACA,iBAAA;EACA,6BAAA;EACA,wCAAA;AF2BR;AEzBI;EACI,sBAAA;EACA,oBAAA;EACA,UAAA;EACA,WAAA;EACA,aAAA;EACA,uBAAA;EACA,kBAAA;AF2BR;AE1BQ;EACI,gBAAA;EACA,yBD1BC;EC2BD,cD7BH;EC8BG,kBAAA;EACA,0BAAA;EACA,eAAA;EACA,kBAAA;EACA,wCAAA;AF4BZ;AE3BY;EACI,eAAA;AF6BhB;AE1BQ;EACI,kBAAA;EACA,yBDvCC;ECwCD,SAAA;EACA,UAAA;EACA,gBAAA;EACA,kBAAA;EACA,+BAAA;AF4BZ;AE3BY;EACI,eAAA;EACA,iBAAA;AF6BhB;AE3BY;EACI,eAAA;EACA,iBAAA;AF6BhB;AE5BgB;EACI,gBAAA;AF8BpB;AE1BQ;EACI,aAAA;EACA,SAAA;EACA,YAAA;AF4BZ;AE1BQ;EACI,cAAA;EACA,mBAAA;AF4BZ;;AG9FA;EACI,yBAAA;EACA,+BAAA;EACA,kBAAA;EACA,kBAAA;EACA,cAAA;EACA,cAAA;EACA,gBAAA;EACA,aAAA;EACA,mBAAA;AHiGJ;AGhGI;EACI,kBAAA;EACA,cAAA;EACA,kBAAA;EACA,kBAAA;AHkGR;AGjGQ;EACI,iBAAA;EACA,kBAAA;EACA,aAAA;EACA,MAAA;EACA,6BAAA;AHmGZ;AGjGY;EACI,aAAA;EACA,sBAAA;EACA,yBAAA;EACA,WAAA;EACA,sBAAA;EAEA,6BAAA;AHkGhB;AG/FQ;EACI,iBAAA;EACA,kBAAA;EAEA,OAAA;EACA,2BAAA;EAEA,aAAA;EACA,sBAAA;EACA,6BAAA;AH+FZ;AG9FY;EACI,aAAA;EACA,yBAAA;EACA,mBAAA;EACA,YAAA;EACA,sBAAA;EACA,6BAAA;AHgGhB;AG7FQ;EACI,uBAAA;AH+FZ;AG9FY;EACI,aAAA;AHgGhB;AG/FgB;EACI,WAAA;EACA,YAAA;EACA,wBAAA;AHiGpB;AG/FgB;EACI,4BAAA;AHiGpB;AG/FgB;EACI,sBAAA;AHiGpB;AG/FgB;EACI,4BAAA;EACA,yDAAA;EACA,2BAAA;EACA,sBAAA;AHiGpB;AG/FgB;EACI,4BAAA;EACA,yDAAA;EACA,2BAAA;EACA,sBAAA;AHiGpB;AG5FI;EACI,WAAA;EACA,YAAA;EACA,UAAA;EACA,kBAAA;EACA,yBFrFQ;EEsFR,YAAA;EACA,OAAA;EACA,MAAA;AH8FR;AG3FI;EACI,aAAA;AH6FR;AG3FI;EACI,cAAA;AH6FR;;AI7LA;EACI,iBAAA;EAEA,eAAA;EACA,WAAA;EACA,kBAAA;EACA,yBAAA;EACA,oBAAA;EACA,yBHRK;EGSL,+BAAA;EACA,wBAAA;EACA,YAAA;EACA,aAAA;EACA,iBAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;AJ+LJ;AI9LI;EACI,aAAA;EACA,mBAAA;AJgMR;AI/LQ;EACI,cAAA;EACA,6BAAA;EACA,kBAAA;EACA,kBAAA;AJiMZ;AIhMY;EACI,eAAA;EACA,4BAAA;EACA,cH5BP;AD8NT;AIhMY;EACI,cAAA;AJkMhB;AI/LQ;EACI,cAAA;EACA,6BAAA;EACA,kBAAA;AJiMZ;AI/LY;EACI,cAAA;AJiMhB;AI5LI;EACI,aAAA;AJ8LR;AI5LI;EACI,qBAAA;AJ8LR;AI5LI;EACI,YAAA;AJ8LR;AI7LQ;EACI,YAAA;AJ+LZ","sourcesContent":["body {\n    background-image: url(../images/mountain.jpg);\n    background-size: cover;\n    background-position: center;\n    text-align: center;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    height: 100vh;\n    width: 100vw;\n    margin: 0;\n    .footer {\n        display: flex;\n        justify-content: flex-end;\n        position: absolute;\n        z-index: 10;\n        bottom: 0;\n        right: 0;\n        .link-box {\n            color: $header;\n            font-size: 3rem;\n            margin-right: 2em;\n            a:visited {\n                color: $header;\n            }\n        }\n    }\n}\n","body {\n  background-image: url(../images/mountain.jpg);\n  background-size: cover;\n  background-position: center;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  height: 100vh;\n  width: 100vw;\n  margin: 0;\n}\nbody .footer {\n  display: flex;\n  justify-content: flex-end;\n  position: absolute;\n  z-index: 10;\n  bottom: 0;\n  right: 0;\n}\nbody .footer .link-box {\n  color: #2f4a62;\n  font-size: 3rem;\n  margin-right: 2em;\n}\nbody .footer .link-box a:visited {\n  color: #2f4a62;\n}\n\n.header {\n  display: flex;\n  flex-direction: column;\n}\n.header h1 {\n  font-family: \"Kiwi Maru\";\n  color: #2f4a62;\n  background-color: whitesmoke;\n  width: fit-content;\n  border-radius: 5%;\n  align-self: center;\n  padding: 0 0.5rem;\n  border: 2px outset whitesmoke;\n  box-shadow: 0.2rem 0.2rem 0.2rem #2f4a62;\n}\n.header .instructions-box {\n  font-family: \"Baloo 2\";\n  align-self: flex-end;\n  width: 40%;\n  z-index: 10;\n  display: flex;\n  justify-content: center;\n  position: relative;\n}\n.header .instructions-box .instructions-button {\n  font-weight: 600;\n  background-color: #e6cacf;\n  color: #2f4a62;\n  width: fit-content;\n  border: 2px outset #e6cacf;\n  padding: 0.5rem;\n  border-radius: 5px;\n  box-shadow: 0.2rem 0.2rem 0.2rem #2f4a62;\n}\n.header .instructions-box .instructions-button:hover {\n  cursor: pointer;\n}\n.header .instructions-box #instructions-detail {\n  position: absolute;\n  background-color: #e6cacf;\n  top: 4rem;\n  width: 80%;\n  text-align: left;\n  border-radius: 5px;\n  box-shadow: 2px 2px 2px #2f4a62;\n}\n.header .instructions-box #instructions-detail ul {\n  padding: 0 1rem;\n  margin: 1rem 2rem;\n}\n.header .instructions-box #instructions-detail p {\n  padding: 0 1rem;\n  margin: 1rem 2rem;\n}\n.header .instructions-box #instructions-detail p span {\n  font-weight: 600;\n}\n.header .instructions-box .hidden {\n  display: none;\n  height: 0;\n  width: 400px;\n}\n.header .instructions-box .active {\n  display: block;\n  height: fit-content;\n}\n\n.board-container {\n  background-color: #5481bd;\n  box-shadow: 2px 2px 2px #2f4a62;\n  border-radius: 20%;\n  width: fit-content;\n  padding: 0 4em;\n  margin: 0 auto;\n  min-height: 20em;\n  display: flex;\n  align-items: center;\n}\n.board-container .board {\n  width: fit-content;\n  margin: 0 auto;\n  position: relative;\n  text-align: center;\n}\n.board-container .board .topNums {\n  color: aquamarine;\n  position: relative;\n  display: flex;\n  top: 0;\n  border: 2px solid transparent;\n}\n.board-container .board .topNums > div {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  width: 1rem;\n  padding: 0.2rem 0.5rem;\n  border: 1px solid transparent;\n}\n.board-container .board .leftNums {\n  color: aquamarine;\n  position: absolute;\n  left: 0;\n  transform: translate(-105%);\n  display: flex;\n  flex-direction: column;\n  border: 2px solid transparent;\n}\n.board-container .board .leftNums > div {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  height: 1rem;\n  padding: 0.5rem 0.2rem;\n  border: 1px solid transparent;\n}\n.board-container .board .grid {\n  border: 2px solid black;\n}\n.board-container .board .grid .row-div {\n  display: flex;\n}\n.board-container .board .grid .row-div .square {\n  width: 2rem;\n  height: 2rem;\n  border: 1px outset black;\n}\n.board-container .board .grid .row-div .unclicked {\n  background-color: aquamarine;\n}\n.board-container .board .grid .row-div .filled {\n  background-color: teal;\n}\n.board-container .board .grid .row-div .exed {\n  background-color: aquamarine;\n  background-image: url(../../images/X.png);\n  background-position: center;\n  background-size: cover;\n}\n.board-container .board .grid .row-div .maybe {\n  background-color: aquamarine;\n  background-image: url(../../images/question_mark.png);\n  background-position: center;\n  background-size: cover;\n}\n.board-container #board-modal {\n  width: 100%;\n  height: 100%;\n  z-index: 4;\n  position: absolute;\n  background-color: #5481bd;\n  opacity: 0.5;\n  left: 0;\n  top: 0;\n}\n.board-container .hidden {\n  display: none;\n}\n.board-container .active {\n  display: block;\n}\n\n.message-box {\n  color: whitesmoke;\n  font-size: 16px;\n  z-index: 10;\n  position: relative;\n  border: 1px solid #2f4a62;\n  border-radius: 0.5em;\n  background-color: #2f4a62;\n  box-shadow: 2px 2px 2px #2f4a62;\n  font-family: \"Kiwi Maru\";\n  width: 20rem;\n  height: 10rem;\n  margin: 3rem auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.message-box .outer-timer-box {\n  display: flex;\n  align-items: center;\n}\n.message-box .outer-timer-box .pause-box {\n  padding: 0.5em;\n  border: 3px dotted whitesmoke;\n  margin-left: 0.5em;\n  border-radius: 5px;\n}\n.message-box .outer-timer-box .pause-box:hover {\n  cursor: pointer;\n  background-color: whitesmoke;\n  color: #2f4a62;\n}\n.message-box .outer-timer-box .pause-box .pause {\n  padding: 0.5em;\n}\n.message-box .outer-timer-box .timer-box {\n  padding: 0.5em;\n  border: 3px dotted whitesmoke;\n  border-radius: 5px;\n}\n.message-box .outer-timer-box .timer-box #timer {\n  padding: 0.5em;\n}\n.message-box .hidden {\n  display: none;\n}\n.message-box .active {\n  display: inline-block;\n}\n.message-box #restart {\n  color: white;\n}\n.message-box #restart:visited {\n  color: white;\n}","$header: rgb(47, 74, 98);\n$mountain-blue: rgb(84, 129, 189);\n$cloud-pink: rgb(230, 202, 207);\n",".header {\n    display: flex;\n    flex-direction: column;\n    h1 {\n        font-family: 'Kiwi Maru';\n        // font-family: 'Baloo 2';\n        // font-family: 'Fredericka the Great';\n        // font-family: 'Skranji';\n        // font-family: 'Unkempt';\n        color: $header;\n        background-color: whitesmoke;\n        width: fit-content;\n        border-radius: 5%;\n        align-self: center;\n        padding: 0 0.5rem;\n        border: 2px outset whitesmoke;\n        box-shadow: 0.2rem 0.2rem 0.2rem $header;\n    }\n    .instructions-box {\n        font-family: 'Baloo 2';\n        align-self: flex-end;\n        width: 40%;\n        z-index: 10;\n        display: flex;\n        justify-content: center;\n        position: relative;\n        .instructions-button {\n            font-weight: 600;\n            background-color: $cloud-pink;\n            color: $header;\n            width: fit-content;\n            border: 2px outset $cloud-pink;\n            padding: 0.5rem;\n            border-radius: 5px;\n            box-shadow: 0.2rem 0.2rem 0.2rem $header;\n            &:hover {\n                cursor: pointer;\n            }\n        }\n        #instructions-detail {\n            position: absolute;\n            background-color: $cloud-pink;\n            top: 4rem;\n            width: 80%;\n            text-align: left;\n            border-radius: 5px;\n            box-shadow: 2px 2px 2px $header;\n            ul {\n                padding: 0 1rem;\n                margin: 1rem 2rem;\n            }\n            p {\n                padding: 0 1rem;\n                margin: 1rem 2rem;\n                span {\n                    font-weight: 600;\n                }\n            }\n        }\n        .hidden {\n            display: none;\n            height: 0;\n            width: 400px;\n        }\n        .active {\n            display: block;\n            height: fit-content;\n        }\n    }\n}\n",".board-container {\n    background-color: $mountain-blue;\n    box-shadow: 2px 2px 2px $header;\n    border-radius: 20%;\n    width: fit-content;\n    padding: 0 4em;\n    margin: 0 auto;\n    min-height: 20em;\n    display: flex;\n    align-items: center;\n    .board {\n        width: fit-content;\n        margin: 0 auto;\n        position: relative;\n        text-align: center;\n        .topNums {\n            color: aquamarine;\n            position: relative;\n            display: flex;\n            top: 0;\n            border: 2px solid transparent;\n\n            > div {\n                display: flex;\n                flex-direction: column;\n                justify-content: flex-end;\n                width: 1rem;\n                padding: 0.2rem 0.5rem;\n\n                border: 1px solid transparent;\n            }\n        }\n        .leftNums {\n            color: aquamarine;\n            position: absolute;\n\n            left: 0;\n            transform: translate(-105%);\n            // border: 2px solid red;\n            display: flex;\n            flex-direction: column;\n            border: 2px solid transparent;\n            > div {\n                display: flex;\n                justify-content: flex-end;\n                align-items: center;\n                height: 1rem;\n                padding: 0.5rem 0.2rem;\n                border: 1px solid transparent;\n            }\n        }\n        .grid {\n            border: 2px solid black;\n            .row-div {\n                display: flex;\n                .square {\n                    width: 2rem;\n                    height: 2rem;\n                    border: 1px outset black;\n                }\n                .unclicked {\n                    background-color: aquamarine;\n                }\n                .filled {\n                    background-color: teal;\n                }\n                .exed {\n                    background-color: aquamarine;\n                    background-image: url(../../images/X.png);\n                    background-position: center;\n                    background-size: cover;\n                }\n                .maybe {\n                    background-color: aquamarine;\n                    background-image: url(../../images/question_mark.png);\n                    background-position: center;\n                    background-size: cover;\n                }\n            }\n        }\n    }\n    #board-modal {\n        width: 100%;\n        height: 100%;\n        z-index: 4;\n        position: absolute;\n        background-color: $mountain-blue;\n        opacity: 0.5;\n        left: 0;\n        top: 0;\n        // transform: translate(-50%, -50%);\n    }\n    .hidden {\n        display: none;\n    }\n    .active {\n        display: block;\n    }\n}\n",".message-box {\n    color: whitesmoke;\n    // border: 1px solid whitesmoke;\n    font-size: 16px;\n    z-index: 10;\n    position: relative;\n    border: 1px solid $header;\n    border-radius: 0.5em;\n    background-color: $header;\n    box-shadow: 2px 2px 2px $header;\n    font-family: 'Kiwi Maru';\n    width: 20rem;\n    height: 10rem;\n    margin: 3rem auto;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    .outer-timer-box {\n        display: flex;\n        align-items: center;\n        .pause-box {\n            padding: 0.5em;\n            border: 3px dotted whitesmoke;\n            margin-left: 0.5em;\n            border-radius: 5px;\n            &:hover {\n                cursor: pointer;\n                background-color: whitesmoke;\n                color: $header;\n            }\n            .pause {\n                padding: 0.5em;\n            }\n        }\n        .timer-box {\n            padding: 0.5em;\n            border: 3px dotted whitesmoke;\n            border-radius: 5px;\n\n            #timer {\n                padding: 0.5em;\n            }\n        }\n    }\n\n    .hidden {\n        display: none;\n    }\n    .active {\n        display: inline-block;\n    }\n    #restart {\n        color: white;\n        &:visited {\n            color: white;\n        }\n    }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== "string") {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./public/images/X.png":
/*!*****************************!*\
  !*** ./public/images/X.png ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "d5f905e098b32bfd98d2514f696b35c8.png");

/***/ }),

/***/ "./public/images/mountain.jpg":
/*!************************************!*\
  !*** ./public/images/mountain.jpg ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "1fc76eda1f7e68c7b85ce473cbfe5bb6.jpg");

/***/ }),

/***/ "./public/images/question_mark.png":
/*!*****************************************!*\
  !*** ./public/images/question_mark.png ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "2299d9914bda7e14f0955cd60e07e5a6.png");

/***/ }),

/***/ "./public/styles/index.scss":
/*!**********************************!*\
  !*** ./public/styles/index.scss ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/dist/cjs.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./public/styles/index.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./public/javascripts/board.js":
/*!*************************************!*\
  !*** ./public/javascripts/board.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _square__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./square */ "./public/javascripts/square.js");

class Board {
    constructor(game, size, topNums, leftNums) {
        this.game = game;
        this.grid = this.makeGrid(size);
        this.populateGrid();

        this.topNums = topNums;
        this.leftNums = leftNums;
    }

    makeGrid(size) {
        let grid = [];
        for (let i = 0; i < size; i++) {
            grid.push(new Array(size));
        }
        return grid;
    }

    populateGrid() {
        for (let i = 0; i < this.grid.length; i++) {
            for (let j = 0; j < this.grid[i].length; j++) {
                let square = new _square__WEBPACK_IMPORTED_MODULE_0__.default();

                this.grid[i][j] = square;
            }
        }
    }

    findCurrentVals() {
        let vals = [];
        for (let i = 0; i < this.grid.length; i++) {
            for (let j = 0; j < this.grid[i].length; j++) {
                let sq = this.grid[i][j];
                vals.push(sq.value);
            }
        }
        return vals.join('');
    }

    render() {
        let board = document.getElementById('board');
        board.innerHTML = '';
        board.className = 'board';
        if (!board) {
            console.log('NO Board');
        } else {
            let topNums = document.createElement('div');
            let leftNums = document.createElement('div');
            topNums.className = 'topNums';
            leftNums.className = 'leftNums';

            this.topNums.forEach((numArr) => {
                let nums = document.createElement('div');
                nums.innerHTML = numArr.join(' ');
                topNums.append(nums);
            });

            this.leftNums.forEach((numArr) => {
                let nums = document.createElement('div');
                nums.innerHTML = numArr.join(' ');
                leftNums.append(nums);
            });

            board.appendChild(topNums);
            board.appendChild(leftNums);

            let griddiv = document.createElement('div');
            griddiv.className = 'grid';

            for (let i = 0; i < this.grid.length; i++) {
                let rowDiv = document.createElement('div');
                rowDiv.className = 'row-div';
                for (let j = 0; j < this.grid[i].length; j++) {
                    let square = this.grid[i][j];
                    rowDiv.appendChild(square.render());
                }

                griddiv.appendChild(rowDiv);
            }
            board.appendChild(griddiv);
            board.addEventListener('click', () => this.game.update());
            return board;
        }
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Board);


/***/ }),

/***/ "./public/javascripts/game.js":
/*!************************************!*\
  !*** ./public/javascripts/game.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board */ "./public/javascripts/board.js");
/* harmony import */ var _timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./timer */ "./public/javascripts/timer.js");
/* harmony import */ var _level_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./level_list */ "./public/javascripts/level_list.js");




class Game {
    constructor() {
        this.currentIdx = 0;
        this.levels = [_level_list__WEBPACK_IMPORTED_MODULE_2__.tutorial, _level_list__WEBPACK_IMPORTED_MODULE_2__.level_one, _level_list__WEBPACK_IMPORTED_MODULE_2__.level_two];
        this.boards = [];
        this.currentLevel = this.levels[this.currentIdx];
        this.currentBoard = this.createNewBoard();
        this.incrementCurrentIdx = this.incrementCurrentIdx.bind(this);
        this.timer = new _timer__WEBPACK_IMPORTED_MODULE_1__.default();
        this.boards.push(this.currentBoard);

        this.gameOver = false;
        this.timer.start();
    }

    isLevelWon(board) {
        if (this.currentLevel.valueString === board.findCurrentVals()) {
            this.currentLevel.won = true;
            return true;
        } else {
            return false;
        }
    }

    isGameOver() {
        if (this.levels.every((level) => level.won === true)) {
            this.gameOver = true;
            return true;
        } else {
            return false;
        }
    }
    createNewBoard() {
        let b = new _board__WEBPACK_IMPORTED_MODULE_0__.default(this, this.currentLevel.size, this.currentLevel.topNums, this.currentLevel.leftNums);
        return b;
    }
    incrementCurrentIdx() {
        if (this.currentIdx + 1 < this.levels.length) {
            this.currentIdx += 1;
            this.currentLevel = this.levels[this.currentIdx];
            this.currentBoard = this.createNewBoard();
            this.boards.push(this.currentBoard);
        } else {
            this.gameOver = true;
        }
    }
    update() {
        let level_msg = document.getElementById('level-msg');

        if (this.isLevelWon(this.currentBoard)) {
            level_msg.innerHTML = '<p>Congratulations, you won the level!</p>';
            setTimeout(() => {
                if (this.currentIdx != this.levels.length - 1) {
                    level_msg.innerHTML = '';
                }
                this.incrementCurrentIdx();
                this.play();
            }, 3000);
        }
        if (this.isGameOver()) {
            this.timer.end();

            level_msg.innerHTML = '<p>Congratulations, you beat the game!</p>';
            let restart = document.getElementById('restart');
            restart.className = 'active';
        }
    }

    play() {
        this.currentBoard.render();
    }

    // restart() {
    //     this.currentIdx = 0;
    //     this.currentLevel = this.levels[this.currentIdx];
    //     this.currentBoard = this.createNewBoard();
    //     this.play();
    // }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Game);


/***/ }),

/***/ "./public/javascripts/level.js":
/*!*************************************!*\
  !*** ./public/javascripts/level.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board */ "./public/javascripts/board.js");


class Level {
    constructor(size, valueString) {
        this.size = size;
        this.valueString = valueString;
        this.row = this.rowVals();
        this.col = this.colVals();
        this.topNums = this.getNums(this.col);
        this.leftNums = this.getNums(this.row);
        this.won = false;
    }

    rowVals() {
        let rowsArrays = [];

        let temp = [];
        for (let i = 0; i < this.valueString.length; i++) {
            if (temp.length < this.size) {
                temp.push(this.valueString[i]);
            }
            if (temp.length === this.size) {
                rowsArrays.push(temp);
                temp = [];
            } else if (i === this.valueString.length - 1) {
                rowsArrays.push(temp);
            }
        }

        return rowsArrays;
    }

    colVals() {
        let colsArrays = new Array(this.size);
        for (let i = 0; i < colsArrays.length; i++) {
            colsArrays[i] = [];
        }
        let i = 0;

        while (i < this.valueString.length) {
            let idx = i % this.size;

            colsArrays[idx].push(this.valueString[i]);
            i++;
        }

        return colsArrays;
    }

    getNums(vals) {
        let nums = [];

        for (let i = 0; i < vals.length; i++) {
            let temp = [];
            let count = 0;

            for (let j = 0; j < vals[i].length; j++) {
                if (vals[i][j] === '0') {
                    if (count !== 0) {
                        temp.push(count);
                    }
                    count = 0;
                }
                if (vals[i][j] === '1') {
                    count += 1;
                }
            }
            if (count !== 0) {
                temp.push(count);
            }
            if (temp.length > 0) {
                nums.push(temp);
            } else if (temp.length === 0) {
                nums.push([0]);
            }
        }

        return nums;
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Level);


/***/ }),

/***/ "./public/javascripts/level_list.js":
/*!******************************************!*\
  !*** ./public/javascripts/level_list.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "level_one": () => (/* binding */ level_one),
/* harmony export */   "tutorial": () => (/* binding */ tutorial),
/* harmony export */   "level_two": () => (/* binding */ level_two)
/* harmony export */ });
/* harmony import */ var _level__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./level */ "./public/javascripts/level.js");


const level_one = new _level__WEBPACK_IMPORTED_MODULE_0__.default(5, '1111111101101101010010010');

const tutorial = new _level__WEBPACK_IMPORTED_MODULE_0__.default(3, '111100101');

const level_two = new _level__WEBPACK_IMPORTED_MODULE_0__.default(5, '0111010101100011010101110');


/***/ }),

/***/ "./public/javascripts/square.js":
/*!**************************************!*\
  !*** ./public/javascripts/square.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Square {
    constructor() {
        this.status = "unclicked"; // unclicked, filled, exed, maybe
        this.value = 0;
        this.handleClick = this.handleClick.bind(this);
        this.handleRightClick = this.handleRightClick.bind(this);
        this.handleMiddleClick = this.handleMiddleClick.bind(this);
        this.square = document.createElement("div");
        this.square.addEventListener('click', () => this.handleClick())
        this.square.addEventListener('contextmenu', (e) => this.handleRightClick(e))
        this.square.addEventListener( 'auxclick', (e) => this.handleMiddleClick(e))

    }

    handleClick() {
   
        if (this.status === "filled") {
         
            this.status = 'unclicked';
            this.value = 0;
          
        }else {
           
            this.status = "filled";
            this.value = 1;
        }
        this.render();
        return;
    }

    handleRightClick(e) {
        e.preventDefault();
        if (this.status === "exed") {
            this.status = "unclicked";
            this.value = 0;
        }else {
            this.status = "exed"
            this.value = 0;
        }
        this.render();
        return;
    }

    handleMiddleClick(e) {
        if (e.button !== 1) return;

        if (this.status === "maybe") {
            this.status = "unclicked";
            this.value = 0;
        }else {
            this.status = "maybe";
            this.value = 0;
        }
        this.render();
    }

    render() {
        
        this.square.className="square ";
        this.square.className += this.status;
        return this.square;
    }
   
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Square);

/***/ }),

/***/ "./public/javascripts/timer.js":
/*!*************************************!*\
  !*** ./public/javascripts/timer.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Timer {
    constructor() {
        this.seconds = 0;
        this.minutes = 0;
        this.hours = 0;
        this.intervalId;
        this.tick = this.tick.bind(this);
        this.pause = document.getElementById('pause');
        this.pause.addEventListener('click', () => {
            this.togglePause();
        });
    }

    tick() {
        this.seconds += 1;
        if (this.seconds >= 60) {
            this.seconds = 0;
            this.minutes += 1;
        }
        if (this.minutes >= 60) {
            this.minutes = 0;
            this.hours += 1;
        }
    }
    render() {
        const timer = document.getElementById('timer');

        timer.innerHTML = `${this.hours}:${this.minutes}:${this.seconds}`;
    }

    start() {
        this.intervalId = setInterval(() => {
            this.tick();
            this.render();
        }, 1000);
    }
    end() {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }
    togglePause() {
        if (!this.intervalId) {
            const modal = document.getElementById('board-modal');
            modal.className = 'hidden';
            this.start();
        } else {
            this.end();
            const modal = document.getElementById('board-modal');
            modal.className = 'active';
        }
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Timer);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************************!*\
  !*** ./public/javascripts/index.js ***!
  \*************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board */ "./public/javascripts/board.js");
/* harmony import */ var _level__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./level */ "./public/javascripts/level.js");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/index.scss */ "./public/styles/index.scss");
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game */ "./public/javascripts/game.js");





document.addEventListener('DOMContentLoaded', () => {
    const instructionButton = document.getElementById('instructions-button');
    const instructionDetail = document.getElementById('instructions-detail');

    const toggleInstructions = () => {
        if (instructionDetail.className === 'active') {
            instructionDetail.className = 'hidden';
        } else {
            instructionDetail.className = 'active';
        }
    };
    instructionButton.addEventListener('click', () => {
        toggleInstructions();
    });

    const g = new _game__WEBPACK_IMPORTED_MODULE_3__.default();
    g.play();
});

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map