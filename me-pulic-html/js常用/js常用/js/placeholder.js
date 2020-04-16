$.fn.setupPlaceholder = function() {
    return this.each(function(){
        var input = $(this),
            title = input.attr("title"),
            edited = false; // 編集したかどうかのフラグ

        input.bind("focus", function(e) {
            if (!edited && input.val() == title) {
                input.val("");
            }
            // input の class に on を設定する
            input.removeClass("off").addClass("on");
            edited = true;
        }).bind("blur", function(e) {
            if (input.val() == "" || (!edited && input.val() == title)) {
                // input の class に off を設定する
                input.removeClass("on").addClass("off");
                input.val(title);
                edited = false;
            }
        }); 

        // 自動で入れた値は送信しないようにする
        input.parents("form").submit(function(){
            if (!edited && input.val() == title) {
                input.val("");
            }
        }); 

        input.trigger("blur");
    });
};