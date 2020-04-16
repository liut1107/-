/* ============================================================

	script info : 受験サプリ共通のスクリプトを記述

============================================================ */

/* ------------------------------------------------------------
	common : double submit
------------------------------------------------------------ */
var submit_flg = false;
function doubleSubmitCheck(submit_add){
	if (!submit_flg) {
		submit_flg = true;
		$(submit_add).parents('form').submit();
	}
};
