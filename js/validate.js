function kiemTraRong(value, idErr) {
    if (value.length == 0) {
        document.getElementById(idErr).innerText =
            "Nội dung này không được điểm trống.";
        document.getElementById(idErr).style.display = 'inline-block';
        return false;
    }
    document.getElementById(idErr).innerText = "";
    document.getElementById(idErr).style.display = 'none';
    return true;
}

function kiemTraSoKiTu(value, idErr, min, max) {
    if (min <= value.length && value.length <= max) {
        document.getElementById(idErr).innerText = "";
        document.getElementById(idErr).style.display = 'none';
        return true;
    }
    document.getElementById(idErr).innerText = `Nội dung phải từ ${min} kí tự đến ${max} kí tự.`;
    document.getElementById(idErr).style.display = 'inline-block';
    return false;
}

function kiemTraHoTen(value, idErr) {
    const regex = /^[a-zA-Z\s]+$/;
    var isCharacter = regex.test(value);
    if(isCharacter) {
        document.getElementById(idErr).innerText = "";
        document.getElementById(idErr).style.display = 'none';
        return true;
    }
    document.getElementById(idErr).innerText = `Tên nhân viên phải là chữ.`;
    document.getElementById(idErr).style.display = 'inline-block';
    return false;
}

function kiemTraEmail(value, idErr) {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var isEmail = regex.test(value);
    if (isEmail) {
        document.getElementById(idErr).innerText = "";
        document.getElementById(idErr).style.display = 'none';
        return true;
    }
    document.getElementById(idErr).innerText = `Vui lòng nhập đúng định dạng mail.`;
    document.getElementById(idErr).style.display = 'inline-block';
    return false;
}

function kiemTraMatKhau(value, idErr) {
    const regexSo = /\d/;
    const regexInHoa = /[A-Z]/;
    const regexDacBiet = /[^a-zA-Z0-9]/;

    var isMatKhau = regexSo.test(value) && regexInHoa.test(value) && regexDacBiet.test(value); // Chú ý thêm ".test()" ở regexDacBiet
    if (isMatKhau) {
        document.getElementById(idErr).innerText = "";
        document.getElementById(idErr).style.display = 'none';
        return true;
    }
    document.getElementById(idErr).innerText = `Mật khẩu không hợp lệ! (Chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt).`;
    document.getElementById(idErr).style.display = 'inline-block';
    return false;
}

function kiemTraNgayLam(value, idErr) {
    const regexNgay = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;

    var isNgay = regexNgay.test(value);
    if (isNgay) {
        document.getElementById(idErr).innerText = "";
        document.getElementById(idErr).style.display = 'none';
        return true;
    }
    document.getElementById(idErr).innerText = `Ngày không hợp lệ! (Định dạng đúng: mm/dd/yyyy).`;
    document.getElementById(idErr).style.display = 'inline-block';
    return false;
}

function kiemTraLuongCoBan(value, idErr) {
    const regexLuong = /^([1-9]\d{6}|1\d{7}|20000000)$/;

    var isLuong = regexLuong.test(value);
    if (isLuong) {
        document.getElementById(idErr).innerText = "";
        document.getElementById(idErr).style.display = 'none';
        return true;
    }
    document.getElementById(idErr).innerText = `Mức lương cơ bản không hợp lệ! (Phải trong khoảng từ 1 000 000 đến 20 000 000).`;
    document.getElementById(idErr).style.display = 'inline-block';
    return false;
}

function kiemTraSoGioLam(value, idErr) {
    const regexSoGio = /^(8\d|9\d|1\d{2}|200)$/;

    var isSoGio = regexSoGio.test(value);
    if (isSoGio) {
        document.getElementById(idErr).innerText = "";
        document.getElementById(idErr).style.display = 'none';
        return true;
    }
    document.getElementById(idErr).innerText = `Số giờ làm không hợp lệ! (Phải trong khoảng từ 80 đến 200).`;
    document.getElementById(idErr).style.display = 'inline-block';
    return false;
}

/**
 * Validation
+ Tài khoản tối đa 4 - 6 ký số, không để trống
+ Tên nhân viên phải là chữ, không để trống
+ Email phải đúng định dạng, không để trống
+ mật Khẩu từ 6-10 ký tự (chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt), không
để trống
+ Ngày làm không để trống, định dạng mm/dd/yyyy
+ Lương cơ bản 1 000 000 - 20 000 000, không để trống
+ Chức vụ phải chọn chức vụ hợp lệ (Giám đốc, Trưởng Phòng, Nhân Viên)
+ Số giờ làm trong tháng 80 - 200 giờ, không để trống
 */

