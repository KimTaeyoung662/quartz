```
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: '판매오더헤더'
@Metadata.ignorePropagatedAnnotations: true
define root view entity ZEDU_P_SALES_ORDER_HEADER
provider contract transactional_query
as projection on ZEDU_R_SALES_ORDER_HEADER
{
	key KeyHead,
	
	SalesOrder,
	
	SalesOrderType,
	
	SalesGroup,
	
	SoldToParty,
	
	CreatedBy,
	
	CreatedAt,
	
	LocalLastChangedBy,
	
	LocalLastChangedAt,
	
	LastChangedBy,
	
	LastChangedAt,
	
	/* Associations */
	_Item,
	
	_ItemBO : redirected to composition child ZEDU_R_SALES_ORDER_ITEM,
	
	_SalesGroup,
	
	_SalesOrder,
	
	_SalesOrderType,
	
	_SoldToParty
}
```
