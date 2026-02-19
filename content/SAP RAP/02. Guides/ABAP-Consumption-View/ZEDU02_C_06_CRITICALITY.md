  


```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]  
@AccessControl.authorizationCheck: #NOT_REQUIRED  
@EndUserText.label: '중요도'  
@Metadata.ignorePropagatedAnnotations: true  
@ObjectModel.usageType:{  
  serviceQuality: #X,  
  sizeCategory: #S,  
  dataClass: #MIXED  
}  
@VDM.viewType: #CONSUMPTION  
define view entity ZEDU02_C_06_CRITICALITY  
  as select from ZEDU02_I_06_CRITICALITY  
{  
  key Code,  
      Name,  
      Descr  
}
```
