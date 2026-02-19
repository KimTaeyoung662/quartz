```abap
@EndUserText.label: '판매오더'
define service Z_SD_SALES_ORDER {
	expose ZEDU_P_SALES_ORDER_HEADER;
	expose ZEDU_P_SALES_ORDER_ITEM;
}