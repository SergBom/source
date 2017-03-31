/*
 * File: app/view/EvalEffectives/EvalEffectives.js
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

Ext.define('Portal.view.EvalEffectives.EvalEffectives', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.evaleffectives',

    requires: [
        'Portal.view.EvalEffectives.EvalEffectivesViewModel',
        'Portal.view.EvalEffectives.EvalEffectivesViewController',
        'Ext.toolbar.Toolbar',
        'Ext.container.ButtonGroup',
        'Ext.form.field.Date',
        'Ext.button.Button',
        'Ext.grid.Panel',
        'Ext.grid.column.RowNumberer',
        'Ext.view.Table',
        'Ext.grid.plugin.RowExpander',
        'Ext.XTemplate'
    ],

    controller: 'evaleffectivesevaleffectives',
    viewModel: {
        type: 'evaleffectivesevaleffectives'
    },
    autoShow: true,
    height: 529,
    id: 'AppEvalEffectives',
    width: 690,
    layout: 'fit',
    title: 'Оценка эффективности ГЗН',
    defaultListenerScope: true,

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
                            reference: 'DateCur0',
                            width: 130,
                            fieldLabel: 'с',
                            labelWidth: 20,
                            format: 'Y-m-d'
                        },
                        {
                            xtype: 'datefield',
                            reference: 'DateCur',
                            id: 'EvalEffectiveDateCur',
                            width: 130,
                            fieldLabel: 'по',
                            labelWidth: 20,
                            name: 'DateCur',
                            format: 'Y-m-d'
                        },
                        {
                            xtype: 'button',
                            iconCls: 'icon-say',
                            text: 'Показать',
                            listeners: {
                                click: {
                                    fn: 'onButtonClick',
                                    scope: 'controller'
                                }
                            }
                        }
                    ]
                },
                {
                    xtype: 'buttongroup',
                    reference: 'btnEditors',
                    title: 'Редактор',
                    columns: 3,
                    items: [
                        {
                            xtype: 'button',
                            id: 'EvalEffectivesAddEval',
                            iconCls: 'icon-add',
                            text: 'Изменить',
                            listeners: {
                                click: {
                                    fn: 'onEvalEffectivesAddEvalClick',
                                    scope: 'controller'
                                }
                            }
                        },
                        {
                            xtype: 'button',
                            reference: 'EvalEffectivesSettings',
                            id: 'EvalEffectivesSettings',
                            iconCls: 'icon-setting2',
                            text: 'Настройки',
                            listeners: {
                                click: {
                                    fn: 'onEvalEffectivesSettingsClick',
                                    scope: 'controller'
                                }
                            }
                        }
                    ]
                },
                {
                    xtype: 'buttongroup',
                    title: 'Статистика',
                    columns: 3,
                    items: [
                        {
                            xtype: 'button',
                            iconCls: 'icon-stat3',
                            text: 'Общая',
                            listeners: {
                                click: 'onButtonClick1'
                            }
                        },
                        {
                            xtype: 'button',
                            hidden: true,
                            iconCls: 'icon-stat1',
                            text: 'По отделам',
                            listeners: {
                                click: 'onButtonClick2'
                            }
                        }
                    ]
                },
                {
                    xtype: 'buttongroup',
                    title: 'Данные',
                    columns: 2,
                    items: [
                        {
                            xtype: 'button',
                            iconCls: 'icon-stat1',
                            text: 'По сотрудникам',
                            listeners: {
                                click: {
                                    fn: 'onButtonClick3',
                                    scope: 'controller'
                                }
                            }
                        },
                        {
                            xtype: 'button',
                            hidden: true,
                            text: 'По сотрудникам',
                            listeners: {
                                click: 'onButtonClick4'
                            }
                        }
                    ]
                }
            ]
        }
    ],
    items: [
        {
            xtype: 'gridpanel',
            reference: 'mainGrid',
            title: 'Показатели по всем отделам за выбранный период',
            store: 'EvalEffectives.Record',
            columns: [
                {
                    xtype: 'rownumberer',
                    width: 24
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'R1',
                    text: 'Показатель'
                },
                {
                    xtype: 'gridcolumn',
                    flex: 1,
                    dataIndex: 'R2',
                    text: 'Показатель (расшифровка)'
                },
                {
                    xtype: 'gridcolumn',
                    renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                        if(value>0){return "<b>"+value+"</b>";}else{return value;}
                    },
                    align: 'right',
                    dataIndex: 'Value',
                    text: 'Значение'
                }
            ],
            plugins: [
                {
                    ptype: 'rowexpander',
                    expandOnEnter: true,
                    rowBodyTpl: Ext.create('Ext.XTemplate', 
                        '<i>{R2}</i>',
                        {
                            tpl: function() {

                            }
                        }
                    )
                }
            ]
        }
    ],
    listeners: {
        afterrender: {
            fn: 'onAppEvalEffectivesAfterRender',
            scope: 'controller'
        }
    },

    onButtonClick1: function(button, e, eOpts) {
        Ext.create('Portal.view.EvalEffectives.Stat1').show();
    },

    onButtonClick2: function(button, e, eOpts) {

    },

    onButtonClick4: function(button, e, eOpts) {

    }

});