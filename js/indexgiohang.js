let storegiohang = new Storegiohang("Thành Nhân");
// let p1 = new Product(1, "Bánh", 2000, "https://cdn.tgdd.vn/Files/2022/04/04/1423817/bat-mi-cach-lam-banh-mi-baguette-phap-gion-xop-dac-ruot-202204041137450765.jpg");
// let p2 = new Product(2, "Kẹo", 3000, "https://cdn.tgdd.vn/Files/2022/04/04/1423817/bat-mi-cach-lam-banh-mi-baguette-phap-gion-xop-dac-ruot-202204041137450765.jpg");
// store.add(p1);
// store.add(p2);
// let p1 = new Productgiohang1("https://anphat.com.vn/media/product/44267_cpu_intel_core_i7_13700f_anphat88.jpg", "CPU Intel Core i7 13700F", "Mã Sản Phẩm : CPUI0153", "11.999.000 VND" , "10.399.000 VND")
// let p2 = new Product("https://anphat.com.vn/media/product/37206_cpu_intel_core_i5_11400f_anphat89.jpg", "CPU Intel Core i5 11400F", "Mã Sản Phẩm : CPUIT0127", "3.999.000 VND" , "3.399.000 VND")
// let p3 = new Product("https://anphat.com.vn/media/product/47426_cpu_amd_athlon_3000g.jpg", "CPU AMD Athlon 3000G", "Mã Sản Phẩm : CPUA0085", "1.999.000 VND","1.199.000 VND")
// storegiohang.add1(p1);
// store.add(p2);
// store.add(p3);

// function add1() {
//     let img = document.getElementById("img").value;
//     let name = document.getElementById("name").value;
//     let id = document.getElementById("id").value;
//     let price_old = document.getElementById("price_old").value;
//     let price_new = document.getElementById("price_new").value;
//     let newProduct = new Productgiohang1(img, name, id, price_old, price_new);
//     storegiohang.add1(newProduct);
//     getAll1();
//     document.getElementById("img").value = "";
//     document.getElementById("name").value = "";
//     document.getElementById("id").value = "";
//     document.getElementById("price_old").value = "";
//     document.getElementById("price_new").value = "";
// }

function add1() {
    alert('nhan')
    let img = document.getElementById("img").value;
    let name = document.getElementById("name").value;
    let id = document.getElementById("id").value;
    let price_old = document.getElementById("price_old").value;
    let price_new = document.getElementById("price_new").value;
    let newProduct = new Productgiohang1(img, name, id, price_old, price_new);
    storegiohang.add1(newProduct);
    getAll1();
    document.getElementById("img").value = "";
    document.getElementById("name").value = "";
    document.getElementById("id").value = "";
    document.getElementById("price_old").value = "";
    document.getElementById("price_new").value = "";
    // window.location = "giohang.html";
}


function getAll1() {
    let list = storegiohang.getList();
    let html = ``;
    for (let i = 0; i < list.length; i++) {
        html = html + `
        <div class="body-giohang-2">
                <img style="width: 10%; margin-left: 5%; margin-top: 1%;"  src="${list[i].img}" alt="">
                <i class="fas fa-trash-alt" style="position: absolute; margin-top: 12%; margin-left: -5.5%;"></i>
                <b class="sanphamgiohang" style="position: absolute; margin-top: 2%;">${list[i].name}<p></p>Mã sản phẩm:${list[i].id}</b>
                <b class="giasanpham" style="position:absolute; margin-left: 67%; margin-top: 10%;">
                    ${list[i].price_old}
                    <p> ${list[i].price_new}</p>
                    ${list[i].price_new}
                     
                </b>
                <div class="soluongsanpham">
                <button class="quantity-btn" style="position: absolute; margin-left: 82%; margin-top: 9%;" onclick="changeQuantity(this, -1)">-</button>
                <input type="number" style="position: absolute; margin-left: 86%; margin-top: 9%; width: 6%; height: 5%;" class="quantity-input" value="1" min="1" readonly>
                <button class="quantity-btn" style="position: absolute; margin-left: 92.5%;margin-top: 9%;" onclick="changeQuantity(this, 1)">+</button>
                <script>
                    function changeQuantity(element, delta) {
                        var quantityInput = element.parentElement.querySelector('.quantity-input');
                        var quantity = parseInt(quantityInput.value) + delta;
            
                        if (quantity >= 1) {
                            quantityInput.value = quantity;
            
                            var row = element.closest('tr');
                            var price = parseFloat(row.querySelector('td:nth-child(2)').innerText.replace('$', ''));
                            var total = price * quantity;
                            row.querySelector('.total-price').innerText = '$' + total.toFixed(2);
                        }
                    }
                </script>
      `
    }

    document.getElementById("sanpham").innerHTML = html;
}
function remove1(index) {
    let isConfirm = confirm("Bạn chắc chứ?")
    if (isConfirm) {
        store.remove(index);
        alert("Xóa thành công");
        getAll1();
    }
}



getAll1()
