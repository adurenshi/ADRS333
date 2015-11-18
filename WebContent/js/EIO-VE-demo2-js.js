//本文件对应的页面组所需的全局JS变量
var cVe= new EIO.ve();
var cVei = new EIO.vei();
var cVeUti = new EIO.veUti();
//Tree初始化－－－－－－－
var Dtree=cVei.initTree("ddd","<a href='' onclick=\"cVe.startReqByMsgMap(cVeName,'MsgInjectTree1','MsgInjectDTree1',cMsgConfigure)\">全国2</a>"); 

var cVeName="VeDemo1";//定义本应用的Ve引擎名称，用户自定义，用作服务按的消息处理调度
var cServerUri="EIOServletMsgEngine" //指定servlet的引用名，该名为web.xml中指定的<url-pattern>内容
var cMsgConfigure;
//树变量
var treevarvalue="";

///////////////////系统初始化消息//////////////////
//var cMsgConfigure1={"MsgQueryDb":{"MsgGetDbRecs":{"ReqFunc":"reqGetDbRecs","ResFunc":"resGetDbRecs","MsgHandle":"csAsc.ECOSS.reso.demo1.CMsgGetDbRecs.handleMsg"},"MsgGetDbRecsToVeGrid":{"ReqFunc":"reqGetDbRecsToVegrid","ResFunc":"resGetDbRecsToVegrid","MsgHandle":"csAsc.ECOSS.reso.demo1.CMsgGetDbRecs.handleMsg"},"MsgGetDbRecsToVeGrid0":{"ReqFunc":"reqGetDbRecsToVegrid0","ResFunc":"resGetDbRecsToVegrid0","MsgHandle":"csAsc.ECOSS.reso.demo1.CMsgGetDbRecs.handleMsgHttp0"},"MsgGetDbRecsToVeGrid1":{"ReqFunc":"reqGetDbRecsToVegrid1","ResFunc":"resGetDbRecsToVegrid1","MsgHandle":"csAsc.ECOSS.reso.demo1.CMsgGetDbRecs.handleMsgHttp1"},"MsgGetDbRecstoUri":{"ReqFunc":"reqGetDbRecsUri","ResFunc":"resGetDbRecsUri","MsgHandle":"csAsc.ECOSS.reso.demo1.CMsgGetDbRecs.handleMsgGetUri"},"MsgGetDbRecstomakecardno1":{"ReqFunc":"reqGetDbRecsmakecard1","ResFunc":"resGetDbRecsmakecard1","MsgHandle":"csAsc.ECOSS.reso.demo1.CMsgGetDbRecs.MsgGetDbRecstomakecardno1"},"MsgGetDbRecstomakecardno2":{"ReqFunc":"reqGetDbRecsmakecard2","ResFunc":"resGetDbRecsmakecard2","MsgHandle":"csAsc.ECOSS.reso.demo1.CMsgGetDbRecs.MsgGetDbRecstomakecardno2"},"MsgGetDbRecstomakecardno3":{"ReqFunc":"reqGetDbRecsmakecard3","ResFunc":"resGetDbRecsmakecard3","MsgHandle":"csAsc.ECOSS.reso.demo1.CMsgGetDbRecs.MsgGetDbRecstomakecardno3"},"MsgGetDbRecstomakecardno4":{"ReqFunc":"reqGetDbRecsmakecard4","ResFunc":"resGetDbRecsmakecard4","MsgHandle":"csAsc.ECOSS.reso.demo1.CMsgGetDbRecs.MsgGetDbRecstomakecardno4"},"MsgGetDbRecstoselectcardfactory":{"ReqFunc":"reqFormDatatoselectcardfactory","ResFunc":"resGetDbRecselectcardfactory","MsgHandle":"csAsc.ECOSS.reso.demo1.CMsgGetDbRecs.MsgGetDbRecstoselectcardfactory"},"MsgGetDbRecstocardfactory":{"ReqFunc":"reqFormDatatocardfactory","ResFunc":"resGetDbReccardfactory","MsgHandle":"csAsc.ECOSS.reso.demo1.CMsgGetDbRecs.MsgGetDbRecstocardfactory"},"MsgGetDbRecstosubpackupdate":{"ReqFunc":"reqFormDatato","ResFunc":"resGetDbRecsseccess","MsgHandle":"csAsc.ECOSS.reso.demo1.CMsgGetDbRecs.handleMsgHttpsubpackUpdate"},"MsgGetDbRecstomakecardfenPei":{"ReqFunc":"reqFormDatatofenpai","ResFunc":"resGetDbRecsfenpai","MsgHandle":"csAsc.ECOSS.reso.demo1.CMsgGetDbRecs.handleMsgHttpmakecardfenpei"},"MsgGetDbRecstoapprovaltask1":{"ReqFunc":"reqFormDatatoapproval1","ResFunc":"resGetDbRecsapproval1","MsgHandle":"csAsc.ECOSS.reso.demo1.CMsgGetDbRecs.handleMsgHttpapproval1"},"MsgGetDbRecstoapprovaltask2":{"ReqFunc":"reqFormDatatoapproval2","ResFunc":"resGetDbRecsapproval2","MsgHandle":"csAsc.ECOSS.reso.demo1.CMsgGetDbRecs.handleMsgHttpapproval2"},"MsgGetDbRecstobackplate1":{"ReqFunc":"reqFormDatatobackplate1","ResFunc":"resGetDbRecsbackplate1","MsgHandle":"csAsc.ECOSS.reso.demo1.CMsgGetDbRecs.handleMsgHttpbackplate1"},"MsgGetDbRecstobackplate2":{"ReqFunc":"reqFormDatatobackplate2","ResFunc":"resGetDbRecsbackplate2","MsgHandle":"csAsc.ECOSS.reso.demo1.CMsgGetDbRecs.handleMsgHttpbackplate2"},"MsgGetDbRecstobackplate3":{"ReqFunc":"reqFormDatatobackplate3","ResFunc":"resGetDbRecsbackplate3","MsgHandle":"csAsc.ECOSS.reso.demo1.CMsgGetDbRecs.handleMsgHttpbackplate3"},"MsgGetDbRecstoprogress":{"ReqFunc":"reqFormDatatoprogress","ResFunc":"resGetDbRecsprogress","MsgHandle":"csAsc.ECOSS.reso.demo1.CMsgGetDbRecs.handleMsgHttpprogress"},"MsgGetDbRecstoselect1":{"ReqFunc":"reqFormDatatoselect1","ResFunc":"resGetDbRecsselect1","MsgHandle":"csAsc.ECOSS.reso.demo1.CMsgGetDbRecs.handleMsgHttpselect1"},"MsgGetDbRecstomaketask1":{"ReqFunc":"reqFormDatatomaketast1","ResFunc":"resGetDbRecmaketast1","MsgHandle":"csAsc.ECOSS.reso.demo1.CMsgGetDbRecs.handleMsgHttpmaketask1"},"MsgGetDbRecstomaketask2":{"ReqFunc":"reqFormDatatomaketast2","ResFunc":"resGetDbRecmaketast2","MsgHandle":"csAsc.ECOSS.reso.demo1.CMsgGetDbRecs.handleMsgHttpmaketask2"},"MsgGetDbRecstoaccepterdata1":{"ReqFunc":"reqFormDatatoaccepterdata1","ResFunc":"resGetDbRecaccepterdata1","MsgHandle":"csAsc.ECOSS.reso.demo1.CMsgGetDbRecs.handleMsgHttpaccepterdata1"},"MsgGetDbRecstoaccepterdata2":{"ReqFunc":"reqFormDatatoaccepterdata2","ResFunc":"resGetDbRecaccepterdata2","MsgHandle":"csAsc.ECOSS.reso.demo1.CMsgGetDbRecs.handleMsgHttpaccepterdata2"},"MsgGetDbRecstoreportmakestate1":{"ReqFunc":"reqFormDatatoreportmakestate1","ResFunc":"resGetDbRecreportmakestate1","MsgHandle":"csAsc.ECOSS.reso.demo1.CMsgGetDbRecs.handleMsgHttpreportmakestate1"},"MsgGetDbRecstoreportmakestate2":{"ReqFunc":"reqFormDatatoreportmakestate2","ResFunc":"resGetDbRecreportmakestate2","MsgHandle":"csAsc.ECOSS.reso.demo1.CMsgGetDbRecs.handleMsgHttpreportmakestate2"},"MsgGetDbRecstoreportgoback0":{"ReqFunc":"reqFormDatatoreportgoback0","ResFunc":"resGetDbRecreportgoback0","MsgHandle":"csAsc.ECOSS.reso.demo1.CMsgGetDbRecs.handleMsgHttpreportgoback0"},"MsgGetDbRecstoreportgoback1":{"ReqFunc":"reqFormDatatoreportgoback1","ResFunc":"resGetDbRecreportgoback1","MsgHandle":"csAsc.ECOSS.reso.demo1.CMsgGetDbRecs.handleMsgHttpreportgoback1"},"MsgGetDbRecstoreportgoback2":{"ReqFunc":"reqFormDatatoreportgoback2","ResFunc":"resGetDbRecreportgoback2","MsgHandle":"csAsc.ECOSS.reso.demo1.CMsgGetDbRecs.handleMsgHttpreportgoback2"},"MsgGetDbRecstoreportgoback3":{"ReqFunc":"reqFormDatatoreportgoback3","ResFunc":"resGetDbRecreportgoback3","MsgHandle":"csAsc.ECOSS.reso.demo1.CMsgGetDbRecs.handleMsgHttpreportgoback3"},"MsgGetDbRecstobadcardmanage1":{"ReqFunc":"reqFormDatatobadcardmanage1","ResFunc":"resGetDbRecbadcardmanage1","MsgHandle":"csAsc.ECOSS.reso.demo1.CMsgGetDbRecs.handleMsgHttpbadcardmanage1"},"MsgGetDbRecstobadcardmanage2":{"ReqFunc":"reqFormDatatobadcardmanage2","ResFunc":"resGetDbRecbadcardmanage2","MsgHandle":"csAsc.ECOSS.reso.demo1.CMsgGetDbRecs.handleMsgHttpbadcardmanage2"},"MsgGetDbRecstobadcardmanage3":{"ReqFunc":"reqFormDatatobadcardmanage3","ResFunc":"resGetDbRecbadcardmanage3","MsgHandle":"csAsc.ECOSS.reso.demo1.CMsgGetDbRecs.handleMsgHttpbadcardmanage3"},"MsgGetDbRecstobadcardcheck1":{"ReqFunc":"reqFormDatatobadcardcheck1","ResFunc":"resGetDbRecbadcardcheck1","MsgHandle":"csAsc.ECOSS.reso.demo1.CMsgGetDbRecs.handleMsgHttpbadcardcheck1"},"MsgGetDbRecstobadcardcheck2":{"ReqFunc":"reqFormDatatobadcardcheck2","ResFunc":"resGetDbRecbadcardcheck2","MsgHandle":"csAsc.ECOSS.reso.demo1.CMsgGetDbRecs.handleMsgHttpbadcardcheck2"},"MsgGetDbRecstocardpersonmanager1":{"ReqFunc":"reqFormDatatocardpersonmanager1","ResFunc":"resGetDbReccardpersonmanager1","MsgHandle":"csAsc.ECOSS.reso.demo1.CMsgGetDbRecs.handleMsgHttpcardpersonmanager1"},"MsgGetDbRecstocardpersonmanager2":{"ReqFunc":"reqFormDatatocardpersonmanager2","ResFunc":"resGetDbReccardpersonmanager2","MsgHandle":"csAsc.ECOSS.reso.demo1.CMsgGetDbRecs.handleMsgHttpcardpersonmanager2"},"MsgGetDbRecstocardpersonmanager3":{"ReqFunc":"reqFormDatatocardpersonmanager3","ResFunc":"resGetDbReccardpersonmanager3","MsgHandle":"csAsc.ECOSS.reso.demo1.CMsgGetDbRecs.handleMsgHttpcardpersonmanager3"},"MsgGetDbRecstobadquerycount_1":{"ReqFunc":"reqFormDatatobadquerycount_1","ResFunc":"resGetDbRecbadquerycount_1","MsgHandle":"csAsc.ECOSS.reso.demo1.CMsgGetDbRecs.handleMsgHttpbadquerycount_1"},"MsgGetDbRecstobadquerycount_2":{"ReqFunc":"reqFormDatatobadquerycount_2","ResFunc":"resGetDbRecbadquerycount_2","MsgHandle":"csAsc.ECOSS.reso.demo1.CMsgGetDbRecs.handleMsgHttpbadquerycount_2"},"MsgGetDbRecstobadquerycount_3":{"ReqFunc":"reqFormDatatobadquerycount_3","ResFunc":"resGetDbRecbadquerycount_3","MsgHandle":"csAsc.ECOSS.reso.demo1.CMsgGetDbRecs.handleMsgHttpbadquerycount_3"},"MsgGetDbRecstobadquerycount_4":{"ReqFunc":"reqFormDatatobadquerycount_4","ResFunc":"resGetDbRecbadquerycount_4","MsgHandle":"csAsc.ECOSS.reso.demo1.CMsgGetDbRecs.handleMsgHttpbadquerycount_4"},"MsgGetDbRecstobadquerycount_5":{"ReqFunc":"reqFormDatatobadquerycount_5","ResFunc":"resGetDbRecbadquerycount_5","MsgHandle":"csAsc.ECOSS.reso.demo1.CMsgGetDbRecs.handleMsgHttpbadquerycount_5"}},"MsgInjectBuffer":{"MsgInjectBuff1":{"ReqFunc":"reqInjectBuffer","ResFunc":"resInjectBuffer","MsgHandle":"csAsc.ECOSS.reso.demo1.CMsgGetBufferData.handleMsg"},"MsgInjectBuff2":{"ReqFunc":"reqInjectBuffer","ResFunc":"resInjectBuffer","MsgHandle":""}},"MsgInjectTree1":{"MsgInjectDTree1":{"ReqFunc":"reqInjectTree","ResFunc":"resInjectTree","MsgHandle":"csAsc.ECOSS.reso.demo1.CMsgGetTree.handleMsg"}}};

