```
@AccessControl.authorizationCheck: #NOT_REQUIRED  
@EndUserText.label: 'Grand Child 정보'  
@Metadata.ignorePropagatedAnnotations: false  
define view entity ZEDU02_R_03_GRAND_CHILD  
  as select from ZEDU02_I_03_GRAND_CHILD  
  association        to parent ZEDU02_R_02_CHILD as _ChildBO on $projection.ParentID = _ChildBO.ID  
  association [1] to ZEDU02_R_01_ROOT         as _RootBO  on $projection.RootID = _RootBO.ID  
{  
  key ID,  
      ParentID,  
      RootID,  
      StringProperty,  
      _ChildBO,  
      _RootBO  
}
```
