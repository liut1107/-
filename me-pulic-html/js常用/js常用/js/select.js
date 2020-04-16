function selectVal(elm){
	$(elm).next().toggle();
}

function changeVal(elm){
	$(elm).parent().prev('.selectVal').text($(elm).text());
	$(elm).parent().prev().prev('.selectValHidden').val($(elm).text());
	$(elm).parent().hide();
}

function hideSelect(){
	$('.select ul').hide();
}

function clickHandler(e){
 var elem, evt = e ? e:event;
 if (evt.srcElement)  elem = evt.srcElement;
 else if (evt.target) elem = evt.target;
 
 var elmclass = $(elem).attr('class');
 if(elmclass != 'selectVal'){
	 $('.selectVal').next().hide();
 }
}

$(function(){
	$('.selectValHidden').each(function(){
		$(this).next().text($(this).val());
	});
	document.onclick=clickHandler;
});