//var cMsgConfigure1='{"MsgSendFormData":{"MsgCheckFormData":{"ReqFunc":"reqCheckFormData","ResFunc":"resCheckFormData","MsgHandle":"csAsc.ECOSS.reso.demo1.CMsgCheckFormData.handleMsg"},"MsgProcessFormData":{"ReqFunc":"sendFormdata","ResFunc":"refreshForm","MsgHandle":""}},"MsgVcInject":{"MsgVcInjectSelect":{"ReqFunc":"reqInjectSelect","ResFunc":"resInjectSelect","MsgHandle":"csAsc.ECOSS.reso.demo1.CMsgVcInject.handleMsg"},"MsgVcInjectInput":{"ReqFunc":"sendVcIds","ResFunc":"resInjectVcSelect","MsgHandle":""},"MsgInjectTree":{"ReqFunc":"reqInjectTree","ResFunc":"resInjectTree","MsgHandle":"csAsc.ECOSS.reso.demo1.CMsgGetTree.handleMsg"}},"MsgGetNewPage":{"MsgOpenNewWindow":{"ReqFunc":"reqOpenNewWindow","ResFunc":"resOpenNewWindow","MsgHandle":"csAsc.ECOSS.reso.demo1.CMsgSendNewPage.handleMsg"},"MsgSwitchPage":{"ReqFunc":"reqGetNewPageData","ResFunc":"resGetNewPageData","MsgHandle":"csAsc.ECOSS.reso.demo1.CMsgQueryTableByKeys.handleMsg"},"MsgOpenNewPageFile":{"ReqFunc":"reqOpenNewPageFile","ResFunc":"resOpenNewPageFile","MsgHandle":"csAsc.ECOSS.reso.demo1.COpenHtmlFile.handleMsg"}},"MsgQueryDb":{"MsgGetDbRecs":{"ReqFunc":"reqGetDbRecs","ResFunc":"resGetDbRecs","MsgHandle":"csAsc.ECOSS.reso.demo1.CMsgGetDbRecs.handleMsg"},"MsgGetDbRecsToVeGrid":{"ReqFunc":"reqGetDbRecsToVegrid","ResFunc":"resGetDbRecsToVegrid","MsgHandle":"csAsc.ECOSS.reso.demo1.CMsgGetDbRecs.handleMsg"},"MsgGetDbRecsToVeGrid0":{"ReqFunc":"reqGetDbRecsToVegrid0","ResFunc":"resGetDbRecsToVegrid0","MsgHandle":"csAsc.ECOSS.reso.demo1.CMsgGetDbRecs.handleMsgHttp0"},"MsgGetDbRecsToVeGrid1":{"ReqFunc":"reqGetDbRecsToVegrid1","ResFunc":"resGetDbRecsToVegrid1","MsgHandle":"csAsc.ECOSS.reso.demo1.CMsgGetDbRecs.handleMsgHttp1"},"MsgGetDbRecstoUri":{"ReqFunc":"reqGetDbRecsUri","ResFunc":"resGetDbRecsUri","MsgHandle":"csAsc.ECOSS.reso.demo1.CMsgGetDbRecs.handleMsgGetUri"},"MsgGetDbRecstomakecardno1":{"ReqFunc":"reqGetDbRecsmakecard1","ResFunc":"resGetDbRecsmakecard1","MsgHandle":"csAsc.ECOSS.reso.demo1.CMsgGetDbRecs.MsgGetDbRecstomakecardno1"},"MsgGetDbRecstomakecardno2":{"ReqFunc":"reqGetDbRecsmakecard2","ResFunc":"resGetDbRecsmakecard2","MsgHandle":"csAsc.ECOSS.reso.demo1.CMsgGetDbRecs.MsgGetDbRecstomakecardno2"},"MsgGetDbRecstomakecardno3":{"ReqFunc":"reqGetDbRecsmakecard3","ResFunc":"resGetDbRecsmakecard3","MsgHandle":"csAsc.ECOSS.reso.demo1.CMsgGetDbRecs.MsgGetDbRecstomakecardno3"},"MsgGetDbRecstomakecardno4":{"ReqFunc":"reqGetDbRecsmakecard4","ResFunc":"resGetDbRecsmakecard4","MsgHandle":"csAsc.ECOSS.reso.demo1.CMsgGetDbRecs.MsgGetDbRecstomakecardno4"},"MsgGetDbRecstoselectcardfactory":{"ReqFunc":"reqFormDatatoselectcardfactory","ResFunc":"resGetDbRecselectcardfactory","MsgHandle":"csAsc.ECOSS.reso.demo1.CMsgGetDbRecs.MsgGetDbRecstoselectcardfactory"},"MsgGetDbRecstocardfactory":{"ReqFunc":"reqFormDatatocardfactory","ResFunc":"resGetDbReccardfactory","MsgHandle":"csAsc.ECOSS.reso.demo1.CMsgGetDbRecs.MsgGetDbRecstocardfactory"},"MsgGetDbRecstosubpackupdate":{"ReqFunc":"reqFormDatato","ResFunc":"resGetDbRecsseccess","MsgHandle":"csAsc.ECOSS.reso.demo1.CMsgGetDbRecs.handleMsgHttpsubpackUpdate"},"MsgGetDbRecstomakecardfenPei":{"ReqFunc":"reqFormDatatofenpai","ResFunc":"resGetDbRecsfenpai","MsgHandle":"csAsc.ECOSS.reso.demo1.CMsgGetDbRecs.handleMsgHttpmakecardfenpei"},"MsgGetDbRecstoapprovaltask1":{"ReqFunc":"reqFormDatatoapproval1","ResFunc":"resGetDbRecsapproval1","MsgHandle":"csAsc.ECOSS.reso.demo1.CMsgGetDbRecs.handleMsgHttpapproval1"},"MsgGetDbRecstoapprovaltask2":{"ReqFunc":"reqFormDatatoapproval2","ResFunc":"resGetDbRecsapproval2","MsgHandle":"csAsc.ECOSS.reso.demo1.CMsgGetDbRecs.handleMsgHttpapproval2"},"MsgGetDbRecstobackplate1":{"ReqFunc":"reqFormDatatobackplate1","ResFunc":"resGetDbRecsbackplate1","MsgHandle":"csAsc.ECOSS.reso.demo1.CMsgGetDbRecs.handleMsgHttpbackplate1"},"MsgGetDbRecstobackplate2":{"ReqFunc":"reqFormDatatobackplate2","ResFunc":"resGetDbRecsbackplate2","MsgHandle":"csAsc.ECOSS.reso.demo1.CMsgGetDbRecs.handleMsgHttpbackplate2"},"MsgGetDbRecstobackplate3":{"ReqFunc":"reqFormDatatobackplate3","ResFunc":"resGetDbRecsbackplate3","MsgHandle":"csAsc.ECOSS.reso.demo1.CMsgGetDbRecs.handleMsgHttpbackplate3"},"MsgGetDbRecstoprogress":{"ReqFunc":"reqFormDatatoprogress","ResFunc":"resGetDbRecsprogress","MsgHandle":"csAsc.ECOSS.reso.demo1.CMsgGetDbRecs.handleMsgHttpprogress"},"MsgGetDbRecstoselect1":{"ReqFunc":"reqFormDatatoselect1","ResFunc":"resGetDbRecsselect1","MsgHandle":"csAsc.ECOSS.reso.demo1.CMsgGetDbRecs.handleMsgHttpselect1"},"MsgGetDbRecstomaketask1":{"ReqFunc":"reqFormDatatomaketast1","ResFunc":"resGetDbRecmaketast1","MsgHandle":"csAsc.ECOSS.reso.demo1.CMsgGetDbRecs.handleMsgHttpmaketask1"},"MsgGetDbRecstomaketask2":{"ReqFunc":"reqFormDatatomaketast2","ResFunc":"resGetDbRecmaketast2","MsgHandle":"csAsc.ECOSS.reso.demo1.CMsgGetDbRecs.handleMsgHttpmaketask2"},"MsgGetDbRecstoaccepterdata1":{"ReqFunc":"reqFormDatatoaccepterdata1","ResFunc":"resGetDbRecaccepterdata1","MsgHandle":"csAsc.ECOSS.reso.demo1.CMsgGetDbRecs.handleMsgHttpaccepterdata1"},"MsgGetDbRecstoaccepterdata2":{"ReqFunc":"reqFormDatatoaccepterdata2","ResFunc":"resGetDbRecaccepterdata2","MsgHandle":"csAsc.ECOSS.reso.demo1.CMsgGetDbRecs.handleMsgHttpaccepterdata2"},"MsgGetDbRecstoreportmakestate1":{"ReqFunc":"reqFormDatatoreportmakestate1","ResFunc":"resGetDbRecreportmakestate1","MsgHandle":"csAsc.ECOSS.reso.demo1.CMsgGetDbRecs.handleMsgHttpreportmakestate1"},"MsgGetDbRecstoreportmakestate2":{"ReqFunc":"reqFormDatatoreportmakestate2","ResFunc":"resGetDbRecreportmakestate2","MsgHandle":"csAsc.ECOSS.reso.demo1.CMsgGetDbRecs.handleMsgHttpreportmakestate2"},"MsgGetDbRecstoreportgoback0":{"ReqFunc":"reqFormDatatoreportgoback0","ResFunc":"resGetDbRecreportgoback0","MsgHandle":"csAsc.ECOSS.reso.demo1.CMsgGetDbRecs.handleMsgHttpreportgoback0"},"MsgGetDbRecstoreportgoback1":{"ReqFunc":"reqFormDatatoreportgoback1","ResFunc":"resGetDbRecreportgoback1","MsgHandle":"csAsc.ECOSS.reso.demo1.CMsgGetDbRecs.handleMsgHttpreportgoback1"},"MsgGetDbRecstoreportgoback2":{"ReqFunc":"reqFormDatatoreportgoback2","ResFunc":"resGetDbRecreportgoback2","MsgHandle":"csAsc.ECOSS.reso.demo1.CMsgGetDbRecs.handleMsgHttpreportgoback2"},"MsgGetDbRecstoreportgoback3":{"ReqFunc":"reqFormDatatoreportgoback3","ResFunc":"resGetDbRecreportgoback3","MsgHandle":"csAsc.ECOSS.reso.demo1.CMsgGetDbRecs.handleMsgHttpreportgoback3"},"MsgGetDbRecstobadcardmanage1":{"ReqFunc":"reqFormDatatobadcardmanage1","ResFunc":"resGetDbRecbadcardmanage1","MsgHandle":"csAsc.ECOSS.reso.demo1.CMsgGetDbRecs.handleMsgHttpbadcardmanage1"},"MsgGetDbRecstobadcardmanage2":{"ReqFunc":"reqFormDatatobadcardmanage2","ResFunc":"resGetDbRecbadcardmanage2","MsgHandle":"csAsc.ECOSS.reso.demo1.CMsgGetDbRecs.handleMsgHttpbadcardmanage2"},"MsgGetDbRecstobadcardmanage3":{"ReqFunc":"reqFormDatatobadcardmanage3","ResFunc":"resGetDbRecbadcardmanage3","MsgHandle":"csAsc.ECOSS.reso.demo1.CMsgGetDbRecs.handleMsgHttpbadcardmanage3"},"MsgGetDbRecstobadcardcheck1":{"ReqFunc":"reqFormDatatobadcardcheck1","ResFunc":"resGetDbRecbadcardcheck1","MsgHandle":"csAsc.ECOSS.reso.demo1.CMsgGetDbRecs.handleMsgHttpbadcardcheck1"},"MsgGetDbRecstobadcardcheck2":{"ReqFunc":"reqFormDatatobadcardcheck2","ResFunc":"resGetDbRecbadcardcheck2","MsgHandle":"csAsc.ECOSS.reso.demo1.CMsgGetDbRecs.handleMsgHttpbadcardcheck2"},"MsgGetDbRecstocardpersonmanager1":{"ReqFunc":"reqFormDatatocardpersonmanager1","ResFunc":"resGetDbReccardpersonmanager1","MsgHandle":"csAsc.ECOSS.reso.demo1.CMsgGetDbRecs.handleMsgHttpcardpersonmanager1"},"MsgGetDbRecstocardpersonmanager2":{"ReqFunc":"reqFormDatatocardpersonmanager2","ResFunc":"resGetDbReccardpersonmanager2","MsgHandle":"csAsc.ECOSS.reso.demo1.CMsgGetDbRecs.handleMsgHttpcardpersonmanager2"},"MsgGetDbRecstocardpersonmanager3":{"ReqFunc":"reqFormDatatocardpersonmanager3","ResFunc":"resGetDbReccardpersonmanager3","MsgHandle":"csAsc.ECOSS.reso.demo1.CMsgGetDbRecs.handleMsgHttpcardpersonmanager3"},"MsgGetDbRecstobadquerycount_1":{"ReqFunc":"reqFormDatatobadquerycount_1","ResFunc":"resGetDbRecbadquerycount_1","MsgHandle":"csAsc.ECOSS.reso.demo1.CMsgGetDbRecs.handleMsgHttpbadquerycount_1"},"MsgGetDbRecstobadquerycount_2":{"ReqFunc":"reqFormDatatobadquerycount_2","ResFunc":"resGetDbRecbadquerycount_2","MsgHandle":"csAsc.ECOSS.reso.demo1.CMsgGetDbRecs.handleMsgHttpbadquerycount_2"},"MsgGetDbRecstobadquerycount_3":{"ReqFunc":"reqFormDatatobadquerycount_3","ResFunc":"resGetDbRecbadquerycount_3","MsgHandle":"csAsc.ECOSS.reso.demo1.CMsgGetDbRecs.handleMsgHttpbadquerycount_3"},"MsgGetDbRecstobadquerycount_4":{"ReqFunc":"reqFormDatatobadquerycount_4","ResFunc":"resGetDbRecbadquerycount_4","MsgHandle":"csAsc.ECOSS.reso.demo1.CMsgGetDbRecs.handleMsgHttpbadquerycount_4"},"MsgGetDbRecstobadquerycount_5":{"ReqFunc":"reqFormDatatobadquerycount_5","ResFunc":"resGetDbRecbadquerycount_5","MsgHandle":"csAsc.ECOSS.reso.demo1.CMsgGetDbRecs.handleMsgHttpbadquerycount_5"}},"MsgInjectBuffer":{"MsgInjectBuff1":{"ReqFunc":"reqInjectBuffer","ResFunc":"resInjectBuffer","MsgHandle":"csAsc.ECOSS.reso.demo1.CMsgGetBufferData.handleMsg"},"MsgInjectBuff2":{"ReqFunc":"reqInjectBuffer","ResFunc":"resInjectBuffer","MsgHandle":""}},"MsgInjectTree1":{"MsgInjectDTree1":{"ReqFunc":"reqInjectTree","ResFunc":"resInjectTree","MsgHandle":"csAsc.ECOSS.reso.demo1.CMsgGetTree.handleMsg"}}}';
var cMsgConfigure1='{"MsgSendFormData":{"MsgCheckFormData":{"ReqFunc":"reqCheckFormData","ResFunc":"resCheckFormData","MsgHandle":"csAsc.ECOSS.reso.demo1.CMsgCheckFormData.handleMsg"},"MsgProcessFormData":{"ReqFunc":"sendFormdata","ResFunc":"refreshForm","MsgHandle":""}},"MsgVcInject":{"MsgVcInjectSelect":{"ReqFunc":"reqInjectSelect","ResFunc":"resInjectSelect","MsgHandle":"csAsc.ECOSS.reso.demo1.CMsgVcInject.handleMsg"},"MsgVcInjectInput":{"ReqFunc":"sendVcIds","ResFunc":"resInjectVcSelect","MsgHandle":""},"MsgInjectTree":{"ReqFunc":"reqInjectTree","ResFunc":"resInjectTree","MsgHandle":"csAsc.ECOSS.reso.demo1.CMsgGetTree.handleMsg"}},"MsgGetNewPage":{"MsgOpenNewWindow":{"ReqFunc":"reqOpenNewWindow","ResFunc":"resOpenNewWindow","MsgHandle":"csAsc.ECOSS.reso.demo1.CMsgSendNewPage.handleMsg"},"MsgSwitchPage":{"ReqFunc":"reqGetNewPageData","ResFunc":"resGetNewPageData","MsgHandle":"csAsc.ECOSS.reso.demo1.CMsgQueryTableByKeys.handleMsg"},"MsgOpenNewPageFile":{"ReqFunc":"reqOpenNewPageFile","ResFunc":"resOpenNewPageFile","MsgHandle":"csAsc.ECOSS.reso.demo1.COpenHtmlFile.handleMsg"}},"MsgQueryDb":{"MsgGetDbRecs":{"ReqFunc":"reqGetDbRecs","ResFunc":"resGetDbRecs","MsgHandle":"csAsc.ECOSS.reso.demo1.CMsgGetDbRecs.handleMsg"},"MsgGetDbRecsToVeGrid":{"ReqFunc":"reqGetDbRecsToVegrid","ResFunc":"resGetDbRecsToVegrid","MsgHandle":"csAsc.ECOSS.reso.demo1.CMsgGetDbRecs.handleMsg"},"MsgGetDbRecsToVeGrid0":{"ReqFunc":"reqGetDbRecsToVegrid0","ResFunc":"resGetDbRecsToVegrid0","MsgHandle":"csAsc.ECOSS.reso.demo1.CMsgGetDbRecs.handleMsgHttp0"},"MsgGetDbRecsToVeGrid1":{"ReqFunc":"reqGetDbRecsToVegrid1","ResFunc":"resGetDbRecsToVegrid1","MsgHandle":"csAsc.ECOSS.reso.demo1.CMsgGetDbRecs.handleMsgHttp1"},"MsgGetDbRecstoUri":{"ReqFunc":"reqGetDbRecsUri","ResFunc":"resGetDbRecsUri","MsgHandle":"csAsc.ECOSS.reso.demo1.CMsgGetDbRecs.handleMsgGetUri"},"MsgGetDbRecstomakecardno1":{"ReqFunc":"reqGetDbRecsmakecard1","ResFunc":"resGetDbRecsmakecard1","MsgHandle":"csAsc.ECOSS.reso.demo1.CMsgGetDbRecs.MsgGetDbRecstomakecardno1"},"MsgGetDbRecstomakecardno2":{"ReqFunc":"reqGetDbRecsmakecard2","ResFunc":"resGetDbRecsmakecard2","MsgHandle":"csAsc.ECOSS.reso.demo1.CMsgGetDbRecs.MsgGetDbRecstomakecardno2"},"MsgGetDbRecstomakecardno3":{"ReqFunc":"reqGetDbRecsmakecard3","ResFunc":"resGetDbRecsmakecard3","MsgHandle":"csAsc.ECOSS.reso.demo1.CMsgGetDbRecs.MsgGetDbRecstomakecardno3"},"MsgGetDbRecstomakecardno4":{"ReqFunc":"reqGetDbRecsmakecard4","ResFunc":"resGetDbRecsmakecard4","MsgHandle":"csAsc.ECOSS.reso.demo1.CMsgGetDbRecs.MsgGetDbRecstomakecardno4"},"MsgGetDbRecstoselectcardfactory":{"ReqFunc":"reqFormDatatoselectcardfactory","ResFunc":"resGetDbRecselectcardfactory","MsgHandle":"csAsc.ECOSS.reso.demo1.CMsgGetDbRecs.MsgGetDbRecstoselectcardfactory"},"MsgGetDbRecstocardfactory":{"ReqFunc":"reqFormDatatocardfactory","ResFunc":"resGetDbReccardfactory","MsgHandle":"csAsc.ECOSS.reso.demo1.CMsgGetDbRecs.MsgGetDbRecstocardfactory"},"MsgGetDbRecstosubpackupdate":{"ReqFunc":"reqFormDatato","ResFunc":"resGetDbRecsseccess","MsgHandle":"csAsc.ECOSS.reso.demo1.CMsgGetDbRecs.handleMsgHttpsubpackUpdate"},"MsgGetDbRecstomakecardfenPei":{"ReqFunc":"reqFormDatatofenpai","ResFunc":"resGetDbRecsfenpai","MsgHandle":"csAsc.ECOSS.reso.demo1.CMsgGetDbRecs.handleMsgHttpmakecardfenpei"},"MsgGetDbRecstoapprovaltask1":{"ReqFunc":"reqFormDatatoapproval1","ResFunc":"resGetDbRecsapproval1","MsgHandle":"csAsc.ECOSS.reso.demo1.CMsgGetDbRecs.handleMsgHttpapproval1"},"MsgGetDbRecstoapprovaltask2":{"ReqFunc":"reqFormDatatoapproval2","ResFunc":"resGetDbRecsapproval2","MsgHandle":"csAsc.ECOSS.reso.demo1.CMsgGetDbRecs.handleMsgHttpapproval2"},"MsgGetDbRecstobackplate1":{"ReqFunc":"reqFormDatatobackplate1","ResFunc":"resGetDbRecsbackplate1","MsgHandle":"csAsc.ECOSS.reso.demo1.CMsgGetDbRecs.handleMsgHttpbackplate1"},"MsgGetDbRecstobackplate2":{"ReqFunc":"reqFormDatatobackplate2","ResFunc":"resGetDbRecsbackplate2","MsgHandle":"csAsc.ECOSS.reso.demo1.CMsgGetDbRecs.handleMsgHttpbackplate2"},"MsgGetDbRecstobackplate3":{"ReqFunc":"reqFormDatatobackplate3","ResFunc":"resGetDbRecsbackplate3","MsgHandle":"csAsc.ECOSS.reso.demo1.CMsgGetDbRecs.handleMsgHttpbackplate3"},"MsgGetDbRecstoprogress":{"ReqFunc":"reqFormDatatoprogress","ResFunc":"resGetDbRecsprogress","MsgHandle":"csAsc.ECOSS.reso.demo1.CMsgGetDbRecs.handleMsgHttpprogress"},"MsgGetDbRecstoselect1":{"ReqFunc":"reqFormDatatoselect1","ResFunc":"resGetDbRecsselect1","MsgHandle":"csAsc.ECOSS.reso.demo1.CMsgGetDbRecs.handleMsgHttpselect1"},"MsgGetDbRecstoselectcount_jpg":{"ReqFunc":"reqFormDatatoselectcount","ResFunc":"resGetDbRecsselectcount","MsgHandle":"csAsc.ECOSS.reso.demo1.CMsgGetDbRecs.handleMsgHttpselectcount_jpg"},"MsgGetDbRecstomaketask1":{"ReqFunc":"reqFormDatatomaketast1","ResFunc":"resGetDbRecmaketast1","MsgHandle":"csAsc.ECOSS.reso.demo1.CMsgGetDbRecs.handleMsgHttpmaketask1"},"MsgGetDbRecstomaketask2":{"ReqFunc":"reqFormDatatomaketast2","ResFunc":"resGetDbRecmaketast2","MsgHandle":"csAsc.ECOSS.reso.demo1.CMsgGetDbRecs.handleMsgHttpmaketask2"},"MsgGetDbRecstoaccepterdata1":{"ReqFunc":"reqFormDatatoaccepterdata1","ResFunc":"resGetDbRecaccepterdata1","MsgHandle":"csAsc.ECOSS.reso.demo1.CMsgGetDbRecs.handleMsgHttpaccepterdata1"},"MsgGetDbRecstoaccepterdata2":{"ReqFunc":"reqFormDatatoaccepterdata2","ResFunc":"resGetDbRecaccepterdata2","MsgHandle":"csAsc.ECOSS.reso.demo1.CMsgGetDbRecs.handleMsgHttpaccepterdata2"},"MsgGetDbRecstoreportmakestate1":{"ReqFunc":"reqFormDatatoreportmakestate1","ResFunc":"resGetDbRecreportmakestate1","MsgHandle":"csAsc.ECOSS.reso.demo1.CMsgGetDbRecs.handleMsgHttpreportmakestate1"},"MsgGetDbRecstoreportmakestate2":{"ReqFunc":"reqFormDatatoreportmakestate2","ResFunc":"resGetDbRecreportmakestate2","MsgHandle":"csAsc.ECOSS.reso.demo1.CMsgGetDbRecs.handleMsgHttpreportmakestate2"},"MsgGetDbRecstoreportgoback0":{"ReqFunc":"reqFormDatatoreportgoback0","ResFunc":"resGetDbRecreportgoback0","MsgHandle":"csAsc.ECOSS.reso.demo1.CMsgGetDbRecs.handleMsgHttpreportgoback0"},"MsgGetDbRecstoreportgoback1":{"ReqFunc":"reqFormDatatoreportgoback1","ResFunc":"resGetDbRecreportgoback1","MsgHandle":"csAsc.ECOSS.reso.demo1.CMsgGetDbRecs.handleMsgHttpreportgoback1"},"MsgGetDbRecstoreportgoback2":{"ReqFunc":"reqFormDatatoreportgoback2","ResFunc":"resGetDbRecreportgoback2","MsgHandle":"csAsc.ECOSS.reso.demo1.CMsgGetDbRecs.handleMsgHttpreportgoback2"},"MsgGetDbRecstoreportgoback3":{"ReqFunc":"reqFormDatatoreportgoback3","ResFunc":"resGetDbRecreportgoback3","MsgHandle":"csAsc.ECOSS.reso.demo1.CMsgGetDbRecs.handleMsgHttpreportgoback3"},"MsgGetDbRecstobadcardmanage1":{"ReqFunc":"reqFormDatatobadcardmanage1","ResFunc":"resGetDbRecbadcardmanage1","MsgHandle":"csAsc.ECOSS.reso.demo1.CMsgGetDbRecs.handleMsgHttpbadcardmanage1"},"MsgGetDbRecstobadcardmanage2":{"ReqFunc":"reqFormDatatobadcardmanage2","ResFunc":"resGetDbRecbadcardmanage2","MsgHandle":"csAsc.ECOSS.reso.demo1.CMsgGetDbRecs.handleMsgHttpbadcardmanage2"},"MsgGetDbRecstobadcardmanage3":{"ReqFunc":"reqFormDatatobadcardmanage3","ResFunc":"resGetDbRecbadcardmanage3","MsgHandle":"csAsc.ECOSS.reso.demo1.CMsgGetDbRecs.handleMsgHttpbadcardmanage3"},"MsgGetDbRecstobadcardcheck1":{"ReqFunc":"reqFormDatatobadcardcheck1","ResFunc":"resGetDbRecbadcardcheck1","MsgHandle":"csAsc.ECOSS.reso.demo1.CMsgGetDbRecs.handleMsgHttpbadcardcheck1"},"MsgGetDbRecstobadcardcheck2":{"ReqFunc":"reqFormDatatobadcardcheck2","ResFunc":"resGetDbRecbadcardcheck2","MsgHandle":"csAsc.ECOSS.reso.demo1.CMsgGetDbRecs.handleMsgHttpbadcardcheck2"},"MsgGetDbRecstocardpersonmanager1":{"ReqFunc":"reqFormDatatocardpersonmanager1","ResFunc":"resGetDbReccardpersonmanager1","MsgHandle":"csAsc.ECOSS.reso.demo1.CMsgGetDbRecs.handleMsgHttpcardpersonmanager1"},"MsgGetDbRecstocardpersonmanager2":{"ReqFunc":"reqFormDatatocardpersonmanager2","ResFunc":"resGetDbReccardpersonmanager2","MsgHandle":"csAsc.ECOSS.reso.demo1.CMsgGetDbRecs.handleMsgHttpcardpersonmanager2"},"MsgGetDbRecstocardpersonmanager3":{"ReqFunc":"reqFormDatatocardpersonmanager3","ResFunc":"resGetDbReccardpersonmanager3","MsgHandle":"csAsc.ECOSS.reso.demo1.CMsgGetDbRecs.handleMsgHttpcardpersonmanager3"},"MsgGetDbRecstobadquerycount_1":{"ReqFunc":"reqFormDatatobadquerycount_1","ResFunc":"resGetDbRecbadquerycount_1","MsgHandle":"csAsc.ECOSS.reso.demo1.CMsgGetDbRecs.handleMsgHttpbadquerycount_1"},"MsgGetDbRecstobadquerycount_2":{"ReqFunc":"reqFormDatatobadquerycount_2","ResFunc":"resGetDbRecbadquerycount_2","MsgHandle":"csAsc.ECOSS.reso.demo1.CMsgGetDbRecs.handleMsgHttpbadquerycount_2"},"MsgGetDbRecstobadquerycount_3":{"ReqFunc":"reqFormDatatobadquerycount_3","ResFunc":"resGetDbRecbadquerycount_3","MsgHandle":"csAsc.ECOSS.reso.demo1.CMsgGetDbRecs.handleMsgHttpbadquerycount_3"},"MsgGetDbRecstobadquerycount_4":{"ReqFunc":"reqFormDatatobadquerycount_4","ResFunc":"resGetDbRecbadquerycount_4","MsgHandle":"csAsc.ECOSS.reso.demo1.CMsgGetDbRecs.handleMsgHttpbadquerycount_4"},"MsgGetDbRecstobadquerycount_5":{"ReqFunc":"reqFormDatatobadquerycount_5","ResFunc":"resGetDbRecbadquerycount_5","MsgHandle":"csAsc.ECOSS.reso.demo1.CMsgGetDbRecs.handleMsgHttpbadquerycount_5"}},"MsgInjectBuffer":{"MsgInjectBuff1":{"ReqFunc":"reqInjectBuffer","ResFunc":"resInjectBuffer","MsgHandle":"csAsc.ECOSS.reso.demo1.CMsgGetBufferData.handleMsg"},"MsgInjectBuff2":{"ReqFunc":"reqInjectBuffer","ResFunc":"resInjectBuffer","MsgHandle":""}},"MsgInjectTree1":{"MsgInjectDTree1":{"ReqFunc":"reqInjectTree","ResFunc":"resInjectTree","MsgHandle":"csAsc.ECOSS.reso.demo1.CMsgGetTree.handleMsg"}}}';

