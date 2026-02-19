```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: '판매오더아이템'
@Metadata.ignorePropagatedAnnotations: false
define view entity ZEDU_P_SALES_ORDER_ITEM
as projection on ZEDU_R_SALES_ORDER_ITEM
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
	
	_HeaderBO : redirected to parent ZEDU_P_SALES_ORDER_HEADER,
	
	_Material,
	
	_SalesOrderItem,
	
	_Unit
}
```
