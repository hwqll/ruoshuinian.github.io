let myheader = document.querySelector('img');
myheader.onclick = function () {
let pic = myheader.getAttribute('src');
if (pic === 'images/1.pic.jpg') {
    myheader.setAttribute('src','images/2.png');
} else {
    myheader.setAttribute('src','images/1.pic.jpg');
}
}


let titleBtn = document.querySelector('button');
let title = document.querySelector('h1');

function setTitleName() {
    let myname = prompt('请输入您的名字');
    localStorage.setItem('name',myname);
    title.textContent = '很棒，' + myname;
}
titleBtn.onclick = function () {
    setTitleName();
}
if(localStorage.getItem('name')) {
    title.textContent = localStorage.getItem('name')
}else {
    setTitleName();
}