var cMsgConfigure=eval("("+cMsgConfigure1+")");


function reqSysInit()
{//系统初始化消息，被ve自动调用
	//请求消息数据格式：{"MsgInitName1" : Init初始化名称1, "MsgInitName2" : Init初始化名称21, ...}
	  //回送消息数据格式：{Init初始化名称1 : 回送数据1, Init初始化名称2 : 回送数据2, ...}	
  //alert("从消息人口 进入 消息处理函数reqSysInit();	
 var sendData = "{\"MsgInitName1\": \"GetMsgMap\"}";
 //(serverUri,method,isAsync,sendData)
 cVe.setConn(cServerUri,"POST", true, sendData);
}


function resSysInit()
{//一个具体的回复处理函数， 在msgConfigure中描述，被ve自动调用

 var retData =cVe.XHR.responseText;
 //alert("设置cookie:"+retData);
 //alert("++++==="+ratData);
 //alert("从 消息响应人口 进入 消息回应消息处理函数reqSysInit()， 获得服务器的响应数据为：" +cVe.cEioVeDataId+"=="+retData); 
 var retDataObj=eval("("+retData+")");	
 //                         ["EIOVEDATA"].GetMsgMap
 cMsgConfigure = retDataObj[cVe.cEioVeDataId].GetMsgMap;//配置文件信息
 console.log(JSON.stringify(cMsgConfigure));
 
 cVeUti.Cookie.setCookie("VeMsgMap",retData);//将消息映射保存到Cookies
 
 
 //这里调用其他初始化程序
 //cVe.startReqByMsgMap(cVeName, 'MsgVcInject','MsgVcInjectSelect',cMsgConfigure);
 if(pageoption=='maketask.html'){
 // alert("maketaskhtml");
 cVe.startReqByMsgMap(cVeName, 'MsgQueryDb','MsgGetDbRecstomakecardno1',cMsgConfigure);
 }
/* if(pageoption=='selectstatistics.html'){
	 cVe.startReqByMsgMap(cVeName, 'MsgQueryDb','MsgGetDbRecstomakecardno1',cMsgConfigure);
	 }*/
 if(pageoption=='cardsubpack.html'){

 cVe.startReqByMsgMap(cVeName, 'MsgQueryDb','MsgGetDbRecsToVeGrid0',cMsgConfigure);
 }
 
 if(pageoption=='approvaltask.html'){
	 cVe.startReqByMsgMap(cVeName, 'MsgQueryDb','MsgGetDbRecstoapprovaltask1',cMsgConfigure);
	 }
 if(pageoption=='backplatemanage.html'){
	 cVe.startReqByMsgMap(cVeName, 'MsgQueryDb','MsgGetDbRecstobackplate1',cMsgConfigure);
	 }
 if(pageoption=='progress.html'){
	 cVe.startReqByMsgMap(cVeName, 'MsgQueryDb','MsgGetDbRecstoprogress',cMsgConfigure);
	 }
 
}

