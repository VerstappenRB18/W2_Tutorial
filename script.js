window.onload = function() {
    document.getElementById("city").onchange = function() { changeDistricts() };
}

function changeDistricts() {
    var citySelect = document.getElementById("city");
    var districtSelect = document.getElementById("district");

    var districtsHCM = ["Quận 1", "Quận 2", "Quận 3", "Quận 4", "Quận 5", "Quận 6", "Quận 7", "Quận 8", "Quận 9", "Quận 10", "Quận 11", "Quận 12", "Quận Bình Tân", "Quận Bình Thạnh", "Quận Gò Vấp", "Quận Phú Nhuận", "Quận Tân Bình", "Quận Tân Phú", "Quận Thủ Đức", "Huyện Bình Chánh", "Huyện Cần Giờ", "Huyện Củ Chi", "Huyện Hóc Môn", "Huyện Nhà Bè"];
    var districtsHN = ["Ba Đình", "Bắc Từ Liêm", "Cầu Giấy", "Đống Đa", "Hà Đông", "Hai Bà Trưng", "Hoàn Kiếm", "Hoàng Mai", "Long Biên", "Nam Từ Liêm", "Tây Hồ", "Thanh Xuân"];
    var districtsDN = ["Hải Châu", "Cẩm Lệ", "Liên Chiểu", "Ngũ Hành Sơn", "Sơn Trà", "Thanh Khê", "Huyện Hòa Vang", "Huyện Hoàng Sa"];

    districtSelect.innerHTML = "";

    var defaultOption = document.createElement("option");
    defaultOption.text = "Select a district";
    defaultOption.value = "";
    districtSelect.add(defaultOption);

    var districts;
    if (citySelect.value == "HCMC") {
        districts = districtsHCM;
    } else if (citySelect.value == "HN") {
        districts = districtsHN;
    } else if (citySelect.value == "DN") {
        districts = districtsDN;
    }

    if (districts) {
        for (var i = 0; i < districts.length; i++) {
            var option = document.createElement("option");
            option.value = districts[i];
            option.text = districts[i];
            districtSelect.add(option);
        }
    }
}