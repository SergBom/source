/*
 * File: app/view/EvalEffectives/ParamsEditorViewModel.js
 *
 * This file was generated by Sencha Architect
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 6.2.x Classic library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 6.2.x Classic. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Portal.view.EvalEffectives.ParamsEditorViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.evaleffectivesparamseditor',

    requires: [
        'Ext.data.Store',
        'Ext.data.proxy.Ajax',
        'Ext.data.reader.Json',
        'Ext.data.writer.Json',
        'Ext.data.field.Field'
    ],

    stores: {
        storeParamEditor: {
            proxy: {
                type: 'ajax',
                url: 'data/EvalEffectives/ParamsEdit-read.php',
                reader: {
                    type: 'json',
                    rootProperty: 'data'
                },
                writer: {
                    type: 'json',
                    rootProperty: 'data'
                }
            },
            fields: [
                {
                    name: 'value'
                },
                {
                    name: 'R1'
                },
                {
                    name: 'R2'
                },
                {
                    name: 'rec_id'
                }
            ]
        }
    }

});