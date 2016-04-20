/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"E66AF009-C873-4F5C-A0D2-A043D6D122C4",variableType:93}
 */
var vl_fecha_final = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"1D454A12-1534-41C0-8A7D-24C16CAC558C",variableType:93}
 */
var vl_fecha_inicial = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"569D4D66-D455-4096-9064-8E7AA16638ED",variableType:8}
 */
var vl_saldo_periodo = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"F9C38144-57A8-4215-BD9B-34748EC045EE",variableType:8}
 */
var vl_saldo_fin = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"2256F988-9719-4E79-A39A-146491AA8D27",variableType:8}
 */
var vl_saldo_ini = null;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F38BC8C3-3155-45DD-A37A-0529D2948CFA"}
 */
function onActionVolver(event) {
	forms['form_inicio'].controller.show()
}

/**
 * @properties={typeid:24,uuid:"37BCCA9A-96DE-4131-A5D7-8770C84CF741"}
 * @AllowToRunInFind
 */
function filtrar(){
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"ADED640C-B07B-4D24-B1D1-7FE250906945"}
 */
function onActionIngManual(event) {
	forms.p_caja_ing_manual.vl_form_padre = 'p_caja_inicio'
	var win1 = application.createWindow("nuevoIngManual", JSWindow.MODAL_DIALOG);
	win1.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
	win1.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
	win1.resizable = false
	win1.title= 'Hair System';
	win1.show(forms.p_caja_ing_manual);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"619DB6CA-CCF4-492B-9972-C9011A7F0FB1"}
 */
function onActionEgrManual(event) {
	forms.p_caja_egr_manual.vl_form_padre = 'p_caja_inicio'
	var win1 = application.createWindow("nuevoEgrManual", JSWindow.MODAL_DIALOG);
	win1.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
	win1.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
	win1.resizable = false
	win1.title= 'Hair System';
	win1.show(forms.p_caja_egr_manual);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"CDB72284-1B32-4044-9B86-BF151739BBBE"}
 */
function onActionPagoProv(event) {
	forms.p_caja_egr_pago_prov.vl_form_padre = 'p_caja_inicio'
	var win1 = application.createWindow("nuevoPago", JSWindow.MODAL_DIALOG);
	win1.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
	win1.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
	win1.resizable = false
	win1.title= 'Hair System';
	win1.show(forms.p_caja_egr_pago_prov);
}
