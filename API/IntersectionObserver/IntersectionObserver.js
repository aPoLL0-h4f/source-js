// nó là khi sử dụng những thư viện animation hay là wow js, khi mà scroll tới đâu thì animation hiện tới đó

// new IntersectionObserver(callback, options)
//callback là function để xử lý khi mà chúng ta scroll cái hình đó 
/** option
 *  root: null -> null nghĩa là cái viewport ta nhìn thấy, còn nếu phần tử cha nào đó nhất định thì để ở đó là body,....
 * VD: root: document.querySelector("body");
 *
    threshold : 0 -> chạy từ 0 đến 1 , 0 là nằm phía trên phần tử , 1 là nằm phía dưới cùng phần tử
    rootMargin: "" -> margin
 */

// dựa vào isIntersecting
if("IntersectionObserver" in window){//kiểm tra xem đối tượng IntersectionObserver có tồn tại trong đối tượng window hay không. Cụ thể, nó kiểm tra xem trình duyệt có hỗ trợ API Intersection Observer hay không.
    const boxed = document.querySelector(".boxed");
    function callback(entries){
        const entry = entries[0];
        if(entry.isIntersecting){ // tức là nếu nằm trong viewport r, tức là scroll thấy nó r thì

            // chỗ boxed có thể thay bằng entry.target
            observer1.unobserve(boxed); // tức là nó nằm trong viewport rồi nên mình sẽ ko đưa vào tầm quan sát nữa
            boxed.style.backgroundColor = "red";
        }
    }
    const options ={
        root: null,
        threshold : 0.5,
        rootMargin: "0px"
    }
    const observer1 = new IntersectionObserver(callback, options);
    observer1.observe(boxed); // để đưa vào tầm quan sát cái boxed , để check là scroll tới nó chưa
}