function extLoginData()
{
	var loginData;
	 loginData ="{\"MsgUserName\": " + "\""+ document.getElementById("idUsername").value + "\"";
		"\"Msgpassword\": " + "\""+document.getElementById("idPassword").value + "\""; "\"MsgcheckCode\": " + "\""+ document.getElementById("idCheckCode").value + "\"}";
	 //loginData += "&password="+document.getElementById("password").value;
	 return loginData;
}
///////////////////////////登录///////////////////////
function reqLogin()
{//系统初始化消息，被ve自动调用
	//请求消息数据格式：{"MsgInitName1" : Init初始化名称1, "MsgInitName2" : Init初始化名称21, ...}
	  //回送消息数据格式：{Init初始化名称1 : 回送数据1, Init初始化名称2 : 回送数据2, ...}	
  //alert("从消息人口 进入 消息处理函数reqSysInit();
 var userName;
 var password;
 var checkCode;
 userName=document.getElementById(id)
 var sendData = extLoginData();
 //(serverUri,method,isAsync,sendData)
 cVe.setConn(cServerUri,"POST", true, sendData);
}


function resLogin()
{//一个具体的回复处理函数， 在msgConfigure中描述，被ve自动调用

 var retData =cVe.XHR.responseText;
 //alert("从 消息响应人口 进入 消息回应消息处理函数reqSysInit()， 获得服务器的响应数据为：" +cVe.cEioVeDataId+"=="+retData); 
 var retDataObj=eval("("+retData+")");	
 var cLoginPermission=retDataObj[cEioVeDataId];
 if(cLoginPermission[0]=="true"){
		if(cLoginPermission[1]=='0')
		{
			window.location.href="selfmanage.html";
		}else if(cLoginPermission[1]=='2'||cLoginPermission[1]=='3')
		{
			window.location.href="usermanage.html";
		}else if(cLoginPermission[1]=='1')
		{
			window.location.href="educationcenter.html";
		}
		LoggedUser=document.getElementById("username").value;
	}else if(cLoginPermission[0]=="false")
	{
		alert("用户名或密码错误，无权访问");
	}
 cMsgConfigure = retDataObj[cVe.cEioVeDataId].GetMsgMap;
 cVeUti.Cookie.setCookie("VeLoginPermission",retData);//将消息映射保存到Cookies
 
 //alert(cVeUti.Cookie.getCookie('VeMsgMap'));
 //这里调用其他初始化程序
 cVe.startReqByMsgMap(cVeName, 'MsgVcInject','MsgVcInjectSelect',cMsgConfigure);

}

