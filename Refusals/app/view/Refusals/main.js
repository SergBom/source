/*
 * File: app/view/Refusals/main.js
 *
 * This file was generated by Sencha Architect version 3.5.0.
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

Ext.define('Portal.view.Refusals.main', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.refusals',

    requires: [
        'Portal.view.Refusals.mainViewModel',
        'Portal.view.Refusals.mainViewController',
        'Ext.grid.Panel',
        'Ext.grid.column.RowNumberer',
        'Ext.grid.column.Action',
        'Ext.grid.column.Date',
        'Ext.view.Table',
        'Ext.grid.plugin.RowExpander',
        'Ext.XTemplate',
        'Ext.toolbar.Toolbar',
        'Ext.container.ButtonGroup',
        'Ext.button.Button',
        'Ext.form.field.Text'
    ],

    controller: 'refusalsmain',
    viewModel: {
        type: 'refusalsmain'
    },
    autoShow: true,
    height: 530,
    id: 'appRefusals',
    width: 579,
    layout: 'fit',
    title: 'My Window',
    defaultListenerScope: true,

    items: [
        {
            xtype: 'gridpanel',
            reference: 'grid',
            store: 'Refusals.main',
            columns: [
                {
                    xtype: 'rownumberer',
                    width: 31
                },
                {
                    xtype: 'actioncolumn',
                    width: 40,
                    iconCls: 'icon-edit',
                    items: [
                        {
                            handler: function(view, rowIndex, colIndex, item, e, record, row) {
                                var edit=Ext.create('Portal.view.Refusals.Edit');
                                edit.getReferences().Form.getForm().setValues(record.data);
                                edit.show();
                            }
                        }
                    ]
                },
                {
                    xtype: 'gridcolumn',
                    width: 130,
                    dataIndex: 'cad_num',
                    text: 'Кад.номер',
                    flex: 1
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'address',
                    text: 'Адрес',
                    flex: 1
                },
                {
                    xtype: 'datecolumn',
                    width: 75,
                    dataIndex: 'dateUpdate2',
                    formatter: 'date("Y-m-d")',
                    text: 'Дата'
                },
                {
                    xtype: 'actioncolumn',
                    renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                        if( value.trim()!==''){
                            this.items[0].iconCls='icon-document';
                            this.items[0].tooltip='Открыть документ';
                        }
                    },
                    width: 45,
                    dataIndex: 'document',
                    text: 'Документ',
                    items: [
                        {
                            handler: function(view, rowIndex, colIndex, item, e, record, row) {
                                /*Ext.create('Ext.Component', {
                                renderTo: Ext.getBody(),
                                cls: 'x-hidden',
                                autoEl: {
                                tag: 'iframe',
                                src: document.location.href+'data/Refusals/files/'+record.data.document
                                }
                                });*/
                                window.open(document.location.href+'data/Refusals/files/'+record.data.document);
                            }
                        }
                    ]
                },
                {
                    xtype: 'gridcolumn',
                    width: 67,
                    dataIndex: 'itsOk2',
                    text: 'Отработан'
                },
                {
                    xtype: 'actioncolumn',
                    renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                        switch(value){
                            case '0':this.items[0].iconCls='icon-ahtung';
                            this.items[0].tooltip='Не отработана';
                            break;
                            case '1':this.items[0].iconCls='icon-tick-3';
                            this.items[0].tooltip='Отработана';
                            break;
                        }
                    },
                    width: 31,
                    dataIndex: 'itsOk',
                    items: [
                        {
                            handler: function(view, rowIndex, colIndex, item, e, record, row) {
                                switch(record.data.itsOk){
                                    case '0':
                                    Ext.Msg.show({
                                        title:'Внимание',
                                        message: 'Данным действием Вы подтверждаете, что данная поездка состоялась в полном объеме!',
                                        buttons: Ext.Msg.YESNO,
                                        icon: Ext.Msg.QUESTION,
                                        fn: function(btn) {
                                            if (btn === 'yes') {
                                                view.mask('Подождите...');
                                                Ext.Ajax.request({
                                                    url: 'data/Refusals/refus-confirm.php',
                                                    params: {
                                                        id: record.data.id,
                                                        confirm: 1
                                                    },
                                                    success: function(response){
                                                        Ext.getStore('Refusals.main').reload();
                                                    }
                                                });
                                                view.unmask();
                                            }
                                        }
                                    });
                                    break;
                                    case '1':
                                    Ext.Msg.show({
                                        title:'Внимание',
                                        message: 'Вы действительно желаете вернуть статус поездки на НЕЗАВЕРШЕННЫЙ?',
                                        buttons: Ext.Msg.YESNO,
                                        icon: Ext.Msg.QUESTION,
                                        fn: function(btn) {
                                            if (btn === 'yes') {
                                                view.mask('Подождите...');
                                                Ext.Ajax.request({
                                                    url: 'data/Refusals/refus-confirm.php',
                                                    params: {
                                                        id: record.data.id,
                                                        confirm: 0
                                                    },
                                                    success: function(response){
                                                        Ext.getStore('Refusals.main').reload();
                                                    }
                                                });
                                                view.unmask();
                                            }
                                        }
                                    });
                                    break;
                                }
                            }
                        }
                    ]
                }
            ],
            plugins: [
                {
                    ptype: 'rowexpander',
                    rowBodyTpl: [
                        '<b>Пояснение:</b> {reference}<hr>',
                        '<span class="ref-NewEdit">Добавил: {userNameInsert} [{dateInsert}]<br>',
                        '    Изменил: {userNameUpdate} [{dateUpdate}]</span>'
                    ]
                }
            ],
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'top',
                    items: [
                        {
                            xtype: 'buttongroup',
                            title: 'Редактор',
                            columns: 3,
                            items: [
                                {
                                    xtype: 'button',
                                    reference: 'btnRefusalsAdd',
                                    id: 'btnRefusalsAdd',
                                    iconCls: 'icon-add',
                                    text: 'Добавить',
                                    listeners: {
                                        click: {
                                            fn: 'onBtnRefusalsAddClick',
                                            scope: 'controller'
                                        }
                                    }
                                },
                                {
                                    xtype: 'button',
                                    reference: 'btnRefusalsDel',
                                    disabled: true,
                                    id: 'btnRefusalsDel',
                                    iconCls: 'icon-delete',
                                    text: 'Удалить',
                                    listeners: {
                                        click: {
                                            fn: 'onBtnRefusalsDelClick',
                                            scope: 'controller'
                                        }
                                    }
                                },
                                {
                                    xtype: 'button',
                                    id: 'btnRefusalsRefresh',
                                    iconCls: 'icon-refresh',
                                    text: 'Обновить',
                                    listeners: {
                                        click: {
                                            fn: 'onBtnRefusalsRefreshClick',
                                            scope: 'controller'
                                        }
                                    }
                                }
                            ]
                        },
                        {
                            xtype: 'textfield',
                            flex: 1,
                            fieldLabel: 'Фильтр по кад.номеру и адресу',
                            labelAlign: 'top',
                            enableKeyEvents: true,
                            listeners: {
                                change: 'onTextfieldChange'
                            }
                        }
                    ]
                }
            ],
            listeners: {
                selectionchange: {
                    fn: 'onGridpanelSelectionChange',
                    scope: 'controller'
                }
            }
        }
    ],
    listeners: {
        afterrender: {
            fn: 'onAppRefusalsAfterRender',
            scope: 'controller'
        }
    },

    onTextfieldChange: function(field, newValue, oldValue, eOpts) {
        Ext.getStore('Refusals.main').load({params:{filter:newValue}});
    }

});