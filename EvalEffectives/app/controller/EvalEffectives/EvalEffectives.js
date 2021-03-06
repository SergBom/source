/*
 * File: app/controller/EvalEffectives/EvalEffectives.js
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

Ext.define('Portal.controller.EvalEffectives.EvalEffectives', {
    extend: 'Ext.app.Controller',

    models: [
        'EvalEffectives.EvalEffectives',
        'EvalEffectives.Record',
        'EvalEffectives.JobersGroup',
        'EvalEffectives.Jobers',
        'EvalEffectives.ParamsGroup',
        'EvalEffectives.Stat1',
        'EvalEffectives.ParamsFromOtdels'
    ],
    stores: [
        'EvalEffectives.EvalEffectives',
        'EvalEffectives.Record',
        'EvalEffectives.JobersGroup',
        'EvalEffectives.Jobers',
        'EvalEffectives.ParamsGroup',
        'EvalEffectives.GZIcount',
        'EvalEffectives.ParamsIn',
        'EvalEffectives.ParamsOut',
        'EvalEffectives.ParamsEffectives',
        'EvalEffectives.Stat1',
        'EvalEffectives.OtdelsList',
        'EvalEffectives.ParamsFromOtdels'
    ],
    views: [
        'EvalEffectives.EvalEffectives',
        'EvalEffectives.Settings',
        'EvalEffectives.JobersGroupEdit',
        'EvalEffectives.JobersEdit',
        'EvalEffectives.ParamsGroupEdit',
        'EvalEffectives.ParamsEditor',
        'EvalEffectives.GZIcount',
        'EvalEffectives.Stat1',
        'EvalEffectives.ParamsInEdit',
        'EvalEffectives.ParamsEffectives',
        'EvalEffectives.ParamsOutEdit',
        'EvalEffectives.DataOtdels'
    ]
});
