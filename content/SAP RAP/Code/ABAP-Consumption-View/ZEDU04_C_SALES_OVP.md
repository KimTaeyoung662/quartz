  


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
@Analytics.dataCategory: #CUBE  
define view entity ZEDU04_C_SALES_OVP  
  as select from I_Customer  
  association [0..1] to I_Country as _Country on $projection.Country = _Country.Country  
{  
  
      @ObjectModel.text.association: '_CustomerAccountGroupText'  
  key CustomerAccountGroup,  
  
      @ObjectModel.foreignKey.association: '_Country'  
  key Country,  
  
      _CustomerAccountGroupText,  
  
      _Country  
}  
where  
  Customer is initial
```
