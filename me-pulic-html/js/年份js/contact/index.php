<?php
include_once ('contact/functions.php');
define("FMAIL_FORM", 0);
define("FMAIL_PRIVE", 1);
define("FMAIL_THANK", 2);
$action=@$_POST['action'];
$page=FMAIL_FORM;
$error_msg=array();
$error_flag=false;
if($action==""){
	$page=FMAIL_FORM;
}elseif($action=="action"){
	$parm=@$_POST['parm'];
			
	if(@$parm['name']==""){
		$error_flag=true;
	}
			
	if(@$parm['kana']==""){
		$error_flag=true;
	}

	if(@$parm['email']==""){
		$error_flag=true;
	}elseif (!is_email(@$parm['email'])){
		$error_flag=true;
	}

	if($error_flag){
		$page=FMAIL_FORM;
	}else {
		$page=FMAIL_PRIVE;
	}
}elseif($action == "edit"){
	$parm=@$_POST['parm'];
	$parm['email_confirm'] = $parm['email'];
	$page=FMAIL_FORM;
}else{
	error_reporting(0);
	require_once 'contact/config.php';
	mb_language($language);
	mb_internal_encoding($unicode);

	if(!@$_POST) {
		header("location:index.php");
		exit();
	}

	$page=FMAIL_THANK;

	$parm=$_POST['parm'];

	$message=array();
	$message['お名前'] ='
	'.$parm['name'].'
	';
	$message['お名前(フリガナ)'] = '
	'.$parm['kana'].'
	';
	$message['メールアドレス'] = '
	'.$parm['email'].'
	';
	$message['お電話番号'] = '
	'.$parm['tel'].'
	';
	$message['ご住所'] = '
	'.$parm['zip'].'
	'.$parm['address'].'
	';
	$message['お問い合わせ、ご質問などお気軽にご記入下さい。'] = '
	'.$parm['content'].'
	';
	
	//print_r($message);
	$auto_mail =SBC_DBC(@$parm['email'],1);

	include("contact/sendmail.php");
}
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="ja" lang="ja">
<!-- InstanceBegin template="/Templates/template.dwt" codeOutsideHTMLIsLocked="false" -->
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="content-script-type" content="text/javascript" />
<meta http-equiv="content-style-type" content="text/css" />
<!-- InstanceBeginEditable name="doctitle" -->
<meta name="description" content="" />
<meta name="keywords" content="" />
<title></title>
<!-- InstanceEndEditable -->
<link href="../css/common/layout.css" rel="stylesheet" type="text/css" />
<link href="../css/common/general.css" rel="stylesheet" type="text/css" />
<!-- InstanceBeginEditable name="css" -->
<link href="../css/contact.css" rel="stylesheet" type="text/css" />
<!-- InstanceEndEditable -->
<script type="text/javascript" src="../js/jquery.min.js"></script>
<script type="text/javascript" src="../js/jquery.page-scroller.js"></script>
<script type="text/javascript" src="../js/smartRollover.js"></script>
<!-- InstanceBeginEditable name="js" -->
<script type="text/javascript" src="https://ajaxzip3.googlecode.com/svn/trunk/ajaxzip3/ajaxzip3-https.js" charset="UTF-8"></script>
<script type="text/javascript" src="../js/contact.js" language="javascript"></script>
<!-- InstanceEndEditable -->
<script type="text/javascript">
$('.pageTop').hide();
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			$('.pageTop').fadeIn();
		} else {
			$('.pageTop').fadeOut();
		}
	});
