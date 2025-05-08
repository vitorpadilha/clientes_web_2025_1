"use strict";
document.addEventListener("DOMContentLoaded", (evento) => {
    var input1 = document.getElementById("formName");
    var input2 = document.querySelector("form:nth-child(1)");
    var input3 = document.querySelector("input");
    var input4 = document.getElementsByTagName("input")[0];
    console.log(input1 === null || input1 === void 0 ? void 0 : input1.type);
    console.log(input1 === null || input1 === void 0 ? void 0 : input1.getAttribute("type"));
    console.log(input2 === null || input2 === void 0 ? void 0 : input2.type);
    console.log(input2 === null || input2 === void 0 ? void 0 : input2.getAttribute("type"));
    console.log(input3 === null || input3 === void 0 ? void 0 : input3.type);
    console.log(input3 === null || input3 === void 0 ? void 0 : input3.getAttribute("type"));
    console.log(input4 === null || input4 === void 0 ? void 0 : input4.type);
    console.log(input4 === null || input4 === void 0 ? void 0 : input4.getAttribute("type"));
});
