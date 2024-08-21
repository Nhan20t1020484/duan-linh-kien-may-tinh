function addgiohang1(index) {
    let oldProduct = store.getProductByIndex(index);
    document.getElementById("img").value = oldProduct.img;
    document.getElementById("name").value = oldProduct.name;
    document.getElementById("id").value = oldProduct.id;
    document.getElementById("price_old").value = oldProduct.price_old;
    document.getElementById("price_new").value = oldProduct.price_new;
    document.getElementById("giohang").innerHTML = `<button onclick="addgiohang(${index})"></button> `
}
function addgiohang(index) {
    let img = document.getElementById("img").value;
    let name = document.getElementById("name").value;
    let id = document.getElementById("id").value;
    let price_old = document.getElementById("price_old").value;
    let price_new = document.getElementById("price_new").value; 
    let newProduct = new Product(img, name,id, price_old,price_new);
    store.add(index, newProduct);
    alert("them thanh cong");
    getAll();
    document.getElementById("img").value = "";
    document.getElementById("name").value = "";
    document.getElementById("id").value = "";
    document.getElementById("price_old").value = "";
    document.getElementById("price_new").value = "";
}
function getAll1() {
    addgiohang1()
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
        </div>
            
      `
    }

    document.getElementById("sanpham").innerHTML = html;
}