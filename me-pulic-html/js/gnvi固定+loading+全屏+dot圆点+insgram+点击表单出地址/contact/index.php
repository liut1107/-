<?php
include_once ('inquiry/functions.php');
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
		$error_msg[]="※お名前を入力してください。";
	}
	
	if(@$parm['input_main_em']==""){
		$error_flag=true;
		$error_msg[]="※E-MAILを入力してください。";
	}elseif (!is_email(@$parm['input_main_em'])){
		$error_flag=true;
		$error_msg[]="※E-MAILは正しくありません。";
	}
	
	if(@$parm['input_main_emc']==""){
		$error_flag=true;
		$error_msg[]="※E-MAIL確認を入力してください。";
	}elseif (@$parm['input_main_em']!=@$parm['input_main_emc']){
		$error_flag=true;
		$error_msg[]="※E-MAIL確認は一致ではありません。";
	}
	
	if(@$parm['period']==""){
		$error_flag=true;
		$error_msg[]="※ご用件を入力してください。";
	}
	
	if(@$parm['agree']==""){
		$error_flag=true;
		$error_msg[]="※個人情報の取り扱いに同意します。を入力してください。";
	}

	if($error_flag){
		$page=FMAIL_FORM;
	}else {
		$page=FMAIL_PRIVE;
	}
}elseif($action == "edit"){
	$parm=@$_POST['parm'];
	$parm['input_main_emc'] = $parm['input_main_em'];
	$page=FMAIL_FORM;
}else{
	error_reporting(0);
	require_once 'inquiry/config.php';
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
	
	$message['郵便番号'] ='
	'.$parm['zip'].'
	';
	
	$message['ご住所'] = '
	'.$parm['address'].'
	';
	
	$message['電話番号'] = '
	'.$parm['input_main_tp'].'
	';
	
	$message['E-MAIL'] = '
	'.$parm['input_main_em'].'
	';
	
	$message['ご用件'] = '
	'.$parm['period'].'
	';
	
	$message['内容'] = '
	'.$parm['content'].'
	';

	//print_r($message);
	$auto_mail =SBC_DBC(@$parm['input_main_em'],1);

	include("inquiry/sendmail.php");
}
?>

