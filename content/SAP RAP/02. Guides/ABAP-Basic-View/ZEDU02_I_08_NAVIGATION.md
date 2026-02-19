```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Outbound 네비게이션'
@Metadata.ignorePropagatedAnnotations: false
@ObjectModel.usageType:{
	serviceQuality: #X,
	sizeCategory: #S,
	dataClass: #MIXED
}
@VDM.viewType: #BASIC
define view entity ZEDU02_I_08_NAVIGATION
as select from zedu02t008
association [0..1] to I_Country as _Country on $projection.Country = _Country.Country
{
	@EndUserText.label: '네비게이션ID'
	@EndUserText.quickInfo: '네비게이션ID'
	key id as Id,
	
	@EndUserText.label: '문자열속성'
	@EndUserText.quickInfo: '문자열속성'
	string_property as StringProperty,
	
	@EndUserText.label: '정수속성'
	@EndUserText.quickInfo: '정수속성'
	integer_property as IntegerProperty,
	
	@EndUserText.label: '소수포함숫자속성'
	@EndUserText.quickInfo: '소수포함숫자속성'
	decimal_property as DecimalProperty,
	
	@ObjectModel.foreignKey.association: '_Country'
	@EndUserText.label: '국가'
	@EndUserText.quickInfo: '국가'
	country as Country,
	
	_Country
}
```
