dataSource:"db:/peluqueria/cj_ingresos",
items:[
{
height:307,
partType:5,
typeid:19,
uuid:"022DECBE-6013-41D1-B021-2F96B6E92A85"
},
{
borderType:"EmptyBorder,0,0,0,0",
dataProviderID:"scopes.globals.vg_user_logo",
displayType:9,
editable:false,
formIndex:17,
horizontalAlignment:0,
location:"15,10",
name:"vg_user_logo",
scrollbars:36,
size:"82,83",
transparent:true,
typeid:4,
uuid:"187A3428-5CE1-4CC4-A462-CD385CA366DB"
},
{
fontType:"Corbel,2,36",
foreground:"#000000",
formIndex:6,
horizontalAlignment:2,
location:"116,9",
name:"opcion_nombre",
size:"300,42",
styleClass:"title",
text:"Detalle Ingreso",
transparent:true,
typeid:7,
uuid:"3E4C72C6-8F2D-4026-9648-67B1E275D00A"
},
{
dataProviderID:"cj_desc",
fontType:"Trebuchet MS,0,15",
formIndex:19,
location:"138,163",
name:"cj_desc",
size:"353,20",
text:"Cj Desc",
typeid:4,
uuid:"4CFFB588-4D73-439C-A9D2-0D8598F3D754"
},
{
formIndex:18,
labelFor:"cj_desc",
location:"42,163",
name:"cj_desc_label",
size:"91,20",
styleClass:"fieldlabel",
text:"Descripción:",
typeid:7,
uuid:"57E4AA6B-D70E-45C3-9BBF-23AD08E8AA4D"
},
{
formIndex:27,
labelFor:"vendedor_adn_id",
location:"42,238",
name:"vendedor_adn_id_label",
size:"91,20",
styleClass:"fieldlabel",
text:"Empleado:",
typeid:7,
uuid:"611FB5E9-3FAC-487C-A3D8-9E083C9CAB24"
},
{
formIndex:6,
imageMediaID:"AFAF5472-3C5F-4A8F-B550-DF92FCED0766",
location:"236,66",
mediaOptions:1,
name:"btn_grabar",
onActionMethodID:"0FB00DD3-70CC-4218-951F-26C0C32D06AD",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"110,30",
text:"Grabar",
typeid:7,
uuid:"6A62F68F-BF14-4C75-83FF-8EA3F3739E81"
},
{
formIndex:22,
labelFor:"cj_ing_importe",
location:"42,213",
name:"cj_ing_importe_label",
size:"91,20",
styleClass:"fieldlabel",
text:"Importe:",
typeid:7,
uuid:"7BCF56E5-2F29-4FBD-9E9B-25DB53552246"
},
{
formIndex:26,
imageMediaID:"130E2D1A-7EA6-4DA9-9589-33FAD1A70E30",
location:"313,138",
mediaOptions:1,
name:"btn_vta",
onActionMethodID:"F4CB853A-DC51-4049-A3E4-36211C24CC91",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"121,20",
text:"Ver Venta",
typeid:7,
uuid:"91E1ACCE-2BE1-40A6-9D4D-ADE9D40AFB72"
},
{
formIndex:6,
imageMediaID:"D9E5FF97-F987-429C-9627-069F1547E29A",
location:"116,66",
mediaOptions:1,
name:"btn_salir",
onActionMethodID:"6D42F786-B03B-49AC-AA93-076B4127AC2E",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"110,30",
text:"Volver",
typeid:7,
uuid:"A95F658C-3274-48CE-8C33-A0D7A126910E"
},
{
dataProviderID:"cj_ingresos_to_cj_conceptos.conc_nombre",
displayType:10,
fontType:"Trebuchet MS,0,15",
formIndex:25,
location:"138,188",
name:"conc_nombre",
size:"353,20",
text:"Conc Nombre",
typeid:4,
uuid:"B49ED5E4-A0DD-4169-B54E-95A69E134186"
},
{
formIndex:24,
labelFor:"conc_nombre",
location:"42,188",
name:"conc_nombre_label",
size:"91,20",
styleClass:"fieldlabel",
text:"Concepto:",
typeid:7,
uuid:"B64D5187-1C19-41C1-983B-603BA26E0CD3"
},
{
dataProviderID:"cj_ing_fecha",
editable:false,
fontType:"Trebuchet MS,0,15",
formIndex:21,
format:"dd-MM-yyyy",
horizontalAlignment:0,
location:"138,138",
name:"cj_ing_fecha",
size:"140,20",
styleClass:"disable",
text:"Cj Ing Fecha",
typeid:4,
uuid:"B99BF909-19E2-4674-AA4D-2571411B2197"
},
{
dataProviderID:"cj_ing_importe",
editable:false,
fontType:"Trebuchet MS,0,15",
formIndex:23,
format:"#,###.00",
horizontalAlignment:4,
location:"138,213",
name:"cj_ing_importe",
size:"140,20",
styleClass:"disable",
text:"Cj Ing Importe",
typeid:4,
uuid:"BE44863A-A32F-46E9-B128-252BAF16BA81"
},
{
dataProviderID:"cj_ingresos_to_adn_ven.adn_nombre",
editable:false,
formIndex:28,
location:"138,238",
name:"vendedor_adn_id",
size:"353,20",
styleClass:"disable",
text:"Vendedor Adn Id",
typeid:4,
uuid:"C35BBD70-C456-425E-9187-9E7A227C99E3"
},
{
anchors:11,
background:"#2ba6d5",
borderType:"LineBorder,1,#000000",
horizontalAlignment:2,
location:"0,0",
size:"544,118",
text:"",
typeid:7,
uuid:"D54C2F80-F02C-4E73-8A56-AF173B1AE196"
},
{
formIndex:20,
labelFor:"cj_ing_fecha",
location:"42,138",
name:"cj_ing_fecha_label",
size:"91,20",
styleClass:"fieldlabel",
text:"Fecha:",
typeid:7,
uuid:"ECFF9224-79CE-455E-89CC-11FE27D5F3E8"
}
],
name:"p_ingreso_detalle",
navigatorID:"-1",
onHideMethodID:"1217A245-A289-4D9D-BF49-AF44385F23EF",
onShowMethodID:"2D852BF6-5F54-47B7-AFBE-7965D9B5F675",
showInMenu:true,
size:"544,307",
styleClass:"detail",
styleName:"estilo",
typeid:3,
uuid:"CF174E36-E0BD-4FCA-8C85-6DE9A6693DA1"