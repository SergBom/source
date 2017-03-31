/*
 * File: app/view/benzine/planer_edit.js
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

Ext.define('Portal.view.benzine.planer_edit', {
    extend: 'Ext.window.Window',
    alias: 'widget.benzineplaner_edit',

    requires: [
        'Portal.view.benzine.planer_editViewModel',
        'Portal.view.benzine.planer_editViewController',
        'Ext.form.Panel',
        'Ext.form.FieldSet',
        'Ext.form.field.Date',
        'Ext.form.field.Time',
        'Ext.grid.Panel',
        'Ext.grid.column.RowNumberer',
        'Ext.grid.column.Number',
        'Ext.view.Table',
        'Ext.toolbar.Toolbar',
        'Ext.button.Button',
        'Ext.form.field.HtmlEditor',
        'Ext.form.field.Hidden',
        'Ext.form.field.Display',
        'Ext.toolbar.Separator'
    ],

    controller: 'benzineplaner_edit',
    viewModel: {
        type: 'benzineplaner_edit'
    },
    modal: true,
    height: 472,
    id: 'benzineplaner_edit',
    width: 625,
    layout: 'fit',
    closable: false,
    title: 'Редактирование поездки',
    defaultListenerScope: true,

    items: [
        {
            xtype: 'form',
            reference: 'formPlaner',
            bodyPadding: 10,
            header: false,
            url: 'data/benzine/planer-edit.php',
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            items: [
                {
                    xtype: 'fieldset',
                    padding: '0 5 5 5',
                    layout: 'hbox',
                    title: 'Временной интервал',
                    items: [
                        {
                            xtype: 'datefield',
                            padding: '0 5 0 5',
                            width: 150,
                            fieldLabel: 'Дата',
                            labelWidth: 35,
                            name: 'begin_date',
                            allowBlank: false,
                            editable: false,
                            format: 'Y-m-d',
                            listeners: {
                                change: 'onDatefieldChange'
                            }
                        },
                        {
                            xtype: 'timefield',
                            padding: '0 5 0 5',
                            width: 200,
                            fieldLabel: 'Время начала',
                            labelWidth: 90,
                            name: 'begin_time',
                            allowBlank: false,
                            editable: false,
                            format: 'H:i',
                            minValue: '6:00 AM'
                        },
                        {
                            xtype: 'textfield',
                            padding: '0 5 0 5',
                            width: 200,
                            fieldLabel: 'Продолжительность, ч',
                            labelWidth: 140,
                            name: 'duration',
                            allowBlank: false
                        }
                    ]
                },
                {
                    xtype: 'fieldset',
                    flex: 1,
                    height: 139,
                    title: '',
                    layout: {
                        type: 'vbox',
                        align: 'stretch',
                        padding: '5 0 5 0'
                    },
                    items: [
                        {
                            xtype: 'combobox',
                            fieldLabel: 'Отдел',
                            name: 'otdel',
                            allowBlank: false,
                            editable: false,
                            displayField: 'name',
                            store: 'benzine.otdel',
                            valueField: 'name'
                        },
                        {
                            xtype: 'combobox',
                            fieldLabel: 'Тип поездки',
                            name: 'type_tour',
                            allowBlank: false,
                            displayField: 'name',
                            store: 'benzine.type_tour',
                            valueField: 'name'
                        },
                        {
                            xtype: 'gridpanel',
                            flex: 1,
                            formBind: false,
                            reference: 'gridTour',
                            title: 'Маршрут',
                            store: 'benzine.tour',
                            columns: [
                                {
                                    xtype: 'rownumberer',
                                    width: 32,
                                    dataIndex: 'number',
                                    text: ''
                                },
                                {
                                    xtype: 'gridcolumn',
                                    flex: 1,
                                    dataIndex: 'tour_from',
                                    text: 'Откуда'
                                },
                                {
                                    xtype: 'gridcolumn',
                                    flex: 1,
                                    dataIndex: 'tour_to',
                                    text: 'Куда'
                                },
                                {
                                    xtype: 'numbercolumn',
                                    width: 90,
                                    dataIndex: 'distance',
                                    text: 'Примерное расстояние, км',
                                    format: '0000'
                                }
                            ],
                            viewConfig: {
                                id: 'tableBenzineTour',
                                listeners: {
                                    selectionchange: {
                                        fn: 'onTableBenzineTourSelectionChange',
                                        scope: 'controller'
                                    },
                                    itemdblclick: {
                                        fn: 'onTableBenzineTourItemDblClick',
                                        scope: 'controller'
                                    }
                                }
                            },
                            dockedItems: [
                                {
                                    xtype: 'toolbar',
                                    dock: 'top',
                                    items: [
                                        {
                                            xtype: 'button',
                                            id: 'btnBenzineFormPlanerTourAdd',
                                            iconCls: 'icon-db-add',
                                            text: 'Добавить',
                                            listeners: {
                                                click: {
                                                    fn: 'onBtnBenzineFormPlanerTourAddClick',
                                                    scope: 'controller'
                                                }
                                            }
                                        },
                                        {
                                            xtype: 'button',
                                            reference: 'btnBenzineFormPlanerTourDelete',
                                            disabled: true,
                                            id: 'btnBenzineFormPlanerTourDelete',
                                            iconCls: 'icon-db-del',
                                            text: 'Удалить',
                                            listeners: {
                                                click: {
                                                    fn: 'onBtnBenzineFormPlanerTourDeleteClick',
                                                    scope: 'controller'
                                                }
                                            }
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'fieldset',
                    flex: 1,
                    height: 138,
                    padding: 5,
                    collapsed: true,
                    collapsible: true,
                    title: 'Пояснительная запись',
                    items: [
                        {
                            xtype: 'htmleditor',
                            anchor: '100%',
                            height: 150,
                            name: 'reference'
                        }
                    ]
                },
                {
                    xtype: 'hiddenfield',
                    flex: 1,
                    fieldLabel: 'Label',
                    name: 'id'
                },
                {
                    xtype: 'hiddenfield',
                    flex: 1,
                    fieldLabel: 'Label',
                    name: 'new'
                },
                {
                    xtype: 'hiddenfield',
                    flex: 1,
                    fieldLabel: 'Label',
                    name: 'tour_success'
                }
            ],
            dockedItems: [
                {
                    xtype: 'toolbar',
                    flex: 1,
                    formBind: false,
                    dock: 'bottom',
                    height: 53,
                    layout: {
                        type: 'hbox',
                        pack: 'end'
                    },
                    items: [
                        {
                            xtype: 'container',
                            flex: 1,
                            items: [
                                {
                                    xtype: 'displayfield',
                                    name: 'user'
                                }
                            ]
                        },
                        {
                            xtype: 'tbseparator'
                        },
                        {
                            xtype: 'container',
                            padding: 5,
                            items: [
                                {
                                    xtype: 'button',
                                    reference: 'btnBenzinePlanerTourSuccess',
                                    disabled: true,
                                    hidden: true,
                                    id: 'btnBenzinePlanerTourSuccess',
                                    iconCls: 'dialog-ok',
                                    text: 'Поездка состоялась',
                                    listeners: {
                                        click: {
                                            fn: 'onBtnBenzinePlanerTourSuccessClick',
                                            scope: 'controller'
                                        }
                                    }
                                },
                                {
                                    xtype: 'button',
                                    formBind: true,
                                    reference: 'btnBenzinePlanerSave',
                                    itemId: 'btnBenzinePlanerSave',
                                    iconCls: 'dialog-save',
                                    text: 'Сохранить',
                                    listeners: {
                                        click: {
                                            fn: 'onBtnBenzinePlanerSaveClick',
                                            scope: 'controller'
                                        }
                                    }
                                },
                                {
                                    xtype: 'button',
                                    id: 'btnBenzinePanerCancel',
                                    iconCls: 'dialog-cancel',
                                    text: 'Отмена',
                                    listeners: {
                                        click: {
                                            fn: 'onBtnBenzinePanerCancelClick',
                                            scope: 'controller'
                                        }
                                    }
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ],
    listeners: {
        show: {
            fn: 'onBenzineplaner_editShow',
            scope: 'controller'
        }
    },

    onDatefieldChange: function(field, newValue, oldValue, eOpts) {
        this.getReferences().btnBenzinePlanerSave.setDisabled(false);
    }

});