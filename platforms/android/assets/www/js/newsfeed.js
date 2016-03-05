/**
 * Created by adore on 3/5/2016.
 */
$("#btnworkList").on("click", function(e) {
    $('#newsList').html('');
    var data= {
        type:"Work"};

    Getnewslistfromserver(data);

    });
$("#btntrainList").on("click", function(e) {
    $('#newsList').html('');
    var data= {
        type:"Work"};

    Getnewslistfromserver(data);

});

function Getnewslistfromserver(data)
{
    $.ajax({
        type: "GET",
        url: 'http://172.16.101.57/KhulaRojgar/getNewsFeed.php',
        data: data,

        success: function(data){


            if (data != null) {

                var result = $.parseJSON(data);
                if (result.Error == null || result.Error == "")
                {


//                    showAlert("yoyo.");
                    var resultforli = '';
                    $.each(result, function(i, row) {
                        // alert(JSON.stringify(row));
                        if(row.is_deleted==0) {

                            resultforli += '<li ><a href="#" data-idd="' + row.Id+ '"><h4> ' + row.JobType + '</h4><h5>' + row.Location + '</h5></br></a></li>';
                        }
                    });
                    $("#newsList").html(resultforli);
                    $("#newsList").find("a").on('click',function () {
                        var row = $(this);
                        var idToQuery = row.data('idd');


                        $('#newsListPopup').popup();
                        $('#newsListPopup').popup("open", {});



                    });

                    $('#newsList').listview('refresh');





                } else {
                    showAlert(result.Error);
                }
            }else {
                showAlert("Error: Network is not available.");
            }
        },
        error: function (e) {

            showAlert("Error: Network is not available.");
        }
    });



}
