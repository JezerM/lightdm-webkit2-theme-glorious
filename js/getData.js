const arrToPath = (arr) => "/" + arr.join("/");
const fetchLocal = (file) => fetchFile(docDir + file);

const docPath = location.pathname.replace("//", "");
const docPathArr = docPath.split("/").slice(1);
const docDirArr = docPathArr.slice(0, -1);
const docDir = arrToPath(docDirArr) + "/";

const success = [];
const fail = [];

const getData = async () => {
	const successData = await fetchLocal("data/success.txt");
	const FailData = await fetchLocal("data/fail.txt");
	const successArr = successData.split("\n");
	const failArr = FailData.split("\n");
	success.push(...successArr);
	fail.push(...failArr);
}

getData();
