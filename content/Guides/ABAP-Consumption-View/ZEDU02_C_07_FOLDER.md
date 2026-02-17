  


```
@AbapCatalog.viewEnhancementCategory: [#NONE]  
@AccessControl.authorizationCheck: #NOT_REQUIRED  
@EndUserText.label: '폴더'  
@Metadata.ignorePropagatedAnnotations: true  
@ObjectModel.usageType:{  
  serviceQuality: #X,  
  sizeCategory: #S,  
  dataClass: #MIXED  
}  
@VDM.viewType: #CONSUMPTION  
define view entity ZEDU02_C_07_FOLDER  
  as select from ZEDU02_I_07_FOLDER  
{  
  key RootId,  
  key FolderId,  
      ParentFolder,  
      FolderName,  
      FolderSize,  
  
      /* Associations */  
      _Directory,  
      _ParentFolder  
}
```
