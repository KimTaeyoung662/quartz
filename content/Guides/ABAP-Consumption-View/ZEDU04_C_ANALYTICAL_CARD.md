  


```
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
@ObjectModel.representativeKey: 'Customer'  
define view entity ZEDU04_C_ANALYTICAL_CARD  
  as select from I_Customer  
  association [0..1] to I_Country                    as _Country   on  $projection.Country = _Country.Country  
  association [0..1] to ZEDU04_TEST_LIST_CARD        as _ListCard  on  $projection.CustomerAccountGroup = _ListCard.CustomerAccountGroup  
                                                                   and $projection.Country              = _ListCard.Country  
  association [0..*] to ZEDU04_TEST_OPEN_SALES_ORDER as _OpenSales on  $projection.CustomerAccountGroup = _OpenSales.CustomerAccountGroup  
                                                                   and $projection.Country              = _OpenSales.Country  
{  
      @ObjectModel.text.element: [ 'CustomerName' ]  
  key Customer,  
  
      CustomerName,  
  
      @DefaultAggregation: #SUM  
      cast (1 as abap.int4) as CountField,  
  
      cast( '' as vkorg)    as SalesOrganization,  
  
      @ObjectModel.text.association: '_CustomerAccountGroupText'  
      CustomerAccountGroup,  
  
      Country,  
  
      _OpenSales,  
  
      _CustomerAccountGroupText,  
  
      _Country,  
  
      _ListCard  
}
```
