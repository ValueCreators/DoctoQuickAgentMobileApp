Ext.define('DoctorRegister.service.doctorRegistrationAPI', {

	singleton: true,

	makeServerReqest : function(requestObject, successcallback, errorcallback, scope) {

		Ext.Ajax.request({
		    async : true,
		    url : config.serviceURL,
		    method : 'POST',
		    jsonData : requestObject,
		    success : function (respObj) {;
		        successcallback.call(scope, respObj);
		    },
		    failure: function(respObj) {
		        errorcallback.call(scope, respObj);
		    }
		});
	}


});