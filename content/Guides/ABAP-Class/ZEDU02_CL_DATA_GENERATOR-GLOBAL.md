
```
CLASS zedu02_cl_data_generator DEFINITION  
  PUBLIC  
  FINAL  
  CREATE PUBLIC .  
  
  PUBLIC SECTION.  
  
    INTERFACES if_oo_adt_classrun .  
  
    CLASS-METHODS: generate_random_data.  
  
  PROTECTED SECTION.  
  PRIVATE SECTION.  
    CLASS-DATA: gv_out TYPE REF TO if_oo_adt_classrun_out.  
    CLASS-METHODS: _delete_table_content.  
    CLASS-METHODS: _delete_bo_data.  
ENDCLASS.  
  
CLASS zedu02_cl_data_generator IMPLEMENTATION.  
  
  METHOD if_oo_adt_classrun~main.  
    gv_out = out.  
    generate_random_data( ).  
    gv_out->write( `Data generation: Completed` ) ##NO_TEXT .  
  ENDMETHOD.  
  
  METHOD _delete_bo_data.  
    SELECT * FROM zedu02t001  
      INTO TABLE @DATA(lt_actives).                     "#EC CI_NOWHERE  
  
    CHECK lt_actives IS NOT INITIAL.  
  
    SELECT FROM zedu02t001  
      FIELDS id INTO TABLE @DATA(lt_drafts).            "#EC CI_NOWHERE  
  
    IF lt_drafts IS NOT INITIAL.  
      MODIFY ENTITIES OF zedu02_r_01_root  
        ENTITY root  
          EXECUTE discard FROM  
            VALUE #( FOR draft IN lt_drafts ( %key-id = draft-id ) )  
        FAILED DATA(failed)  
          REPORTED DATA(reported).  
  
      COMMIT ENTITIES.  
  
      IF sy-subrc <> 0.  
        gv_out->write( `Error deleting draft instances` ) ##NO_TEXT .  
      ENDIF.  
    ENDIF.  
  
    LOOP AT lt_actives ASSIGNING FIELD-SYMBOL(<fs_active>).  
      <fs_active>-delete_hidden = abap_false.  
      <fs_active>-update_hidden = abap_false.  
    ENDLOOP.  
  
    UPDATE zedu02t001 FROM TABLE @lt_actives.  
  
    MODIFY ENTITIES OF zedu02_r_01_root  
      ENTITY root  
        DELETE FROM  
          VALUE #( FOR active IN lt_actives ( %key-id = active-id ) )  
        FAILED failed  
        REPORTED reported.  
  
  ENDMETHOD.  
  
  METHOD _delete_table_content.  
    _delete_bo_data( ).  
  
    DELETE FROM zedu02t004.                             "#EC CI_NOWHERE  
    DELETE FROM zedu02t006.                             "#EC CI_NOWHERE  
    DELETE FROM zedu02t008.                             "#EC CI_NOWHERE  
    DELETE FROM zedu02t007.                             "#EC CI_NOWHERE  
  
    COMMIT WORK.  
  ENDMETHOD.  
  
  METHOD generate_random_data.  
    _delete_table_content( ).  
  
    INSERT zedu02t001   FROM TABLE @( lcl_fsa_root=>generate( ) ).  
    INSERT zedu02t004   FROM TABLE @( lcl_fsa_chart=>generate( ) ).  
    INSERT zedu02t002   FROM TABLE @( lcl_fsa_child=>generate( ) ).  
    INSERT zedu02t007   FROM TABLE @( lcl_fsa_folder=>generate( ) ).  
    INSERT zedu02t008   FROM TABLE @( lcl_fsa_navigation=>generate( ) ).  
    INSERT zedu02t003   FROM TABLE @( lcl_fsa_grandchild=>generate( ) ).  
    INSERT zedu02t005   FROM TABLE @( lcl_fsa_contact=>generate( ) ).  
    INSERT zedu02t006   FROM TABLE @( lcl_fsa_criticality=>generate( ) ).  
  
    COMMIT WORK.  
  ENDMETHOD.  
ENDCLASS.

```