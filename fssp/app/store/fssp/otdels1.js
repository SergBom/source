/*
 * File: app/store/fssp/otdels1.js
 *
 * This file was generated by Sencha Architect version 3.5.1.
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

Ext.define('Portal.store.fssp.otdels1', {
    extend: 'Ext.data.Store',

    requires: [
        'Portal.model.fssp.Otdel',
        'Ext.data.proxy.Ajax',
        'Ext.data.reader.Json'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'fssp.otdels1',
            autoLoad: false,
            model: 'Portal.model.fssp.Otdel',
            proxy: {
                type: 'ajax',
                extraParams: {
                    all: 1
                },
                url: 'data/fssp/otdels.json.php',
                reader: {
                    type: 'json',
                    rootProperty: 'data'
                }
            }
        }, cfg)]);
    }
});