/*
Bài 1:
!input: 
diem 1 2 3, điểm vùng miền, điểm ưu tiên , điểm chuẩn
!Xử lý:

lấy điểm ưu tiên và vùng miền của ngườu dùng
 cộng điểm ưu tiên và vùng miền 
 lấy điểm 123 cộng với điểm ưu tiên và vùng miền so sánh với điểm chuẩn ng dùng nhập
!ouput: 
cho biết kết quả hs đó đậu hay rớt.
*/

// function Bài 1
function ketQuaThi() {
  //lấy dữ liệu người dùng
  var diemChuan = document.getElementById("diemChuan").value * 1;

  var diemKhuVuc = document.getElementById("chonKhuVuc").value * 1;
  var diemDoiTuongUuTien = document.getElementById("chonDoiTuong").value * 1;

  var diemMot = document.getElementById("diemMot").value * 1;
  var diemHai = document.getElementById("diemHai").value * 1;
  var diemBa = document.getElementById("diemBa").value * 1;

  //   Xử lý
  var diemUuTien = diemKhuVuc + diemDoiTuongUuTien;
  var diemTongKet = diemBa + diemMot + diemHai + diemUuTien;

  //  Hiển thị kết quả

  var ketQuaThi = "";

  if (diemMot == 0 || diemHai == 0 || diemBa == 0) {
    ketQuaThi = "Bạn đã rớt. Do có một môn điểm 0";
  } else if (diemTongKet >= diemChuan) {
    ketQuaThi = "Bạn đã đậu. " + "Tổng điểm: " + diemTongKet + " điểm";
  } else {
    ketQuaThi = "Bạn đã rớt. " + "Tổng điểm: " + diemTongKet;
  }

  document.querySelector(".ket_qua_thi").innerHTML = ketQuaThi;
}

//! Bài 2:
//! input:
// tên người dùng
// người dùng nhập kw điện

// xử lý:
//  +khách hàng tieu thụ >=50kw giá 500đ
//  +khách hàng tiêu thụ 51-100kw giá 650đ
//  +khách hàng tiêu thụ 101-200kw giá 850đ
//  +khách hàng tiêu thụ 200- 350 giá 1100đ
//  +khách hàng tiêu thụ 350kw trở lên 1300đ

// output: xuất số tiền khách hàng phải trả

//! giải

function tinhTienDien() {
  var tenChuHo = document.getElementById("tenChuHo").value;
  var soKw = document.getElementById("kw").value * 1;

  if (soKw <= 50) {
    tinhTongTienDien = soKw * 500;
  } else if (soKw > 50 && soKw <= 100) {
    tinhTongTienDien = 25000 + (soKw - 50) * 650;
  } else if (soKw > 100 && soKw <= 200) {
    tinhTongTienDien = 57500 + (soKw - 100) * 850;
  } else if (soKw > 200 && soKw <= 350) {
    tinhTongTienDien = 142500 + (soKw - 200) * 1100;
  } else if (soKw > 350) {
    tinhTongTienDien = 307500 + (soKw - 350) * 1300;
  }

  var vnd = tinhTongTienDien.toLocaleString("vn-VN", {
    style: "currency",
    currency: "VND",
  });

  document.querySelector(".kqBaiHai").innerHTML =
    "Tổng tiền điện của bạn " + tenChuHo + " là: " + vnd;
}

/*
  Bài 3:
  !input: 
  họ tên - tổng thu nhập - số ng phụ thuộc
  !Xử lý:

  
  !ouput: 
  xuất thuế cá nhân 
  */
//!  giải
const tu0Den60tr = 0.05;
const tu60Den120tr = 0.1;
const tu120Den210tr = 0.15;
const tu210Den384tr = 0.2;
const tu384Den624tr = 0.25;
const tu624Den960tr = 0.3;
const tu960tr = 0.35;

