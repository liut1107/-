/* ============================================================

	script info : クリックログのスクリプトを記述

============================================================ */


/* ------------------------------------------------------------
	志望校リストに追加
------------------------------------------------------------ */
function SCClick_shiboko(s_account) {
	if(s_account) {
		var s=s_gi(s_account);
		s.linkTrackVars='events';
		s.linkTrackEvents='event10';
		s.events='event10';
		s.tl(this,'o','click list of shiboko');
	}
	return true;
}

/* ------------------------------------------------------------
	カセット開く
------------------------------------------------------------ */
function SCClick_openCassette(s_account) {
	if(s_account) {
		var s=s_gi(s_account);
		s.linkTrackVars='events';
		s.linkTrackEvents='event12';
		s.events='event12';
		s.tl(this,'o','open cassette');
	} 
	return true;
}

/* ------------------------------------------------------------
	進学ネット
------------------------------------------------------------ */
function SCClick_shingaku(s_account) {
	if(s_account) {
		var s=s_gi(s_account);
		s.linkTrackVars='events';
		s.linkTrackEvents='event14';
		s.events='event14';
		s.tl(this,'o','ShingakuNet referral');
	}
	return true;
}


/* ------------------------------------------------------------
	学部・学科・コース追加：event11
------------------------------------------------------------ */
function SCClick_addOrgCdArray(s_account, selectedChkArray) {
	if(s_account) {
		var s=s_gi(s_account);
		s.linkTrackVars='events,eVar19,prop32';
		s.linkTrackEvents='event11';
		s.events='event11';
		s.eVar19=selectedChkArray;
		s.prop32="D=v19";
		s.tl(this,'o','add complete'); 
	}
	return true;
}