function reqGetDbRecsToVegrid0()
{
var sendData =getFormData1();
 jQuery("#g_tab1").jqGrid('clearGridData');
 cVe.setConn(cServerUri,"POST", true, sendData);
}

function resGetDbRecsToVegrid0()
{
	var selectortable="#g_tab1";
	var tablepage="#p_tab1";
	var retData =cVe.XHR.responseText;
    var retDataObj=eval("("+retData+")");
	var jsons = retDataObj["EIOVEDATA"][0];
	var colnames="[";
	for (var key in jsons){colnames+="'"+key+"',";}
	colnames+="]";
	var colNA=eval("("+colnames+")");
	var colname="[";
	for (var key in jsons){colname+="{name:'"+key+"',index:'"+key+"',align:'right'},"}
	colname+="]";
	var colMA=eval("("+colname+")");
	   cVei.myGrid(selectortable,tablepage,colNA,colMA,'id号');
       //cVei.myclearGridData();
       for(var i=0;i<=retDataObj["EIOVEDATA"].length;i++){
         jQuery(selectortable).jqGrid('addRowData',i+1,retDataObj["EIOVEDATA"][i]);  
       }
       cVei.myreloadGrid();
       document.getElementById("exportsql").value=retDataObj["sql"];
       cVe.startReqByMsgMap(cVeName, 'MsgQueryDb','MsgGetDbRecsToVeGrid1',cMsgConfigure);
       
      
}

function reqGetDbRecsToVegrid1()
{
	var formData;
	  formData = "{\"packstate\":\""+document.getElementById("packstate").value +"\"";
	  formData += ",\"BranchPrinc\":\""+document.getElementById("BranchPrinc").value+"\"}";
 cVe.setConn(cServerUri,"POST", true, formData);
}

function resGetDbRecsToVegrid1()
{
	var selectortable="#g_tab2";
	var tablepage="#p_tab2";
	var retData =cVe.XHR.responseText;
    var retDataObj=eval("("+retData+")");
	var jsons = retDataObj["EIOVEDATA"][0];
	var colnames="[";
	for (var key in jsons){colnames+="'"+key+"',";}
	colnames+="'查看详情',";
	colnames+="'操作',";
	colnames+="]";
	var colNA=eval("("+colnames+")");
	var colname="[";
	for (var key in jsons)
	{
		colname+="{name:'"+key+"',index:'"+key+"',width:'117.5%',align:'center'},"
	}
	    colname+="{name:'id号',align:'center', label:'操作',formatter:function(cellvalue, options, row){return  '<a href=\"#?id='+row.包号+'\" class=\"btn\" onclick=showinfo(\"'+row.包号+'\")>查看包内信息</a>'}},",
       colname+="{name:'id号',align:'left', label:'操作',formatter:function(cellvalue, options, row){return (row.状态=='未分配')?'<input value=\" 撤　消 \" type=\"button\" onclick=delRow(\"'+row.包号+'\")>　</input><input value=\" 分　配 \" type=\"button\" onclick=delRow1(\"'+row.包号+'\")>'　:'</input><input value=\" 查　看 \" type=\"button\" onclick=\"delRow2('+row.id号+')\"></input>'}},",
	  colname+="]";
	var colMA=eval("("+colname+")");
	cVei.myGrid(selectortable,tablepage,colNA,colMA,'id号');
	cVei.myclearGridData();
       for(var i=0;i<=retDataObj["EIOVEDATA"].length;i++){
         jQuery(selectortable).jqGrid('addRowData',i+1,retDataObj["EIOVEDATA"][i]);  
       }
       cVei.myreloadGrid();
       document.getElementById("exportsql2").value=retDataObj["sql"];
}

