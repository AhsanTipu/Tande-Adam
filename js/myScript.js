 var tabButtons=document.querySelectorAll(".tabContainer .buttonContainer button");
 var tabPanels=document.querySelectorAll(".tabContainer  .tabPanel");

var tabButtons1=document.querySelectorAll(".tabContainer1 .buttonContainer1 button");
var tabPanels1=document.querySelectorAll(".tabContainer1  .tabPanel1");

var tabButtons2=document.querySelectorAll(".tabContainer2 .buttonContainer2 button");
var tabPanels2=document.querySelectorAll(".tabContainer2  .tabPanel2");

var tabButtons3=document.querySelectorAll(".tabContainer3 .buttonContainer3 button");
var tabPanels3=document.querySelectorAll(".tabContainer3  .tabPanel3");

var tabButtons4=document.querySelectorAll(".tabContainer4 .buttonContainer4 button");
var tabPanels4=document.querySelectorAll(".tabContainer4  .tabPanel4");

var tabButtons5=document.querySelectorAll(".tabContainer5 .buttonContainer5 button");
var tabPanels5=document.querySelectorAll(".tabContainer5  .tabPanel5");

var tabButtons6=document.querySelectorAll(".tabContainer6 .buttonContainer6 button");
var tabPanels6=document.querySelectorAll(".tabContainer6  .tabPanel6");

var tabButtons7=document.querySelectorAll(".tabContainer7 .buttonContainer7 button");
var tabPanels7=document.querySelectorAll(".tabContainer7  .tabPanel7");

function showPanel(panelIndex,colorCode) {
    tabButtons.forEach(function(node){
        node.style.backgroundColor="";
        node.style.color="";
    });
    tabButtons[panelIndex].style.backgroundColor=colorCode;
    tabButtons[panelIndex].style.color="";
    tabPanels.forEach(function(node){
        node.style.display="none";
    });
    tabPanels[panelIndex].style.display="";
    tabPanels[panelIndex].style.backgroundColor=colorCode;
}
showPanel(0,'');

function showPanel1(panelIndex,colorCode) {
    tabButtons1.forEach(function(node){
        node.style.backgroundColor="";
        node.style.color="";
    });
    tabButtons1[panelIndex].style.backgroundColor=colorCode;
    tabButtons1[panelIndex].style.color="";
    tabPanels1.forEach(function(node){
        node.style.display="none";
    });
    tabPanels1[panelIndex].style.display="";
    tabPanels1[panelIndex].style.backgroundColor=colorCode;
}
showPanel1(0,'');

function showPanel2(panelIndex,colorCode) {
    tabButtons2.forEach(function(node){
        node.style.backgroundColor="";
        node.style.color="";
    });
    tabButtons2[panelIndex].style.backgroundColor=colorCode;
    tabButtons2[panelIndex].style.color="";
    tabPanels2.forEach(function(node){
        node.style.display="none";
    });
    tabPanels2[panelIndex].style.display="";
    tabPanels2[panelIndex].style.backgroundColor=colorCode;
}
showPanel2(0,'');

function showPanel3(panelIndex,colorCode) {
    tabButtons3.forEach(function(node){
        node.style.backgroundColor="";
        node.style.color="";
    });
    tabButtons3[panelIndex].style.backgroundColor=colorCode;
    tabButtons3[panelIndex].style.color="";
    tabPanels3.forEach(function(node){
        node.style.display="none";
    });
    tabPanels3[panelIndex].style.display="";
    tabPanels3[panelIndex].style.backgroundColor=colorCode;
}
showPanel3(0,'');

function showPanel4(panelIndex,colorCode) {
    tabButtons4.forEach(function(node){
        node.style.backgroundColor="";
        node.style.color="";
    });
    tabButtons4[panelIndex].style.backgroundColor=colorCode;
    tabButtons4[panelIndex].style.color="";
    tabPanels4.forEach(function(node){
        node.style.display="none";
    });
    tabPanels4[panelIndex].style.display="";
    tabPanels4[panelIndex].style.backgroundColor=colorCode;
}
showPanel4(0,'');

function showPanel5(panelIndex,colorCode) {
    tabButtons5.forEach(function(node){
        node.style.backgroundColor="";
        node.style.color="";
    });
    tabButtons5[panelIndex].style.backgroundColor=colorCode;
    tabButtons5[panelIndex].style.color="";
    tabPanels5.forEach(function(node){
        node.style.display="none";
    });
    tabPanels5[panelIndex].style.display="";
    tabPanels5[panelIndex].style.backgroundColor=colorCode;
}
showPanel5(0,'');

function showPanel6(panelIndex,colorCode) {
    tabButtons6.forEach(function(node){
        node.style.backgroundColor="";
        node.style.color="";
    });
    tabButtons6[panelIndex].style.backgroundColor=colorCode;
    tabButtons6[panelIndex].style.color="";
    tabPanels6.forEach(function(node){
        node.style.display="none";
    });
    tabPanels6[panelIndex].style.display="";
    tabPanels6[panelIndex].style.backgroundColor=colorCode;
}
showPanel6(0,'');

function showPanel7(panelIndex,colorCode) {
    tabButtons7.forEach(function(node){
        node.style.backgroundColor="";
        node.style.color="";
    });
    tabButtons7[panelIndex].style.backgroundColor=colorCode;
    tabButtons7[panelIndex].style.color="";
    tabPanels7.forEach(function(node){
        node.style.display="none";
    });
    tabPanels7[panelIndex].style.display="";
    tabPanels7[panelIndex].style.backgroundColor=colorCode;
}
showPanel7(0,'');
