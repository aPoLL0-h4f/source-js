const endpoint = "http://localhost:3456/courses";
const courseList = document.querySelector(".course-list");
const formPost = document.querySelector(".form-post");
const formSubmit = document.querySelector(".form-submit");
const filterInput = document.querySelector(".filter");
let updateId = null;

function debounceFn(func, wait, immediate) {
  let timeout;
  return function () {
    let context = this,
      args = arguments;
    let later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    let callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

filterInput.addEventListener(
  "keydown",
  debounceFn(function (e) {
    //C1:
    // const respone = await fetch(`${endpoint}?title_like=${e.target.value}`); // _like có nghĩa là có chứa cái từ đó là được
    // const data = await respone.json();
    // console.log(data);
    //C2:
    let path = endpoint;
    if (e.target.value !== "") {
      path = `${endpoint}?title_like=${e.target.value}`;
    }
    getCourses(path);
  }, 500)
);

async function addNewCourse({
  image,
  title,
  author,
  rating,
  price,
  bestSeller,
  buyAmout,
}) {
  await fetch(endpoint, {
    method: "POST",
    body: JSON.stringify({
      image,
      title,
      author,
      rating,
      price,
      bestSeller,
      buyAmout,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
}

async function deleteCourse(id) {
  await fetch(`${endpoint}/${id}`, {
    method: "DELETE",
  });
}

async function updateCourse({
  id,
  image,
  title,
  author,
  rating,
  price,
  bestSeller,
  buyAmout,
}) {
  await fetch(`${endpoint}/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      image,
      title,
      author,
      rating,
      price,
      bestSeller,
      buyAmout,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
}

async function getSingleCourseId(id) {
  const respone = await fetch(`${endpoint}/${id}`);
  const data = await respone.json();
  return data;
}

function renderItem(item) {
  const template = `<div class="course-item">
    <div class="course-image">
        <img src=${item.image} alt="">
        <button class="course-edit" data-id= "${item.id}">
        <i class='bx bxs-edit-alt' style="pointer-events:none;"></i>
    </button>
        <button class="course-remove" data-id= "${item.id}">
        <i class='bx bxs-x-circle'></i>
    </button>
    </div>
    <div class="course-content">
        <h3 class="course-title">
            ${item.title}
        </h3>
        <div class="course-author">${item.author}</div>
        <div class="course-meta">
            <div class="course-rating">${item.rating}</div>
            <div class="course-enroll">${item.buyAmout}</div>
        </div>
        ${
          item.bestSeller
            ? ' <div class="course-best-seller">Best Seller</div>'
            : ""
        } 
    </div>
</div>`;
  courseList.insertAdjacentHTML("beforeend", template);
}

async function getCourses(link = endpoint) {
  const respone = await fetch(link);
  const data = await respone.json();
  courseList.innerHTML = "";
  if (data.length > 0 && Array.isArray(data)) {
    data.forEach((item) => renderItem(item));
  }
}

formPost.addEventListener("submit", async function (e) {
  e.preventDefault();
  const courses = {
    image: this.elements["image"].value,
    title: this.elements["title"].value,
    author: this.elements["author"].value,

    // khúc này nếu lấy value thì nó đang là string thì muốn chuyển thành number thì thêm dấu +
    rating: +this.elements["rating"].value,
    price: +this.elements["price"].value,
    bestSeller: this.elements["bestSeller"].checked,
    buyAmout: +this.elements["buyAmout"].value,
  };
  updateId
    ? await updateCourse({ id: updateId, ...courses })
    : await addNewCourse(courses);

  this.reset(); // nghĩa là reset form đi (có sẵn trong form)
  await getCourses();
  updateId = null;
  formSubmit.textContent = "Add Course";
});

courseList.addEventListener("click", async function (e) {
  if (e.target.matches(".course-remove")) {
    const id = +e.target.dataset.id;
    await deleteCourse(id);
    await getCourses();
  } else if (e.target.matches(".course-edit")) {
    const id = +e.target.dataset.id;
    const data = await getSingleCourseId(id);
    formPost.elements["image"].value = data.image;
    formPost.elements["title"].value = data.title;
    formPost.elements["author"].value = data.author;
    formPost.elements["rating"].value = data.rating;
    formPost.elements["price"].value = data.price;
    formPost.elements["bestSeller"].checked = data.bestSeller;
    formPost.elements["buyAmout"].value = data.buyAmout;
    formSubmit.textContent = "Update Course";
    updateId = id;
  }
});

getCourses();

// json-server --watch db.json
