var inputEle = document.getElementById('edit');
var outputEle = document.getElementById('my-article');
var styleEle = document.getElementById('style-add');
var article = "hello wrold! now we can go!  " +
    "你到底走不走！ 笨蛋快走啦！";
function typingFun(outputEle,index,length,speed,isStyle) {
    return function(){
        outputEle.textContent += article.slice(index,index+length);
        index += length;
        setTimeout(typingFun(outputEle,index,length,speed,isStyle),100*speed);
    }
}
function doInput() {
    styleEle.textContent = inputEle.textContent;
};
inputEle.addEventListener('input',doInput);
typingFun(outputEle,0,1,3,false)();
