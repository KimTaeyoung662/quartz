```
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Root 정보'
@Metadata.ignorePropagatedAnnotations: false
@ObjectModel.usageType:{
	serviceQuality: #X,
	sizeCategory: #S,
	dataClass: #MIXED
}
@VDM.viewType: #BASIC
@ObjectModel.semanticKey: [ 'StringProperty' ]
define view entity ZEDU02_I_01_ROOT
as select from zedu02t001
	association [0..1] to ZEDU02_I_05_CONTACT as _Contact on $projection.ContactID = _Contact.ID
	association [0..1] to ZEDU02_I_06_CRITICALITY as _Criticality on $projection.CriticalityCode = _Criticality.Code
	association [0..1] to ZEDU02_I_08_NAVIGATION as _Navigation on $projection.NavigationID = _Navigation.Id
	association [0..1] to I_UnitOfMeasure as _UoM on $projection.Uom = _UoM.UnitOfMeasure
	association [0..1] to I_Currency as _Currency on $projection.IsoCurrency = _Currency.Currency
	association [0..1] to I_Country as _Country on $projection.Country = _Country.Country
	association [0..1] to I_Region as _Region on $projection.Region = _Region.Region
	and $projection.Country = _Region.Country
	association [0..1] to I_Language as _Language on $projection.TypeLang = _Language.Language
	association of [0..*] ZEDU02_I_07_FOLDER as _Folder on $projection.ID = _Folder.RootId
{
	@EndUserText.label: '루트키'
	@EndUserText.quickInfo: '루트키'
	key id as ID,
	
	@EndUserText.label : 'Semantic Key'
	@EndUserText.quickInfo: 'Semantic Key'
	string_property as StringProperty,
	
	@Semantics.imageUrl: true
	@EndUserText.label : 'Image'
	@EndUserText.quickInfo: 'Image'
	image_url as ImageUrl,
	
	@EndUserText.label : 'Simple Type Integer'
	@EndUserText.quickInfo: 'Simple Type Integer'
	integer_value as IntegerValue,
	
	@EndUserText.label : 'Forecast'
	@EndUserText.quickInfo: 'Forecast'
	forecast_value as ForecastValue,
	
	@EndUserText.label : 'Target'
	@EndUserText.quickInfo: 'Target'
	target_value as TargetValue,
	
	@EndUserText.label : 'Dimension'
	@EndUserText.quickInfo: 'Dimension'
	dimensions as Dimensions,
	
	@EndUserText.label : 'Stars'
	@EndUserText.quickInfo: 'Stars'
	stars_value as StarsValue,
	
	@ObjectModel.foreignKey.association: '_Contact'
	@EndUserText.label : 'Contact'
	@EndUserText.quickInfo: 'Contact'
	contact_id as ContactID,
	
	@ObjectModel.foreignKey.association: '_Criticality'
	@EndUserText.label : 'Criticality'
	@EndUserText.quickInfo: 'Criticality'
	criticality_code as CriticalityCode,
	
	@EndUserText.label : 'Criticality 속성'
	@EndUserText.quickInfo: 'Criticality 속성'
	field_with_criticality as FieldWithCriticality,
	
	@ObjectModel.foreignKey.association: '_UoM'
	@EndUserText.label : '단위'
	@EndUserText.quickInfo: '단위'
	uom as Uom,
	
	@EndUserText.label : '단위속성'
	@EndUserText.quickInfo: '단위속성'
	@Semantics.quantity.unitOfMeasure: 'Uom'
	field_with_quantity as FieldWithQuantity,
	
	@ObjectModel.foreignKey.association: '_Currency'
	@EndUserText.label : '통화'
	@EndUserText.quickInfo: '통화'
	iso_currency as IsoCurrency,
	
	@Semantics.amount.currencyCode: 'IsoCurrency'
	@EndUserText.label : '통화속성'
	@EndUserText.quickInfo: '통화속성'
	field_with_price as FieldWithPrice,
	
	@EndUserText.label : 'Intent Based Navigation'
	@EndUserText.quickInfo: 'QuickView'
	@ObjectModel.foreignKey.association: '_Navigation'
	navigation_id as NavigationID,
	
	@Semantics.nullValueIndicatorFor: 'CriticalityCode'
	cast(' ' as abap_boolean preserving type ) as CriticalityNullValInd,
	
	@EndUserText.label: 'Disable Child Operation'
	@EndUserText.quickInfo: 'Disable Child Operation'
	disable_child_operation as DisableChildOperation,
	
	@EndUserText.label: 'Delete Hidden'
	@EndUserText.quickInfo: 'Delete Hidden'
	delete_hidden as DeleteHidden,
	
	@EndUserText.label: 'Update Hidden'
	@EndUserText.quickInfo: 'Update Hidden'
	update_hidden as UpdateHidden,
	
	@EndUserText.label: 'URL Field'
	@EndUserText.quickInfo: 'URL Field'
	field_with_url as FieldWithUrl,
	
	@EndUserText.label: 'URL Field Text'
	@EndUserText.quickInfo: 'URL Field Text'
	field_with_url_text as FieldWithUrlText,
	
	@Semantics.eMail.address: true
	@EndUserText.label: 'EMail'
	@EndUserText.quickInfo: 'EMail'
	email as Email,
	
	@Semantics.telephone.type: [#CELL]
	@EndUserText.label: 'Telephone'
	@EndUserText.quickInfo: 'Telephone'
	telephone as Telephone,
	
	@ObjectModel.foreignKey.association: '_Country'
	@EndUserText.label : 'Country'
	@EndUserText.quickInfo: 'Country'
	country as Country,
	
	@ObjectModel.foreignKey.association: '_Region'
	@EndUserText.label : 'Region'
	@EndUserText.quickInfo: 'Region'
	region as Region,
	
	@EndUserText.label : '유효시작일'
	@EndUserText.quickInfo: '유효시작일'
	valid_from as ValidFrom,
	
	@EndUserText.label : '유효종료일'
	@EndUserText.quickInfo: '유효종료일'
	valid_to as ValidTo,
	
	@EndUserText.label : 'Time'
	@EndUserText.quickInfo: 'Time'
	time as Time,
	
	@EndUserText.label : 'Timestamp'
	@EndUserText.quickInfo: 'Timestamp'
	timestamp as Timestamp,
	
	@EndUserText.label : 'Timezone'
	@EndUserText.quickInfo: 'Timezone'
	time_zone as SAPTimezone,
	
	@EndUserText.label : 'Description'
	@EndUserText.quickInfo: 'Description'
	description as Description,
	
	@EndUserText.label : 'Second Description'
	@EndUserText.quickInfo: 'Second Description'
	description_customgrowing as DescriptionCustomGrowing,
	
	@EndUserText.label : 'Children Created via Root Action'
	@EndUserText.quickInfo: 'Children Created via Root Action'
	times_child_created as TimesChildCreated,
	
	@EndUserText.label : 'Total Pieces'
	@EndUserText.quickInfo: 'Total Pieces'
	total_pieces as TotalPieces,
	
	@EndUserText.label : 'Total Grandchild Pieces'
	@EndUserText.quickInfo : 'Total Grandchild Pieces'
	total_granddchild_pieces as TotalGrandchildPieces,
	
	@EndUserText.label: 'ACCP - Posting Period YYYYMM'
	@EndUserText.quickInfo : 'ACCP - Posting Period YYYYMM'
	type_accp as TypeAccp,
	
	@EndUserText.label: 'ABAP_BOOLEAN - Boolean'
	type_bool as TypeBool,
	
	@EndUserText.label: 'CHAR - Character String'
	type_char as TypeChar,
	
	@EndUserText.label: 'CLNT - Client'
	type_clnt as TypeClnt,
	
	@EndUserText.label: 'CUKY - Currency Key'
	type_cuky as TypeCuky,
	
	@Semantics.amount.currencyCode: 'TypeCuky'
	@EndUserText.label: 'CURR - Currency Field'
	type_curr as TypeCurr,
	
	@Semantics.amount.currencyCode: 'TypeCuky'
	@EndUserText.label: 'DEC - Currency in Decimal'
	type_dec_amount as TypeDecAmount,
	
	@EndUserText.label: 'DATN - Date Format YYYYMMDD (HANA Date)'
	type_datn as TypeDatn,
	
	@EndUserText.label: 'DATS - Date Format YYYYMMDD'
	type_dats as TypeDats,
	
	@EndUserText.label: 'DEC - Decimal/Packed Number'
	type_dec as TypeDec,
	
	@EndUserText.label: 'DF16_DEC - Decimal Floating Point Number'
	type_df16_dec as TypeDf16Dec,
	
	@EndUserText.label: 'FLTP - Floating Point Number'
	type_fltp as TypeFltp,
	
	@EndUserText.label: 'INT1 - Unsigned 1 Byte Integer'
	type_int1 as TypeInt1,
	
	@EndUserText.label: 'INT2 - Signed 2 Byte Integer'
	type_int2 as TypeInt2,
	
	@EndUserText.label: 'INT4 - Signed 4 Byte Integer'
	type_int4 as TypeInt4,
	
	@EndUserText.label: 'INT8 - Signed 8 Byte Integer'
	type_int8 as TypeInt8,
	
	@EndUserText.label: 'LANG - Language Key'
	@Semantics.language:true
	@ObjectModel.foreignKey.association: '_Language'
	type_lang as TypeLang,
	
	@EndUserText.label: 'NUMC - Numerical Text'
	type_numc as TypeNumc,
	
	@Semantics.quantity.unitOfMeasure: 'TypeUnit'
	@EndUserText.label: 'QUAN - Quantity Field'
	type_quan as TypeQuan,
	
	@Semantics.quantity.unitOfMeasure: 'TypeUnit'
	@EndUserText.label: 'FLTP - Quantity in Floating Point Number'
	type_fltp_quan as TypeFltpQuan,
	
	@EndUserText.label: 'RAWSTRING - Byte String (BLOB) (#Stream)'
	type_rawstring as TypeRawstring,
	
	@EndUserText.label: 'SSTRING - Character String'
	type_sstring as TypeSstring,
	
	@EndUserText.label: 'STRING - Character String (BLOB)'
	type_string as TypeString,
	
	@EndUserText.label: 'TIMN - Time format HHMMSS (HANA Time)'
	type_timn as TypeTimn,
	
	@EndUserText.label: 'TIMS - Time format HHMMSS'
	type_tims as TypeTims,
	
	@EndUserText.label: 'UNIT - Unit Key'
	type_unit as TypeUnit,
	
	@EndUserText.label: 'UTCLONG - Time stamp (HANA Timestamp)'
	type_utclong as TypeUtclong,
	
	@EndUserText.label: 'TZNTSTMPS- UTC Timestamp(YYYYMMDDhhmmss)'
	type_tzntstmps as TypeTzntstmps,
	
	@EndUserText.label: 'TZNTSTMPL- UTC Timestamp(YYYYMMDDhhmmss)'
	type_tzntstmpl as TypeTzntstmpl,
	
	@EndUserText.label: 'DEC(21,7) - Time stamp in Decimal(21,7)'
	@Semantics.dateTime:true
	type_dec_time as TypeDecTime,
	
	stream_mimetype as StreamMimeType,
	
	@EndUserText.label: 'DF34_DEC - Decimal Floating Point Number'
	type_df34_dec as TypeDf34Dec,
	
	@Semantics.user.createdBy: true
	created_by as CreatedBy,
	
	@Semantics.systemDateTime.createdAt: true
	created_at as CreatedAt,
	
	@Semantics.user.localInstanceLastChangedBy: true
	local_last_changed_by as LocalLastChangedBy,
	
	@Semantics.systemDateTime.localInstanceLastChangedAt: true
	local_last_changed_at as LocalLastChangedAt,
	
	@Semantics.systemDateTime.lastChangedAt: true
	last_changed_at as LastChangedAt,
	
	_Contact,
	
	_Folder,
	
	_Criticality,
	
	_Navigation,
	
	_UoM,
	
	_Currency,
	
	_Country,
	
	_Region,
	
	_Language
}
```
