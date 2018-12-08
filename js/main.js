$(document).ready(function(){
  $.ajax({
        async:false,
        url: "http://127.0.0.1:5000/CL/sentences",
        type: "get",
        contentType: "application/json;charset=utf-8",
        error: function (xhr, status, errorThrown) {
            console.log("Error" + errorThrown);
            console.log("Status" + status);
            console.log(xhr)
        },
        success: function (d) {
            $("#initial").html(d.toString);
        }
    })
});
