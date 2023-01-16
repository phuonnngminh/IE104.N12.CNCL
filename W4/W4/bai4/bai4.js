var thangdo = [18.5, 25, 30, 35, 40];
var danhgia = [
  "dưới chuẩn",
  "Bình thường",
  "thừa cân",
  "béo phì cấp độ 1",
  "béo phì cấp độ 2",
  "béo phì cấp độ 3",
];

function BinarySearch(bmi) {
  let left = 0;
  let right = thangdo.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (bmi < thangdo[mid]) {
      right = mid - 1;
    } else if (bmi > thangdo[mid]) {
      left = mid + 1;
    } else {
      return mid;
    }
  }
  return left;
}

function BMIExec() {
  let weight = document.getElementById("can-nang").value;
  let height = document.getElementById("chieu-cao").value;
  let bmi = weight / (height * height);
  console.log(bmi);
  let conclusion = BinarySearch(bmi);
  document.getElementById("bmi-index").innerHTML = bmi.toFixed(2);
  document.getElementById("bmi-conclusion").innerHTML =
    danhgia[conclusion].toUpperCase();

  let age = document.getElementById("age").value;

    switch(danhgia[conclusion]){
        case "béo phì cấp độ 1":
            if(age == "trung-nien"){
                document.getElementById("advice").innerHTML = "Khám định kỳ";
            }
            else {
                document.getElementById("advice").innerHTML = "";
            }
            break;
        case "béo phì cấp độ 2":
            document.getElementById("advice").innerHTML = "Tập thể dục thường xuyên";
            break;
        case "béo phì cấp độ 3":
            if(age == "gia"){
                document.getElementById("advice").innerHTML = "Hạn chế ăn mỡ động vật";
            }
            else {
                document.getElementById("advice").innerHTML = "";
            }
            break;
        default:
            document.getElementById("advice").innerHTML = "";
    }
}
