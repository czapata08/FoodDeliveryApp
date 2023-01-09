module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/profile.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/profile.js":
/*!**************************!*\
  !*** ./pages/profile.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// import { useAuth } from \"../lib/auth2\";\n// import React, { useState } from \"react\";\n// import { Form, FormGroup, Label, Input, Col, Button } from \"reactstrap\";\n\n// export default function Profile() {\n//   const { user, updateUser } = useAuth();\n//   const [loading, setLoading] = useState(false);\n//   const [data, updateData] = useState({});\n\n//   function onChange(event) {\n//     updateData({ ...data, [event.target.name]: event.target.value });\n//   }\n\n//   // function submitProfile() {\n//   //   setLoading(true);\n//   //   updateUser(data.id, data.username)\n//   //     .then((res) => {\n//   //       setLoading(false);\n//   //       // set authed User in global context to update header/app state\n//   //       // setUser(res.data.user);\n//   //       // setUser((user = res.data.user));\n//   //       // alert(`welcome, ${res.data.user.username}`);\n//   //       console.log(`DATA FROM STRAPPI ${JSON.stringify(res.data)}`);\n//   //     })\n//   //     .catch((error) => {\n//   //       setError(error);\n//   //       setLoading(false);\n//   //     });\n//   // }\n\n//   return (\n//     <Form>\n//       <FormGroup row>\n//         <Label\n//           for='exampleEmail'\n//           sm={2}>\n//           Email\n//         </Label>\n//         <p>{user.email}</p>\n//         <Col sm={10}>\n//           <Input\n//             onChange={(event) => onChange(event)}\n//             name='email'\n//             // placeholder={user.email}\n//             type='email'\n//           />\n//         </Col>\n//       </FormGroup>\n//       <FormGroup row>\n//         <Label\n//           for='username'\n//           sm={2}>\n//           Email\n//         </Label>\n//         <Col sm={10}>\n//           <p>{user.username}</p>\n//           <Input\n//             onChange={(event) => onChange(event)}\n//             name='username'\n//             // placeholder={user.username}\n//             type='username'\n//           />\n//         </Col>\n//         <Button onSubmit={submitProfile()} />\n//       </FormGroup>\n//     </Form>\n//   );\n// }\n\n// // export async function getServerSideProps() {\n// //   const { user } = useAuth();\n// //   console.log(user);\n// //   if (user) {\n// //     return {\n// //       props: user,\n// //     };\n// //   } else {\n// //     <p> error </p>;\n// //   }\n// // }//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wcm9maWxlLmpzPzViZTIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9wYWdlcy9wcm9maWxlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gXCIuLi9saWIvYXV0aDJcIjtcbi8vIGltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuLy8gaW1wb3J0IHsgRm9ybSwgRm9ybUdyb3VwLCBMYWJlbCwgSW5wdXQsIENvbCwgQnV0dG9uIH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcblxuLy8gZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZmlsZSgpIHtcbi8vICAgY29uc3QgeyB1c2VyLCB1cGRhdGVVc2VyIH0gPSB1c2VBdXRoKCk7XG4vLyAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbi8vICAgY29uc3QgW2RhdGEsIHVwZGF0ZURhdGFdID0gdXNlU3RhdGUoe30pO1xuXG4vLyAgIGZ1bmN0aW9uIG9uQ2hhbmdlKGV2ZW50KSB7XG4vLyAgICAgdXBkYXRlRGF0YSh7IC4uLmRhdGEsIFtldmVudC50YXJnZXQubmFtZV06IGV2ZW50LnRhcmdldC52YWx1ZSB9KTtcbi8vICAgfVxuXG4vLyAgIC8vIGZ1bmN0aW9uIHN1Ym1pdFByb2ZpbGUoKSB7XG4vLyAgIC8vICAgc2V0TG9hZGluZyh0cnVlKTtcbi8vICAgLy8gICB1cGRhdGVVc2VyKGRhdGEuaWQsIGRhdGEudXNlcm5hbWUpXG4vLyAgIC8vICAgICAudGhlbigocmVzKSA9PiB7XG4vLyAgIC8vICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuLy8gICAvLyAgICAgICAvLyBzZXQgYXV0aGVkIFVzZXIgaW4gZ2xvYmFsIGNvbnRleHQgdG8gdXBkYXRlIGhlYWRlci9hcHAgc3RhdGVcbi8vICAgLy8gICAgICAgLy8gc2V0VXNlcihyZXMuZGF0YS51c2VyKTtcbi8vICAgLy8gICAgICAgLy8gc2V0VXNlcigodXNlciA9IHJlcy5kYXRhLnVzZXIpKTtcbi8vICAgLy8gICAgICAgLy8gYWxlcnQoYHdlbGNvbWUsICR7cmVzLmRhdGEudXNlci51c2VybmFtZX1gKTtcbi8vICAgLy8gICAgICAgY29uc29sZS5sb2coYERBVEEgRlJPTSBTVFJBUFBJICR7SlNPTi5zdHJpbmdpZnkocmVzLmRhdGEpfWApO1xuLy8gICAvLyAgICAgfSlcbi8vICAgLy8gICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbi8vICAgLy8gICAgICAgc2V0RXJyb3IoZXJyb3IpO1xuLy8gICAvLyAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbi8vICAgLy8gICAgIH0pO1xuLy8gICAvLyB9XG5cbi8vICAgcmV0dXJuIChcbi8vICAgICA8Rm9ybT5cbi8vICAgICAgIDxGb3JtR3JvdXAgcm93PlxuLy8gICAgICAgICA8TGFiZWxcbi8vICAgICAgICAgICBmb3I9J2V4YW1wbGVFbWFpbCdcbi8vICAgICAgICAgICBzbT17Mn0+XG4vLyAgICAgICAgICAgRW1haWxcbi8vICAgICAgICAgPC9MYWJlbD5cbi8vICAgICAgICAgPHA+e3VzZXIuZW1haWx9PC9wPlxuLy8gICAgICAgICA8Q29sIHNtPXsxMH0+XG4vLyAgICAgICAgICAgPElucHV0XG4vLyAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBvbkNoYW5nZShldmVudCl9XG4vLyAgICAgICAgICAgICBuYW1lPSdlbWFpbCdcbi8vICAgICAgICAgICAgIC8vIHBsYWNlaG9sZGVyPXt1c2VyLmVtYWlsfVxuLy8gICAgICAgICAgICAgdHlwZT0nZW1haWwnXG4vLyAgICAgICAgICAgLz5cbi8vICAgICAgICAgPC9Db2w+XG4vLyAgICAgICA8L0Zvcm1Hcm91cD5cbi8vICAgICAgIDxGb3JtR3JvdXAgcm93PlxuLy8gICAgICAgICA8TGFiZWxcbi8vICAgICAgICAgICBmb3I9J3VzZXJuYW1lJ1xuLy8gICAgICAgICAgIHNtPXsyfT5cbi8vICAgICAgICAgICBFbWFpbFxuLy8gICAgICAgICA8L0xhYmVsPlxuLy8gICAgICAgICA8Q29sIHNtPXsxMH0+XG4vLyAgICAgICAgICAgPHA+e3VzZXIudXNlcm5hbWV9PC9wPlxuLy8gICAgICAgICAgIDxJbnB1dFxuLy8gICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gb25DaGFuZ2UoZXZlbnQpfVxuLy8gICAgICAgICAgICAgbmFtZT0ndXNlcm5hbWUnXG4vLyAgICAgICAgICAgICAvLyBwbGFjZWhvbGRlcj17dXNlci51c2VybmFtZX1cbi8vICAgICAgICAgICAgIHR5cGU9J3VzZXJuYW1lJ1xuLy8gICAgICAgICAgIC8+XG4vLyAgICAgICAgIDwvQ29sPlxuLy8gICAgICAgICA8QnV0dG9uIG9uU3VibWl0PXtzdWJtaXRQcm9maWxlKCl9IC8+XG4vLyAgICAgICA8L0Zvcm1Hcm91cD5cbi8vICAgICA8L0Zvcm0+XG4vLyAgICk7XG4vLyB9XG5cbi8vIC8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKSB7XG4vLyAvLyAgIGNvbnN0IHsgdXNlciB9ID0gdXNlQXV0aCgpO1xuLy8gLy8gICBjb25zb2xlLmxvZyh1c2VyKTtcbi8vIC8vICAgaWYgKHVzZXIpIHtcbi8vIC8vICAgICByZXR1cm4ge1xuLy8gLy8gICAgICAgcHJvcHM6IHVzZXIsXG4vLyAvLyAgICAgfTtcbi8vIC8vICAgfSBlbHNlIHtcbi8vIC8vICAgICA8cD4gZXJyb3IgPC9wPjtcbi8vIC8vICAgfVxuLy8gLy8gfVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/profile.js\n");

/***/ })

/******/ });