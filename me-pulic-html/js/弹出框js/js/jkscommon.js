/* ============================================================

	script info : �󌱃T�v�����ʂ̃X�N���v�g���L�q

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
