```
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: '판매오더헤더'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
	serviceQuality: #X,
	sizeCategory: #S,
	dataClass: #MIXED
}
@VDM.viewType: #BASIC
define view entity ZEDU_I_SALES_ORDER_HEADER
as select from zttable01
	association [0..*] to ZEDU_I_SALES_ORDER_ITEM as _Item on $projection.KeyHead = _Item.KeyHead
	association [0..1] to I_SalesOrder as _SalesOrder on $projection.SalesOrder = _SalesOrder.SalesOrder
	association [0..1] to I_SalesOrderType as _SalesOrderType on $projection.SalesOrderType = _SalesOrderType.SalesOrderType
	association [0..1] to I_SalesGroup as _SalesGroup on $projection.SalesGroup = _SalesGroup.SalesGroup
	association [0..1] to I_Customer as _SoldToParty on $projection.SoldToParty = _SoldToParty.Customer
{
	@EndUserText.label: '판매오더키'
	@EndUserText.quickInfo: '판매오더키'
	key keyhd as KeyHead,
	
	@EndUserText.label: '판매오더'
	@EndUserText.quickInfo: '판매오더'
	salesorder as SalesOrder,
	
	@EndUserText.label: '오더유형'
	@EndUserText.quickInfo: '오더유형'
	salesordertype as SalesOrderType,
	
	@EndUserText.label: '판매그룹'
	@EndUserText.quickInfo: '판매그룹'
	salesgroup as SalesGroup,
	
	@EndUserText.label: '판매처'
	@EndUserText.quickInfo: '판매처'
	soldtoparty as SoldToParty,
	
	@EndUserText.label: '생성자'
	@EndUserText.quickInfo: '생성자'
	@Semantics.user.createdBy: true
	createdby as CreatedBy,
	
	@EndUserText.label: '생성일시'
	@EndUserText.quickInfo: '생성일시'
	@Semantics.systemDateTime.createdAt: true
	createdat as CreatedAt,
	
	@EndUserText.label: '변경자'
	@EndUserText.quickInfo: '변경자'
	@Semantics.user.localInstanceLastChangedBy: true
	locallastchangedby as LocalLastChangedBy,
	
	@EndUserText.label: '변경일시'
	@EndUserText.quickInfo: '변경일시'
	@Semantics.systemDateTime.localInstanceLastChangedAt: true
	locallastchangedat as LocalLastChangedAt,
	
	@EndUserText.label: '변경자'
	@EndUserText.quickInfo: '변경자'
	@Semantics.user.lastChangedBy: true
	lastchangedby as LastChangedBy,
	
	@EndUserText.label: '변경일시'
	@EndUserText.quickInfo: '변경일시'
	@Semantics.systemDateTime.lastChangedAt: true
	lastchangedat as LastChangedAt,

	_Item,
	
	_SalesOrder,
	
	_SalesOrderType,
	
	_SalesGroup,
	
	_SoldToParty
}
```

Oh no! Seems like something went wrong!