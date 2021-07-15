const success = [];
const fail = [];

const getData = async () => {
	const successData = await fetchFile("data/success.txt");
	const FailData = await fetchFile("data/fail.txt");
	const successArr = successData.split("\n");
	const failArr = FailData.split("\n");
	success.push(...successArr);
	fail.push(...failArr);
}

getData();
