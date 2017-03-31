/*
 * File: app.js
 *
 * This file was generated by Sencha Architect version 4.1.1.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 6.0.x Classic library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 6.0.x Classic. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

// @require @packageOverrides
Ext.Loader.setConfig({
    paths: {
        Ext: '/ext5/build',
        'Ext.ux': '/ext5/build/ux'
    }
});


Ext.application({

    requires: [
        'Ext.Loader',
        'Ext.ux.Alert'
    ],
    views: [
        'sys.tabMainView'
    ],
    controllers: [
        'Portal'
    ],
    name: 'Portal',

    requires: [
        'Ext.Loader',
        'Ext.ux.Alert'
    ],

    launch: function() {
        Ext.create('Portal.view.sys.PortalLogin', {renderTo: Ext.getBody()});
    }

});
