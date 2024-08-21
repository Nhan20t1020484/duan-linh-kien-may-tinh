let store = new Store("Thành Nhân");
let storegiohang = new Storegiohang("Thành Nhân")


function getByName() {
    let nameSearch = document.getElementById("name-search").value;
    let list = store.getByNameContain(nameSearch);
    let html = ``;
    for (let i = 0; i < list.length; i++) {
        html = html + `
            <div class="sanpham-main">
                <img src="${list[i].img}"
                    style="width: 100%;" alt="">
                <b style="font-size: 20px; font-weight: 500; margin-left: 5px;"id="name">${list[i].name}</b>
                <p>
                    <b style="font-size: 20px; font-weight: 500; margin-left: 5px;"id="id">Mã Sản Phẩm: ${list[i].id}</b>

                <b style="color: gray; text-decoration: line-through; margin-left: 5px;">${list[i].price_old} VND</b>
                <p>
                    <b style="color: red; margin-left: 5px;">${list[i].price_new} VND</b>
                      <button id="" onclick="add()"><i class="fa-solid fa-cart-shopping "style="float: right; font-size: 30px; color:#546CE8 ; margin-right: 30px; "></i>ㅤ</button>
                        <button onclick="remove(${i})" class="xoa_sanpham" style=" margin-left: 3%; margin-top: 18%; float:left>Xóa Sản Phẩm</button>
                <button onclick="showFormEdit(${i})"style=" margin-left: 3%; margin-top: 18%; float:left">Sửa Thông Tin</button>             
            </div>
      `
    }
    document.getElementById("sanpham").innerHTML = html;

}
function add() {
    let img = document.getElementById("img").value;
    let name = document.getElementById("name").value;
    let id = document.getElementById("id").value;
    let price_old = document.getElementById("price_old").value;
    let price_new = document.getElementById("price_new").value;
    let newProduct = new Product(img, name, id, price_old, price_new);
    store.add(newProduct);
    getAll();
    document.getElementById("img").value = "";
    document.getElementById("name").value = "";
    document.getElementById("id").value = "";
    document.getElementById("price_old").value = "";
    document.getElementById("price_new").value = "";
}

function getAll() {
    let list = store.getList();
    let html = ``;
    for (let i = 0; i < list.length; i++) {
        html = html + `
        <div class="sanpham-main">
                <img src="${list[i].img}" style="width: 100%;" alt="">
                <b style="font-size: 20px; font-weight: 500; margin-left: 5px;"id="name">${list[i].name}</b>
                <p>
                    <b style="font-size: 20px; font-weight: 500; margin-left: 5px;"id="id">Mã Sản Phẩm: ${list[i].id}</b>
                <b style="color: gray; text-decoration: line-through; margin-left: 5px;">${list[i].price_old} VND</b>
                <p>
                    <b style="color: red; margin-left: 5px;">${list[i].price_new} VND</b>
                <button onclick="addgiohang()" ><i class="fa-solid fa-cart-shopping "style="float: right; font-size: 30px; color:#546CE8; margin-right: 10px;"></i></button>
                <button onclick="remove(${i})" style=" margin-left: 3%; margin-top: 18%; float:left">Xóa Sản Phẩm</button>
                <button onclick="showFormEdit(${i})" style=" margin-left: 3%; margin-top: 16%; float:left ">Sửa Thông Tin</button>

            </div>
      `
    }
    document.getElementById("sanpham").innerHTML = html;
}
function remove(index) {
    let isConfirm = confirm("Bạn chắc chứ?")
    if (isConfirm) {
        store.remove(index);
        getAll();
    }
}

function showFormEdit(index) {
    let oldProduct = store.getProductByIndex(index);
    document.getElementById("img").value = oldProduct.img;
    document.getElementById("name").value = oldProduct.name;
    document.getElementById("id").value = oldProduct.id;
    document.getElementById("price_old").value = oldProduct.price_old;
    document.getElementById("price_new").value = oldProduct.price_new;
    document.getElementById("btn").innerHTML = `<button onclick="edit(${index})">luu</button> `
}
function edit(index) {
    let img = document.getElementById("img").value;
    let name = document.getElementById("name").value;
    let id = document.getElementById("id").value;
    let price_old = document.getElementById("price_old").value;
    let price_new = document.getElementById("price_new").value; 
    let newProduct = new Product(img, name,id, price_old,price_new);
    store.edit(index, newProduct);
    alert("Sửa thành công");
    getAll();
    document.getElementById("img").value = "";
    document.getElementById("name").value = "";
    document.getElementById("id").value = "";
    document.getElementById("price_old").value = "";
    document.getElementById("price_new").value = "";
    document.getElementById("btn").innerHTML = `<button onclick="add()">Thêm mới</button> `
}
getAll();