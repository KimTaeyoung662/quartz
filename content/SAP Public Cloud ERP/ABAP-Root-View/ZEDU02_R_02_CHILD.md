```
@AccessControl.authorizationCheck: #NOT_REQUIRED  
@EndUserText.label: 'Child 정보'  
@Metadata.ignorePropagatedAnnotations: false  
define view entity ZEDU02_R_02_CHILD  
  as select from ZEDU02_I_02_CHILD  
  composition [0..*] of ZEDU02_R_03_GRAND_CHILD as _GrandChildBO  
  association to parent ZEDU02_R_01_ROOT        as _RootBO on $projection.ParentID = _RootBO.ID  
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
      _RootBO,  
      _GrandChildBO  
}
```
