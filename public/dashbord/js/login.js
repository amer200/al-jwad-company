const changePasswordVisabality = (id) => {
    const input = document.getElementById(id);
    if (input.type == 'password') {
        return input.type = 'text';
    } else {
        return input.type = 'password';
    }
}
/* login page */
const submitLoginForm = () => {
    const myForm = document.getElementById('loginForm');
    const password1 = document.getElementById('password1').value;
    const email = document.getElementById('email').value;
    if (password1 == null || password1 == "", email == null || email == "") {
        alert("كل الحقول مطلوبة")
        return false
    }
    if (!email.match(validEmailRegex)) {
        alert('يجب كتابة بريد الكتروني صحيح')
        return false
    }
    myForm.submit();
}
/* end login page */
