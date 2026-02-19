  


```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]  
@AccessControl.authorizationCheck: #NOT_REQUIRED  
@EndUserText.label: 'Overview Page Filter'  
@Metadata.ignorePropagatedAnnotations: true  
@ObjectModel.usageType:{  
  serviceQuality: #X,  
  sizeCategory: #S,  
  dataClass: #MIXED  
}  
define view entity ZEDU04_C_LIST_CARD  
  as select from I_Customer  
  association [0..1] to I_Country as _Country on $projection.Country = _Country.Country  
{  
      @ObjectModel.text.association: '_CustomerAccountGroupText'  
  key CustomerAccountGroup,  
  
  key Country,  
  
      sum(1) as CustomerAccountGroupCount,  
  
      _CustomerAccountGroupText,  
  
      _Country  
}  
group by  
  CustomerAccountGroup,  
  Country
```
