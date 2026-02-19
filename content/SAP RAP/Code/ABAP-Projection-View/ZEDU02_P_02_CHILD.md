```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED  
@EndUserText.label: 'Child 정보'  
@Metadata.ignorePropagatedAnnotations: false  
define view entity ZEDU02_P_02_CHILD  
  as projection on ZEDU02_R_02_CHILD  
{  
  key ID,  
      ParentID,  
      StringProperty,  
      FieldWithPercent,  
      BooleanProperty,  
      StreamIsReadOnly,  
      CriticalityCode,  
      StreamFile,  
      StreamFilename,  
      StreamMimeType,  
      ChildPieces,  
      /* Associations */  
      _Criticality,  
      _GrandChildBO : redirected to composition child ZEDU02_P_03_GRAND_CHILD,  
      _RootBO       : redirected to parent ZEDU02_P_01_ROOT  
}
```
