  


```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]  
@AccessControl.authorizationCheck: #NOT_REQUIRED  
@EndUserText.label: 'Table Card'  
@Metadata.ignorePropagatedAnnotations: false  
@ObjectModel.usageType:{  
  serviceQuality: #X,  
  sizeCategory: #S,  
  dataClass: #MIXED  
}  
define view entity ZEDU04_C_TABLE_CARD  
  as select from I_SalesOrder  
    join         I_Customer      on I_Customer.Customer = SoldToParty  
    join         I_SalesDocument on I_SalesDocument.SalesDocument = I_SalesOrder.SalesOrder  
{  
  key I_SalesOrder.SalesOrder,  
  
      I_Customer.Country,  
  
      cast( 'KRW' as waers) as DisplayCurrency,  
              
      @Semantics.amount.currencyCode: 'DisplayCurrency'  
      currency_conversion(  
        amount             => I_SalesOrder.TotalNetAmount,  
        source_currency    => I_SalesOrder.TransactionCurrency,  
        target_currency    => cast('KRW' as waers),  
        exchange_rate_date => '20240101',  
        exchange_rate_type => 'M',  
        error_handling     => 'SET_TO_NULL'  
      )                      as TotalNetAmountDisplay,  
  
      I_SalesDocument.LastChangeDateTime,  
  
      I_SalesOrder.SoldToParty,  
        
      I_Customer.CustomerName  
}  
  
where  
  
      I_SalesOrder.SalesOrderProcessingType                       <> 'P'  
  and I_SalesOrder._OverallSDProcessStatus.OverallSDProcessStatus <> 'C'
```
