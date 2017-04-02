function getCtx(containerSelector, width, height) {
	var container = document.querySelector(containerSelector);
	var cvs = document.createElement('canvas');
	cvs.width = width;
	cvs.height = height;
	cvs.style = 'border: 1px solid black';
	container.appendChild(cvs);
	return cvs.getContext('2d');
}
