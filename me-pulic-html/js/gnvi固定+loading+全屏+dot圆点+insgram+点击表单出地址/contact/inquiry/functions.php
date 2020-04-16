<?php
function is_email($str){
	if (isset($str)) {
		if (preg_match("/^[\w\.\-]+\@[\w\.\-]+\.[a-zA-Z]{2,6}$/", $str)) {
			return true;
		}
	}
	return false;
}

//数字かどうか判断する
function is_number($str){
	if(preg_match("/^[0-9]*$/",$str))
	{
		return true;
	}else {
		return false;
	}
}


function is_tel($str){
	$str=str_replace("-","",$str);
	if(preg_match("/^[0-9]*$/",$str))
	{
		return true;
	}else {
		return false;
	}
}

// ふりがなかどうか判断する
function is_hiragana($str){
	if (preg_match("/^[ぁ-ん]+$/u", $str)) {
			return true;
	}
	else{
		return false;
	}
}

//フリガナかどうか判断する
function is_kana($str){
	
	if (isset($str)) {
		if (preg_match("/^(¥x82[¥x9f-¥xf1]|¥x81[¥x4a¥x54¥x55]|".
              "¥xa4[¥xa1-¥xf3]|¥xa1[¥xb5¥xb6¥xab]|".
              "¥xe3¥x81[¥x81-¥xbf]|¥xe3¥x82[¥x80-¥x9e])+$/",$str)) {
			return true;
		}
	}
	return false;
}
//カタカナかどうか判断する 全角[Ａ-Ｚａ-ｚ０-９！-／：-＠［-｀｛-｝～￥－ァ-ヾー々]+ 全角半角/^([ァ-ヶ]|[ｦ-ﾟ])+$/
function is_kkana($str){
	$str=str_replace(" ","",$str);
	$str=str_replace("　","",$str);
	if($str==""){
		return true;
	}
	if (isset($str)) {
		if (preg_match("/^(\xe3\x82[\xa1-\xbf]|\xe3\x83[\x80-\xbe]|".
                  "\xa5[\xa1-\xf6]|\xa1[\xb3\xb4\xbc]|".
                  "\x83[\x40-\x96]|\x81[\x52\x53\x5b])+$/",$str)) {
			return true;
		}
	}
	return false;
}
// special 
function convertspecial($data){
	if(is_array($data)){
		foreach($data as $k=>$d){
			$data[$k]=stripslashes(htmlspecialchars($d));
		}
	}
	return $data;
}

function nconvertspecial($data){
	if(is_array($data)){
		foreach($data as $k=>$d){
			$data[$k]=stripslashes(htmlspecialchars_decode($d));
		}
	}
	return $data;
}

//-----------------------------------------add----------------------------------------

// 都道府県コードから都道府県名を返す関数
// ※引数が無い場合は全ての都道府県名を全て返す。
//--------------------------------------------------------------------------
function area($area=''){
	$pref_array=array(
	'北海道','青森県','岩手県','宮城県','秋田県','山形県','福島県',
	'茨城県','栃木県','群馬県','埼玉県','千葉県','東京都','神奈川県',
	'新潟県','富山県','石川県','福井県','山梨県','長野県','岐阜県',
	'静岡県','愛知県','三重県','滋賀県','京都府','大阪府','兵庫県',
	'奈良県','和歌山県','鳥取県','島根県','岡山県','広島県','山口県',
	'徳島県','香川県','愛媛県','高知県','福岡県','佐賀県','長崎県',
	'熊本県','大分県','宮崎県','鹿児島県','沖縄県'
	);
	if($area==''){
		return $pref_array;
	}else{
		return $pref_array[$area];
	}
}

function area_form($area=''){
	$pa=area();
	$cnt = 0;
	foreach($pa as $p){
		$form.="<option value=\"".$p."\"";
		if($area==$p){
			$form.=" selected";
		}
		$form.=">".$p."</option>\n";
	}
	return $form;
}