function tinhThue() {
  var hoTen = document.getElementById("hoTen").value;
  var tongThuNhap = document.getElementById("tongThuNhapNam").value * 1;
  var soNguoiPhuThuoc = document.getElementById("soNguoiPhuThuoc").value * 1;

  if (tongThuNhap <= 60e6) {
    thueCaNhan = (tongThuNhap - 4e6 - soNguoiPhuThuoc * 1600000) * tu0Den60tr;
    // console.log(thueCaNhan);
  } else if (tongThuNhap > 60e6 && tongThuNhap <= 120e6) {
    thueCaNhan = (tongThuNhap - 4e6 - soNguoiPhuThuoc * 1600000) * tu60Den120tr;
    // console.log(thueCaNhan);
  } else if (tongThuNhap > 120e6 && tongThuNhap <= 210e6) {
    thueCaNhan =
      (tongThuNhap - 4e6 - soNguoiPhuThuoc * 1600000) * tu120Den210tr;
    // console.log(thueCaNhan);
  } else if (tongThuNhap > 210e6 && tongThuNhap <= 384e6) {
    thueCaNhan =
      (tongThuNhap - 4e6 - soNguoiPhuThuoc * 1600000) * tu210Den384tr;
    // console.log(thueCaNhan);
  } else if (tongThuNhap > 384e6 && tongThuNhap <= 624e6) {
    thueCaNhan =
      (tongThuNhap - 4e6 - soNguoiPhuThuoc * 1600000) * tu384Den624tr;
    // console.log(thueCaNhan);
  } else if (tongThuNhap > 624e6 && tongThuNhap <= 960e6) {
    thueCaNhan =
      (tongThuNhap - 4e6 - soNguoiPhuThuoc * 1600000) * tu624Den960tr;
    // console.log(thueCaNhan);
  } else if (tongThuNhap > 960e6) {
    thueCaNhan = (tongThuNhap - 4e6 - soNguoiPhuThuoc * 1600000) * tu960tr;
    console.log(thueCaNhan);
  }

  // var thueVnd = thueCaNhan.toLocaleString("vn-VN", {
  //   style: "currency",
  //   currency: "VND",
  // });

  document.querySelector(".kqBaiBa").innerHTML =
    "Họ Và Tên: " +
    hoTen +
    "<br>" +
    " Tiền thuế thu nhập cá nhân là: " +
    thueCaNhan.toLocaleString("vn-VN", {
      style: "currency",
      currency: "VND",
    });
}

//! bài 4

// input
// +loại khách hàng
// +Số kết nối (nhà dân thì để trống)
// +Số kênh cao cấp

// output
// công thức chung
// phí xử lý hóa đơn+ phí dv cơ bản +giá thuê kênh cao cấp * số kênh cao cấp
// tuy nhiên có sự khác nhau ở phí dv cơ bản ở doanh nghiệp
// doannh nghiệp số đầu kết nối trên 10
// 10 kết nối đầu =75$ các kết nối sau đó 5$/kết nối
// =====>phí dv cơ bản =75$
// vd doanh nhghieepjcos 15 kết nối
// ====> phí dv cơ bản  =75$ + (15-10)*5$

//! giải
// const phiDNTren10 = 75;

function nutKetNoiDoanhNghiep() {
  var loaiKhachHang = document.getElementById("loaiKhachHang").value;
  if (loaiKhachHang == "nhaDan") {
    document.getElementById("soKetNoi").style.display = "none";
  } else {
    document.getElementById("soKetNoi").style.display = "block";
  }
}

function hienThiTienCap(maKhachHang, tienCap) {
  return (
    "Mã Khách Hàng Là: " +
    maKhachHang +
    " ; " +
    "Tiền Cáp Là: " +
    tienCap.toLocaleString("en-US", { style: "currency", currency: "USD" })
  );
}

function tinhTienCap() {
  var inRaTienCap = "";

  var loaiKhachHang = document.getElementById("loaiKhachHang").value;
  var maKhachHang = document.getElementById("maKhachHang").value * 1;
  var soKenhCaoCap = document.getElementById("soKenhCaoCap").value * 1;
  var soKetNoi = document.getElementById("soKetNoi").value * 1;

  if (loaiKhachHang == "nhaDan" && loaiKhachHang != "doanhNghiep") {
    tienCapNhaDan = 4.5 + 20.5 + soKenhCaoCap * 7.5;
    inRaTienCap = hienThiTienCap(maKhachHang, tienCapNhaDan);
  } else if (loaiKhachHang == "doanhNghiep" && soKetNoi > 0 && soKetNoi <= 10) {
    phiDNCoBan = 75;
    tienCapDoanhNghiep = 15 + phiDNCoBan + soKenhCaoCap * 50;
    inRaTienCap = hienThiTienCap(maKhachHang, tienCapDoanhNghiep);
  } else {
    phiDNCoBan = 75 + (soKetNoi - 10) * 5;
    tienCapDoanhNghiep = 15 + phiDNCoBan + soKenhCaoCap * 50;
    inRaTienCap = hienThiTienCap(maKhachHang, tienCapDoanhNghiep);
  }

  //   var doLa = inRaTienCap.toLocaleString("en-US",{
  //     style: "currency",
  //     currency: "USD"
  // });
  document.querySelector(".kqBaiBon").innerHTML = inRaTienCap;
}
