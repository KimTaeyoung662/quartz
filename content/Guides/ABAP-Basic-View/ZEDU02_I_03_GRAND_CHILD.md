  


```
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Grand Child 정보'
@Metadata.ignorePropagatedAnnotations: false
@ObjectModel.usageType:{
	serviceQuality: #X,
	sizeCategory: #S,
	dataClass: #MIXED
}
@VDM.viewType: #BASIC
@ObjectModel.semanticKey: [ 'StringProperty' ]
define view entity ZEDU02_I_03_GRAND_CHILD
as select from zedu02t003
{
	@EndUserText.label : 'Grand Child키'
	key id as ID,
	
	@EndUserText.label: 'Parent키'
	parent_id as ParentID,
	
	@EndUserText.label: 'Root키'
	root_id as RootID,
	
	@EndUserText.label : 'String Property'
	string_property as StringProperty
}
```
