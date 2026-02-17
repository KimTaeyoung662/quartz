

```
@AbapCatalog.viewEnhancementCategory: [#NONE]  
@AccessControl.authorizationCheck: #NOT_REQUIRED  
@EndUserText.label: 'Outbound 네비게이션'  
@Metadata.ignorePropagatedAnnotations: true  
@ObjectModel.usageType:{  
  serviceQuality: #X,  
  sizeCategory: #S,  
  dataClass: #MIXED  
}  
define view entity ZEDU02_C_08_NAVIGATION  
  as select from ZEDU02_I_08_NAVIGATION  
  association [0..1] to I_Country as _Country on $projection.Country = _Country.Country  
{  
  key Id,  
      StringProperty,  
      IntegerProperty,  
      DecimalProperty,  
      Country,  
        
      /* Associations */  
      _Country  
}
```