function showinfo(packid){
	 jQuery("#g_tab3").jqGrid('clearGridData');
	 document.getElementById('packid').value=packid;
	 document.getElementById("JKDiv_two").style.display="block";
	 document.getElementById("JKDiv_one").style.display="none";
	 cVe.startReqByMsgMap(cVeName, 'MsgQueryDb','MsgGetDbRecstoUri',cMsgConfigure);
     
}	

 function delRow(packname){
  undofeipack(packname);
 }	
 function delRow1(packnamedivshow){
	 window.location.href="maketask.html?packname="+packnamedivshow;
 }
 function delRow2(id){
	 window.location.href="maketask.html";
 }
 function reqGetDbRecsUri()
 {
 var sendData ="{\"uriid\":\""+document.getElementById("packid").value+"\"}";
  cVe.setConn(cServerUri,"POST", true, sendData);
 }

 function resGetDbRecsUri()
 {
 	var selectortable="#g_tab3";
 	var tablepage="#p_tab3";
 	var retData =cVe.XHR.responseText;
     var retDataObj=eval("("+retData+")");
 	var jsons = retDataObj["EIOVEDATA"][0];
 	var colnames="[";
 	for (var key in jsons){colnames+="'"+key+"',";}
 	colnames+="]";
 	var colNA=eval("("+colnames+")");
 	var colname="[";
 	for (var key in jsons){colname+="{name:'"+key+"',index:'"+key+"',align:'right'},"}
 	colname+="]";
 	var colMA=eval("("+colname+")");

 	cVei.myGrid(selectortable,tablepage,colNA,colMA,'id号');
  cVei.myclearGridData();

        for(var i=0;i<=retDataObj["EIOVEDATA"].length;i++){
          jQuery(selectortable).jqGrid('addRowData',i+1,retDataObj["EIOVEDATA"][i]);  
        }
        cVei.myreloadGrid();
 }


 
 function getFormData1()
 {   
  var formData;
  formData = "{\"sex\":\""+document.getElementById("sex").value +"\"";
  formData += ",\"cardtype\":\""+document.getElementById("cardtype").value+"\"";
  formData += ",\"schooltype\":\""+document.getElementById("schooltype").value+"\"";
  formData += ",\"packstate\":\""+document.getElementById("packstate").value+"\"";
  formData += ",\"treevarvalue\":\""+treevarvalue+"\"}";
  return formData;
 }

function reqGetDbRecsmakecard1()//============
{
	var formData;
	  formData = "{\"cardnumber\":\""+document.getElementById("cardnumber").value +"\"";
	  formData += ",\"BranchPrinc\":\""+document.getElementById("BranchPrinc").value+"\"}";
 cVe.setConn(cServerUri,"POST", true, formData);
}

function resGetDbRecsmakecard1()
{
	var selectortable="#g_tab4";
	var tablepage="#p_tab4";
	var retData =cVe.XHR.responseText;
    var retDataObj=eval("("+retData+")");
    if(retDataObj["EIOVEDATA"]!='rsisempty'){
	var jsons = retDataObj["EIOVEDATA"][0];
	var colnames="[";
	for (var key in jsons){colnames+="'"+key+"',";}
	colnames+="]";
	var colNA=eval("("+colnames+")");
	var colname="[";
	for (var key in jsons){colname+="{name:'"+key+"',index:'"+key+"',align:'right'},"}
	colname+="]";
	var colMA=eval("("+colname+")");
	cVei.myGrid(selectortable,tablepage,colNA,colMA,'id号');
       cVei.myclearGridData();
       var arrdateoption=new Array();
       for(var i=0;i<=retDataObj["EIOVEDATA"].length;i++){
         jQuery(selectortable).jqGrid('addRowData',i+1,retDataObj["EIOVEDATA"][i]); 
         for(var key1 in retDataObj["EIOVEDATA"][i]){
               arrdateoption.push(retDataObj["EIOVEDATA"][i]['包号']);
               break;
           }
       }     
       cVei.myreloadGrid();
       document.getElementById("exportsql").value=retDataObj["sql"];
       cVei.injectSelect("packnameid",arrdateoption);
    }else{
    	jQuery(selectortable).jqGrid('clearGridData');
 	   
        colN2= ['id号','包号','卡数量','分包原则'];
        colM1="[";
        for(var i=0;i<colN2.length;i++){
        colM1+="{ name: 'colNname', index: 'colNname', width:'126%',align: 'right'},";
        }
        colM1+="]";
        var colM2=eval("("+colM1+")");
                    
        cVei.myGrid(selectortable,tablepage,colNA,colMA,'id号');
    	
    }
    cVe.startReqByMsgMap(cVeName, 'MsgQueryDb','MsgGetDbRecstomakecardno2',cMsgConfigure);
       
}

function reqGetDbRecsmakecard2()
{
 var sendData = "";
 cVe.setConn(cServerUri,"POST", true, sendData);
}

function resGetDbRecsmakecard2()
{
	var selectortable="#g_tab5";
	var tablepage="#p_tab5";
	var retData =cVe.XHR.responseText;
    var retDataObj=eval("("+retData+")");
    if(retDataObj["EIOVEDATA"]!='rsisempty'){   	
	var jsons = retDataObj["EIOVEDATA"][0];	
	var colnames="[";
	for (var key in jsons){colnames+="'"+key+"',";}
	colnames+="]";
	var colNA=eval("("+colnames+")");

	var colname="[";
	for (var key in jsons){colname+="{name:'"+key+"',width:'127%',index:'"+key+"',align:'right'},"}
	colname+="]";
	var colMA=eval("("+colname+")");
	  cVei.myGrid(selectortable,tablepage,colNA,colMA,'id号');
       cVei.myclearGridData();
       for(var i=0;i<=retDataObj["EIOVEDATA"].length;i++){
         jQuery(selectortable).jqGrid('addRowData',i+1,retDataObj["EIOVEDATA"][i]);  
       } 
       cVei.myreloadGrid();
       document.getElementById("exportsql2").value=retDataObj["sql"];
	}else{
        jQuery(selectortable).jqGrid('clearGridData');
   
        colN2= ['id号','包号','卡数量','分包原则','制卡厂商','合作银行','完成日期'];
        colM1="[";
        for(var i=0;i<colN2.length;i++){
        colM1+="{ name: 'colNname', index: 'colNname', width:'126%',align: 'right'},";
        }
        colM1+="]";
        var colM2=eval("("+colM1+")");
                    
        cVei.myGrid(selectortable,tablepage,colNA,colMA,'id号');
	}
       cVe.startReqByMsgMap(cVeName, 'MsgQueryDb','MsgGetDbRecstomakecardno3',cMsgConfigure);

}

function reqGetDbRecsmakecard3()
{
 cVe.setConn(cServerUri,"POST", true, "");
}

function resGetDbRecsmakecard3333()
{
	var selectortable="#g_tab6";
	var tablepage="#p_tab6";
	var retData =cVe.XHR.responseText;
    var retDataObj=eval("("+retData+")");
    if(retDataObj["EIOVEDATA"]!='rsisempty'){
	var jsons = retDataObj["EIOVEDATA"][0];
	var colnames="[";
	for (var key in jsons){colnames+="'"+key+"',";}
	colnames+="]";
	var colNA=eval("("+colnames+")");

	var colname="[";
	for (var key in jsons){colname+="{name:'"+key+"',width:'132%',index:'"+key+"',align:'right'},"}
	colname+="]";
	var colMA=eval("("+colname+")");
	cVei.myGrid(selectortable,tablepage,colNA,colMA,'id号');
       cVei.myclearGridData();
       for(var i=0;i<=retDataObj["EIOVEDATA"].length;i++){
         jQuery(selectortable).jqGrid('addRowData',i+1,retDataObj["EIOVEDATA"][i]);  
       }     
       cVei.myreloadGrid();
       document.getElementById("exportsql3").value=retDataObj["sql"];
    }else{
    	  jQuery(selectortable).jqGrid('clearGridData');//清除   	   
          colN2= ['id号','包号','卡数量','分包原则','制卡厂商','合作银行','完成日期'];
          colM2=[{ name: 'id号', index: 'id号', width:'130%',align: 'right'},
                 { name: '包号', index: '包号', width:'130%',align: 'right'},
                 { name: '卡数量', index: '卡数量', width:'130%',align: 'right'},
                 { name: '分包原则', index: '分包原则', width:'130%',align: 'right'},
                 { name: '制卡厂商', index: '制卡厂商', width:'130%',align: 'right'},
                 { name: '合作银行', index: '合作银行', width:'130%',align: 'right'},
                 { name: '完成日期', index: '完成日期', width:'150%',align: 'right'},
                 ]                  
          cVei.myGrid(selectortable,tablepage,colNA,colMA,'id号');	
    }
       cVe.startReqByMsgMap(cVeName, 'MsgQueryDb','MsgGetDbRecstomakecardno4',cMsgConfigure);
}



function resGetDbRecsmakecard3()
{
	var selectortable="#g_tab6";
	var tablepage="#p_tab6";
	var retData =cVe.XHR.responseText;
    var retDataObj=eval("("+retData+")");   
    colNA= ['id号','包号','卡数量','分包原则','制卡厂商','合作银行','完成日期'];
    colMA=[{ name: 'id号', index: 'id号', width:'126%',align: 'right'},
           { name: '包号', index: '包号', width:'130%',align: 'right'},
           { name: '卡数量', index: '卡数量', width:'130%',align: 'right'},
           { name: '分包原则', index: '分包原则', width:'126%',align: 'right'},
           { name: '制卡厂商', index: '制卡厂商', width:'126%',align: 'right'},
           { name: '合作银行', index: '合作银行', width:'126%',align: 'right'},
           { name: '完成日期', index: '完成日期', width:'126%',align: 'right'},
           ];
    cVei.myGrid(selectortable,tablepage,colNA,colMA,'id号');
       if(retDataObj["EIOVEDATA"]!='rsisempty'){
    	   cVei.myGrid(selectortable,tablepage,colNA,colMA,'id号');     
       cVei.myclearGridData();
       for(var i=0;i<=retDataObj["EIOVEDATA"].length;i++){
         jQuery(selectortable).jqGrid('addRowData',i+1,retDataObj["EIOVEDATA"][i]);  
       }     
       cVei.myreloadGrid();
       document.getElementById("exportsql3").value=retDataObj["sql"];
    }else{
    	alert("无数据了");         
            	
    }
       cVe.startReqByMsgMap(cVeName, 'MsgQueryDb','MsgGetDbRecstomakecardno4',cMsgConfigure);
}
function reqGetDbRecsmakecard4()
{
 var sendData = "";
 cVe.setConn(cServerUri,"POST", true, sendData);
}

function resGetDbRecsmakecard4()
{
	var selectortable="#g_tab7";
	var tablepage="#p_tab7";
	var retData =cVe.XHR.responseText;
    var retDataObj=eval("("+retData+")");
	var jsons = retDataObj["EIOVEDATA"][0];
	var colnames="[";
	for (var key in jsons){colnames+="'"+key+"',";}
	colnames+="]";
	var colNA=eval("("+colnames+")");
	var colname="[";
	for (var key in jsons){colname+="{name:'"+key+"',width:'110%',index:'"+key+"',align:'right'},"}
	colname+="]";
	var colMA=eval("("+colname+")");
	cVei.myGrid(selectortable,tablepage,colNA,colMA,'id号');
       cVei.myclearGridData();
       for(var i=0;i<=retDataObj["EIOVEDATA"].length;i++){
         jQuery(selectortable).jqGrid('addRowData',i+1,retDataObj["EIOVEDATA"][i]);  
       }     
       cVei.myreloadGrid();
       document.getElementById("exportsql4").value=retDataObj["sql"];
       cVe.startReqByMsgMap(cVeName, 'MsgQueryDb','MsgGetDbRecstoselectcardfactory',cMsgConfigure);
}

