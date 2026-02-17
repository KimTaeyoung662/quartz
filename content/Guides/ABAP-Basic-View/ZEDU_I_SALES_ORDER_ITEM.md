```
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: '판매오더아이템'
@Metadata.ignorePropagatedAnnotations: false
@ObjectModel.usageType:{
	serviceQuality: #X,
	sizeCategory: #S,
	dataClass: #MIXED
}
@VDM.viewType: #BASIC
define view entity ZEDU_I_SALES_ORDER_ITEM
as select from zttable02
association [1..1] to ZEDU_I_SALES_ORDER_HEADER as _Head on $projection.KeyHead = _Head.KeyHead
association [0..1] to I_SalesOrderItem as _SalesOrderItem on $projection.SalesOrder = _SalesOrderItem.SalesOrder
and $projection.SalesOrderItem = _SalesOrderItem.SalesOrderItem
association [0..1] to I_Product as _Material on $projection.Material = _Material.Product
association [0..1] to I_UnitOfMeasure as _Unit on $projection.OrderQuantityUnit = _Unit.UnitOfMeasure
association [0..1] to I_Currency as _Currency on $projection.TransactionCurrency = _Currency.Currency
{
	@EndUserText.label: '판매오더아이템키'
	@EndUserText.quickInfo: '판매오더아이키'
	key keyit as KeyItem,
	
	@EndUserText.label: '판매오더키'
	@EndUserText.quickInfo: '판매오더키'
	keyhd as KeyHead,
	
	@EndUserText.label: '판매오더'
	@EndUserText.quickInfo: '판매오더'
	salesorder as SalesOrder,
	
	@EndUserText.label: '순번'
	@EndUserText.quickInfo: '순번'
	salesorderitem as SalesOrderItem,
	
	@EndUserText.label: '자재'
	@EndUserText.quickInfo: '자재'
	material as Material,
	
	@EndUserText.label: '수량'
	@EndUserText.quickInfo: '수량'
	orderquantity as OrderQuantity,
	
	@EndUserText.label: '단위'
	@EndUserText.quickInfo: '단위'
	orderquantityunit as OrderQuantityUnit,
	
	@EndUserText.label: '순가격'
	@EndUserText.quickInfo: '순가격'
	netamount as NetAmount,
	
	@EndUserText.label: '통화'
	@EndUserText.quickInfo: '통화'
	transactioncurrency as TransactionCurrency,
	
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
	
	_Head,
	
	_SalesOrderItem,
	
	_Material,
	
	_Unit,
	
	_Currency

}
```
