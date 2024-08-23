let storeram = new Storeram("Thành Nhân");

function add() {
    let img = document.getElementById("img").value;
    let name = document.getElementById("name").value;
    let id = document.getElementById("id").value;
    let price_old = document.getElementById("price_old").value;
    let price_new = document.getElementById("price_new").value;
    let newProduct = new Productram(img, name, id, price_old, price_new);
    storeram.add(newProduct);
    getAll();
    document.getElementById("img").value = "";
    document.getElementById("name").value = "";
    document.getElementById("id").value = "";
    document.getElementById("price_old").value = "";
    document.getElementById("price_new").value = "";
}

function getAll() {
    let list = storeram.getList();
    let html = ``;
    for (let i = 0; i < list.length; i++) {
        html = html + `
         <tr>
            <td><img src="${list[i].img}" alt="" style="width: 100px; height: 100px;"></td>
            <td>${list[i].name}</td>
            <td>${list[i].id}</td>
            <td>${list[i].price_old}</td>
            <td>${list[i].price_new}</td>
            <td><button onclick="remove(${i})">Xóa</button></td>
             <td><button onclick="showFormEdit(${i})">Sửa</button></td>
              <td><button onclick="showDetail(${i})">Chi tiết</button></td>
        </tr>
      `
    }
    document.getElementById("list-product").innerHTML = html;
}

function remove(index) {
    let isConfirm = confirm("Bạn chắc chứ?")
    if (isConfirm) {
        storeram.remove(index);
        getAll();
    }
}

function showFormEdit(index) {
    let oldProduct = storeram.getProductByIndex(index);
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
    storeram.edit(index, newProduct);
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