INSERT
	INTO
	retofarm.rtf_svy_info (grw_cd,
	svy_tp,
	svy_dts,
	svy_num,
	svy_dt,
	svy_tm,
	loc_cd,
	eqp_cd,
	ssr_id,
	rmk_dc,
	insert_id,
	insert_ip,
	insert_dts,
	update_id,
	update_ip,
	update_dts)
VALUES('2022001',
'D',
now(),
(RAND() * (100)) + 200,
'',
'',
'1100',
'110',
1,
'',
'',
'',
now(),
'',
'',
now())
