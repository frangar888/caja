/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"76155B9C-A760-4D4A-B374-D43F06422941"}
 */
function onActionVolver(event) {
	databaseManager.revertEditedRecords()
	application.getWindow('detalleEgr').hide()
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @return {Boolean}
 *
 * @properties={typeid:24,uuid:"2D54D3FE-33A9-435B-9A4D-4D1A92838A3C"}
 */
function onHide(event) {
	databaseManager.revertEditedRecords()
	application.getWindow('detalleEgr').hide()
	return true
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"67B086F5-5B91-4840-A76A-55C330A74D3B"}
 */
function onActionGrabar(event) {
	if(cj_desc == '' || cj_desc == null){
		globals.lanzarVentanaEmergente(0,'Ingrese descripción del movimiento.','Info',controller.getName(),null,null)
		return
	}
	if(conc_cod == 0 || conc_cod == null){
		globals.lanzarVentanaEmergente(0,'Seleccione un concepto para el movimiento.','Info',controller.getName(),null,null)
		return
	}
	databaseManager.saveData()
	application.getWindow('detalleEgr').hide()
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"1A3332DF-9071-4746-9085-27818BD09AB5"}
 */
function onShow(firstShow, event) {
	if(venta_id != 0 && venta_id != null){
		elements.btn_vta.visible = true
	}else{
		elements.btn_vta.visible = false
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"CCE52548-1378-41EF-9EF9-6DD90100BBE1"}
 */
function onActionVerVta(event) {
	forms['p_ventas_detalle'].vl_form_padre = 'p_caja_alt_1'
	forms['p_ventas_detalle'].controller.loadRecords(venta_id)
	application.getWindow('detalleEgr').hide()
	application.showForm('p_ventas_detalle')
}
