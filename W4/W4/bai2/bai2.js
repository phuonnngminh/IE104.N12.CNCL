
function form() {
    var name = document.getElementById("name").value;
    var card = document.getElementById("card").value;
    var phone = document.getElementById("phone").value;
    var mail = document.getElementById("mail").value;
    var type = document.getElementById("type").value;
    var code = document.getElementById("code").value;
    var detail = document.getElementById("detail").value;
    confirm("Họ và tên: " + name + 
        "\nMã thẻ: " + card + 
        "\nSố điện thoại: " + phone + 
        "\nEmail: " + mail + 
        "\nLoại Khách Hàng: " + type + 
        "\nMã HĐ: " + code + 
        "\nNội dung góp ý" + "\n" + detail 
    );

}