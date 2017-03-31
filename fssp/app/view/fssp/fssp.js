/*
 * File: app/view/fssp/fssp.js
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

Ext.define('Portal.view.fssp.fssp', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.fssp',

    requires: [
        'Portal.view.fssp.fsspViewModel',
        'Portal.view.fssp.fsspViewController',
        'Ext.tab.Panel',
        'Ext.tab.Tab',
        'Ext.form.Panel',
        'Ext.toolbar.Toolbar',
        'Ext.form.FieldSet',
        'Ext.form.field.Date',
        'Ext.form.field.ComboBox',
        'Ext.form.field.Number',
        'Ext.form.FieldContainer',
        'Ext.form.Label',
        'Ext.form.field.Display',
        'Ext.grid.Panel',
        'Ext.grid.column.RowNumberer',
        'Ext.grid.column.Date',
        'Ext.grid.column.Number',
        'Ext.view.Table'
    ],

    controller: 'fsspfssp',
    viewModel: {
        type: 'fsspfssp'
    },
    autoShow: true,
    height: 474,
    itemId: 'fssp',
    width: 611,
    layout: 'fit',
    title: 'Взаимодействие ФССП России и Росреестра',

    items: [
        {
            xtype: 'tabpanel',
            reference: 'fsspTabPanel',
            activeTab: 1,
            items: [
                {
                    xtype: 'panel',
                    layout: 'fit',
                    title: 'Ввод данных',
                    tabConfig: {
                        xtype: 'tab',
                        reference: 'tabDataInput'
                    },
                    items: [
                        {
                            xtype: 'form',
                            reference: 'formInput',
                            height: 200,
                            id: 'formInput',
                            itemId: 'formInput',
                            bodyPadding: 10,
                            header: false,
                            title: 'My Form',
                            url: 'data/fssp/save.php',
                            dockedItems: [
                                {
                                    xtype: 'toolbar',
                                    dock: 'top',
                                    formBind: true,
                                    items: [
                                        {
                                            xtype: 'button',
                                            cls: 'x-button-style1',
                                            id: 'btnSave',
                                            itemId: 'btnSave',
                                            iconCls: 'icon-disk',
                                            text: 'Сохранить',
                                            listeners: {
                                                click: 'onBtnSaveClick'
                                            }
                                        }
                                    ]
                                }
                            ],
                            items: [
                                {
                                    xtype: 'fieldset',
                                    height: 48,
                                    title: 'Отчетная дата',
                                    layout: {
                                        type: 'hbox',
                                        align: 'middle',
                                        pack: 'center'
                                    },
                                    items: [
                                        {
                                            xtype: 'datefield',
                                            id: 'DateInput',
                                            itemId: 'DateInput',
                                            name: 'DateInput',
                                            allowBlank: false,
                                            blankText: 'Данное поле обязательно к заполению',
                                            editable: false,
                                            format: 'd-m-Y',
                                            submitFormat: 'Y-m-d'
                                        }
                                    ]
                                },
                                {
                                    xtype: 'fieldset',
                                    height: 54,
                                    title: 'Территориальный отдел',
                                    layout: {
                                        type: 'vbox',
                                        align: 'stretch'
                                    },
                                    items: [
                                        {
                                            xtype: 'combobox',
                                            id: 'OtdelInput',
                                            itemId: 'OtdelInput',
                                            labelWidth: 200,
                                            name: 'OtdelInput',
                                            allowBlank: false,
                                            blankText: 'Данное поле обязательно к заполению',
                                            editable: false,
                                            displayField: 'name',
                                            store: 'fssp.otdels',
                                            valueField: 'id'
                                        }
                                    ]
                                },
                                {
                                    xtype: 'numberfield',
                                    anchor: '100%',
                                    id: 'DocsInput',
                                    itemId: 'DocsInput',
                                    fieldLabel: 'Количество поступивших постановлений',
                                    labelWidth: 300,
                                    name: 'DocsInput',
                                    allowBlank: false
                                },
                                {
                                    xtype: 'numberfield',
                                    anchor: '100%',
                                    id: 'RegsInput',
                                    itemId: 'RegsInput',
                                    fieldLabel: 'Количестве зарегистрированных арестов (запретов) на основании таких постановлений',
                                    labelWidth: 300,
                                    name: 'RegsInput',
                                    allowBlank: false
                                },
                                {
                                    xtype: 'fieldset',
                                    height: 85,
                                    title: 'По каким причинам не зарегистрированы',
                                    layout: {
                                        type: 'hbox',
                                        align: 'stretch',
                                        pack: 'center'
                                    },
                                    items: [
                                        {
                                            xtype: 'fieldcontainer',
                                            height: 120,
                                            padding: '0 5 0 0',
                                            items: [
                                                {
                                                    xtype: 'numberfield',
                                                    width: 200,
                                                    fieldLabel: 'Дубли',
                                                    name: 'DoubleInput',
                                                    allowBlank: false
                                                },
                                                {
                                                    xtype: 'numberfield',
                                                    width: 200,
                                                    fieldLabel: 'Технические причины',
                                                    name: 'TechInput',
                                                    allowBlank: false
                                                }
                                            ]
                                        },
                                        {
                                            xtype: 'fieldcontainer',
                                            height: 120,
                                            padding: '0 0 0 5',
                                            items: [
                                                {
                                                    xtype: 'numberfield',
                                                    width: 200,
                                                    fieldLabel: 'Отказы',
                                                    name: 'OtkazInput',
                                                    allowBlank: false
                                                },
                                                {
                                                    xtype: 'numberfield',
                                                    width: 200,
                                                    fieldLabel: 'Приостановления',
                                                    name: 'StopInput',
                                                    allowBlank: false
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    xtype: 'panel',
                                    html: 'Данные по "взаимодействию ФССП России и Росреестра" необходимо вносить ежедневно.\nЕсли в какой-то день не внесли, то можно внести за предыдущие дни, выбрав необходимую дату в форме ввода.\nТаким образом данные накапливаются по тем дням, которые вы указываете при вводе!!!<br />\n<b>Данные за один и тот же день ПЕРЕЗАПИСЫВАЮТСЯ!</b>',
                                    bodyCls: 'x-panel-style1',
                                    header: false
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'panel',
                    layout: 'fit',
                    title: 'Результат',
                    items: [
                        {
                            xtype: 'form',
                            reference: 'formResult',
                            id: 'formResult',
                            itemId: 'formResult',
                            bodyPadding: 10,
                            header: false,
                            url: 'data/fssp/calc.php',
                            items: [
                                {
                                    xtype: 'fieldset',
                                    height: 48,
                                    title: 'Период',
                                    layout: {
                                        type: 'hbox',
                                        align: 'stretchmax',
                                        pack: 'center'
                                    },
                                    items: [
                                        {
                                            xtype: 'datefield',
                                            formBind: false,
                                            id: 'dateBegin',
                                            itemId: 'dateBegin',
                                            maxWidth: 150,
                                            padding: '0 15 0 0',
                                            fieldLabel: 'С',
                                            labelWidth: 30,
                                            name: 'dateBegin',
                                            allowBlank: false,
                                            blankText: 'Данное поле обязательно к заполению',
                                            editable: false,
                                            format: 'd-m-Y',
                                            maxValue: 'new Date();',
                                            submitFormat: 'Y-m-d',
                                            listeners: {
                                                expand: 'onDateBeginExpand'
                                            }
                                        },
                                        {
                                            xtype: 'datefield',
                                            id: 'dateEnd',
                                            itemId: 'dateEnd',
                                            maxWidth: 150,
                                            fieldLabel: 'По',
                                            labelWidth: 30,
                                            name: 'dateEnd',
                                            allowBlank: false,
                                            allowOnlyWhitespace: false,
                                            editable: false,
                                            format: 'd-m-Y',
                                            submitFormat: 'Y-m-d'
                                        }
                                    ]
                                },
                                {
                                    xtype: 'fieldset',
                                    title: 'Территориальный отдел',
                                    items: [
                                        {
                                            xtype: 'combobox',
                                            anchor: '100%',
                                            name: 'Otdel',
                                            allowBlank: false,
                                            editable: false,
                                            validateBlank: true,
                                            displayField: 'name',
                                            store: 'fssp.otdels1',
                                            valueField: 'id'
                                        }
                                    ]
                                },
                                {
                                    xtype: 'fieldset',
                                    title: 'Результат',
                                    items: [
                                        {
                                            xtype: 'displayfield',
                                            anchor: '100%',
                                            alignTarget: 'right',
                                            fieldLabel: 'Количество поступивших постановлений',
                                            labelWidth: 300,
                                            name: 'DocsInput',
                                            fieldCls: 'f-bold-red',
                                            fieldStyle: '{font: bold}'
                                        },
                                        {
                                            xtype: 'displayfield',
                                            anchor: '100%',
                                            fieldLabel: 'Количестве зарегистрированных арестов (запретов) на основании таких постановлений',
                                            labelWidth: 300,
                                            name: 'RegsInput',
                                            fieldCls: 'f-bold-red'
                                        }
                                    ]
                                },
                                {
                                    xtype: 'fieldset',
                                    title: 'Дополнительно',
                                    layout: {
                                        type: 'hbox',
                                        align: 'middle',
                                        pack: 'center'
                                    },
                                    items: [
                                        {
                                            xtype: 'fieldcontainer',
                                            height: 120,
                                            padding: '0 5 0 0',
                                            items: [
                                                {
                                                    xtype: 'displayfield',
                                                    width: 200,
                                                    fieldLabel: 'Дубли',
                                                    labelWidth: 150,
                                                    name: 'DoubleInput',
                                                    fieldCls: 'f-bold'
                                                },
                                                {
                                                    xtype: 'displayfield',
                                                    width: 200,
                                                    fieldLabel: 'Технические причины',
                                                    labelWidth: 150,
                                                    name: 'TechInput',
                                                    fieldCls: 'f-bold'
                                                }
                                            ]
                                        },
                                        {
                                            xtype: 'fieldcontainer',
                                            height: 120,
                                            padding: '0 0 0 5',
                                            items: [
                                                {
                                                    xtype: 'displayfield',
                                                    width: 200,
                                                    fieldLabel: 'Отказы',
                                                    labelWidth: 110,
                                                    name: 'OtkazInput',
                                                    fieldCls: 'f-bold'
                                                },
                                                {
                                                    xtype: 'displayfield',
                                                    width: 200,
                                                    fieldLabel: 'Приостановления',
                                                    labelWidth: 110,
                                                    name: 'StopInput',
                                                    fieldCls: 'f-bold'
                                                }
                                            ]
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
                                            formBind: true,
                                            cls: 'x-button-style1',
                                            id: 'btnCalc',
                                            itemId: 'btnCalc',
                                            iconCls: 'icon-calculator',
                                            text: 'Посчитать',
                                            listeners: {
                                                click: 'onBtnCalcClick'
                                            }
                                        },
                                        {
                                            xtype: 'label',
                                            html: '<a href="http://sp.rosreestr.ru:8082/uit/Lists/List40/EditForm.aspx?ID=195&Source=http%3A%2F%2Fsp%2Erosreestr%2Eru%3A8082%2Fuit%2Flists%2Flist40%2Fallitems%2Easpx%3F%26View%3D%7BA2C8CCE3%2D8635%2D4DC9%2D91B6%2D8CF0CBFFE6E8%7D%26FilterField1%3DLinkTitle%26FilterValue1%3D51" target="blank">Ссылка на форму Росреестра</a>'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'panel',
                    reference: 'tableResult',
                    disabled: true,
                    id: 'tableResult',
                    itemId: 'tableResult',
                    layout: 'fit',
                    title: 'Таблица с результатом',
                    items: [
                        {
                            xtype: 'gridpanel',
                            header: false,
                            store: 'fssp.table',
                            columns: [
                                {
                                    xtype: 'rownumberer'
                                },
                                {
                                    xtype: 'datecolumn',
                                    width: 76,
                                    dataIndex: 'date',
                                    text: 'Дата',
                                    format: 'Y-m-d'
                                },
                                {
                                    xtype: 'numbercolumn',
                                    width: 60,
                                    dataIndex: 'doc_in',
                                    text: 'Принятых',
                                    format: '0,000'
                                },
                                {
                                    xtype: 'numbercolumn',
                                    width: 60,
                                    dataIndex: 'doc_reg',
                                    text: 'Зарегистрированных',
                                    format: '0,000'
                                },
                                {
                                    xtype: 'numbercolumn',
                                    width: 60,
                                    dataIndex: 'doc_double',
                                    text: 'Дубли',
                                    format: '0,000'
                                },
                                {
                                    xtype: 'numbercolumn',
                                    width: 60,
                                    dataIndex: 'doc_tech',
                                    text: 'Техн.',
                                    format: '0,000'
                                },
                                {
                                    xtype: 'numbercolumn',
                                    width: 60,
                                    dataIndex: 'doc_otkaz',
                                    text: 'Отказ',
                                    format: '0,000'
                                },
                                {
                                    xtype: 'numbercolumn',
                                    width: 60,
                                    dataIndex: 'doc_stop',
                                    text: 'Приост.',
                                    format: '0,000'
                                },
                                {
                                    xtype: 'gridcolumn',
                                    width: 60,
                                    dataIndex: 'otdel_name',
                                    text: 'Отдел',
                                    flex: 1
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ],
    listeners: {
        afterrender: 'onFsspAfterRender'
    }

});