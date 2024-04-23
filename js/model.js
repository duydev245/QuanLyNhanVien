// Object Nhanvien
function Nhanvien(taiKhoan, hoTen, email, matKhau, ngayLam, luongCoBan, chucVu, gioLam) {
    this.taiKhoan = taiKhoan;
    this.hoTen = hoTen;
    this.email = email;
    this.matKhau = matKhau;
    this.ngayLam = ngayLam;
    this.luongCoBan = luongCoBan;
    this.chucVu = chucVu;
    this.gioLam = gioLam;
    this.tongLuong = function () {
        if (this.chucVu == 'Sếp') {
            return this.luongCoBan * 3;
        } else if (this.chucVu == 'Trưởng phòng') {
            return this.luongCoBan * 2;
        } else if (this.chucVu == 'Nhân viên') {
            return this.luongCoBan * 1;
        } else
            return 'Error';
    };
    this.loaiNV = function () {
        if (this.gioLam * 1 >= 192) {
            return 'Xuất sắc';
        } else if (this.gioLam * 1 >= 176) {
            return 'Giỏi';
        } else if (this.gioLam * 1 >= 160) {
            return 'Khá';
        } else
            return 'Trung bình';
    };
}
