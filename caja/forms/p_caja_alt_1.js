/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"527AC966-A0CD-4DCA-9E6F-32A395D41D0E",variableType:93}
 */
var vl_fecha_final = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"A6D34516-7CBD-4351-B97E-30050EC5B419",variableType:93}
 */
var vl_fecha_inicial = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"47B3D71B-BB73-4566-912C-1DA88552FA70",variableType:8}
 */
var vl_saldo_periodo = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"F74F1CA3-375D-4BE6-B30D-124945525156",variableType:8}
 */
var vl_saldo_fin = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"A728A39B-537B-4DDA-A4A3-B90654D2B03F",variableType:8}
 */
var vl_saldo_ini = null;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"0D66F2D0-3963-4987-A981-BBA3F37DAF3D"}
 */
function onActionVolver(event) {
	forms['form_inicio'].controller.show()
}

/**
 * @properties={typeid:24,uuid:"9207C982-319B-4D88-B72A-A2617B5A4380"}
 * @AllowToRunInFind
 */
function filtrar(){
	forms.p_caja_egresos_alt_1.filtrar()
	forms.p_caja_ingresos_alt_1.filtrar()
	calcularTotales()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F507197D-C4F3-4130-964B-69BE884A440E"}
 */
function onActionIngManual(event) {
	forms.p_caja_ing_manual.vl_form_padre = controller.getName()
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
 * @properties={typeid:24,uuid:"4456FB83-1D68-4DC9-A99F-71CFC9DA334F"}
 */
function onActionEgrManual(event) {
	forms.p_caja_egr_manual.vl_form_padre = controller.getName()
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
 * @properties={typeid:24,uuid:"0830B361-4233-471E-9023-38F2D45A23E8"}
 */
function onActionPagoProv(event) {
	forms.p_caja_egr_pago_prov.vl_form_padre = controller.getName()
	var win1 = application.createWindow("nuevoPago", JSWindow.MODAL_DIALOG);
	win1.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
	win1.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
	win1.resizable = false
	win1.title= 'Hair System';
	win1.show(forms.p_caja_egr_pago_prov);
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"B3B2D048-9B6E-4984-BCFB-FFED23C9D3CA"}
 */
function onShow(firstShow, event) {
	var posUltCampo = forms.p_caja_ingresos_alt_1.elements.conc_nombre.getLocationX()
	elements.split.dividerLocation = posUltCampo + 170
	if(firstShow){
		globals.vg_fecha_inicial = application.getServerTimeStamp()
		globals.vg_fecha_final = application.getServerTimeStamp()
		filtrar()
	}
	calcularTotales()
}

/**
 * @properties={typeid:24,uuid:"3A581A50-B7DD-4524-B7EF-02A24E371F13"}
 */
function calcularTotales(){
	vl_saldo_periodo = forms.p_caja_ingresos_alt_1.aggr_ing_imp_total - forms.p_caja_egresos_alt_1.aggr_egr_imp_total
	vl_saldo_ini = globals.obtenerSaldoIni(globals.vg_fecha_inicial)
	vl_saldo_fin = vl_saldo_ini + vl_saldo_periodo
}
