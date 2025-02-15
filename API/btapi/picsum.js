// param: sau cái endpoint thì nó sẽ có dấu ?
//   ?page=2&limit=100
// page=2 : nghĩa là trang 2
// limit=100 nghĩa là lấy tối đa 100 phần tử
const imageList = document.querySelector(".images");
const loadmore = document.querySelector(".load-more");
const loading = document.querySelector(".image-loader");
l;
let page = 1;
const limit = 8;
const endpoint = `https://picsum.photos/v2/list?limit=${limit}`;

function imageTemplate(url) {
  const template = `<div class="image-item">
    <img src="${url}" alt="">
</div>`;
  imageList.insertAdjacentHTML("beforeend", template);
}

async function fetchImages(page = 1) {
  loading.style.display = "block";
  loadmore.style.display = "none";
  const response = await fetch(`${endpoint}&page=${page}`);
  const images = await response.json();
  if (images.length > 0 && typeof Array.isArray(images)) {
    console.log(images);
    loadmore.style.display = "block";
    loading.style.display = "none";
    images.forEach((item) => {
      imageTemplate(item.download_url);
    });
  }
}

async function handleLoadMore() {
  page++;
  await fetchImages(page);
}

loadmore.addEventListener("click", handleLoadMore);

fetchImages();
