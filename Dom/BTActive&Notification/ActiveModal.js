//BT Hãy tạo ra 1 HTML như VÍ DỤ ở dưới
/*
    <div class="modal">
        <div class="modal-content">
            <i class='icon bx bx-x'></i>
            <div class="modal-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure itaque eligendi earum tenetur consequatur fuga recusandae. Eius molestias saepe laudantium ipsam! Optio, fugit? Iste similique amet modi quibusdam minus aut.
            </div>
            <div class="modal-action">
                <button class="modal-submit">submit</button>
                <button class="modal-cancel">cancel</button>
            </div>
        </div>
    </div>
*/


const modal = document.createElement("div");
modal.classList.add("modal");
const modalContent = document.createElement("div");
modalContent.classList.add("modal-content");
modal.appendChild(modalContent);
document.body.appendChild(modal);
const modalClose = document.createElement("i");
modalClose.className= "icon bx bx-x";
modalContent.appendChild(modalClose);
const modalDesc= document.createElement("div");
modalDesc.classList.add("modal-desc");
modalDesc.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure itaque eligendi earum tenetur consequatur fuga recusandae. Eius molestias saepe laudantium ipsam! Optio, fugit? Iste similique amet modi quibusdam minus aut.";
modalContent.appendChild(modalDesc);
const modalAction = document.createElement("div");
modalAction.classList.add("modal-action");
modalContent.appendChild(modalAction);
const modalSubmit = document.createElement("button");
modalSubmit.classList.add("modal-submit");
modalSubmit.textContent= "Submit";
modalAction.appendChild(modalSubmit);
const modalCancel= document.createElement("button");
modalCancel.classList.add("modal-cancel");
modalCancel.textContent="Cancel";
modalAction.appendChild(modalCancel);

const model = document.querySelector(".modal");
if(model){ // khúc này nghĩa là nếu có modal
    setTimeout(function(){
        model.classList.add("is-show");
    }, 3000);
}

