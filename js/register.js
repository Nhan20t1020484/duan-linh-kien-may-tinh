// Function to validate registration form
function submitLogin() {
    // Getting values from the input fields
    let email = document.getElementById('username').value;
    let fullName = document.getElementById('user_name').value;
    let phone = document.getElementById('phone').value;
    let address = document.getElementById('address').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confine-password').value;

    // Basic email format validation
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Check if all fields are filled
    if (!email || !fullName || !phone || !address || !password || !confirmPassword) {
        alert("Vui lòng nhập đầy đủ thông tin.");
        return;
    }

    // Check email format
    if (!emailPattern.test(email)) {
        alert("Email không hợp lệ.");
        return;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
        alert("Mật khẩu và xác nhận mật khẩu không khớp.");
        return;
    }

    // Check password length
    if (password.length < 6) {
        alert("Mật khẩu phải chứa ít nhất 6 ký tự.");
        return;
    }

    // If all checks pass, proceed with the registration and redirect to login.html
    alert("Đăng ký thành công!");

    // Redirect to login.html after successful registration
    window.location.href = 'login.html';
}
