```@EndUserText.label : '판매오더아이템'
@AbapCatalog.enhancement.category : #NOT_EXTENSIBLE
@AbapCatalog.tableCategory : #TRANSPARENT
@AbapCatalog.deliveryClass : #A
@AbapCatalog.dataMaintenance : #RESTRICTED
define table zttable02 {
	key mandt : abap.clnt not null;
	key keyit : sysuuid_x16 not null;
	keyhd : sysuuid_x16 not null;
	salesorder : vbeln_va not null;
	salesorderitem : posnr;
	material : matnr;
	@Semantics.quantity.unitOfMeasure : 'zttable02.orderquantityunit'
	orderquantity : abap.quan(15,3);
	orderquantityunit : abap.unit(3);
	@Semantics.amount.currencyCode : 'zttable02.transactioncurrency'
	netamount : abap.curr(15,2);
	transactioncurrency : waerk;
	createdby : abp_creation_user;
	createdat : abp_creation_tstmpl;
	locallastchangedby : abp_locinst_lastchange_user;
	locallastchangedat : abp_locinst_lastchange_tstmpl;
	lastchangedby : abp_lastchange_user;
	lastchangedat : abp_lastchange_tstmpl;
}
```