function reqFormDatatoselectcardfactory()
{
 cVe.setConn(cServerUri,"POST", true, "");
}

function resGetDbRecselectcardfactory()
{
	var retData =cVe.XHR.responseText;
    var retDataObj=eval("("+retData+")");
   if(retDataObj["EIOVEDATA"]!='rsisempty'){
	   var arrdateoption=new Array();
       for(var i=0;i<=retDataObj["EIOVEDATA"].length;i++){
         for(var key1 in retDataObj["EIOVEDATA"][i]){       	 
               arrdateoption.push(retDataObj["EIOVEDATA"][i]['factoryname']);
               break;
           } 
       }
       cVei.injectSelect("factorybus",arrdateoption);
    }else{
    	cVei.injectSelect("factorybus",new Array('无厂商分配'));
    	alert("无数据了");                    	
    }
   cVe.startReqByMsgMap(cVeName, 'MsgQueryDb','MsgGetDbRecstocardfactory',cMsgConfigure);
         
}

function reqFormDatatocardfactory(){
	 formData = "{\"factorybus\":\""+document.getElementById("factorybus").value+"\"}";
	 cVe.setConn(cServerUri,"POST", true, formData);	
}

function resGetDbReccardfactory()
{
	var selectortable="#g_tab4_4";
	var tablepage="#p_tab4_4";
	var retData =cVe.XHR.responseText;
    var retDataObj=eval("("+retData+")");
    jQuery(selectortable).jqGrid('clearGridData');//清除   包号,卡数量,合作银行,完成日期,数据方式	
    colNA= ['公司名称','负责人','联系电话','批次号','卡数量','卡类型','完成情况'];
    colMA=[{ name: 'factoryname', index: 'factoryname', width:'130%',align: 'right'},
           { name: 'faccontactname', index: 'faccontactname', width:'150%',align: 'right'},
           { name: 'faciphone', index: 'faciphone', width:'120%',align: 'right'},
           { name: 'package_number', index: 'package_number', width:'120%',align: 'right'},
           { name: 'card_count', index: 'card_count', width:'120%',align: 'right'},
           { name: '分包原则', index: '分包原则', width:'120%',align: 'right'},   
           { name: 'task_status', index: 'task_status', width:'120%',align: 'right'}, 
           ];
       cVei.myGrid(selectortable,tablepage,colNA,colMA);
   if(retDataObj["EIOVEDATA"]!='rsisempty'){
	   cVei.myGrid(selectortable,tablepage,colNA,colMA);      
	  cVei.myclearGridData();
	
       for(var i=0;i<=retDataObj["EIOVEDATA"].length;i++){
    	  jQuery(selectortable).jqGrid('addRowData',i+1,retDataObj["EIOVEDATA"][i]);
       }
      cVei.myreloadGrid();
      
      
    }else{
    	
    	alert("无数据了");                    	
    }
      
}

function reqFormDatatofenpai(){
	 formData = "{\"ospackid\":\""+document.getElementById("ospackid").value+"\"";//包号
	 formData += ",\"factorybus\":\""+document.getElementById("factorybus").value+"\"";//厂商
	 formData += ",\"bankname\":\""+document.getElementById("bankname").value+"\"";//银行
	 formData += ",\"compdate\":\""+document.getElementById("compdate").value+"\"";//完成日期
	 formData += ",\"cardnumber\":\""+document.getElementById("cardnumber").value+"\"";//卡数量
	 formData += ",\"pub_data\":\""+document.getElementById("pub_data").value+"\"}";//数据下达方式
	 cVe.setConn(cServerUri,"POST", true, formData);	
}

function resGetDbRecsfenpai(){
	 var retData =cVe.XHR.responseText;
	 var retDataObj=eval("("+retData+")");
	if(retDataObj["EIOVEDATA"]=="feipeiok"){
	alert("分配制卡数据成功！");
	cVe.startReqByMsgMap(cVeName, 'MsgQueryDb','MsgGetDbRecstomakecardno1',cMsgConfigure);
	document.getElementById("JKDiv_two").style.display="none";
    document.getElementById("JKDiv_one").style.display="block";
	}
}

function reqFormDatatoapproval1()
{
 cVe.setConn(cServerUri,"POST", true, "");
}

function resGetDbRecsapproval1()
{
	var selectortable="#g_tab8";
	var tablepage="#p_tab8";
	var retData =cVe.XHR.responseText;
    var retDataObj=eval("("+retData+")");	   
    colNA= ['id号','包号','卡数量','分包原则','制卡厂商','合作银行','完成日期'];
    colMA=[{ name: 'id号', index: 'id号', width:'126%',align: 'right'},
           { name: '包号', index: '包号', width:'126%',align: 'right'},
           { name: '卡数量', index: '卡数量', width:'126%',align: 'right'},
           { name: '分包原则', index: '分包原则', width:'126%',align: 'right'},
           { name: '制卡厂商', index: '制卡厂商', width:'126%',align: 'right'},
           { name: '合作银行', index: '合作银行', width:'126%',align: 'right'},
           { name: '完成日期', index: '完成日期', width:'126%',align: 'right'},
           ];
    cVei.myGrid(selectortable,tablepage,colNA,colMA,'id号');
       if(retDataObj["EIOVEDATA"]!='rsisempty'){
       cVei.myGrid(selectortable,tablepage,colNA,colMA);      
       cVei.myclearGridData();
       for(var i=0;i<=retDataObj["EIOVEDATA"].length;i++){
         jQuery(selectortable).jqGrid('addRowData',i+1,retDataObj["EIOVEDATA"][i]);  
       }     
       cVei.myreloadGrid();
    }else{
    	alert("无数据了");         
            	
    }
       cVe.startReqByMsgMap(cVeName, 'MsgQueryDb','MsgGetDbRecstoapprovaltask2',cMsgConfigure);
}
function reqFormDatatoapproval2()
{
 cVe.setConn(cServerUri,"POST", true, "");
}

function resGetDbRecsapproval2()
{
	var selectortable="#g_tab9";
	var tablepage="#p_tab9";
	var retData =cVe.XHR.responseText;
    var retDataObj=eval("("+retData+")");	   
    colNA= ['id号','包号','卡数量','分包原则','制卡厂商','合作银行','完成日期','审核'];
    colMA=[{ name: 'id号', index: 'id号', width:'100%',align: 'right'},
           { name: '包号', index: '包号', width:'120%',align: 'right'},
           { name: '卡数量', index: '卡数量', width:'100%',align: 'right'},
           { name: '分包原则', index: '分包原则', width:'100%',align: 'right'},
           { name: '制卡厂商', index: '制卡厂商', width:'120%',align: 'right'},
           { name: '合作银行', index: '合作银行', width:'120%',align: 'right'},
           { name: '完成日期', index: '完成日期', width:'120%',align: 'right'},
           { name: '审核', index: '审核', width:'105%',align: 'right'},
           ];
    cVei.myGrid(selectortable,tablepage,colNA,colMA,'id号');
       if(retDataObj["EIOVEDATA"]!='rsisempty'){
    	   cVei.myGrid(selectortable,tablepage,colNA,colMA,'id号');     
       cVei.myclearGridData();
       for(var i=0;i<=retDataObj["EIOVEDATA"].length;i++){
         jQuery(selectortable).jqGrid('addRowData',i+1,retDataObj["EIOVEDATA"][i]);  
       }     
       cVei.myreloadGrid();
    }else{
    	alert("无数据了");                   	
    }    
}

function reqFormDatatobackplate1()
{
 cVe.setConn(cServerUri,"POST", true, "");
}

function resGetDbRecsbackplate1()
{
	var selectortable="#g_tab10";
	var tablepage="#p_tab10";
	var retData =cVe.XHR.responseText;
    var retDataObj=eval("("+retData+")");
    colNA= ['包号','卡数量','合作银行','完成日期','回盘上报时间','操作'];
    colMA=[{ name: 'package_number', index: 'package_number', width:'150%',align: 'right'},
           { name: 'card_count', index: 'card_count', width:'150%',align: 'right'},
           { name: 'card_sub_pri_id', index: 'card_sub_pri_id', width:'150%',align: 'right'},
           { name: 'date_of_declaration', index: 'date_of_declaration', width:'150%',align: 'right'},
           { name: 'reportcompdate', index: 'reportcompdate', width:'150%',align: 'right'},   
           {name:'package_number',align:'center', label:'操作',formatter:function(cellvalue, options, row){return  '<a href=\"#\" class=\"btn\" onclick=_checkreport(\"'+row.package_number+'\")>安全验证</a>'}},
           ];
    cVei.myGrid(selectortable,tablepage,colNA,colMA,'package_number');
       if(retDataObj["EIOVEDATA"]!='rsisempty'){
       cVei.myGrid(selectortable,tablepage,colNA,colMA);      
       cVei.myclearGridData();
       for(var i=0;i<=retDataObj["EIOVEDATA"].length;i++){
         jQuery(selectortable).jqGrid('addRowData',i+1,retDataObj["EIOVEDATA"][i]);  
       }     
       cVei.myreloadGrid();
    }else{
    	alert("无数据了");         
            	
    }
     cVe.startReqByMsgMap(cVeName, 'MsgQueryDb','MsgGetDbRecstobackplate2',cMsgConfigure);
}

function reqFormDatatobackplate2()
{
 cVe.setConn(cServerUri,"POST", true, "");
}

function resGetDbRecsbackplate2()
{
	var selectortable="#g_tab11";
	var tablepage="#p_tab11";
	var retData =cVe.XHR.responseText;
    var retDataObj=eval("("+retData+")");
    colNA= ['id号','包号','卡数量','合作银行','完成日期','回盘上报时间','上传状态'];
    colMA=[{ name: 'id号', index: 'id号', width:'150%',align: 'right',hidden:true},
           { name: 'package_number', index: 'package_number', width:'150%',align: 'right'},
           { name: 'card_count', index: 'card_count', width:'150%',align: 'right'},
           { name: 'card_sub_pri_id', index: 'card_sub_pri_id', width:'150%',align: 'right'},
           { name: 'date_of_declaration', index: 'date_of_declaration', width:'150%',align: 'right'},
           { name: 'reportcompdate', index: 'reportcompdate', width:'150%',align: 'right'},
           { name: 'upstate',align:'left', label:'操作',formatter:function(cellvalue, options, row){return (row.upstate=='验证通过')?'验证通过，但未上传':'已上传'}},
           ];
    cVei.myGrid(selectortable,tablepage,colNA,colMA,'id号');
       if(retDataObj["EIOVEDATA"]!='rsisempty'){
    	   cVei.myGrid(selectortable,tablepage,colNA,colMA,'package_number');     
       cVei.myclearGridData();
       for(var i=0;i<=retDataObj["EIOVEDATA"].length;i++){
         jQuery(selectortable).jqGrid('addRowData',i+1,retDataObj["EIOVEDATA"][i]);  
       }     
       cVei.myreloadGrid();
    }else{
    	alert("无数据了");         
            	
    }
}

