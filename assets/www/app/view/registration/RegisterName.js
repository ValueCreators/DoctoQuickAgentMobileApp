Ext.define('DoctorRegister.view.registration.RegisterName', {
    extend: 'Ext.Panel',
    xtype: 'regNameScreen',
    config: {
    	
    	itemId : 'registerNameScreenId1',
    	cls : 'registerNameContainerCls',
    	
    	items : [{
    		
    		xtype : 'container',
    		html : '<div class="doctorRegisterHeaderCls"></div>',
    		cls : 'headerCls'
    	},{
    		
    		xtype : 'container',
    		itemId : 'registrationProgress',
    		cls : 'registerProgressCls',
//    		html : '<div class="progressIndicatorCls activeIndicatorCls"></div><div class="progressIndicatorCls" ></div><div class="progressIndicatorCls"></div>'
    		html : '<div class="progressIndicatorCls activeIndicatorCls"></div><div class="progressIndicatorCls" ></div>'
    	}/*,{
    		
    		xtype : 'container',
    		itemId : 'registrationText',
    		cls : 'textfiledCls callbackMsgContainerCls',
//    		html : '<div class="progressIndicatorCls activeIndicatorCls"></div><div class="progressIndicatorCls" ></div><div class="progressIndicatorCls"></div>'
    		html : '<div>DoctoQuick is a unique technology to help you consult and treat patients at your own time and pace from different corners of the country and get paid for your time</div>'
    	}*/,{
    		
    		xtype : 'formpanel',
    		itemId : '_nameDetailsPanel',
    		cls : 'nameDetailsPanelCls',
    		scrollable : true,
    		items : [{
    			xtype : 'textfield',
    			cls : 'textfiledCls',
    			placeHolder : 'First Name',
				name : 'fName'
    		},{
    			xtype : 'textfield',
    			cls : 'textfiledCls',
    			placeHolder : 'Middle Name',
				name : 'mName'
    		},{
    			xtype : 'textfield',
    			cls : 'textfiledCls regNameLastFieldCls',
    			placeHolder : 'Last Name',
				name : 'lName'
    		},{
    			xtype : 'textfield',
    			cls : 'textfiledCls regNameDegreeFieldCls',
    			placeHolder : 'Degrees',
				name : 'degrees'
    		},{
    			xtype : 'textfield',
    			cls : 'textfiledCls regNameSexFieldCls',
    			placeHolder : 'Sex',
				name : 'sex'
    		},{
    			xtype : 'datepickerfield',
    			cls : 'textfiledCls regNameSexFieldCls',
    			placeHolder : 'Date of Birth',
				name : 'dob'
    		},{
    			xtype : 'button',
    			cls : 'buttonCls',
    			text : 'Next',
    			itemId : '_registerNameNextBtn'
    		}]
    	}]
    }
});
