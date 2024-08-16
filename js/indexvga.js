let storevga = new Storevga("Thành Nhân");
// let p1 = new Product(1, "Bánh", 2000, "https://cdn.tgdd.vn/Files/2022/04/04/1423817/bat-mi-cach-lam-banh-mi-baguette-phap-gion-xop-dac-ruot-202204041137450765.jpg");
// let p2 = new Product(2, "Kẹo", 3000, "https://cdn.tgdd.vn/Files/2022/04/04/1423817/bat-mi-cach-lam-banh-mi-baguette-phap-gion-xop-dac-ruot-202204041137450765.jpg");
// store.add(p1);
// store.add(p2);
// let p1 = new Product("https://anphat.com.vn/media/product/44267_cpu_intel_core_i7_13700f_anphat88.jpg", "CPU Intel Core i7 13700F", "Mã Sản Phẩm : CPUI0153", "11.999.000 VND" , "10.399.000 VND")
// let p2 = new Product("https://anphat.com.vn/media/product/37206_cpu_intel_core_i5_11400f_anphat89.jpg", "CPU Intel Core i5 11400F", "Mã Sản Phẩm : CPUIT0127", "3.999.000 VND" , "3.399.000 VND")
// let p3 = new Product("https://anphat.com.vn/media/product/47426_cpu_amd_athlon_3000g.jpg", "CPU AMD Athlon 3000G", "Mã Sản Phẩm : CPUA0085", "1.999.000 VND","1.199.000 VND")
// store.add(p1);
// store.add(p2);
// store.add(p3);

function getByName() {
    let nameSearch = document.getElementById("name-search").value;
    let list = storevga.getByNameContain(nameSearch);
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
                    <i class="fa-solid fa-cart-shopping "
                        style="float: right; font-size: 30px; color:#546CE8; margin-right: 30px;"></i>
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
    let newProduct = new Productvga(img, name, id, price_old, price_new);
    storevga.add(newProduct);
    getAll();
    document.getElementById("img").value = "";
    document.getElementById("name").value = "";
    document.getElementById("id").value = "";
    document.getElementById("price_old").value = "";
    document.getElementById("price_new").value = "";
}
function getAll() {
    let list = storevga.getList();
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

                    <i class="fa-solid fa-cart-shopping "style="float: right; font-size: 30px; color:#546CE8; margin-right: 30px;"></i>
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
        storevga.remove(index);
        alert("Xóa thành công");
        getAll();
    }
}

function showFormEdit(index) {
    let oldProduct = storevga.getProductByIndex(index);
    document.getElementById("img").value = oldProduct.img;
    document.getElementById("name").value = oldProduct.name;
    document.getElementById("id").value = oldProduct.id;
    document.getElementById("price_old").value = oldProduct.price_old;
    document.getElementById("price_new").value = oldProduct.price_new;
    document.getElementById("btn-vga").innerHTML = `<button onclick="edit(${index})">Lưu</button> `
}
function edit(index) {
    let img = document.getElementById("img").value;
    let name = document.getElementById("name").value;
    let id = document.getElementById("id").value;
    let price_old = document.getElementById("price_old").value;
    let price_new = document.getElementById("price_new").value; 
    let newProduct = new Productvga(img, name,id, price_old,price_new);
    storevga.edit(index, newProduct);
    alert("Sửa thành công");
    getAll();
    document.getElementById("img").value = "";
    document.getElementById("name").value = "";
    document.getElementById("id").value = "";
    document.getElementById("price_old").value = "";
    document.getElementById("price_new").value = "";
     document.getElementById("btn-vga").innerHTML = `<button onclick="add()">Thêm mới</button> `
}
getAll()
