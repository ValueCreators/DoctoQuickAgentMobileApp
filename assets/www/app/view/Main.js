Ext.define('DoctorRegister.view.Main', {
    extend: 'Ext.Panel',
    xtype: 'main',
    config: {
    	
    	layout : 'card',
    	
    	items : [
    	    {
    	    	xtype : 'doctorLoginScreen'
    	    },
	    	{
	    		xtype : 'regNameScreen'
	    	},{
	    		xtype : 'regContactDetailsScreen'
	    	},{
	    		xtype : 'capturePicScreen'
	    	}
	    ]
    }
});
