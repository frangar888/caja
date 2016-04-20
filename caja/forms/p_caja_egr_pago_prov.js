/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"82D34E18-2FF9-4EF1-9D19-5F1E5F3B453E"}
 */
var vl_form_padre = null;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"B442A9A2-EBE8-4C75-AD73-73B6C9CCEAA0"}
 */
function onActionVolver(event) {
	databaseManager.revertEditedRecords()
	application.getWindow("nuevoPago").hide()
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @return {Boolean}
 *
 * @properties={typeid:24,uuid:"169731C9-D13E-4017-9C24-1427319AC08F"}
 */
function onHide(event) {
	databaseManager.revertEditedRecords()
	application.getWindow("nuevoPago").hide()
	return true
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"8DF5B744-A28F-43E3-AA01-6F0C997784E1"}
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
 * @properties={typeid:24,uuid:"539AC1FC-B1CE-4854-9302-481B7B159304"}
 */
function onActionGrabar(event) {
	if(cj_egr_fecha == null){
		globals.lanzarVentanaEmergente(0,'Ingrese fecha del ingreso.','Info',controller.getName(),null,null)
		return
	}
	if(proveedor_adn_id == null) {
		globals.lanzarVentanaEmergente(0,'Seleccione un proveedor.','Info',controller.getName(),null,null)
		return
	}
	if(cj_egr_importe == 0 || cj_egr_importe == null){
		globals.lanzarVentanaEmergente(0,'Ingrese importe del ingreso.','Info',controller.getName(),null,null)
		return
	}
	conc_cod = 3
	conc_nombre = cj_ingresos_to_cj_conceptos.conc_nombre
	databaseManager.saveData()
	forms[vl_form_padre].controller.show()
	application.getWindow("nuevoPago").hide()
}
