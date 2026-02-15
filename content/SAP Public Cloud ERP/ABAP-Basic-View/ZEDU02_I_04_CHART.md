  


```
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Chart 정보'
@Metadata.ignorePropagatedAnnotations: false
@ObjectModel.usageType:{
	serviceQuality: #X,
	sizeCategory: #S,
	dataClass: #MIXED
}
@VDM.viewType: #BASIC
define view entity ZEDU02_I_04_CHART
as select from zedu02t004
association [0..1] to ZEDU02_I_06_CRITICALITY as _Criticality on $projection.CriticalityCode = _Criticality.Code
association [0..1] to I_UnitOfMeasure as _UoM on $projection.Uom = _UoM.UnitOfMeasure
{
	@EndUserText.label: 'Chart키'
	key id as Id,
	
	@EndUserText.label: 'Parent키'
	parent_id as ParentId,
	
	@EndUserText.label: '중요도'
	criticality_code as CriticalityCode,
	
	@EndUserText.label : 'Integer Value'
	integer_value as IntegerValue,
	
	@EndUserText.label: 'Unit'
	uom as Uom,
	
	@EndUserText.label: 'Integer value for line chart'
	integer_value_for_line_chart as IntegerValueForLineChart,
	
	@EndUserText.label: 'Forecast Value'
	forecast_value as ForecastValue,
	
	@EndUserText.label: 'Target Value'
	target_value as TargetValue,
	
	@EndUserText.label: 'Dimensions'
	dimensions as Dimensions,
	
	@EndUserText.label: 'Upperbound Value for Area Chart'
	areachart_tol_upperbound_value as AreachartTolUpperboundValue,
	
	@EndUserText.label: 'Lowerbound Value for Area Chart'
	areachart_tol_lowerbound_value as AreachartTolLowerboundValue,
	
	@EndUserText.label: 'Upperbound Value for Dev Area Chart'
	areachart_dev_upperbound_value as AreachartDevUpperboundValue,
	
	@EndUserText.label: 'Lowerbound Value for Dev Area Chart'
	areachart_dev_lowerbound_value as AreachartDevLowerboundValue,
	
	_Criticality,
	
	_UoM
}
```
