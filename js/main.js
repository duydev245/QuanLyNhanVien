var dsnv = [];

var dataJson = localStorage.getItem("dsnv");
console.log('dataJson: ', dataJson);
if (dataJson !== null) {
    var dataRaw = JSON.parse(dataJson);
    for (var i = 0; i < dataRaw.length; i++) {
        var nv = new Nhanvien(
            dataRaw[i].taiKhoan,
            dataRaw[i].hoTen,
            dataRaw[i].email,
            dataRaw[i].matKhau,
            dataRaw[i].ngayLam,
            dataRaw[i].luongCoBan,
            dataRaw[i].chucVu,
            dataRaw[i].gioLam
        );
        dsnv.push(nv);
    }
    renderDSNV(dsnv);
}


function resetForm() {
    document.getElementById('formNv').reset();
    document.getElementById('tknv').readOnly = false;
    document.getElementById('btnThemNV').disabled = false;
}

function themNV() {
    var nv = layThongTinTuForm();

    // Valid taiKhoan
    var isValid = kiemTraRong(nv.taiKhoan, 'tbTKNV') && kiemTraSoKiTu(nv.taiKhoan, 'tbTKNV', 4, 6);
    // Valid hoTen 
    isValid = kiemTraRong(nv.hoTen, 'tbTen') && kiemTraHoTen(nv.hoTen, 'tbTen') & isValid;
    // Valid email
    isValid = kiemTraRong(nv.email, 'tbEmail') && kiemTraEmail(nv.email, 'tbEmail') & isValid;
    // Valid matKhau
    isValid = kiemTraRong(nv.matKhau, 'tbMatKhau') && kiemTraSoKiTu(nv.matKhau, 'tbMatKhau', 6, 10) && kiemTraMatKhau(nv.matKhau, 'tbMatKhau') & isValid;
    // Valid ngayLam
    isValid = kiemTraRong(nv.ngayLam, 'tbNgay') && kiemTraNgayLam(nv.ngayLam, 'tbNgay') & isValid;
    // Valid luongCoBan
    isValid = kiemTraRong(nv.luongCoBan, 'tbLuongCB') && kiemTraLuongCoBan(nv.luongCoBan, 'tbLuongCB') & isValid;
    // Valid chucVu
    isValid = kiemTraRong(nv.chucVu, 'tbChucVu') & isValid;
    // Valid gioLam
    isValid = kiemTraRong(nv.gioLam, 'tbGiolam') && kiemTraSoGioLam(nv.gioLam, 'tbGiolam') & isValid;

    if (isValid) {
        dsnv.push(nv);

        var dataJson = JSON.stringify(dsnv);
        localStorage.setItem("dsnv", dataJson);
        renderDSNV(dsnv);
        resetForm();

        // Close the modal
        document.getElementById('btnDong').click();
    }
}

function xoaNV(taiKhoan) {
    var index = dsnv.findIndex((item) => {
        return item.taiKhoan == taiKhoan;
    })

    console.log('taiKhoan: ', taiKhoan);
    console.log('index: ', index);

    if (index === -1) {
        console.error("Item not found in the array");
        return;
    }

    Swal.fire({
        title: "Bạn chắc chắn muốn xóa chứ?",
        text: "Một khi đã xóa thì không thể nào hồi phục lại được!",
        icon: "warning",
        showCancelButton: true,
        cancelButtonColor: "#3085d6",
        confirmButtonColor: "#d33",
        confirmButtonText: "Delete",
    }).then((result) => {
        if (result.isConfirmed) {
            dsnv.splice(index, 1);
            var dataJson = JSON.stringify(dsnv);
            localStorage.setItem("dsnv", dataJson);
            renderDSNV(dsnv);
            Swal.fire("Đã Xóa!", "Nhân viên đã được xóa", "success");
        }
    });
}

function suaNV(taiKhoan) {
    var index = dsnv.findIndex((item) => {
        return item.taiKhoan == taiKhoan;
    })
    console.log('index: ', index);

    var updatedNV = dsnv[index];
    console.log('updatedNV: ', updatedNV);

    document.getElementById('tknv').value = updatedNV.taiKhoan;
    document.getElementById('name').value = updatedNV.hoTen;
    document.getElementById('email').value = updatedNV.email;
    document.getElementById('password').value = updatedNV.matKhau;
    document.getElementById('datepicker').value = updatedNV.ngayLam;
    document.getElementById('luongCB').value = updatedNV.luongCoBan;
    document.getElementById('chucvu').value = updatedNV.chucVu;
    document.getElementById('gioLam').value = updatedNV.gioLam;

    document.getElementById('tknv').readOnly = true;
    document.getElementById('btnThemNV').disabled = true;
}

function capNhatNV() {
    var nv = layThongTinTuForm();

    // Valid taiKhoan
    var isValid = kiemTraRong(nv.taiKhoan, 'tbTKNV') && kiemTraSoKiTu(nv.taiKhoan, 'tbTKNV', 4, 6);
    // Valid hoTen 
    isValid = kiemTraRong(nv.hoTen, 'tbTen') && kiemTraHoTen(nv.hoTen, 'tbTen') & isValid;
    // Valid email
    isValid = kiemTraRong(nv.email, 'tbEmail') && kiemTraEmail(nv.email, 'tbEmail') & isValid;
    // Valid matKhau
    isValid = kiemTraRong(nv.matKhau, 'tbMatKhau') && kiemTraSoKiTu(nv.matKhau, 'tbMatKhau', 6, 10) && kiemTraMatKhau(nv.matKhau, 'tbMatKhau') & isValid;
    // Valid ngayLam
    isValid = kiemTraRong(nv.ngayLam, 'tbNgay') && kiemTraNgayLam(nv.ngayLam, 'tbNgay') & isValid;
    // Valid luongCoBan
    isValid = kiemTraRong(nv.luongCoBan, 'tbLuongCB') && kiemTraLuongCoBan(nv.luongCoBan, 'tbLuongCB') & isValid;
    // Valid chucVu
    isValid = kiemTraRong(nv.chucVu, 'tbChucVu') & isValid;
    // Valid gioLam
    isValid = kiemTraRong(nv.gioLam, 'tbGiolam') && kiemTraSoGioLam(nv.gioLam, 'tbGiolam') & isValid;


    if (isValid) {
        var index = dsnv.findIndex((item) => {
            return item.taiKhoan == nv.taiKhoan;
        })
    
        dsnv[index] = nv;
    
        var dataJson = JSON.stringify(dsnv);
        localStorage.setItem("dsnv", dataJson);
        renderDSNV(dsnv);
        resetForm();
    
        // Close the modal
        document.getElementById('btnDong').click();
    }
}
