```abap
@Analytics.query: true
define view entity ZEDUQUERY01
	with parameters
		@Consumption.valueHelpDefinition: [{ entity.name: 'I_Currency', endtity.element: 'Currency'}]
		@Consumption.defaultValue: 'KRW'
		@EndUserText.label: '통화'
		P_CURRENCY : abap.cuky
	as select from ZEDU03_I_ANL01 ( P_CURRENCY:$parameters.P_CURRENCY )
	association [0..1] to I_CalendarDate as _CreationDate on $projection.CreationDate = _CreationDate.CalendarDate

{
	key SalesOrder,
	key SalesOrderItem,
		SalesOrganization,
		
		@AnalyticsDetails.query.axis: #COLUMNS
		SalesOrganization.Text.SalesOrganizationName,

		@AnalyticsDetails.query.totals: #SHOW
		SoldToParty,

		@AnalyticsDetails.query.sortDirection: #ASC
		soldloParty. CustomerName,

		@EndUserText. label: 'Country of Sold-To Party'
		_SoldToParty.Country as SoldToCountry,

		@AnalyticsDetails.query.axis: #ROWS
		@AnalyticsDetails.query.totals: #SHOW
		@AnalyticsDetails.query.display: #KEY_TEXT
		Material,

		OrderQuantityUnit,
		TransactionCurrency,
		OrderQuantity,

		@AnalyticsDetails.query.hidden: true
		NetAmount,

		DisplayCurrency,

		NetAmountInDisplayCurrency
}