<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="UTF-8">
<meta name="format-detection" content="telephone=no">
<meta name="description" content="">
<meta name="keywords" content="">
<title></title>
<link rel="stylesheet" type="text/css" href="../css/common/layout.css">
<link rel="stylesheet" type="text/css" href="../css/common/general.css">
<link rel="stylesheet" type="text/css" href="../css/style.css">
<script src="../js/jquery.js"></script>
<script src="../js/jquery.page-scroller.js"></script>
<script src="../js/common.js"></script>
<script src="https://ajaxzip3.github.io/ajaxzip3.js" charset="UTF-8"></script>
<script type="text/javascript" language="javascript">
$(document).ready(function(){
	$("#edit").click(function(){
		$("#action").val('edit');
	});
	$("#submit").click(function(){
		$("#action").val('submit');
	});
});
</script>
<!--[if lt IE 9]>
<script src="../js/html5.js"></script>
<![endif]-->
</head>
<body>
<div id="container">
	<header id="gHeader"><!-- #BeginLibraryItem "/Library/header.lbi" -->
		<div class="hBox clearfix">
			<div class="ttlBox clearfix">
				<h1>豊橋・豊川・豊田の新築一戸建て<br>
					注文住宅はあなたの街の「ここすも」</h1>
				<div class="logo"><a href="./"><img src="../img/common/logo.png" alt="ここすも"></a></div>
			</div>
			<p class="tel">tel <span class="num">0533-75-6905</span><span class="time">受付時間　<span>9:00 - 18:00</span></span></p>
			<div class="menu"><img src="../img/common/menu.png" alt=""></div>
		</div>
		<!-- #EndLibraryItem --><!-- #BeginLibraryItem "/Library/gnavi.lbi" -->
		<nav id="gNavi">
			<ul class="clearfix">
				<li class="navi01"><a href="../index.html">HOME</a></li>
				<li class="navi02"><a href="../about.html" class="accordion">ここすもハウスとは</a>
					<ul class="subNavi">
						<li><a href="#">L私たちの想い</a></li>
						<li><a href="#">Lコンセプト</a></li>
						<li><a href="#">Lこだわり</a></li>
						<li><a href="#">L完成までの流れ</a></li>
						<li><a href="#">Lアフターフォロー＋保証</a></li>
					</ul>
				</li>
				<li class="navi03"><a href="#">ニュース・イベント</a></li>
				<li class="navi04"><a href="#">施工事例</a></li>
				<li class="navi05"><a href="#">お客様の声</a> </li>
				<li class="navi06"><a href="#">ブログ</a></li>
				<li class="navi07"><a href="#" class="accordion">会社案内</a>
					<ul class="subNavi">
						<li><a href="../profile.html">L会社概要</a></li>
						<li><a href="#">Lスタッフ紹介</a></li>
					</ul>
				</li>
				<li class="navi08"><a href="../contact">お問い合わせ</a></li>
			</ul>
		</nav>
		<ul class="fixLink clearfix">
			<li><a href="#"><img src="../img/common/fix_link01.png" alt="資料請求はこちら"></a></li>
			<li><a href="#"><img src="../img/common/fix_link02.png" alt="モデルハウスへ行く"></a></li>
		</ul>
		<!-- #EndLibraryItem --></header>
	<div id="contact">
		<div class="pageTitle">
			<div class="pageImg"></div>
			<div class="ttlArea">
				<h2><span class="en">CONTACT US</span>お問い合わせ</h2>
			</div>
		</div>
		<section id="main">
			<div class="content">
				<p class="pTop">ここすもハウスでは資料請求とモデルハウス見学など<br>
					家づくりに関してのお問い合わせを受け付けています。</p>
				<p>皆様のお問い合わせを心よりお待ちしております。</p>
				<div class="form" id="form">
					<h3 class="headLine01"><span class="en">FORM</span>入力フォーム</h3>
					<p>ご入力にお間違いがないかご確認いただき確認ボタンを押してください。</p>
					<?php
			switch ($page) {
				case FMAIL_FORM:
		?>
					<form method="post" action="#form" class="mailForm">
						<input type="hidden" name="action" value="action">
						<?php if($error_flag){
				print "<ul class=\"errorMsg\">\n";
				foreach ($error_msg as $key=>$val) {
					print "<li>".$val."</li>";
				}
				print "</ul>\n";
			}
			?>
						<table class="comTable">
							<tbody>
								<tr>
									<th>お名前<span class="must">必須</span></th>
									<td><input type="text" name="parm[name]" value="<?php echo @$parm['name']; ?>" placeholder="ここすも 太郎"></td>
								</tr>
								<tr>
									<th>郵便番号</th>
									<td><input type="text" name="parm[zip]" value="<?php echo @$parm['zip']; ?>" placeholder="000-0000" class="wid01">
										<input type="button" value="番号検索" onclick="AjaxZip3.zip2addr(this,'parm[zip]','parm[address]','parm[address]');" class="seachBtn"></td>
								</tr>
								<tr>
									<th>ご住所</th>
									<td><input type="text" name="parm[address]" value="<?php echo @$parm['address']; ?>" placeholder="愛知県豊田市汐見町2丁目87番地8" class="wid02"></td>
								</tr>
								<tr>
									<th>電話番号</th>
									<td><input type="tel" name="parm[input_main_tp]" value="<?php echo @$parm['input_main_tp']; ?>" placeholder="0533-75-6905"></td>
								</tr>
								<tr>
									<th>E-MAIL<span class="must">必須</span></th>
									<td><input type="email" name="parm[input_main_em]" value="<?php echo @$parm['input_main_em']; ?>" placeholder="info@kokosumohouse.com"></td>
								</tr>
								<tr>
									<th>E-MAIL確認<span class="must">必須</span></th>
									<td><input type="email" name="parm[input_main_emc]" value="<?php echo @$parm['input_main_emc']; ?>" placeholder="info@kokosumohouse.com"></td>
								</tr>
								<tr>
									<th>ご用件<span class="must">必須</span></th>
									<td><ul class="radioList">
											<li>
												<label>
													<input type="radio" name="parm[period]" value="お問い合わせ" <?php if(@$parm['period']=="お問い合わせ"){?>checked="checked"<?php } ?>>
													お問い合わせ</label>
											</li>
											<li>
												<label>
													<input type="radio" name="parm[period]" value="資料請求" <?php if(@$parm['period']=="資料請求"){?>checked="checked"<?php } ?>>
													資料請求</label>
											</li>
											<li>
												<label>
													<input type="radio" name="parm[period]" value="モデルハウス見学" <?php if(@$parm['period']=="モデルハウス見学"){?>checked="checked"<?php } ?>>
													モデルハウス見学</label>
											</li>
											<li>
												<label>
													<input type="radio" name="parm[period]" value="その他" <?php if(@$parm['period']=="その他"){?>checked="checked"<?php } ?>>
													その他</label>
											</li>
										</ul></td>
								</tr>
								<tr>
									<th>内容</th>
									<td><textarea rows="5" cols="4" name="parm[content]" placeholder="モデルハウス見学の場合はご見学の希望日時を記載ください。"><?php echo @$parm['content']; ?></textarea></td>
								</tr>
							</tbody>
						</table>
						<p class="text01">こちらのフォームで入力された内容は資料の送付、電子メール送信・電話連絡などの目的で利用いたします。 <span>弊社の<a href="#">プライバシーポリシー</a>はこちら</span></p>
						<div class="agree">
							<label>
								<input type="radio" name="parm[agree]" value="個人情報の取り扱いに同意します。" <?php if(@$parm['agree']=="個人情報の取り扱いに同意します。"){?>checked="checked"<?php } ?>>
								個人情報の取り扱いに同意します。</label>
						</div>
						<ul class="submit">
							<li>
								<input type="submit" name="__submit" value="入力内容を確認する">
							</li>
						</ul>
					</form>
					<?php
		 break;
			case FMAIL_PRIVE:
		?>
					<p class="text">入力内容をご確認ください。</p>
					<form method="post" action="#form" class="mailForm">
						<input type="hidden" name="action" id="action" value="edit">
						<input type="hidden" name="parm[name]" value="<?php echo @$parm['name']; ?>">
						<input type="hidden" name="parm[zip]" value="<?php echo @$parm['zip']; ?>">
						<input type="hidden" name="parm[address]" value="<?php echo @$parm['address']; ?>">
						<input type="hidden" name="parm[input_main_tp]" value="<?php echo @$parm['input_main_tp']; ?>">
						<input type="hidden" name="parm[input_main_em]" value="<?php echo @$parm['input_main_em']; ?>">
						<input type="hidden" name="parm[input_main_emc]" value="<?php echo @$parm['input_main_emc']; ?>">
						<input type="hidden" name="parm[period]" value="<?php echo @$parm['period']; ?>">
						<input type="hidden" name="parm[content]" value="<?php echo @$parm['content']; ?>">
						<input type="hidden" name="parm[agree]" value="<?php echo @$parm['agree']; ?>">
						<table class="comTable">
							<tbody>
								<tr>
									<th>お名前<span class="must">必須</span></th>
									<td><?php echo @$parm['name']; ?></td>
								</tr>
								<tr>
									<th>郵便番号</th>
									<td><?php echo @$parm['zip']; ?></td>
								</tr>
								<tr>
									<th>ご住所</th>
									<td><?php echo @$parm['address']; ?></td>
								</tr>
								<tr>
									<th>電話番号</th>
									<td><?php echo @$parm['input_main_tp']; ?></td>
								</tr>
								<tr>
									<th>E-MAIL<span class="must">必須</span></th>
									<td><?php echo @$parm['input_main_em']; ?></td>
								</tr>
								<tr>
									<th>ご用件<span class="must">必須</span></th>
									<td><?php echo @$parm['period']; ?></td>
								</tr>
								<tr>
									<th>内容</th>
									<td><?php echo nl2br(@$parm['content']); ?></td>
								</tr>
							</tbody>
						</table>
						<ul class="submit">
							<li>
								<input type="submit" alt="前に戻る" id="edit" name="__retry_input__" value="前に戻る">
							</li>
							<li>
								<input type="submit" alt="送信する" id="submit" name="__send__" value="送信する">
							</li>
						</ul>
					</form>
					<?php
		break;
			case FMAIL_THANK:
		?>
					<p class="thanks">正常に送信されました。<br />
						お問い合わせいただきました内容につきましては、担当者より後日ご連絡いたします。</p>
					<p class="thanks"><a href="index.html">＞トップページへ戻る</a></p>
					<?php
                	break;
		}
		?>
				</div>
			</div>
		</section>
	</div>
	<!-- #BeginLibraryItem "/Library/footer.lbi" -->
	<footer id="gFooter">
		<div class="pageTop"><a href="#gHeader">ページトップ</a></div>
		<div class="topBox clearfix">
			<div class="ttlBox">
				<div class="fLogo"><a href="../index.html"><img src="../img/common/f_logo.png" alt="ここすも"></a></div>
				<div class="link"><a href="#"><span>メールでのお問い合わせ</span></a></div>
			</div>
			<div class="telBox">
				<div class="tel"><span class="sml">お住まいのご相談・お問い合わせは</span>tel <span class="num">0533-75-6905</span></div>
				<p class="time">受付時間 9:00から18:00 土日祝定休</p>
			</div>
			<div class="txtBox">
				<p class="ttl">株式会社山豊工建</p>
				<ul class="txtUl clearfix">
					<li>ここすも豊田事業部</li>
					<li>ここすも豊川事業部</li>
					<li>ここすも豊橋事業部</li>
					<li>ここすも千種事業部</li>
					<li>ここすも高浜事業部</li>
					<li>ここすも春日井事業部</li>
				</ul>
			</div>
		</div>
		<div class="naviBox">
			<div class="fNavi clearfix">
				<ul>
					<li class="ttl wid01"><a href="#">私たちの家づくり</a></li>
					<li class="wid02">
						<ul class="subNavi">
							<li><a href="../about.html">ここすもハウスとは</a></li>
							<li><a href="#">私たちの家づくり</a></li>
							<li><a href="#">性能と構造</a></li>
						</ul>
					</li>
					<li class="wid03">
						<ul class="subNavi">
							<li><a href="#">家づくりの流れ</a></li>
							<li><a href="#">施工事例</a></li>
							<li><a href="#">お客様の声</a></li>
						</ul>
					</li>
					<li class="wid04">
						<ul class="subNavi">
							<li><a href="../modelhouse.html">モデルハウス</a></li>
						</ul>
					</li>
					<li class="ttl wid05"><a href="#">会社情報</a></li>
					<li class="wid06">
						<ul class="subNavi">
							<li><a href="../profile.html">会社概要</a></li>
							<li><a href="#">グループ概要</a></li>
							<li><a href="#">代表挨拶</a></li>
						</ul>
					</li>
					<li class="wid07">
						<ul class="subNavi">
							<li><a href="#">お知らせ</a></li>
							<li><a href="#">採用情報</a></li>
							<li><a href="#">スタッフの紹介</a></li>
						</ul>
					</li>
					<li class="wid08">
						<ul class="subNavi">
							<li><a href="#">事業所紹介</a></li>
							<li><a href="../contact">お問い合わせ</a></li>
							<li><a href="#">プライバシーポリシー</a></li>
						</ul>
					</li>
				</ul>
			</div>
		</div>
		<div class="linkBox">
			<ul class="fLink clearfix">
				<li><a href="#"><img src="../img/common/f_link01.jpg" alt=""></a></li>
				<li><a href="#"><img src="../img/common/f_link02.jpg" alt=""></a></li>
				<li><a href="#"><img src="../img/common/f_link03.jpg" alt=""></a></li>
				<li><a href="#"><img src="../img/common/f_link04.jpg" alt=""></a></li>
				<li><a href="#"><img src="../img/common/f_link05.jpg" alt=""></a></li>
				<li><a href="#"><img src="../img/common/f_link06.jpg" alt=""></a></li>
				<li><a href="#"><img src="../img/common/f_link07.jpg" alt=""></a></li>
				<li><a href="#"><img src="../img/common/f_link08.jpg" alt=""></a></li>
				<li><a href="#"><img src="../img/common/f_link09.jpg" alt=""></a></li>
				<li><a href="#"><img src="../img/common/f_link10.jpg" alt=""></a></li>
			</ul>
		</div>
		<p class="copyright">Copyrights&copy; cocosumo. All Rights Reserved.</p>
	</footer>
	<!-- #EndLibraryItem --></div>
</body>
</html>