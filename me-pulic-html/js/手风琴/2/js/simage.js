function SImage(obj,url,index)
{
    var img = new Image();
    var appname = navigator.userAgent.toLowerCase();
    if (appname.indexOf("ipad") != -1){
		obj.html('<div style="width:'+obj.find('img').width()+'px;height:'+obj.find('img').height()+'px;margin-right:6px;"><img src="../js/ajax-loading.gif" style="margin:45% 47%;" /></div>');
		img.src = url;
        img.onload = function () {
            if (img.complete == true)
            {
                obj.html('<img src="'+img.src+'" style="margin-right:6px;" alt="写真" width="616" height="515"/>');
            }
        }
    }
}