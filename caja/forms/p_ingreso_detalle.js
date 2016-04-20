/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"6D42F786-B03B-49AC-AA93-076B4127AC2E"}
 */
function onActionVolver(event) {
	databaseManager.revertEditedRecords()
	application.getWindow('detalleIng').hide()
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @return {Boolean}
 *
 * @properties={typeid:24,uuid:"1217A245-A289-4D9D-BF49-AF44385F23EF"}
 */
function onHide(event) {
	databaseManager.revertEditedRecords()
	application.getWindow('detalleIng').hide()
	return true
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"0FB00DD3-70CC-4218-951F-26C0C32D06AD"}
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
	application.getWindow('detalleIng').hide()
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"2D852BF6-5F54-47B7-AFBE-7965D9B5F675"}
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
 * @properties={typeid:24,uuid:"F4CB853A-DC51-4049-A3E4-36211C24CC91"}
 */
function onActionVerVta(event) {
	forms['p_ventas_detalle'].vl_form_padre = forms.p_caja_alt_1.controller.getName()
	forms['p_ventas_detalle'].controller.loadRecords(venta_id)
	application.getWindow('detalleIng').hide()
	application.showForm('p_ventas_detalle')
}
