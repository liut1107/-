$(document).ready(function(){
	$('#name').blur(function(){
		var par=$(this).parent();		
		par.find('.error').remove();
		if($(this).val()==''){
			$('#name').after('<span class="error">お名前を入力してください。</span>');
		}
	});
	$('#kana').blur(function(){
		var par=$(this).parent();		
		par.find('.error').remove();
		if($(this).val()==''){
			$('#kana').after('<span class="error">お名前(フリガナ)を入力してください。</span>');
		}
	});
	$('#email').blur(function(){
		var patt = new RegExp(/^[\w\.\-]+\@[\w\.\-]+\.[a-zA-Z]{2,6}$/);
		var par=$(this).parent();
		par.find('.error').remove();
		if($(this).val()==''){
			par.append('<span class="error">メールアドレスを入力してください。</span>');
		}else if(!patt.test($(this).val())){
			par.append('<span class="error">メールアドレスの形式が正しくありません。</span>');
		}
	});
	
	$("#edit").click(function(){
		$("#action").val('edit');
	});
	$("#submit").click(function(){
		$("#action").val('submit');
	});
});