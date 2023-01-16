function form() {
    var name = document.getElementById("name").value;
    var mail = document.getElementById("mail").value;
    var title = document.getElementById("title").value;
    var detail = document.getElementById("detail").value;
    confirm("Họ và tên: " + name + 
        "\nE-mail: " + mail + 
        "\nTiêu đề: " + title +  
        "\nNội dung góp ý: " + "\n" + detail 
    );

}