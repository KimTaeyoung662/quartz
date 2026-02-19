  


```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: '중요도'
@Metadata.ignorePropagatedAnnotations: false
@ObjectModel.usageType:{
	serviceQuality: #X,
	sizeCategory: #S,
	dataClass: #MIXED
}
@VDM.viewType: #BASIC
define view entity ZEDU02_I_06_CRITICALITY
as select from zedu02t006
{
	@EndUserText.label: '중요도'
	@EndUserText.quickInfo: '중요도'
	@ObjectModel.text.element: [ 'Name' ]
	key code as Code,
	
	@EndUserText.label: '중요도명'
	@EndUserText.quickInfo: '중요도명'
	name as Name,
	
	@EndUserText.label: '중요도내역'
	@EndUserText.quickInfo: '중요도내역'
	descr as Descr
}
```