</script>
</head>
<body>
<a name="top" id="top"></a>
<div id="container">
	<div id="header">
		<div class="topBox">
			<div class="ttlBox clearfix">
				<h1>美容・健康サポートサプリメント販売を販売。AKヘルスケアは美容と健康をサポート.</h1>
				<ul class="topNavi clearfix">
					<li><a href="../guide.html#a2"><img src="../img/common/h_imgtext01_out.gif" alt="会社概要" width="64" height="13" /></a></li>
					<li><a href="../guide.html#a1"><img src="../img/common/h_imgtext02_out.gif" alt="特定商取引法に基づく表記" width="165" height="13" /></a></li>
					<li><a href="../privacy.html"><img src="../img/common/h_imgtext03_out.gif" alt="プライバシーポリシー" width="140" height="13" /></a></li>
				</ul>
			</div>
		</div>
		<div class="hBox clearfix">
			<div class="logo"><a href="../index.html"><img src="../img/common/logo.gif" alt="AK ヘルスケア 美容・健康サプリメントのオンラインショップ" width="255" height="56" /></a></div>
			<ul class="link clearfix">
				<li><img src="../img/common/tel_img.gif" alt="商品に関するお問い合わせ・お電話でのご注文は 072-234-1558" width="252" height="56" /></li>
				<li><a href="../contact/"><img src="../img/common/h_link01_out.jpg" alt="メールなら24時間受付OK お問い合わせ" width="147" height="56" /></a></li>
				<li><a href="#"><img src="../img/common/h_link02_out.jpg" alt="カートを見る" width="95" height="56" /></a></li>
			</ul>
		</div>
		<div id="gNavi">
			<ul class="clearfix">
				<li class="navi01"><a href="../index.html"><img src="../img/common/g_navi01_out.gif" alt="Home" width="130" height="47" /></a></li>
				<li class="navi02"><a href="../item.html"><img src="../img/common/g_navi02_out.gif" alt="商品一覧 Item" width="200" height="47" /></a></li>
				<li class="navi03"><a href="../beginner.html"><img src="../img/common/g_navi03_out.gif" alt="はじめての方へ Beginner" width="200" height="47" /></a></li>
				<li class="navi04"><a href="../guide.html"><img src="../img/common/g_navi04_out.gif" alt="ショッピングガイド Guide" width="200" height="47" /></a></li>
				<li class="navi05"><a href="../contact/"><img src="../img/common/g_navi05_out.gif" alt="お問い合わせ Contact" width="250" height="47" /></a></li>
			</ul>
		</div>
	</div>
	<!-- InstanceBeginEditable name="mainimg" -->
	<div class="mainImg">
		<h2><img src="../img/contact/h2_img.jpg" alt="Contact お問い合わせ" width="960" height="190" /></h2>
	</div>
	<!-- InstanceEndEditable -->
	<div class="wrap"> <!-- InstanceBeginEditable name="pagepath" -->
		<ul id="pagePath">
			<li><a href="../">トップページ</a>&gt;</li>
			<li class="current">お問い合わせ</li>
		</ul>
		<!-- InstanceEndEditable -->
		<div id="main" class="clearfix">
			<div id="conts"><!-- InstanceBeginEditable name="conts" -->
				<h3 class="h3Head" id="contact"><img src="../img/contact/h3_img01.png" alt="Form  - お問い合わせフォーム-" width="690" height="49" /></h3>
				<?php
			switch ($page) {
				case FMAIL_FORM:
		?>
				<form method="post" action="#contact" class="mailForm">
					<input type="hidden" name="action" value="action" />
					<p>商品のご購入や商品に対するお問い合わせなどは、以下のフォームより承ります。<br />
						項目にご記入の上、「確認」ボタンをクリックしてください。追って担当者よりご連絡差し上げます。<br />
						※必須項目は必ずご記入ください。</p>
					<div class="step"><img src="../img/contact/imgtext01.gif" alt="お問い合わせ入力 お問い合わせ確認 お問い合わせ送信" width="690" height="71" /></div>
					<table cellpadding="0" cellspacing="0" summary="Form  - お問い合わせフォーム-" class="comTable">
						<col width="28%" />
						<tbody>
							<tr>
								<th><img src="../img/contact/imgtext02.gif" alt="必須" width="47" height="24" />お名前</th>
								<td><input type="text" id="name" value="<?php echo @$parm['name'] ?>" name="parm[name]" />
									<?php if(@$action!=''&&@$parm['name']==''){ ?>
									<span class="error ename">お名前を入力してください。</span>
									<?php } ?></td>
							</tr>
							<tr>
								<th><img src="../img/contact/imgtext02.gif" alt="必須" width="47" height="24" />お名前(フリガナ)</th>
								<td><input type="text" id="kana" value="<?php echo @$parm['kana'] ?>" name="parm[kana]" />
									<?php if(@$action!=''&&@$parm['kana']==''){ ?>
									<span class="error ekana">お名前(フリガナ)を入力してください。</span>
									<?php } ?></td>
							</tr>
							<tr>
								<th><img src="../img/contact/imgtext02.gif" alt="必須" width="47" height="24" />メールアドレス</th>
								<td><input type="text" id="email" value="<?php echo @$parm['email'] ?>" name="parm[email]" />
									<?php if(@$action!=''&&@$parm['email']==''){ ?>
									<span class="error">メールアドレスを入力してください。</span>
									<?php }elseif(@$action!=''&&!is_email(@$parm['email'])){ ?>
									<span class="error">メールアドレスは正しくありません。</span>
									<?php } ?></td>
							</tr>
							<tr>
								<th>お電話番号</th>
								<td><input type="text" value="<?php echo @$parm['tel'] ?>" name="parm[tel]" class="wid01" />
									<span class="notes">例:)　06-6313-5600</span></td>
							</tr>
							<tr>
								<th>ご住所</th>
								<td><ul class="address">
										<li class="zip">〒
											<input type="text" value="<?php echo @$parm['zip']; ?>" name="parm[zip]" class="wid02" onkeyup="AjaxZip3.zip2addr('parm[zip]','','parm[address]','parm[address]');" />
											<input type="button"  value="検索" class="btn" onclick="AjaxZip3.zip2addr('parm[zip]','','parm[address]','parm[address]');" />
											<span class="notes">例) 000-000</span></li>
										<li>
											<input type="text" value="<?php echo @$parm['address'] ?>" name="parm[address]" />
										</li>
									</ul></td>
							</tr>
							<tr>
								<th class="last">お問い合わせ、ご質問などお気軽にご記入下さい。</th>
								<td><textarea name="parm[content]" ><?php echo @$parm['content']; ?></textarea></td>
							</tr>
						</tbody>
					</table>
					<ul class="submit">
						<li>
							<input type="submit" value="確認" name="__submit__" />
						</li>
					</ul>
				</form>
				<?php
		 break;
			case FMAIL_PRIVE:
		?>
				<form method="post" action="#contact" class="mailForm">
					<input type="hidden" name="action" id="action" value="edit" />
					<input type="hidden" name="parm[name]" value="<?php echo @$parm['name']; ?>" />
					<input type="hidden" name="parm[kana]" value="<?php echo @$parm['kana']; ?>" />
					<input type="hidden" name="parm[email]" value="<?php echo @$parm['email']; ?>" />
					<input type="hidden" name="parm[tel]" value="<?php echo @$parm['tel']; ?>" />
					<input type="hidden" name="parm[zip]" value="<?php echo @$parm['zip']; ?>" />
					<input type="hidden" name="parm[address]" value="<?php echo @$parm['address']; ?>" />
					<input type="hidden" name="parm[content]" value="<?php echo @$parm['content']; ?>" />
					<div class="step"><img src="../img/contact/imgtext04.gif" alt="お問い合わせ入力 お問い合わせ確認 お問い合わせ送信" width="690" height="71" /></div>
					<table cellpadding="0" cellspacing="0" summary="Form  - お問い合わせフォーム-" class="comTable">
						<col width="28%" />
						<tbody>
							<tr>
								<th><img src="../img/contact/imgtext02.gif" alt="必須" width="47" height="24" />お名前</th>
								<td><?php echo @$parm['name'] ?></td>
							</tr>
							<tr>
								<th><img src="../img/contact/imgtext02.gif" alt="必須" width="47" height="24" />お名前(フリガナ)</th>
								<td><?php echo @$parm['kana'] ?></td>
							</tr>
							<tr>
								<th><img src="../img/contact/imgtext02.gif" alt="必須" width="47" height="24" />メールアドレス</th>
								<td><?php echo @$parm['email'] ?></td>
							</tr>
							<tr>
								<th>お電話番号</th>
								<td><?php echo @$parm['tel'] ?></td>
							</tr>
							<tr>
								<th>ご住所</th>
								<td><ul class="address">
										<li class="zip zip01"><?php echo @$parm['zip'] ?></li>
										<li><?php echo @$parm['address'] ?></li>
									</ul></td>
							</tr>
							<tr>
								<th class="last">お問い合わせ、ご質問などお気軽にご記入下さい。</th>
								<td><?php echo nl2br(@$parm['content']) ?></td>
							</tr>
						</tbody>
					</table>
					<ul class="submit">
						<li>
							<input type="submit" id="submit"  value="送信" name="__send__" />
						</li>
						<li>
							<input type="submit"  id="edit" value="修正" name="__retry_input__" />
						</li>
					</ul>
				</form>
				<?php
		break;
			case FMAIL_THANK:
		?>
				<div class="step"><img src="../img/contact/imgtext05.gif" alt="お問い合わせ入力 お問い合わせ確認 お問い合わせ送信" width="690" height="71" /></div>
				<div class="txtBox">
					<p>お問い合わせいただき誠にありがとうございました。<br />
						正常に送信されました。</p>
					<p>追って担当者よりご連絡をさせていただきます。</p>
					<p>万が一、確認メールが来ない場合は、メールの不達の可能性がございますので、<br />
						大変お手数ではございますが、072-234-1558までご連絡をお願いいたします。</p>
					<p class="pLink"><a href="../">トップページへ戻る</a></p>
				</div>
				<?php
                	break;
		}
		?>
				<!-- InstanceEndEditable --> </div>
			<div id="sideBar">
				<div class="sBox">
					<div class="list">
						<p class="title"><img src="../img/common/s_title.png" alt="Item List 商品一覧" width="240" height="31" /></p>
						<ul class="sNavi">
							<li><a href="#">うるおい肌ゼリー (ジュネス)</a></li>
							<li><a href="#">マルチビタミン&amp; ミネラル</a></li>
							<li><a href="#">グルコサミンMX</a></li>
							<li class="none"><a href="#">コラーゲンコンポーズ</a></li>
						</ul>
					</div>
				</div>
				<ul class="sLink clearfix">
					<li class="link"><a href="../beginner.html"><img src="../img/common/s_link01_out.jpg" alt="はじめての方へBeginner" width="240" height="80" /></a></li>
					<li><a href="../guide.html"><img src="../img/common/s_link02_out.gif" alt="ショッピングガイド" width="240" height="49" /></a></li>
					<li><a href="../guide.html#a2"><img src="../img/common/s_link03_out.gif" alt="会社概要" width="240" height="49" /></a></li>
					<li><a href="#"><img src="../img/common/s_link04_out.gif" alt="カートを見る" width="240" height="49" /></a></li>
					<li class="contact"><a href="../contact/"><img src="../img/common/s_link05_out.jpg" alt="商品に関する お問い合わせ・ご注文 072-234-1558 受付時間 10:00～16:00(月～金曜日) メールなら24時間受け付け可能 お問い合わせはこちら" width="240" height="227" /></a></li>
					<li class="mb0"><a href="#"><img src="../img/common/s_link06_out.jpg" alt="Health &amp;  Beauty ブログ" width="240" height="88" /></a></li>
				</ul>
			</div>
		</div>
	</div>
	<div class="pageTop"><a href="#top"><img src="../img/common/page_top_out.png" alt="PageTop" width="72" height="72" /></a></div>
	<div id="footer">
		<ul class="fNavi">
			<li><a href="../index.html">トップ</a></li>
			<li><a href="../item.html">商品一覧</a></li>
			<li><a href="../beginner.html">はじめての方へ</a></li>
			<li><a href="../guide.html">ショッピングガイド</a></li>
			<li><a href="../guide.html#a2">会社概要</a></li>
			<li><a href="../guide.html#a1">特定商取引法に基づく表記</a></li>
			<li><a href="privacy.html">プライバシーポリシ―</a></li>
			<li><a href="../contact/">お問い合わせ</a></li>
		</ul>
		<div class="copyright">
			<p>Copyright &copy; <script type="text/javascript">
today=new Date();
y=today.getFullYear();
document.write("",y,"");
</script> AKヘルスケア. All rights reserved.</p>
		</div>
	</div>
</div>
</body>
<!-- InstanceEnd -->
</html>