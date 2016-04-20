/**
 * 
 * @param displayValue
 * @param realValue
 * @param record
 * @param valueListName
 * @param findMode
 * @param rawDisplayValue
 *
 * @properties={typeid:24,uuid:"6FCB2D39-8905-4DC2-A946-75209DEDB05B"}
 */
function getDataSetForValueList_cj_conceptos_ing(displayValue, realValue, record, valueListName, findMode, rawDisplayValue) {
var args = new Array()
	/** @type  {JSDataSet} */
	var result = null;
	if (displayValue == null && realValue == null) 
	{
		result =  databaseManager.getDataSetByQuery("peluqueria", "select concat(cast(conc_cod as char),'-',conc_nombre), conc_cod from cj_conceptos where conc_tipo = 0 order by conc_cod asc ", args, -1);
	} 
	else if (displayValue != null) 
	{
		// TYPE_AHEAD filter call, return a filtered list
		args = [, "%" + displayValue + "%",displayValue + "%"]
		result =  databaseManager.getDataSetByQuery("peluqueria", "select concat(cast(conc_cod as char),'-',conc_nombre), conc_cod from cj_conceptos where conc_tipo = 0 and (conc_cod like ? OR conc_nombre like ?) order by conc_cod asc", args, -1);

	} 
	else if (realValue != null) 
	{
		// real object not found in the current list, return 1 row with display,realvalue that will be added to the current list
		// dont return a complete list in this mode because that will be added to the list that is already there
		args = [realValue];
		result =  databaseManager.getDataSetByQuery("peluqueria", "select concat(cast(conc_cod as char),'-',conc_nombre), conc_cod from cj_conceptos where conc_tipo = 0 and conc_cod = ?", args, -1);

	}
	return result;
}

/**
 * 
 * @param displayValue
 * @param realValue
 * @param record
 * @param valueListName
 * @param findMode
 * @param rawDisplayValue
 *
 * @properties={typeid:24,uuid:"E8560DDC-FC1B-4185-AA5A-E268810D70A6"}
 */
function getDataSetForValueList_cj_conceptos_egr(displayValue, realValue, record, valueListName, findMode, rawDisplayValue) {
	var args = new Array()
	/** @type  {JSDataSet} */
	var result = null;
	if (displayValue == null && realValue == null) 
	{
		result =  databaseManager.getDataSetByQuery("peluqueria", "select concat(cast(conc_cod as char),'-',conc_nombre), conc_cod from cj_conceptos where conc_tipo = 1 order by conc_cod asc ", args, -1);
	} 
	else if (displayValue != null) 
	{
		// TYPE_AHEAD filter call, return a filtered list
		args = [, "%" + displayValue + "%",displayValue + "%"]
		result =  databaseManager.getDataSetByQuery("peluqueria", "select concat(cast(conc_cod as char),'-',conc_nombre), conc_cod from cj_conceptos where conc_tipo = 1 and (conc_cod like ? OR conc_nombre like ?) order by conc_cod asc", args, -1);

	} 
	else if (realValue != null) 
	{
		// real object not found in the current list, return 1 row with display,realvalue that will be added to the current list
		// dont return a complete list in this mode because that will be added to the list that is already there
		args = [realValue];
		result =  databaseManager.getDataSetByQuery("peluqueria", "select concat(cast(conc_cod as char),'-',conc_nombre), conc_cod from cj_conceptos where conc_tipo = 1 and conc_cod = ?", args, -1);

	}
	return result;

}

/**
 * 
 * @param displayValue
 * @param realValue
 * @param record
 * @param valueListName
 * @param findMode
 * @param rawDisplayValue
 *
 * @properties={typeid:24,uuid:"E62DF29A-7BBB-459D-9B83-9177DD94593E"}
 */
function getDataSetForValueList_cj_cajas_abiertas(displayValue, realValue, record, valueListName, findMode, rawDisplayValue) {
	var args = new Array()
		/** @type  {JSDataSet} */
		var result = null;
		if (displayValue == null && realValue == null) 
		{
			result =  databaseManager.getDataSetByQuery("peluqueria", "select concat(cast(caja_cod as char),'-',caja_nombre), caja_id from cj_cajas where caja_estado = 0 order by caja_cod asc ", args, -1);
		} 
		else if (displayValue != null) 
		{
			// TYPE_AHEAD filter call, return a filtered list
			args = ["%" + displayValue + "%",displayValue + "%"]
			result =  databaseManager.getDataSetByQuery("peluqueria", "select concat(cast(caja_cod as char),'-',caja_nombre), caja_id from cj_cajas where caja_estado = 0 and (caja_cod like ? OR caja_nombre like ?) order by caja_cod asc", args, -1);

		} 
		else if (realValue != null) 
		{
			// real object not found in the current list, return 1 row with display,realvalue that will be added to the current list
			// dont return a complete list in this mode because that will be added to the list that is already there
			args = [realValue];
			result =  databaseManager.getDataSetByQuery("peluqueria", "select concat(cast(caja_cod as char),'-',caja_nombre), caja_id from cj_cajas where caja_estado = 0 and caja_id = ?", args, -1);

		}
		return result;

	}