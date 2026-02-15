### CDS 

```
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: '판매오더헤더'
@Metadata.ignorePropagatedAnnotations: false
define root view entity ZEDU_R_SALES_ORDER_HEADER
as select from ZEDU_I_SALES_ORDER_HEADER
	composition [0..*] of ZEDU_R_SALES_ORDER_ITEM as _ItemBO
@VDM.viewType: #TRANSACTIONAL
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
	
	_SalesGroup,
	
	_SalesOrder,
	
	_SalesOrderType,
	
	_SoldToParty,
	
	_ItemBO
}
```

### Behavior Definition 

```
managed implementation in class zbp_edu_r_sales_order_header unique;
strict ( 2 );
with draft;

define behavior for ZEDU_R_SALES_ORDER_HEADER alias SalesOrder
persistent table zttable01
draft table zdtable01
lock master
total etag LocalLastChangedAt
authorization master ( instance )
etag master LocalLastChangedAt
{
	create;
	update;
	delete;
	field ( readonly, numbering : managed ) KeyHead;
	association _ItemBO { create; with draft; }
	
	draft action Edit;
	draft action Activate optimized;
	draft action Discard;
	draft determine action Prepare;
	draft action Resume;
	
	mapping for zttable01 corresponding
	{
		KeyHead = keyhd;
	}
}


define behavior for ZEDU_R_SALES_ORDER_ITEM alias SalesOrderItem
persistent table zttable02
draft table zdtable02
lock dependent by _HeaderBO
authorization dependent by _HeaderBO
etag master LocalLastChangedAt
{
	update;
	delete;
	field ( readonly, numbering : managed ) KeyItem;
	field ( readonly ) KeyHead;
	association _HeaderBO { with draft; }

mapping for zttable02 corresponding
	{
		KeyHead = keyhd;
		KeyItem = keyit;
	}
}
```

### Behavior Pool (Class) 

```
CLASS lhc_salesorder DEFINITION INHERITING FROM cl_abap_behavior_handler.
PRIVATE SECTION.
	METHODS get_instance_authorizations FOR INSTANCE AUTHORIZATION
		IMPORTING keys REQUEST requested_authorizations FOR salesorder RESULT result.

ENDCLASS.

CLASS lhc_salesorder IMPLEMENTATION.

	METHOD get_instance_authorizations.
	
	ENDMETHOD.

ENDCLASS.
```
