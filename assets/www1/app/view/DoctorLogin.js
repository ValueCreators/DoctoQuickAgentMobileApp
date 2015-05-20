Ext.define('DoctorRegister.view.DoctorLogin', {
    extend: 'Ext.Panel',
    xtype: 'doctorLoginScreen',
    fullscreen: true,
    config: {
    	itemId : 'doctorLoginId',
    	cls : 'doctorLoginCls bg1',
    	items : [
    		{
	    		xtype : 'container',
	    		html : '<div class="doctorRegisterHeaderCls"></div>', //After done Please remove the html
	    		cls : 'headerLogoCls gridCls'
    		},
    		{	
    			xtype : 'container',
    			cls : 'contentCls gridCls',
    			scrollable: {
				    direction: 'vertical',
				    directionLock: true
				},

    			items: [
    				{
			    		xtype : 'fieldset',
			    		itemId : 'loginFormPanelId',
			    		cls : 'loginFormPanelCls gridCls',
			    		items : [{
			    			xtype : 'numberfield',
			    			maxValue: 10,
			    			placeHolder : 'Phone Number',
			    			clearIcon : false
			    		},
			    		{
			    			xtype : 'spacer',
			    			cls : 'spacerCls'
			    		},
			    		{
			    			xtype : 'passwordfield',
			    			placeHolder : 'Password',
			    			clearIcon : false
			    		},
			    		{
			    			xtype : 'spacer',
			    			cls : 'spacerCls'
			    		},
			    		{
			    			xtype : 'button',
			    			cls : 'loginBtnCls bgBtn1',
			    			itemId : 'loginBtnId',
			    			text : 'Login'
			    		}
			    	]
		    		}
    			]
    		}
    	]

    }
});
