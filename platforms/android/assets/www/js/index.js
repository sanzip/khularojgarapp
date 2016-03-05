/**
 * Created by adore on 3/5/2016.
 */
$(document).delegate("#homepage", "pageshow", function() {


});
var app = {

    initialize: function() {
        this.bindEvents();
    },

    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        document.addEventListener("backbutton", this.onBackKeyDown, false);
    },
    onDeviceReady: function() {
        db = window.openDatabase("Database", "1.0", "HomeAssist", 5242880);
        $.mobile.allowCrossDomainPages = true;
        $.support.cors = true;
        $.mobile.buttonMarkup.hoverDelay = 50;
        $.mobile.defaultDialogTransition = "none";
        $.mobile.defaultPageTransition = "none";
























        function showLoading() {
            $('.ajax-panel').html('<div class="overlay"></div><div class="loading">&nbsp;</div>');
        }

        function hideLoading() {
            $('.ajax-panel').html('');
        }


























        appPersonalInfoPanel.initialize();


        VerifyUser();

    },
    onBackKeyDown:function() {
        var hashId = window.location.hash;
        if (hashId == null || hashId == "" || hashId == "#homescreen" || hashId == "#login") {
            // Define the Dialog and its properties.
//            if(confirm('Do you want to exit application?')){
//                navigator.app.exitApp();
//            }
            navigator.notification.confirm(
                'Do you want to exit application?',  // message
                function(result){
                    if(result == 1){
                        navigator.app.exitApp();
                    }
                }
            );
        }else{
            navigator.app.backHistory();
        }
    }
};