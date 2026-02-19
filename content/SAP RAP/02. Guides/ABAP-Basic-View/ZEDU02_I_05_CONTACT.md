  


```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: '연락처'
@Metadata.ignorePropagatedAnnotations: false
@ObjectModel.usageType:{
	serviceQuality: #X,
	sizeCategory: #S,
	dataClass: #MIXED
}
@VDM.viewType: #BASIC
define view entity ZEDU02_I_05_CONTACT
as select from zedu02t005
association [0..1] to I_Country as _Country on $projection.Country = _Country.Country
{
	@ObjectModel.text.element: ['Name']
	@EndUserText.label: '연락처키'
	@EndUserText.quickInfo: '연락처키'
	key id as ID,
	
	@Semantics.name.fullName: true
	@EndUserText.label: '이름'
	@EndUserText.quickInfo: '이름'
	name as Name,
	
	@Semantics.telephone.type: [#PREF]
	@EndUserText.label: '전화'
	@EndUserText.quickInfo: '전화'
	phone as Phone,
	
	@EndUserText.label: '건물'
	@EndUserText.quickInfo: '건물'
	building as Building,
	
	@Semantics.address.country: true
	@EndUserText.label: '국가'
	@EndUserText.quickInfo: '국가'
	country as Country,
	
	@EndUserText.label: '국가'
	@EndUserText.quickInfo: '국가'
	country as CountryDisplay,
	
	@Semantics.address.street: true
	@EndUserText.label: '도로명'
	@EndUserText.quickInfo: '도로명'
	street as Street,
	
	@Semantics.address.city: true
	@EndUserText.label: '도시명'
	@EndUserText.quickInfo: '도시명'
	city as City,
	
	@Semantics.address.zipCode: true
	@EndUserText.label: '우편번호'
	@EndUserText.quickInfo: '우편번호'
	postcode as Postcode,
	
	@Semantics.address.label: true
	@EndUserText.label: '주소'
	@EndUserText.quickInfo: '주소'
	address_label as AddressLabel,
	
	@EndUserText.label: '사진'
	@EndUserText.quickInfo: '사진'
	photo_url as PhotoUrl,
	
	@Semantics.eMail.type: [ #PREF ]
	@EndUserText.label: '이메일'
	@EndUserText.quickInfo: '이메일'
	email as Email,
	
	_Country
}
```
