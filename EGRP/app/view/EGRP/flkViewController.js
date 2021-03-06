/*
 * File: app/view/EGRP/flkViewController.js
 *
 * This file was generated by Sencha Architect version 4.1.1.
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

Ext.define('Portal.view.EGRP.flkViewController', {
   extend: 'Ext.app.ViewController',
   alias: 'controller.egrp.flk',

   LoadData: function() {
      var r=this.getReferences(),
          s=r.cbProtocol.getValue(),
          o=r.cbOtdel.getValue(),
          t=r.cbTypeSys.getValue(),
          f=r.form.getForm();
      if(s&&o&&t){
      this.getStore('Main').loadPage(1,{params:{session:s,otdel:o,stype:t}});
      f.reset();}
   },

   cE: function(v) {
      switch(v){
      case "0":return '<img src="/resources/images/diagona/02/10/21.png" alt="Bad">';
      case "1":return '<img src="/resources/images/diagona/02/10/22.png" alt="Ok">';
      case "2":return '<img src="/resources/images/diagona/02/10/24.png" alt="Not">';
      case "3":return '<img src="/resources/images/diagona/02/10/23.png" alt="No Err">';
      case "4":return '<img src="/resources/images/flag/png/ru.png">';
      }
      return v;
   },

   cRF: function(v) {
      switch(v){
      case 0:return '';
      case 1:return '<img src="/resources/images/flag/png/ru.png">';
      case 2:return '<img src="/resources/images/flag/png/ru_2.png">Мур';
      case 3:return '<img src="/resources/images/flag/png/ru_2.png">МО';
      }
      return '<img src="/resources/images/flag/png/ru_2.png">'+v;
   },

   b2v: function(v) {
      if(v=='on'){return 1;}
      else{return 0;}
   },

   onProtocolChange: function(field, newValue, oldValue, eOpts) {
      this.LoadData();
   },

   onOtdelChange: function(field, newValue, oldValue, eOpts) {
      this.LoadData();
   },

   onTypeSysChange: function(field, newValue, oldValue, eOpts) {
      this.LoadData();
   },

   onPtbarChange: function(pagingtoolbar, pageData, eOpts) {
      var r=this.getReferences(),s=r.cbProtocol.getValue(),
         o=r.cbOtdel.getValue(),t=r.cbTypeSys.getValue();
      this.getStore('Main').getProxy().setConfig({extraParams:{
         session:s,otdel:o,stype:t
      }});
      r.btSave.setDisabled(true);
      r.btRefError.setDisabled(true);
      r.btDetail.setDisabled(true);
      r.btDiagram.setDisabled(true);
   },

   onMSelectionChange: function(model, selected, eOpts) {
      var r=this.getReferences();
      r.form.getForm().loadRecord(selected[0]);
      r.btSave.setDisabled(false);
      r.btRefError.setDisabled(false);
      r.btDetail.setDisabled(false);
      r.btDiagram.setDisabled(false);
   },

   onSaveClick: function(button, e, eOpts) {
      var m=this,r=m.getReferences(),
         f=r.form.getForm(),s=m.getStore('Main'),
         gR=r.grid.getSelectionModel().getSelection(),
         rguid=r.REC_GUID.getValue();
      if (rguid) {
         f.submit({
            success:function(fr,a){
               var fv=fr.getFieldValues();
               gR[0].set('KLADR_NY',m.b2v(fv.KLADR_NEED)+'/'+m.b2v(fv.KLADR_YES));
               gR[0].set('PICTURE',m.cE(fv.STATUS_ERROR));
               gR[0].set('STATUS_ERROR',fv.STATUS_ERROR);
               s.sync();
               r.grid.getView().refresh();
            },
            failure:function(f,a){
               Ext.Msg.alert('Failed',a.result?a.result.message:'No response');
            }
         });
      }
   },

   onRefErrorClick: function(button, e, eOpts) {
      var me=this, r=this.getReferences().form.getForm().getFieldValues(),
         w=Ext.create('Portal.view.EGRP.detail',{
            title:'Детали ошибки из ТИРа',
            modal:true
         }).show(),g=w.down();
      w.getViewModel().getStore('detail').loadPage(1,{
         params:{
            t:1,
            external_id:r.EXTERNAL_ID,
            doc_guid:r.DOC_GUID,
            path:r.PATH
         }
      });
   },

   onDetailClick: function(button, e, eOpts) {
      var me=this, r=this.getReferences().form.getForm().getFieldValues(),
         w=Ext.create('Portal.view.EGRP.detail',{
            title:'Информация по "Российской Федерации" из ЕГРП',
            modal:true
         }).show(),g=w.down();
      w.getViewModel().getStore('detail').loadPage(1,{
         params:{
            t:2,
            essence_type:r.ESSENCE_TYPE,
            external_id:r.EXTERNAL_ID,
         }
      });


      /*

      var me=this,r=me.getReferences(),
      f=r.form.getForm().getFieldValues();
      me.getView().mask('Загружаю данные. Подождите...');
      Ext.Ajax.request({
      url:'data/EGRP/tir/tir-RF-detail.php',
      params:{essence_type:f.ESSENCE_TYPE,ext_id:f.EXTERNAL_ID},
      success:function(rp){
      me.getView().unmask();
      Ext.create('Ext.window.Window',{
      title:'Информация по "Российской Федерации" из ЕГРП',
      layout:'fit',height:300,width:450,modal:true,
      autoScroll:true,
      items:{html:rp.responseText,scrollable:true}
      }).show();
      },
      failure:function(rp){
      me.getView().unmask();
      console.log(rp);
      }
      });*/
   },

   onDiagramClick: function(button, e, eOpts) {
      var me=this,r=me.getReferences(),
         f=r.form.getForm().getFieldValues();
      me.getView().mask('Загружаю данные. Подождите...');
      Ext.Ajax.request({
         url:'data/EGRP/tir/tir-treeSubjIdNoAddr.php',
         params:{ext_id:f.EXTERNAL_ID},
         success:function(rp){
            me.getView().unmask();
            Ext.create('Ext.window.Window',{
               title:'Цепочка проблемных адресов КЛАДРа',
               layout:'fit',height:300,width:450,modal:true,
               autoScroll:true,
               items:{html:rp.responseText,scrollable:true}
            }).show();
         },
         failure:function(rp){
            me.getView().unmask();
            console.log(rp);
         }
      });
   }

});
