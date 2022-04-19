const BASE_URL = 'https://thatcopy.pw/catapi/rest/';
const catBtn = document.getElementById('miau');

const getCats = async () => {
		const data = await fetch(BASE_URL);
		then(res => res.jason())
		.catch(e => console.log(e))
		
		return data.webpurl;
};

const loadImg = async () => {
	const catImg = document.getElementsById('cat');
	img.src = await getCats();
};

catBtn.addEventListener('click', loadImg);

loadImg();