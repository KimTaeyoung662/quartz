```
@AccessControl.authorizationCheck: #NOT_REQUIRED  
@EndUserText.label: 'Grand Child 정보'  
@Metadata.ignorePropagatedAnnotations: true  
define view entity ZEDU02_P_03_GRAND_CHILD  
  as projection on ZEDU02_R_03_GRAND_CHILD  
{  
  key ID,  
      ParentID,  
      RootID,  
      StringProperty,  
  
      /* Associations */  
      _ChildBO : redirected to parent ZEDU02_P_02_CHILD,  
      _RootBO  : redirected to ZEDU02_P_01_ROOT  
}
```