//全角を半角に変換する
function SBC_DBC($str,$args2) {
	$DBC = Array(
	'０' , '１' , '２' , '３' , '４' ,
	'５' , '６' , '７' , '８' , '９' ,
	'Ａ' , 'Ｂ' , 'Ｃ' , 'Ｄ' , 'Ｅ' ,
	'Ｆ' , 'Ｇ' , 'Ｈ' , 'Ｉ' , 'Ｊ' ,
	'Ｋ' , 'Ｌ' , 'Ｍ' , 'Ｎ' , 'Ｏ' ,
	'Ｐ' , 'Ｑ' , 'Ｒ' , 'Ｓ' , 'Ｔ' ,
	'Ｕ' , 'Ｖ' , 'Ｗ' , 'Ｘ' , 'Ｙ' ,
	'Ｚ' , 'ａ' , 'ｂ' , 'ｃ' , 'ｄ' ,
	'ｅ' , 'ｆ' , 'ｇ' , 'ｈ' , 'ｉ' ,
	'ｊ' , 'ｋ' , 'ｌ' , 'ｍ' , 'ｎ' ,
	'ｏ' , 'ｐ' , 'ｑ' , 'ｒ' , 'ｓ' ,
	'ｔ' , 'ｕ' , 'ｖ' , 'ｗ' , 'ｘ' ,
	'ｙ' , 'ｚ' , '－' , '　'  , '：' ,
	'．' , '，' , '／' , '％' , '＃' ,
	'！' , '＠' , '＆' , '（' , '）' ,
	'＜' , '＞' , '＂' , '＇' , '？' ,
	'［' , '］' , '｛' , '｝' , '＼' ,
	'｜' , '＋' , '＝' , '＿' , '＾' ,
	'￥' , '￣' , '｀'
	);
	$SBC = Array(
	'0', '1', '2', '3', '4',
	'5', '6', '7', '8', '9',
	'A', 'B', 'C', 'D', 'E',
	'F', 'G', 'H', 'I', 'J',
	'K', 'L', 'M', 'N', 'O',
	'P', 'Q', 'R', 'S', 'T',
	'U', 'V', 'W', 'X', 'Y',
	'Z', 'a', 'b', 'c', 'd',
	'e', 'f', 'g', 'h', 'i',
	'j', 'k', 'l', 'm', 'n',
	'o', 'p', 'q', 'r', 's',
	't', 'u', 'v', 'w', 'x',
	'y', 'z', '-', ' ', ':',
	'.', ',', '/', '%', '#',
	'!', '@', '&', '(', ')',
	'<', '>', '"', '\'','?',
	'[', ']', '{', '}', '\\',
	'|', '+', '=', '_', '^',
	'$', '~', '`'
	);
	if($args2==0){
		return str_replace($SBC,$DBC,$str);
	}
	if($args2==1){
		return str_replace($DBC,$SBC,$str);
	}else{
		return false;
	}
}

/**
 * Enter description here...
 *
 * @param unknown_type $checkbox
 * @param unknown_type $name
 * @param unknown_type $checked
 * @param unknown_type $split
 */

function checkboxs($checkbox,$name,$checked="",$split="",$class=""){
	$content="";
	$i=0;
	foreach ($checkbox as $key=>$value){
		if(is_array($name)){
			$content.=" <input name='".@$name[$i]."' type='checkbox' class='$class' value='$value'  ";
		}else {
			$content.=" <input name='".$name."' type='checkbox'  class='$class' value='$value'  ";
		}
		$i++;
		$flag=false;
		foreach ($checked as $k=>$v){
			if($value==$v){
				$flag=true;
			}
		}
		if($flag){
			$content.=" checked='checked' /><label>$value</label>";
		}else {
			$content.="  /><label>$value</label>";
		}
		$content=$content.$split;
	}
	echo $content;
}

/**
 * Enter description here...
 *
 * @param unknown_type $checkbox
 * @param unknown_type $name
 * @param unknown_type $checked
 * @param unknown_type $class
 */
function ul_checkboxs($checkbox,$name,$checked="",$class=""){
	$content="<ul class='$class'>";
	$i=0;
	foreach ($checkbox as $key=>$value){
		if(is_array($name)){
			$content.="<li> <input name='".@$name[$i]."' type='checkbox' value='$value'  ";
		}else {
			$content.="<li> <input name='".$name."' type='checkbox' value='$value'  ";
		}
		$i++;
		$flag=false;
		foreach ($checked as $k=>$v){
			if($value==$v){
				$flag=true;
			}
		}
		if($flag){
			$content.=" checked='checked' /><label>$value</label></li>";
		}else {
			$content.="  />$value</li>";
		}
	}
	$content.="</ul>";
	echo $content;
}

/**
 * Enter description here...
 *
 * @param unknown_type $radios radio値
 * @param unknown_type $name 名前
 * @param unknown_type $checked チェックしている値
 * @param unknown_type $split
 */
function radios($radios,$name,$checked="",$split="",$class=""){
	$content="";
	foreach ($radios as $key=>$value){
		$content.=" <input name='$name' type='radio' class='$class' value='$value'  ";
		if($value==$checked){
			$content.=" checked='checked' /><label>$value</label>";
		}else {
			$content.="  /><label>$value</label>";
		}
		$content=$content.$split;
	}
	echo $content;
}

/**
 * Enter description here...
 *
 * @param unknown_type $radios
 * @param unknown_type $name
 * @param unknown_type $checked
 * @param unknown_type $class
 */
function ul_radios($radios,$name,$checked="",$class="",$input_class=""){
	$content="<ul class='$class'>";
	foreach ($radios as $key=>$value){
		$content.="<li><input name='$name' type='radio' class='$input_class' value='$value'  ";
		if($value==$checked){
			$content.=" checked='checked' /><label>$value</label></li>";
		}else {
			$content.="  /><label>$value</label></li>";
		}
		$content=$content;
	}
	$content.="</ul>";
	echo $content;
}

