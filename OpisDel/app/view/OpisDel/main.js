/*
 * File: app/view/OpisDel/main.js
 *
 * This file was generated by Sencha Architect version 4.0.1.
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

Ext.define('Portal.view.OpisDel.main', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.opisdel',

    requires: [
        'Portal.view.OpisDel.mainViewModel',
        'Portal.view.OpisDel.mainViewController',
        'Ext.grid.Panel',
        'Ext.grid.filters.filter.String',
        'Ext.grid.column.Date',
        'Ext.grid.filters.filter.Date',
        'Ext.grid.column.Number',
        'Ext.view.Table',
        'Ext.toolbar.Paging',
        'Ext.grid.feature.Grouping',
        'Ext.grid.filters.Filters',
        'Ext.button.Button',
        'Ext.form.field.ComboBox'
    ],

    controller: 'opisdel.main',
    viewModel: {
        type: 'opisdel.main'
    },
    autoShow: true,
    height: 464,
    width: 560,
    layout: 'fit',
    title: 'My Window',

    items: [
        {
            xtype: 'gridpanel',
            reference: 'grid',
            store: 'OpisDel.main',
            columns: [
                {
                    xtype: 'gridcolumn',
                    width: 71,
                    dataIndex: 'Index',
                    text: 'Индекс<br>дела',
                    filter: {
                        type: 'string'
                    }
                },
                {
                    xtype: 'gridcolumn',
                    flex: 1,
                    dataIndex: 'TitleBook',
                    text: 'Книга учета'
                },
                {
                    xtype: 'gridcolumn',
                    width: 74,
                    align: 'end',
                    dataIndex: 'TitleNumber',
                    text: 'Номер книги',
                    filter: {
                        type: 'string'
                    }
                },
                {
                    xtype: 'gridcolumn',
                    text: 'Крайние даты',
                    columns: [
                        {
                            xtype: 'datecolumn',
                            width: 75,
                            dataIndex: 'DateBegin',
                            text: 'Начало',
                            format: 'd-m-Y',
                            filter: {
                                type: 'date'
                            }
                        },
                        {
                            xtype: 'datecolumn',
                            width: 75,
                            dataIndex: 'DateEnd',
                            text: 'Конец',
                            format: 'd-m-Y',
                            filter: {
                                type: 'date'
                            }
                        }
                    ]
                },
                {
                    xtype: 'numbercolumn',
                    width: 75,
                    align: 'center',
                    dataIndex: 'Listov',
                    text: 'Кол-во<br>листов',
                    format: '0'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'Refer',
                    text: 'Примечание'
                },
                {
                    xtype: 'gridcolumn',
                    hidden: true,
                    dataIndex: 'InsertOtdel',
                    text: 'Отдел'
                }
            ],
            viewConfig: {
                listeners: {
                    itemdblclick: 'onTableItemDblClick',
                    selectionchange: 'onTableSelectionChange'
                }
            },
            dockedItems: [
                {
                    xtype: 'pagingtoolbar',
                    dock: 'bottom',
                    width: 360,
                    displayInfo: true
                }
            ],
            features: [
                {
                    ftype: 'grouping'
                }
            ],
            plugins: [
                {
                    ptype: 'gridfilters'
                }
            ]
        }
    ],
    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'top',
            items: [
                {
                    xtype: 'button',
                    reference: 'btnAdd',
                    disabled: true,
                    iconCls: 'icon-add',
                    text: 'Добавить',
                    listeners: {
                        click: 'onAddClick'
                    }
                },
                {
                    xtype: 'button',
                    reference: 'btnDelete',
                    disabled: true,
                    iconCls: 'icon-delete',
                    text: 'Удалить',
                    listeners: {
                        click: 'onDelClick'
                    }
                },
                {
                    xtype: 'button',
                    reference: 'btnExport',
                    disabled: true,
                    iconCls: 'icon-mime-excel',
                    text: 'Экспорт',
                    listeners: {
                        click: 'onExportClick'
                    }
                },
                {
                    xtype: 'combobox',
                    reference: 'Year',
                    fieldLabel: 'За год',
                    labelWidth: 50,
                    editable: false,
                    displayField: 'Year',
                    store: 'OpisDel.getYear',
                    valueField: 'Year',
                    listeners: {
                        change: 'onGetYearChange'
                    }
                },
                {
                    xtype: 'button',
                    reference: 'btnRefresh',
                    disabled: true,
                    iconCls: 'icon-refresh',
                    text: 'Обновить',
                    listeners: {
                        click: 'onRefreshClick'
                    }
                }
            ]
        }
    ],
    listeners: {
        afterrender: 'onWindowAfterRender'
    }

});