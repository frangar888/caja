/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"6A6C42B2-63E6-4EB8-9D70-E2D38D3B89F9",variableType:8}
 */
var vl_total_egresos = null;

/**
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"5D231B73-7FC0-45B3-AE6E-87BEAD30A6C8"}
 */
function filtrar(){
	controller.find()
	cj_egr_fecha = utils.dateFormat(globals.vg_fecha_inicial,'yyyy-MM-dd') + ' 00:00:00...' + utils.dateFormat(globals.vg_fecha_final,'yyyy-MM-dd') + ' 23:59:59|yyyy-MM-dd HH:mm:ss'
	controller.search()
}
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"42591566-0A94-493D-AA78-0800F89930C8"}
 */
function onActionDetalle(event) {
	var win1 = application.createWindow("detalleEgr", JSWindow.MODAL_DIALOG);
	win1.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
	win1.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
	win1.resizable = false
	win1.title= 'Hair System';
	win1.show(forms.p_egreso_detalle);
}
