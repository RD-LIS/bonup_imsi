




function section02_showtextimage(){
	document.getElementById('section02_textimg').classList.add('section02_textimg_open');
}


function section02_showtextimage_black(){
	document.getElementById('section02_textimg_black').classList.add('section02_textimg_open');
}









let viewportHeight = window.innerHeight;
console.log('가장 정확한 뷰포트 높이:', viewportHeight);

let currentScrollY = window.scrollY;
console.log('현재 스크롤 위치:', currentScrollY);
let section02_textimg=document.getElementById('section02_textimg').getBoundingClientRect().top;
console.log('뷰포트 최상단으로부터의 거리:', section02_textimg);
let section02_textimg_black=document.getElementById('section02_textimg_black').getBoundingClientRect().top;
console.log('뷰포트 최상단으로부터의 거리:', section02_textimg_black);


window.addEventListener('scroll', function() {
	currentScrollY = window.scrollY;
	console.log('현재 스크롤 위치:', currentScrollY);

	section02_textimg=document.getElementById('section02_textimg').getBoundingClientRect().top;
	console.log('뷰포트 최상단으로부터의 거리:', section02_textimg);
	if ( section02_textimg < (viewportHeight*0.8) ){
		setTimeout(section02_showtextimage, 700);
	}



	section02_textimg_black=document.getElementById('section02_textimg_black').getBoundingClientRect().top;
	console.log('뷰포트 최상단으로부터의 거리:', section02_textimg_black);
	if ( section02_textimg_black < (viewportHeight*0.8) ){
		setTimeout(section02_showtextimage_black, 700);
	}






});













