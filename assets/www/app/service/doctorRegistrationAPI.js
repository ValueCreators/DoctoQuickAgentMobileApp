Ext.define('DoctorRegister.service.doctorRegistrationAPI', {

	singleton: true,

	makeServerReqest : function(service, requestObject, successcallback, errorcallback, scope) {

		Ext.Ajax.request({
		    async : true, 
			useDefaultXhrHeader : false,
		    url : config.serviceURL + service,
		    method : 'POST',
		    params : requestObject,
		    success : function (respObj) {;
		        successcallback.call(scope, respObj);
		    },
		    failure: function(respObj) {
		        errorcallback.call(scope, respObj);
		    }
		});
	}
});