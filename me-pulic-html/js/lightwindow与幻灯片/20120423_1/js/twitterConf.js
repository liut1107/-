getTwitters('tweet', {
	id: 'piantastanzanew',
	/* id: 'Kantei_Saigai', */
	count: 3,
	enableLinks: true,
	ignoreReplies: true,
	clearContents: true,
	template: '<div class="tLine clearfix"><div class="tImage"><a href="http://twitter.com/#!/%user_screen_name%" target="_blank"><img src="%user_profile_image_url%" width="45" height="45"></a></div><div class="tContents"><a href="http://twitter.com/#!/%user_screen_name%" target="_blank">%user_screen_name%</a>: %text%<br /><span>%time%</span></div></div>' //表示するソースの指定
});