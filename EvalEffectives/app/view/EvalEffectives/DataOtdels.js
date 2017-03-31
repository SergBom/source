/*
 * File: app/view/EvalEffectives/DataOtdels.js
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

Ext.define('Portal.view.EvalEffectives.DataOtdels', {
    extend: 'Ext.window.Window',
    alias: 'widget.evaleffectivesdataotdels',

    requires: [
        'Portal.view.EvalEffectives.DataOtdelsViewModel',
        'Portal.view.EvalEffectives.DataOtdelsViewController',
        'Ext.grid.Panel',
        'Ext.grid.filters.filter.List',
        'Ext.grid.column.Number',
        'Ext.grid.column.Date',
        'Ext.view.Table',
        'Ext.toolbar.Toolbar',
        'Ext.container.ButtonGroup',
        'Ext.form.field.Date',
        'Ext.button.Button',
        'Ext.grid.filters.Filters'
    ],

    controller: 'evaleffectivesdataotdels',
    viewModel: {
        type: 'evaleffectivesdataotdels'
    },
    modal: true,
    height: 404,
    width: 579,
    layout: 'fit',
    title: 'Данные по ',
    maximizable: true,
    defaultListenerScope: true,

    listeners: {
        afterrender: {
            fn: 'onWindowAfterRender',
            scope: 'controller'
        }
    },
    items: [
        {
            xtype: 'gridpanel',
            bind: {
                store: '{OnUsers}'
            },
            columns: [
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'R1',
                    text: 'Параметр',
                    filter: {
                        type: 'list'
                    }
                },
                {
                    xtype: 'numbercolumn',
                    align: 'right',
                    dataIndex: 'value',
                    text: 'Значение',
                    format: '0'
                },
                {
                    xtype: 'datecolumn',
                    width: 80,
                    dataIndex: 'dateOtchet',
                    text: 'Дата',
                    format: 'Y-m-d'
                },
                {
                    xtype: 'gridcolumn',
                    width: 153,
                    dataIndex: 'FIO',
                    text: 'Кто внёс',
                    filter: {
                        type: 'list',
                        loadingText: 'Загружаю...'
                    }
                },
                {
                    xtype: 'gridcolumn',
                    flex: 1,
                    dataIndex: 'otdel',
                    text: 'Отдел',
                    filter: {
                        type: 'list'
                    }
                }
            ],
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'top',
                    items: [
                        {
                            xtype: 'buttongroup',
                            title: 'Показать за период',
                            columns: 3,
                            items: [
                                {
                                    xtype: 'datefield',
                                    reference: 'dateB',
                                    width: 135,
                                    fieldLabel: 'С',
                                    labelWidth: 20,
                                    format: 'Y-m-d'
                                },
                                {
                                    xtype: 'datefield',
                                    reference: 'dateE',
                                    width: 135,
                                    fieldLabel: 'По',
                                    labelWidth: 20,
                                    format: 'Y-m-d'
                                },
                                {
                                    xtype: 'button',
                                    iconCls: 'icon-say',
                                    text: 'Показать',
                                    listeners: {
                                        click: 'onButtonClick'
                                    }
                                }
                            ]
                        }
                    ]
                }
            ],
            plugins: [
                {
                    ptype: 'gridfilters'
                }
            ]
        }
    ],

    onButtonClick: function(button, e, eOpts) {
        var ref=this.getReferences();
        var db=ref.dateB.getValue(),de=ref.dateE.getValue();
        this.getViewModel().getStore('OnUsers').load({
            params:{db:db,de:de}
        });
    }

});