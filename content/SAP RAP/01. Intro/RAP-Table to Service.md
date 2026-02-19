## 1. 내역 
---
> RAP 개발 유형중 Table 부터 Service를 만드는 단계 별 하는 작업에 대해서 설명한다.

## 2. 사전준비항목 
---
> 테이블 정의서 및 해당 데이터에 어떠한 Transaction이 필요한지에 대해서 사전 정의가 되어야 한다.
> 
> 여기서 Transaction은 다음을 의미한다.
> 
> - Create
> - Update
> - Delete
> - Action

## 3. 참고 문서 및 URL 
---
> [RAP 교재 (auth0010)](https://hkh7878.quickconnect.to/d/s/zw3ejsTiGE9IydybUbZ1YVatsUVnZyW4/Mam-MM5ZBkj-YcbnbWY6Qdu4z33p-auK-SrlgGsu7ogs)  
> [Open SAP 강의](https://open.sap.com/courses/cp13)  
> [RAP Workshop](https://github.com/SAP-samples/abap-platform-rap-workshops/tree/main/rap1xx/rap100)

---

## 4. 실습 
---
#### 4.1 테이블 생성 

> 실습정보를 담을 Package이 없는 경우 생성한다. - [Package생성가이드](https://publish.obsidian.md/readians/Guides-%EA%B3%B5%EA%B0%9C/SaaS+ERP/eclipse-package%EC%83%9D%EC%84%B1)

|**속성**|**속성값**|
|---|---|
|PACKAGE 명|ZEDU0010_01|
|PACKAGE 내역|교육용 패키지|
|부모 PACKAGE|ZEDU0010|

> 다음의 두개의 테이블을 생성한다. - [테이블생성가이드](https://publish.obsidian.md/readians/Guides-%EA%B3%B5%EA%B0%9C/SaaS+ERP/eclipse-%ED%85%8C%EC%9D%B4%EB%B8%94%EC%83%9D%EC%84%B1)

##### ZTTABLE01 

|**속성**|**속성값**|
|---|---|
|PACKAGE 명|ZEDU0010_01|
|TABLE 이름|ZTTALB01|
|TABLE 내역|판매오더헤더|
|SOURCE|[ZTTABLE01](https://publish.obsidian.md/readians/Guides-%EA%B3%B5%EA%B0%9C/Code/ABAP-Table/ZTTABLE01)|

##### ZTTABLE02 

|**속성**|**속성값**|
|---|---|
|PACKAGE 명|ZEDU0010_01|
|TABLE 이름|ZTTALB02|
|TABLE 내역|판매오더아이템|
|SOURCE|[ZTTABLE02](https://publish.obsidian.md/readians/Guides-%EA%B3%B5%EA%B0%9C/Code/ABAP-Table/ZTTABLE02)|

#### 4.2 Basic View 생성 

> 다음 두개의 Basic CDS View를 생성한다 - [Basic View 생성가이드](https://publish.obsidian.md/readians/Guides-%EA%B3%B5%EA%B0%9C/RAP/CDS-Basic+View+%EC%83%9D%EC%84%B1)
> 
> 두 뷰는 Parent - Child 관계를 가지고 있다

##### ZEDU_I_SALES_ORDER_HEADER 

|**속성**|**속성값**|
|---|---|
|CDS뷰 이름|ZEDU_I_SALES_ORDER_HEADER|
|CDS뷰 내역|판매오더헤더|
|Data Source|[ZTTABLE01](https://publish.obsidian.md/readians/Guides-%EA%B3%B5%EA%B0%9C/Code/ABAP-Table/ZTTABLE01)|
|SOURCE|[ZEDU_I_SALES_ORDER_HEADER](https://publish.obsidian.md/readians/Guides-%EA%B3%B5%EA%B0%9C/Code/ABAP-CDS-Basic/ZEDU_I_SALES_ORDER_HEADER)|

##### ZEDU_I_SALES_ORDER_ITEM 

|**속성**|**속성 내역**|
|---|---|
|CDS뷰 이름|ZEDU_I_SALES_ORDER_ITEM|
|CDS뷰 내역|판매오더아이템|
|Data Source|[ZTTABLE02](https://publish.obsidian.md/readians/Guides-%EA%B3%B5%EA%B0%9C/Code/ABAP-Table/ZTTABLE02)|
|SOURCE|[ZEDU_I_SALES_ORDER_ITEM](https://publish.obsidian.md/readians/Guides-%EA%B3%B5%EA%B0%9C/Code/ABAP-CDS-Basic/ZEDU_I_SALES_ORDER_ITEM)|

#### 4.3 Root View 생성 

> 위에서 생성한 Basic 뷰를 가지고 Business Object 생성을 위한 Root View를 생성한다.
> 
> - [Root View 생성가이드](https://publish.obsidian.md/readians/Guides-%EA%B3%B5%EA%B0%9C/RAP/CDS-Root+View+%EC%83%9D%EC%84%B1)

##### ZEDU_R_SALES_ORDER_HEADER : Root 

|**속성**|**속성값 내역**|
|---|---|
|CDS뷰 이름|ZEDU_R_SALES_ORDER_HEADER|
|CDS뷰 내역|판매오더헤더|
|Data Source|[ZEDU_I_SALES_ORDER_HEADER](https://publish.obsidian.md/readians/Guides-%EA%B3%B5%EA%B0%9C/Code/ABAP-CDS-Basic/ZEDU_I_SALES_ORDER_HEADER)|
|SOURCE|[ZEDU_R_SALES_ORDER_HEADER](https://publish.obsidian.md/readians/Guides-%EA%B3%B5%EA%B0%9C/Code/ABAP-CDS-Root/ZEDU_R_SALES_ORDER_HEADER)|

##### ZEDU_R_SALES_ORDER_ITEM : Child 

|**속성**|**속성값 내역**|
|---|---|
|CDS뷰 이름|ZEDU_R_SALES_ORDER_ITEM|
|CDS뷰 내역|판매오더아이템|
|Data Source|[ZEDU_I_SALES_ORDER_ITEM](https://publish.obsidian.md/readians/Guides-%EA%B3%B5%EA%B0%9C/Code/ABAP-CDS-Basic/ZEDU_I_SALES_ORDER_ITEM)|
|ROOT|[ZEDU_I_SALES_ORDER_HEADER](https://publish.obsidian.md/readians/Guides-%EA%B3%B5%EA%B0%9C/Code/ABAP-CDS-Basic/ZEDU_I_SALES_ORDER_HEADER)|
|PARENT|[ZEDU_I_SALES_ORDER_HEADER](https://publish.obsidian.md/readians/Guides-%EA%B3%B5%EA%B0%9C/Code/ABAP-CDS-Basic/ZEDU_I_SALES_ORDER_HEADER)|
|SOURCE|[ZEDU_R_SALES_ORDER_ITEM](https://publish.obsidian.md/readians/Guides-%EA%B3%B5%EA%B0%9C/Code/ABAP-CDS-Root/ZEDU_R_SALES_ORDER_ITEM)|

#### 4.4 Projection View 생성 

> Root뷰의 정보를 이용하여 서비스를 제공하기 위한 Projection뷰를 생성한다
> 
> - [Projection View 생성가이드](https://publish.obsidian.md/readians/Guides-%EA%B3%B5%EA%B0%9C/RAP/CDS-Projection+View+%EC%83%9D%EC%84%B1)

##### ZEDU_P_SALES_ORDER_HEADER : Root 

|**속성**|**속성값 내역**|
|---|---|
|CDS뷰 이름|ZEDU_R_SALES_ORDER_HEADER|
|CDS뷰 내역|판매오더헤더|
|Data Source|[ZEDU_R_SALES_ORDER_HEADER](https://publish.obsidian.md/readians/Guides-%EA%B3%B5%EA%B0%9C/Code/ABAP-CDS-Root/ZEDU_R_SALES_ORDER_HEADER)|
|SOURCE|[ZEDU_P_SALES_ORDER_HEADER](https://publish.obsidian.md/readians/Guides-%EA%B3%B5%EA%B0%9C/Code/ABAP-CDS-Projection/ZEDU_P_SALES_ORDER_HEADER)|

##### ZEDU_P_SALES_ORDER_ITEM : Child 

|**속성**|**속성값 내역**|
|---|---|
|CDS뷰 이름|ZEDU_R_SALES_ORDER_ITEM|
|CDS뷰 내역|판매오더아이템|
|Data Source|[ZEDU_I_SALES_ORDER_ITEM](https://publish.obsidian.md/readians/Guides-%EA%B3%B5%EA%B0%9C/Code/ABAP-CDS-Basic/ZEDU_I_SALES_ORDER_ITEM)|
|ROOT|[ZEDU_R_SALES_ORDER_ITEM](https://publish.obsidian.md/readians/Guides-%EA%B3%B5%EA%B0%9C/Code/ABAP-CDS-Root/ZEDU_R_SALES_ORDER_ITEM)|
|PARENT|[ZEDU_R_SALES_ORDER_HEADER](https://publish.obsidian.md/readians/Guides-%EA%B3%B5%EA%B0%9C/Code/ABAP-CDS-Root/ZEDU_R_SALES_ORDER_HEADER)|
|SOURCE|[ZEDU_P_SALES_ORDER_ITEM](https://publish.obsidian.md/readians/Guides-%EA%B3%B5%EA%B0%9C/Code/ABAP-CDS-Projection/ZEDU_P_SALES_ORDER_ITEM)|

#### 4.5 Service Definition 생성 

> 서비스로 제공할 엔터티를 정의한다.
> 
> - [Service Definition 생성가이드](https://publish.obsidian.md/readians/Guides-%EA%B3%B5%EA%B0%9C/RAP/CDS-Service+Definiition+%EC%83%9D%EC%84%B1)

##### Z_SD_SALES_ORDER 

|**필요 항목**|**내역**|
|---|---|
|**Service Definition**|[Z_SD_SALES_ORDER](https://publish.obsidian.md/readians/Guides-%EA%B3%B5%EA%B0%9C/Code/Service+Definition/Z_SD_SALES_ORDER)|
|**Service Definition 내역**|판매오더|
|**Main Entity**|ZEDU_P_SALES_ORDER_HEADER|
|**필요 Entity**|ZEDU_P_SALES_ORDER_ITEM|

#### 4.6 Service Binding 생성 

> 서비스의 Protocol을 정의하고 Publish를 통해서 외부에서 호출하도록 한다.
> 
> - [Service Binding 생성가이드](https://publish.obsidian.md/readians/Guides-%EA%B3%B5%EA%B0%9C/RAP/CDS-Service+Binding+%EC%83%9D%EC%84%B1)

##### Z_SB_SALES_ORDER 

|**속성**|**예시**|
|---|---|
|**Service Binding**|[Z_SB_SALES_ORDER](https://publish.obsidian.md/readians/Z_SB_SALES_ORDER)|
|**Service Binding 내역**|판매오더|
|**참조 Service Definition**|Z_SD_SALES_ORDER|
|**UI / API**|UI|
|**V2 / V4**|V4|
