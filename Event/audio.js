console.log("---------------ended---------------");
// sự kiện áp dụng cho thẻ <audio>

/* <audio src="./files/holo.mp3" id="song"></audio> */ // VD bài nhạc này đang chạy mà chúng ta muốn khi nó chạy hết bài nhạc đó thì thực hiện chức năng gì đó thì sử dụng sự kiện ended

// song.addEventListener("ended", function(){})
console.log("---------------duration & currentTime---------------");
// .duration -> nó sẽ lấy ra thời gian của bài nhạc đó (nó sẽ trả ra giây) 
// .currentTime -> khi nhạc đang chạy , mình muốn biết thời gian còn lại thì sử dụng cái này
// VD: song.duration, song.currentTime

console.log("---------------input type range---------------");

/* <input type="range" id="progress-bar" min="0" max="229.12" value="0" class="bar"></input> */
// min: là chỉ có thể kéo tới giá trị nhỏ nhất (ở đây min = 0 thì kéo về 0 là ko kéo đc nữa)
// max: là kéo đến giá trị lớn nhất(thời gian chạy tối đa) 
// value: là giá trị khởi tạo 

// để cho thanh kéo tự chạy như mp3 ở bài 268 trong evondev
// thì đầu tiên sử dụng setInterval 
// bar.max= .... -> ở dấu ... thì nó sẽ điền giá trị  max trong thẻ input 
// bar.value= .... -> ở dấu ... thì nó sẽ điền lại giá trị value trong thẻ input 


console.log("---------------event change---------------");
