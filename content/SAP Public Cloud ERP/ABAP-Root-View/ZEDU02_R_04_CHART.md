```
@AccessControl.authorizationCheck: #NOT_REQUIRED  
@EndUserText.label: 'Chart 정보'  
@Metadata.ignorePropagatedAnnotations: false  
define view entity ZEDU02_R_04_CHART  
  as select from ZEDU02_I_04_CHART  
  association to parent ZEDU02_R_01_ROOT as _RootBO on $projection.ParentId = _RootBO.ID  
{  
  key Id,  
      ParentId,  
      CriticalityCode,  
      IntegerValue as IntegerValueForAreaChart,  
      IntegerValue as IntegerValueForOtherCharts,  
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
      _UoM,  
      _RootBO // Make association public  
}
```
