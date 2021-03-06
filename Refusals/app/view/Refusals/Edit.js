/*
 * File: app/view/Refusals/Edit.js
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

Ext.define('Portal.view.Refusals.Edit', {
    extend: 'Ext.window.Window',
    alias: 'widget.refusalsedit',

    requires: [
        'Portal.view.Refusals.EditViewModel',
        'Portal.view.Refusals.EditViewController',
        'Ext.form.Panel',
        'Ext.form.field.Hidden',
        'Ext.form.field.File',
        'Ext.form.field.HtmlEditor',
        'Ext.toolbar.Toolbar',
        'Ext.button.Button'
    ],

    controller: 'refusalsedit',
    viewModel: {
        type: 'refusalsedit'
    },
    height: 380,
    width: 527,
    layout: 'fit',
    title: 'Основание отказа регистрации',
    modal: true,
    defaultListenerScope: true,

    items: [
        {
            xtype: 'form',
            reference: 'Form',
            bodyPadding: 10,
            items: [
                {
                    xtype: 'hiddenfield',
                    anchor: '100%',
                    fieldLabel: 'Label',
                    name: 'id'
                },
                {
                    xtype: 'textfield',
                    anchor: '100%',
                    fieldLabel: 'Кадастровый номер',
                    name: 'cad_num'
                },
                {
                    xtype: 'textfield',
                    anchor: '100%',
                    fieldLabel: 'Адрес объекта',
                    name: 'address'
                },
                {
                    xtype: 'filefield',
                    anchor: '100%',
                    fieldLabel: 'Документ основания',
                    name: 'document',
                    emptyText: 'максимальный размер файла 20Мб'
                },
                {
                    xtype: 'htmleditor',
                    anchor: '100%',
                    fieldLabel: 'Примечание',
                    name: 'reference'
                }
            ],
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'bottom',
                    layout: {
                        type: 'hbox',
                        padding: 5
                    },
                    items: [
                        {
                            xtype: 'container',
                            padding: 5,
                            items: [
                                {
                                    xtype: 'button',
                                    id: 'btnRefusalsEditSave',
                                    iconCls: 'dialog-save',
                                    text: 'Сохранить',
                                    listeners: {
                                        click: {
                                            fn: 'onBtnRefusalsEditSaveClick',
                                            scope: 'controller'
                                        }
                                    }
                                },
                                {
                                    xtype: 'button',
                                    id: 'btnRefusalsEditCancel',
                                    iconCls: 'dialog-cancel',
                                    text: 'Отмена',
                                    listeners: {
                                        click: 'onBtnRefusalsEditCancelClick'
                                    }
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            xtype: 'component'
        }
    ],

    onBtnRefusalsEditCancelClick: function(button, e, eOpts) {
        this.close();
    }

});