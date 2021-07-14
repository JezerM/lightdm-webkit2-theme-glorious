const fetchFile = (url) => new Promise((resolve) => {
	const req = new XMLHttpRequest();
	req.addEventListener("load", function () {
		resolve(this.response);
	});
	req.open("GET", window.location.href + url);
	req.send();
});
