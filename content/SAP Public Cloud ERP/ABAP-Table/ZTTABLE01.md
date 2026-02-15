```
@EndUserText.label : '판매오더헤더'
@AbapCatalog.enhancement.category : #NOT_EXTENSIBLE
@AbapCatalog.tableCategory : #TRANSPARENT
@AbapCatalog.deliveryClass : #A
@AbapCatalog.dataMaintenance : #RESTRICTED
define table zttable01 {
	key mandt : abap.clnt not null;
	key keyhd : sysuuid_x16 not null;
	salesorder : vbeln_va;
	salesordertype : auart;
	salesgroup : abap.char(10);
	soldtoparty : abap.char(10);
	createdby : abp_creation_user;
	createdat : abp_creation_tstmpl;
	locallastchangedby : abp_locinst_lastchange_user;
	locallastchangedat : abp_locinst_lastchange_tstmpl;
	lastchangedby : abp_lastchange_user;
	lastchangedat : abp_lastchange_tstmpl;
}