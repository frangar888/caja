/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"DEEF6DC3-B67F-4F5B-B256-D5C9E1BD8BAD"}
 */
var vl_form_padre = null;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"B632BC87-D15F-477B-B303-6BEFAD26EF2F"}
 */
function onActionVolver(event) {
	databaseManager.revertEditedRecords()
	application.getWindow("nuevoEgrManual").hide()
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @return {Boolean}
 *
 * @properties={typeid:24,uuid:"CE0D3FF1-3944-4F3C-8522-0F2544AC4389"}
 */
function onHide(event) {
	databaseManager.revertEditedRecords()
	application.getWindow("nuevoEgrManual").hide()
	return true
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F6C84011-6187-4E44-849E-2B46BD687A87"}
 */
function onShow(firstShow, event) {
	controller.newRecord()
	cj_egr_fecha = application.getServerTimeStamp()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"9B2650E2-4AFD-4FF4-876E-784C8E194D63"}
 */
function onActionGrabar(event) {
	if(cj_egr_fecha == null){
		globals.lanzarVentanaEmergente(0,'Ingrese fecha del ingreso.','Info',controller.getName(),null,null)
		return
	}
	if(conc_cod == null || conc_cod == 0){
		globals.lanzarVentanaEmergente(0,'Seleccione concepto del ingreso.','Info',controller.getName(),null,null)
		return
	}
	if(cj_egr_importe == 0 || cj_egr_importe == null){
		globals.lanzarVentanaEmergente(0,'Ingrese importe del ingreso.','Info',controller.getName(),null,null)
		return
	}
	conc_nombre = cj_egresos_to_cj_conceptos.conc_nombre
	databaseManager.saveData()
	forms[vl_form_padre].controller.show()
	application.getWindow("nuevoEgrManual").hide()
}
