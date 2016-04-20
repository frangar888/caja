/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"84EFC6A7-A746-4054-BB7A-C2BDF7DF7BCC"}
 */
var vl_form_padre = null;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"101E0E07-ADD6-4BD0-8A02-FF495B5359A2"}
 */
function onActionVolver(event) {
	databaseManager.revertEditedRecords()
	application.getWindow('nuevoIngManual').hide()
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @return {Boolean}
 *
 * @properties={typeid:24,uuid:"C54DF61E-FBE6-4427-964A-009B83F182FD"}
 */
function onHide(event) {
	databaseManager.revertEditedRecords()
	application.getWindow('nuevoIngManual').hide()
	return true
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"09FA003E-7F64-47DB-948A-412C929D016D"}
 */
function onShow(firstShow, event) {
	controller.newRecord()
	cj_ing_fecha = application.getServerTimeStamp()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F950D012-22C2-46E8-9E48-9CCB1761ED2A"}
 */
function onActionGrabar(event) {
	if(cj_ing_fecha == null){
		globals.lanzarVentanaEmergente(0,'Ingrese fecha del ingreso.','Info',controller.getName(),null,null)
		return
	}
	if(conc_cod == null || conc_cod == 0){
		globals.lanzarVentanaEmergente(0,'Seleccione concepto del ingreso.','Info',controller.getName(),null,null)
		return
	}
	if(cj_ing_importe == 0 || cj_ing_importe == null){
		globals.lanzarVentanaEmergente(0,'Ingrese importe del ingreso.','Info',controller.getName(),null,null)
		return
	}
	conc_nombre = cj_ingresos_to_cj_conceptos.conc_nombre
	databaseManager.saveData()
	forms[vl_form_padre].controller.show()
	application.getWindow('nuevoIngManual').hide()
}
