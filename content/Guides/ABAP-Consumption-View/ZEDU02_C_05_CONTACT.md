  

```
@AbapCatalog.viewEnhancementCategory: [#NONE]  
@AccessControl.authorizationCheck: #NOT_REQUIRED  
@EndUserText.label: '연락처 정보'  
@Metadata.ignorePropagatedAnnotations: false  
@ObjectModel.usageType:{  
  serviceQuality: #X,  
  sizeCategory: #S,  
  dataClass: #MIXED  
}  
@VDM.viewType: #CONSUMPTION  
define view entity ZEDU02_C_05_CONTACT  
  as select from ZEDU02_I_05_CONTACT  
{  
  key ID,  
      Name,  
      Phone,  
      Building,  
      Country,  
      CountryDisplay,  
      Street,  
      City,  
      Postcode,  
      AddressLabel,  
      PhotoUrl,  
      Email,  
  
      /* Associations */  
      _Country  
}
```
