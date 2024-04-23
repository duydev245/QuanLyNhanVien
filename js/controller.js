// layThongTinTuForm
function layThongTinTuForm() {
    var taiKhoan = document.getElementById('tknv').value;
    var hoTen = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var matKhau = document.getElementById('password').value;
    var ngayLam = document.getElementById('datepicker').value;
    var luongCoBan = document.getElementById('luongCB').value;
    var chucVu = document.getElementById('chucvu').value;
    var gioLam = document.getElementById('gioLam').value;

    var nv = new Nhanvien(taiKhoan, hoTen, email, matKhau, ngayLam, luongCoBan, chucVu, gioLam);
    return nv;
}

// render arr to table
function renderDSNV(dsnv) {
    var contentHTML = '';
    dsnv.forEach(function (nv) {
        var trString = `<tr>
                            <td>${nv.taiKhoan}</td>
                            <td>${nv.hoTen}</td>
                            <td>${nv.email}</td>    
                            <td>${nv.ngayLam}</td>
                            <td>${nv.chucVu}</td>
                            <td>${nv.tongLuong().toLocaleString()} VND</td>
                            <td>${nv.loaiNV()}</td>
                            <td>
                            <button
                            onclick="xoaNV(${nv.taiKhoan})"
                            class='btn btn-danger'>Xoá</button>
                            <button
                            onclick="suaNV(${nv.taiKhoan})"
                            class='btn btn-dark'
                            data-toggle="modal"
                            data-target="#myModal">Sửa</button>
                            </td>
                        </tr>`;
        contentHTML += trString;
    })
    document.getElementById('tableDanhSach').innerHTML = contentHTML;
}
