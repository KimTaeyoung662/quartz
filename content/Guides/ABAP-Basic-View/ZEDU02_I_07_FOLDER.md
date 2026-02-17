
```
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: '폴더'
@Metadata.ignorePropagatedAnnotations: false
@ObjectModel.usageType:{
	serviceQuality: #X,
	sizeCategory: #S,
	dataClass: #MIXED
}
@VDM.viewType: #BASIC
define view entity ZEDU02_I_07_FOLDER
as select from zedu02t007
{
	@EndUserText.label : '루트키'
	key root_id as RootId,
	
	@EndUserText.label: '폴더키'
	key folder_id as FolderId,
	
	@EndUserText.label: '부모폴더키'
	parent_folder as ParentFolder,
	
	@EndUserText.label: '폴더명'
	folder_name as FolderName,
	
	@EndUserText.label: '폴더사이즈'
	folder_size as FolderSize
}
```
