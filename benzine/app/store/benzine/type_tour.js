/*
 * File: app/store/benzine/type_tour.js
 *
 * This file was generated by Sencha Architect version 4.1.1.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 5.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 5.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Portal.store.benzine.type_tour', {
    extend: 'Ext.data.Store',

    requires: [
        'Portal.model.benzine.type_tour',
        'Ext.data.proxy.Ajax',
        'Ext.data.reader.Json',
        'Ext.data.writer.Json'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'benzine.type_tour',
            model: 'Portal.model.benzine.type_tour',
            proxy: {
                type: 'ajax',
                api: {
                    create: 'data/benzine/type_tour-edit.php',
                    read: 'data/benzine/type_tour-read.php',
                    update: 'data/benzine/type_tour-edit.php',
                    destroy: 'data/benzine/type_tour-delete.php'
                },
                reader: {
                    type: 'json',
                    rootProperty: 'data'
                },
                writer: {
                    type: 'json',
                    writeAllFields: true,
                    encode: true,
                    rootProperty: 'data'
                }
            }
        }, cfg)]);
    }
});