/**
 * Enter description here...
 *
 * @param unknown_type $post
 * @return unknown
 */
function getAddress($post){
	$post=SBC_DBC($post,1);
	if(strlen($post)==7 && is_number($post)){
		$url="http://yubin.senmon.net/search/?q=".$post;
		$html= file_get_contents($url);
		$html =str_replace("\n","",$html);
		$html =str_replace("\r\n","",$html);
		$math=array();

		preg_match('/^[\s\S]*<a class="z"([\s\S]*)<span class="jiscode">[\s\S]*$/',$html,$math);
		$content=@$math[1];

		$maths=explode('a>',$content);
		$data=@$maths[1];
		$data=strip_tags($data);
		return $data;
	}else {
		return "";
	}
}

function _tmp($node)
{
	if ( is_array($node) ) {
		return array_map('_tmp', $node);
	} else {
		return stripslashes($node);
	}
}

/**
 * Detect text encoding for Japanese coding system.
 *
 * @param string $str
 * @return string Encoding name.
 */
function detect_encoding_ja( $str )
{
	$enc = @mb_detect_encoding( $str, 'ASCII,JIS,eucJP-win,SJIS-win,UTF-8' );

	switch ( $enc ) {
		case FALSE   :
		case 'ASCII' :
		case 'JIS'   :
		case 'UTF-8' : break;
		case 'eucJP-win' :
			if ( @mb_detect_encoding( $str, 'SJIS-win,UTF-8,eucJP-win' ) === 'eucJP-win' ) {
				break;
			}
			$_hint = "\xbf\xfd" . $str;

			mb_regex_encoding( 'EUC-JP' );
			$_hint = mb_ereg_replace( "\xad(?:\xe2|\xf5|\xf6|\xf7|\xfa|\xfb|\xfc|\xf0|\xf1|\xf2)", '', $_hint );

			$_tmp  = mb_convert_encoding( $_hint, 'UTF-8', 'eucJP-win' );
			$_tmp2 = mb_convert_encoding( $_tmp,  'eucJP-win', 'UTF-8' );
			if ( $_tmp2 === $_hint ) {

				if (
				! preg_match( '/^(?:'
				. '[\x8E\xE0-\xE9][\x80-\xFC]|\xEA[\x80-\xA4]|'
				. '\x8F[\xB0-\xEF][\xE0-\xEF][\x40-\x7F]|'
				. '\xF8[\x9F-\xFC]|\xF9[\x40-\x49\x50-\x52\x55-\x57\x5B-\x5E\x72-\x7E\x80-\xB0\xB1-\xFC]|'
				. '[\x00-\x7E]'
				. ')+$/', $str ) &&

				! preg_match( '/^(?:'
				. '\xEF\xBC[\xA1-\xBA]|[\x00-\x7E]|'
				. '[\xE4-\xE9][\x8E-\x8F\xA1-\xBF][\x8F\xA0-\xEF]|'
				. '[\x00-\x7E]'
				. ')+$/', $str )
				) {
					break;
				}

				if ( mb_ereg( '^(?:'
				. '\xE0\xDD\xE0\xEA|\xE0\xE8\xE0\xE1|\xE0\xF5\xE0\xEF|\xE1\xF2\xE1\xFB|'
				. '\xE2\xFB\xE2\xF5|\xE6\xCE\xE2\xF1|\xE7\xAF\xE6\xF9|\xE8\xE7\xE8\xEA|'
				. '\xE9\xAC\xE9\xAF|\xE9\xF1\xE9\xD9|[\x00-\x7E]'
				. ')+$', $str )
				) {
					break;
				}
			}

		default :
			$enc = @mb_detect_encoding( $str, 'UTF-8,SJIS-win' );
			if ( $enc === 'SJIS-win' ) {
				break;
			}

			$enc   = 'SJIS-win';

			$_hint = "\xe9\x9b\x80" . $str;

			mb_regex_encoding( 'UTF-8' );
			$_hint = mb_ereg_replace( "\xe3\x80\x9c", "\xef\xbd\x9e", $_hint );
			$_hint = mb_ereg_replace( "\xe2\x88\x92", "\xe3\x83\xbc", $_hint );
			$_hint = mb_ereg_replace( "\xe2\x80\x96", "\xe2\x88\xa5", $_hint );

			$_tmp  = mb_convert_encoding( $_hint, 'SJIS-win', 'UTF-8' );
			$_tmp2 = mb_convert_encoding( $_tmp,  'UTF-8', 'SJIS-win' );

			if ( $_tmp2 === $_hint ) {
				$enc = 'UTF-8';
			}

			if ( preg_match( '/^(?:[\xE4-\xE9][\x80-\xBF][\x80-\x9F][\x00-\x7F])+/', $str ) ) {
				$enc = 'SJIS-win';
			}
	}
	return $enc;
}

function h($value) {
	echo htmlspecialchars($value);
}
?>