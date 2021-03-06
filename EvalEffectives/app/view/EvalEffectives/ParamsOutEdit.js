/*
 * File: app/view/EvalEffectives/ParamsOutEdit.js
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

Ext.define('Portal.view.EvalEffectives.ParamsOutEdit', {
    extend: 'Ext.window.Window',
    alias: 'widget.evaleffectivesparamsoutedit',

    requires: [
        'Portal.view.EvalEffectives.ParamsInEditViewModel1',
        'Ext.form.Panel',
        'Ext.toolbar.Toolbar',
        'Ext.button.Button',
        'Ext.form.field.Number',
        'Ext.form.field.HtmlEditor',
        'Ext.form.field.Hidden'
    ],

    viewModel: {
        type: 'evaleffectivesparamsoutedit'
    },
    modal: true,
    height: 348,
    width: 482,
    layout: 'fit',
    title: 'Редактор входных параметров',
    maximizable: true,
    defaultListenerScope: true,

    items: [
        {
            xtype: 'form',
            reference: 'form',
            bodyPadding: 10,
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'bottom',
                    layout: {
                        type: 'hbox',
                        padding: 10
                    },
                    items: [
                        {
                            xtype: 'container',
                            items: [
                                {
                                    xtype: 'button',
                                    formBind: true,
                                    iconCls: 'dialog-save',
                                    text: 'Сохранить',
                                    listeners: {
                                        click: 'onButtonClick1'
                                    }
                                },
                                {
                                    xtype: 'button',
                                    iconCls: 'dialog-cancel',
                                    text: 'Отмена',
                                    listeners: {
                                        click: 'onButtonClick'
                                    }
                                }
                            ]
                        }
                    ]
                }
            ],
            items: [
                {
                    xtype: 'numberfield',
                    anchor: '100%',
                    fieldLabel: 'Пункт документа',
                    labelWidth: 150,
                    name: 'Punkt',
                    allowBlank: false,
                    vtype: 'alphanum'
                },
                {
                    xtype: 'textfield',
                    anchor: '100%',
                    fieldLabel: 'Параметр (аббревиатура)',
                    labelWidth: 200,
                    name: 'C1',
                    allowBlank: false
                },
                {
                    xtype: 'htmleditor',
                    anchor: '100%',
                    formBind: true,
                    height: 125,
                    fieldLabel: 'Описание/Расшифровка',
                    labelAlign: 'top',
                    name: 'C2'
                },
                {
                    xtype: 'hiddenfield',
                    anchor: '100%',
                    fieldLabel: 'Label',
                    name: 'id'
                },
                {
                    xtype: 'textfield',
                    anchor: '100%',
                    fieldLabel: 'Формула',
                    labelAlign: 'top',
                    name: 'formula',
                    allowBlank: false
                }
            ]
        }
    ],

    onButtonClick1: function(button, e, eOpts) {
        var me=this,f=me.down('form'),v=f.getValues(),
            st=Ext.getStore('EvalEffectives.ParamsOut');
        if(f.isValid()) {
            me.mask('Подождите...');
            Ext.Ajax.request({
                url:'data/EvalEffectives/ParamsOut-post.php',
                params:v,
                success:function(r){st.reload();},
                failure:function(r,o){Ext.Msg.alert('ERROR!',r);}
            });
            me.unmask();
            me.close();
        }
    },

    onButtonClick: function(button, e, eOpts) {
        this.close();
    }

});