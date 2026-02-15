```
@AccessControl.authorizationCheck: #NOT_REQUIRED  
@EndUserText.label: 'Chart 정보'  
@Metadata.ignorePropagatedAnnotations: false  
define view entity ZEDU02_P_04_CHART  
  as projection on ZEDU02_R_04_CHART  
{  
  key Id,  
      ParentId,  
      CriticalityCode,  
      IntegerValueForAreaChart,  
      IntegerValueForOtherCharts,  
      IntegerValue,  
      MinAmount,  
      MaxAmount,  
      AvgAmount,  
      Uom,  
      IntegerValueForLineChart,  
      ForecastValue,  
      TargetValue,  
      Dimensions,  
      AreachartTolUpperboundValue,  
      AreachartTolLowerboundValue,  
      AreachartDevUpperboundValue,  
      AreachartDevLowerboundValue,  
        
      /* Associations */  
      _Criticality,  
      _RootBO : redirected to parent ZEDU02_P_01_ROOT,  
      _UoM  
}
```
