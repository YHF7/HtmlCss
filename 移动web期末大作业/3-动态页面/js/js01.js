// JavaScript Document
function $$(id) {
    return document.getElementById(id);
}

//页面加载时调用的函数
function pageload() {
    var strName = localStorage.getItem("keyName");
    var strPass = localStorage.getItem("keyPass");
    var strsj = localStorage.getItem("keysj");
    if (strName) {
        $$("txtName").value = strName;
    }
    if (strPass) {
        $$("txtPass").value = strPass;
    }
    if (strsj) {
        $$("txtsj").value = strsj;
    }
}
//点击“登录”按钮后调用的函数
function btnLogin_click() {
    var strName = $$("txtName").value
    var strPass = $$("txtPass").value;
    var txtsj = $$("txtsj").value;
    localStorage.setItem("keyName", strName);
    // if ($$("chkSave").checked) {
        localStorage.setItem("keyPass", strPass);
        localStorage.setItem("keysj", txtsj);
    // } else {
    //     localStorage.removeItem("keyPass");
    // }
    // $$("spnStatus").className = "status";
    // $$("spnStatus").innerHTML = "登录成功！";
    // alert("成功");
}