var reportpackagedataback;
function _checkreport(datastr){
	reportpackagedataback=datastr;
	document.getElementById("packname1to2").value=datastr;
    document.getElementById("JKDiv_one").style.display="none";
    document.getElementById("JKDiv_two").style.display="block";
    
   cVe.startReqByMsgMap(cVeName, 'MsgQueryDb','MsgGetDbRecstobackplate3',cMsgConfigure);
 }

function reqFormDatatobackplate3()
{var sendData ="{\"packagename\":\""+reportpackagedataback+"\"}";
 cVe.setConn(cServerUri,"POST", true, sendData);
}

function resGetDbRecsbackplate3()
{
	var selectortable="#g_tab12";
	var tablepage="#p_tab12";
	var retData =cVe.XHR.responseText;
    var retDataObj=eval("("+retData+")");
    colNA= ['id号','包号','SSN号','合作银行','银行卡号','初化始密码','芯片号','验证结果'];
    colMA=[{ name: 'foreid', index: 'foreid', width:'110%',align: 'right'},
           { name: 'package_number', index: 'package_number', width:'150%',align: 'right'},
           { name: 'ssn', index: 'ssn', width:'120%',align: 'right'},
           { name: 'co_bank_cardno', index: 'co_bank_cardno', width:'120%',align: 'right'},
           { name: 'card_serial_number', index: 'card_serial_number', width:'120%',align: 'right'},
           { name: 'initial_password', index: 'initial_password', width:'120%',align: 'right'},
           { name: 'handid', index: 'handid', width:'150%',align: 'right'},
           { name: 'status', index: 'status', width:'150%',align: 'right'},
          ];
       cVei.myGrid(selectortable,tablepage,colNA,colMA,'foreid');
       if(retDataObj["EIOVEDATA"]!='rsisempty'){
     
       cVei.myGrid(selectortable,tablepage,colNA,colMA);      
       cVei.myclearGridData();
       for(var i=0;i<=retDataObj["EIOVEDATA"].length;i++){
         jQuery(selectortable).jqGrid('addRowData',i+1,retDataObj["EIOVEDATA"][i]);  
       }     
       cVei.myreloadGrid();
    }else{
    	cVei.myclearGridData();
    	alert("无数据了");         
            	
    }
      
}

function reqFormDatatoprogress()
{
 cVe.setConn(cServerUri,"POST", true, "");
}

function resGetDbRecsprogress()
{
	var selectortable="#g_tab13";
	var tablepage="#p_tab13";
	var retData =cVe.XHR.responseText;
    var retDataObj=eval("("+retData+")");
    colNA= ['id号','包号','制卡厂商','负责人','联系电话','开始时间','预计完成时间','任务状态'];
    colMA=[{ name: 'id号', index: 'id号', width:'100%',align: 'right'},
           { name: 'package_number', index: 'package_number', width:'110%',align: 'right'},
           { name: '制卡厂商', index: '制卡厂商', width:'110%',align: 'right'},
           { name: 'st_name', index: 'st_name', width:'110%',align: 'right'},
           { name: 'st_phone', index: 'st_phone', width:'110%',align: 'right'},
           { name: 'req_compl_date', index: 'req_compl_date', width:'110%',align: 'right'},
           { name: 'date_of_declaration', index: 'date_of_declaration', width:'110%',align: 'right'},
           { name: 'task_status', index: 'task_status', width:'120%',align: 'right'},     
           ];
       cVei.myGrid(selectortable,tablepage,colNA,colMA);
       if(retDataObj["EIOVEDATA"]!='rsisempty'){
       cVei.myGrid(selectortable,tablepage,colNA,colMA,'id号');      
       cVei.myclearGridData();
       for(var i=0;i<=retDataObj["EIOVEDATA"].length;i++){
         jQuery(selectortable).jqGrid('addRowData',i+1,retDataObj["EIOVEDATA"][i]);  
       }     
       cVei.myreloadGrid();
    }else{
    	alert("无数据了");         
            	
    }     
}

var datatypea_a;
function reqFormDatatoselect1(){
	 formData = "{\"selecttype\":\""+datatypea_a+"\"";
	 formData += ",\"makeforact\":\""+document.getElementById("makeforact").value+"\"";//厂商
	 formData += ",\"cooperationbank\":\""+document.getElementById("cooperationbank").value+"\"";//银行
	 formData += ",\"compldate\":\""+document.getElementById("compldate").value+"\"";//完成时间
	 formData += ",\"packrinciple\":\""+document.getElementById("packrinciple").value+"\"}";//分包原则	
	 cVe.setConn(cServerUri,"POST", true, formData);	
}

function resGetDbRecsselect1()
{
	var selectortable;
	var tablepage;
	var retData =cVe.XHR.responseText;
    var retDataObj=eval("("+retData+")");
    var datatype=retDataObj["datatype"];
    if(datatype=="selectdata3" || datatype=="selectdata4"){
    	if(datatype=="selectdata3"){
    		selectortable="#g_tab442";
        	tablepage="#p_tab442";
    	}else{		
    		selectortable="#g_tab444";
        	tablepage="#p_tab444";
    	}
    
    	jQuery(selectortable).jqGrid('clearGridData');
    colNA= ['包号','卡数量','合作银行','分包原则','制卡厂商','完成时间'];
    colMA=[{ name: 'package_number', index: 'package_number', width:'100%',align: 'right'},
           { name: 'card_count', index: 'card_count', width:'110%',align: 'right'},
           { name: '合作银行', index: '合作银行', width:'110%',align: 'right'},
           { name: '分包原则', index: '分包原则', width:'110%',align: 'right'},
           { name: '制卡厂商', index: '制卡厂商', width:'110%',align: 'right'},
           { name: 'date_of_declaration', index: 'date_of_declaration', width:'110%',align: 'right'},
           ];
    cVei.myGrid(selectortable,tablepage,colNA,colMA,'package_number');  
    }else if(datatype=="selectdata1" || datatype=="selectdata2"){
    	if(datatype=="selectdata1"){
    		selectortable="#g_tab4";
       	 tablepage="#p_tab4";	
    	}else{
    		selectortable="#g_tab441";
          	 tablepage="#p_tab441";			
    	}
    	
    	 jQuery(selectortable).jqGrid('clearGridData');
    	 colNA= ['ssn号','包号','姓名','所在学校','学校类型','卡类型','申报日期'];
    	    colMA=[{ name: 'ssn号', index: 'ssn号', width:'100%',align: 'right'},
    	           { name: '包号', index: '包号', width:'100%',align: 'right'},
    	           { name: '姓名', index: '姓名', width:'110%',align: 'right'},
    	           { name: '所在学校', index: '所在学校', width:'110%',align: 'right'},
    	           { name: '学校类型', index: '学校类型', width:'110%',align: 'right'},
    	           { name: '卡类型', index: '卡类型', width:'110%',align: 'right'},
    	           { name: '申报日期', index: '申报日期', width:'110%',align: 'right'},
    	           ];	
    	    cVei.myGrid(selectortable,tablepage,colNA,colMA,'package_number');
    }

       if(retDataObj["EIOVEDATA"]!='rsisempty'){
       cVei.myclearGridData();
       for(var i=0;i<=retDataObj["EIOVEDATA"].length;i++){
         jQuery(selectortable).jqGrid('addRowData',i+1,retDataObj["EIOVEDATA"][i]);  
       }     
       cVei.myreloadGrid();
    }else{
    	alert("无数据了");         
            	
    }
}

//统计
function reqFormDatatoselectcount()
{
 cVe.setConn(cServerUri,"POST", true, "");
}

function resGetDbRecsselectcount(){
	var retData =cVe.XHR.responseText;
    var retDataObj=eval("("+retData+")");

  

	 require.config({
	        paths:{ 
	            'echarts' : 'echarts',
	            'echarts/chart/pie' : 'echarts'
	        }
	    });
	    
	    // 使用
	    require(
	        [
	            'echarts',
	            'echarts/chart/pie' // 使用柱状图就加载bar模块，按需加载
	        ],
	        function (ec) {
	            // 基于准备好的dom，初始化echarts图表
	            var myChart = ec.init(document.getElementById('main')); 
	            var option = {
	title : {
	    text: '未分包，已分包，未完成，已完成查询统计',
	    subtext: '统计结果',
	    x:'center'
	},
	tooltip : {
	    trigger: 'item',
	    formatter: "{a} <br/>{b} : {c} ({d}%)"
	},
	legend: {
	    orient : 'vertical',
	    x : 'left',
	    data:['未完成','已分包','未完成','已完成']
	},
	toolbox: {
	    show : true,
	    feature : {
	        mark : {show: true},
	        dataView : {show: true, readOnly: false},
	        restore : {show: true},
	        saveAsImage : {show: true}
	    }
	},
	calculable : true,
	series : [
	    {
	        name:'访问来源',
	        type:'pie',
	        radius : '55%',
	        center: ['50%', '60%'],
	        data:retDataObj["EIOVEDATA"],
	    }
	]
	};
	                
	                
	            myChart.setOption(option); 
	        }
	    );
	
	
}




























//function reqInjectTree() {
//    var range = ""; //指定要显示的树形目录的范围，如果为空则默认为全国。
//    var sendData = "{\"TreeName\":\"NationalAdmRegion\",\"TreeRange\":\"" + range + "\"}"; //
//    cVe.setConn(cServerUri, "POST", false, sendData);
//}
//
//function resInjectTree(reqStatus) { //一个具体的回复处理函数， 在msgConfigure中描述，被ve自动调用
//    var retData = cVe.XHR.responseText;
//    var retDataObj = eval("(" + retData + ")");
//    var divID = 'treeDiv';
//    var pagename = "#"
//    cVei.injectTree(divID, retDataObj[cVe.cEioVeDataId], Dtree, pagename);
//}
////获取全国机构树形结构信息
//  
//

//window.onload=function(){
//
//	  cVe.startReqByMsgHandle(cVeName, '','', 'reqInjectTree', 'resInjectTree', 'csAsc.ECOSS.reso.demo1.CMsgGetTree.handleMsg')
		//cVe.startReqByMsgHandle(cVeName, 'MsgInit','MssgInitMsgMap','reqSysInit', 'resSysInit', 'csAsc.EIO.SysMsgHandle.CMsgInit.handleMsg');	 
//		Dtree = cVei.initTree("treeDiv", "全国");

//}
//
$().ready(
		function(){
			//cVe.startReqByMsgHandle(cVeName, 'MsgInit','MssgInitMsgMap','reqSysInit', 'resSysInit', 'csAsc.EIO.SysMsgHandle.CMsgInit.handleMsg');	 
		}	
);
