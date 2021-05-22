// Bài 1
var luongMotNgay = 100000;
var luongThucNhan;
var ketQuaBai1 = document.getElementById('ketQuaBai1');
btnBai1.onclick = function () {
    var soNgayLam = document.getElementById('soNgayLam').value;
    luongThucNhan = luongMotNgay * soNgayLam;
    console.log(luongThucNhan);
    ketQuaBai1.innerHTML = 'Lương được nhận là: ' + luongThucNhan + ' VNĐ';
}

// Bài 2
var giaTriTrungBinh;
btnBai2.onclick = function () {
    var soThuNhat = document.getElementById('soThuNhat').valueAsNumber;
    var soThuHai = document.getElementById('soThuHai').valueAsNumber;
    var soThuBa = document.getElementById('soThuBa').valueAsNumber;
    var soThuTu = document.getElementById('soThuTu').valueAsNumber;
    var soThuNam = document.getElementById('soThuNam').valueAsNumber;

    giaTriTrungBinh = ((soThuNhat) + (soThuHai) + (soThuBa) + (soThuTu) + (soThuNam)) / 5;
    var ketQuaBai2 = document.getElementById('ketQuaBai2');
    ketQuaBai2.innerHTML = 'Giá trị trung bình của 5 số là: ' + giaTriTrungBinh;
}

//Bài 3
var giaTriUSD = 23500;
var soTienSauQuyDoi;

btnBai3.onclick = function () {
    var soTienCanQuyDoi = document.getElementById('soTienCanQuyDoi').value;
    soTienSauQuyDoi = soTienCanQuyDoi * giaTriUSD;
    var ketQuaBai3 = document.getElementById('ketQuaBai3');
    ketQuaBai3.innerHTML = soTienSauQuyDoi + ' VNĐ';
}

//Bài 4
var chuVi;
var dienTich;
var ketQuaDienTich = document.getElementById('ketQuaDienTich');
var ketQuaChuVi = document.getElementById('ketQuaChuVi');
btnBai4.onclick = function () {
    var chieuDai = document.getElementById('chieuDai').valueAsNumber;
    var chieuRong = document.getElementById('chieuRong').valueAsNumber;
    chuVi = (chieuDai + chieuRong) * 2;
    dienTich = chieuDai * chieuRong;

    ketQuaDienTich.innerHTML = 'Diện tích hình chữ nhật là: ' + dienTich + ' dvđd';
    ketQuaChuVi.innerHTML = 'Chu vi hình chữ nhật là: ' + chuVi + ' dvđd';
}

//Bài 5
var ketQua;
var ketQuaBai5 = document.getElementById('ketQuaBai5');
btnBai5.onclick = function () {
    var haiChuSo = document.getElementById('haiChuSo').value;
    var soHangDV = haiChuSo % 10;
    var soHangChuc = haiChuSo / 10;
    var ketQua = soHangChuc + soHangDV;
    ketQuaBai5.innerHTML = 'Tổng 2 ký số ' + haiChuSo + ' là: ' + parseInt(ketQua);
}