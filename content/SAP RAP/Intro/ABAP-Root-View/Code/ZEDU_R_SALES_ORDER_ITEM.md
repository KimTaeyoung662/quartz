```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: '판매오더아이템'
@Metadata.ignorePropagatedAnnotations: false
@VDM.viewType: #TRANSACTIONAL
define view entity ZEDU_R_SALES_ORDER_ITEM
	as select from ZEDU_I_SALES_ORDER_ITEM
	association to parent ZEDU_R_SALES_ORDER_HEADER as _HeaderBO on $projection.KeyHead = _HeaderBO.KeyHead
{
	key KeyItem,
	
	KeyHead,
	
	SalesOrder,
	
	SalesOrderItem,
	
	Material,
	
	OrderQuantity,
	
	OrderQuantityUnit,
	
	NetAmount,
	
	TransactionCurrency,
	
	CreatedBy,
	
	CreatedAt,
	
	LocalLastChangedBy,
	
	LocalLastChangedAt,
	
	LastChangedBy,
	
	LastChangedAt,
	
	/* Associations */
	_Currency,
	
	_Head,
	
	_Material,
	
	_SalesOrderItem,
	
	_Unit,
	
	_HeaderBO
}
```
