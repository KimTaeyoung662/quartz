### CDS 

```
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Root 정보'
@Metadata.ignorePropagatedAnnotations: false
define root view entity ZEDU02_R_01_ROOT
as select from ZEDU02_I_01_ROOT
	composition [0..*] of ZEDU02_R_02_CHILD as _ChildBO
	composition [0..*] of ZEDU02_R_04_CHART as _ChartBO
{
	key ID,
	StringProperty,
	ImageUrl,
	IntegerValue,
	cast ( IntegerValue as /DMO/FSA_BT_RadialInteger preserving type ) as RadialIntegerValue, // Search Term #SimpleType
cast ( IntegerValue as /DMO/FSA_BT_ProgressInteger preserving type ) as ProgressIntegerValue, // Search Term #SimpleType
	ForecastValue,
	TargetValue,
	Dimensions,
	StarsValue,
	ContactID,
	CriticalityCode,
	FieldWithCriticality,
	Uom,
	FieldWithQuantity,
	IsoCurrency,
	FieldWithPrice,
	NavigationID,
	CriticalityNullValInd,
	DisableChildOperation,
	DeleteHidden,
	UpdateHidden,
	FieldWithUrl,
	FieldWithUrlText,
	Email,
	Telephone,
	Country,
	Region,
	ValidFrom,
	ValidTo,
	Time,
	Timestamp,
	SAPTimezone,
	Description,
	DescriptionCustomGrowing,
	TimesChildCreated,
	TotalPieces,
	TotalGrandchildPieces,
	TypeAccp,
	TypeBool,
	TypeChar,
	TypeClnt,
	TypeCuky,
	TypeCurr,
	TypeDecAmount,
	TypeDatn,
	TypeDats,
	TypeDec,
	TypeDf16Dec,
	TypeFltp,
	TypeInt1,
	TypeInt2,
	TypeInt4,
	TypeInt8,
	TypeLang,
	TypeNumc,
	TypeQuan,
	TypeFltpQuan,
	TypeRawstring,
	TypeSstring,
	TypeString,
	TypeTimn,
	TypeTims,
	TypeUnit,
	TypeUtclong,
	TypeTzntstmps,
	TypeTzntstmpl,
	TypeDecTime,
	StreamMimeType,
	TypeDf34Dec,
	CreatedBy,
	CreatedAt,
	LocalLastChangedBy,
	LocalLastChangedAt,
	LastChangedAt,
	
	/* Associations */
	_Contact,
	_Country,
	_Criticality,
	_Currency,
	_Folder
	_Language,
	_Navigation,
	_Region,
	_UoM,
	_ChildBO,
	_ChartBO
}
```

### Behavior Definition 

