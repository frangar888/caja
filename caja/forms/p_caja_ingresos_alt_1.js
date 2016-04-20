/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"A8E70D53-D138-42DD-8FFB-145F303BDDCC",variableType:8}
 */
var vl_total_ingresos = null;

/**
 * @properties={typeid:24,uuid:"DADB60B0-D1E5-4708-BA59-86C1B16B6A7F"}
 * @AllowToRunInFind
 */
function filtrar(){
	controller.find()
	cj_ing_fecha = utils.dateFormat(globals.vg_fecha_inicial,'yyyy-MM-dd') + ' 00:00:00...' + utils.dateFormat(globals.vg_fecha_final,'yyyy-MM-dd') + ' 23:59:59|yyyy-MM-dd HH:mm:ss'
	controller.search()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C24C6E06-A12D-4A6F-B042-F7D000F38345"}
 */
function onActionDetalle(event) {
	var win1 = application.createWindow("detalleIng", JSWindow.MODAL_DIALOG);
	win1.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
	win1.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
	win1.resizable = false
	win1.title= 'Hair System';
	win1.show(forms.p_ingreso_detalle);
}
