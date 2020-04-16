$.fn.setupPlaceholder = function() {
    return this.each(function(){
        var input = $(this),
            title = input.attr("title"),
            edited = false; // �ҏW�������ǂ����̃t���O

        input.bind("focus", function(e) {
            if (!edited && input.val() == title) {
                input.val("");
            }
            // input �� class �� on ��ݒ肷��
            input.removeClass("off").addClass("on");
            edited = true;
        }).bind("blur", function(e) {
            if (input.val() == "" || (!edited && input.val() == title)) {
                // input �� class �� off ��ݒ肷��
                input.removeClass("on").addClass("off");
                input.val(title);
                edited = false;
            }
        }); 

        // �����œ��ꂽ�l�͑��M���Ȃ��悤�ɂ���
        input.parents("form").submit(function(){
            if (!edited && input.val() == title) {
                input.val("");
            }
        }); 

        input.trigger("blur");
    });
};