```
managed implementation in class zbp_edu02_r_01_root unique;
strict ( 2 );
with draft;

define behavior for ZEDU02_R_01_ROOT alias Root
	persistent table zedu02t001
	draft table zedu02d001
	lock master
	total etag LocalLastChangedAt
	authorization master ( instance )
	etag master LocalLastChangedAt
{
create;
update;
delete;

draft action Edit;
draft action Activate optimized;
draft action Discard;
draft action Resume;
draft determine action Prepare;

field ( readonly, numbering : managed ) ID;
field ( mandatory ) Email;

association _ChildBO { create; with draft; }
association _ChartBO { create; with draft; }

mapping for zedu02t001 corresponding
	{
		ContactID = contact_id;
		CreatedAt = created_at;
		CreatedBy = created_by;
		CriticalityCode = criticality_code;
		DeleteHidden = delete_hidden;
		DescriptionCustomGrowing = description_customgrowing;
		DisableChildOperation = disable_child_operation;
		FieldWithCriticality = field_with_criticality;
		FieldWithPrice = field_with_price;
		FieldWithQuantity = field_with_quantity;
		FieldWithUrl = field_with_url;
		FieldWithUrlText = field_with_url_text;
		ForecastValue = forecast_value;
		ImageUrl = image_url;
		IntegerValue = integer_value;
		IsoCurrency = iso_currency;
		LastChangedAt = last_changed_at;
		LocalLastChangedAt = local_last_changed_at;
		LocalLastChangedBy = local_last_changed_by;
		NavigationID = navigation_id;
		StarsValue = stars_value;
		StringProperty = string_property;
		TargetValue = target_value;
		TimesChildCreated = times_child_created;
		TotalGrandchildPieces = total_granddchild_pieces;
		TotalPieces = total_pieces;
		UpdateHidden = update_hidden;
		SAPTimezone = time_zone;
		ValidFrom = valid_from;
		ValidTo = valid_to;
		TypeAccp = type_accp;
		TypeBool = type_bool;
		TypeChar = type_char;
		TypeClnt = type_clnt;
		TypeCuky = type_cuky;
		TypeCurr = type_curr;
		TypeDecAmount = type_dec_amount;
		TypeDatn = type_datn;
		TypeDats = type_dats;
		TypeDec = type_dec;
		TypeDf16Dec = type_df16_dec;
		TypeDf34Dec = type_df34_dec;
		TypeFltp = type_fltp;
		TypeInt1 = type_int1;
		TypeInt2 = type_int2;
		TypeInt4 = type_int4;
		TypeInt8 = type_int8;
		TypeNumc = type_numc;
		TypeQuan = type_quan;
		TypeFltpQuan = type_fltp_quan;
		TypeRawstring = type_rawstring;
		TypeSstring = type_sstring;
		TypeString = type_string;
		TypeTimn = type_timn;
		TypeTims = type_tims;
		TypeUtclong = type_utclong;
		TypeTzntstmps = type_tzntstmps;
		TypeTzntstmpl = type_tzntstmpl;
		TypeDecTime = type_dec_time;
		StreamMimeType = stream_mimetype;
		TypeLang = type_lang;
		TypeUnit = type_unit;
	}
}

define behavior for ZEDU02_R_04_CHART alias Chart
persistent table zedu02t004
draft table zedu02d004
lock dependent by _RootBO
authorization dependent by _RootBO
{
update;
delete;
field ( readonly, numbering : managed ) Id;
field ( readonly ) ParentId;

association _RootBO { with draft; }

mapping for zedu02t004 corresponding
	{
		AreachartDevLowerboundValue = areachart_dev_lowerbound_value;
		AreachartDevUpperboundValue = areachart_dev_upperbound_value;
		AreachartTolLowerboundValue = areachart_tol_lowerbound_value;
		AreachartTolUpperboundValue = areachart_tol_upperbound_value;
		CriticalityCode = criticality_code;
		ForecastValue = forecast_value;
		IntegerValue = integer_value;
		IntegerValueForLineChart = integer_value_for_line_chart;
		ParentID = parent_id;
		TargetValue = target_value;
	}
}

define behavior for ZEDU02_R_02_CHILD alias Child
persistent table zedu02t002
draft table zedu02d002
lock dependent by _RootBO
authorization dependent by _RootBO
{
update;
delete;

field ( readonly, numbering : managed ) ID;
field ( readonly ) ParentID;

association _RootBO { with draft; }
association _GrandChildBO { create; with draft; }

mapping for zedu02t002 corresponding
	{
		BooleanProperty = boolean_property;
		CriticalityCode = criticality_code;
		FieldWithPercent = field_with_percent;
		ParentID = parent_id;
		StringProperty = string_property;
		StreamFile = stream_file;
		StreamFilename = stream_filename;
		StreamMimeType = stream_mimetype;
		ChildPieces = child_pieces;
		StreamIsReadOnly = stream_is_readonly;
	}
}

define behavior for ZEDU02_R_03_GRAND_CHILD alias Grandchild
persistent table zedu02t003
draft table zedu02d003
lock dependent by _RootBO
authorization dependent by _RootBO
{
update;
delete;
field ( readonly, numbering : managed ) ID;
field ( readonly ) ParentID, RootID;

association _RootBO { with draft; }
association _ChildBO { with draft; }

mapping for zedu02t003 corresponding
	{
		ParentID = parent_id;
		RootID = root_id;
		StringProperty = string_property;
	}
}
```

### Behavior Pool (Class) 

```
CLASS lhc_root DEFINITION INHERITING FROM cl_abap_behavior_handler.
PRIVATE SECTION.

METHODS get_instance_authorizations FOR INSTANCE AUTHORIZATION
	IMPORTING keys REQUEST requested_authorizations FOR root RESULT result.

ENDCLASS.

CLASS lhc_root IMPLEMENTATION.

	METHOD get_instance_authorizations.
	ENDMETHOD.

ENDCLASS.
```
