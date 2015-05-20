Ext.define('DoctorRegister.controller.MainController', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
           mainView : 'main',
           registerNameScreen : 'regNameScreen',
           doctorLoginScreen : 'doctorLoginScreen',
           regContactDetailsScreen : 'regContactDetailsScreen'
        },
        
        control : {
        	'doctorLoginScreen button#loginBtnId' : {tap : 'agentLogin', scope : this },
        	'regNameScreen button#_registerNameNextBtn' : { tap : 'openRegisterMailPanel', scope : this },
        	'regContactDetailsScreen button#_takeSnapBtn' : { tap : 'capturePhoto', scope : this },
        	'regContactDetailsScreen button#_submitDoctorRegDetailsBtn' : {tap : 'registerDoctorDetail', scope : this}
        }
    },
    
    agentLogin : function () {
    	var reqObj = {
    			'action': 'saveDoctorDetails',
            "params": {
            	'phoneNumber' : '8904814609',
            	'password' : 'thiyagu'
            }
    	};
    	this.registerDoctorAPI.makeServerReqest(reqObj, this.agentLoginSuccess, this.agentLoginFailure, this );
    },
    
    agentLoginSuccess : function () {
    	this.getMainView().setActiveItem('regNameScreen');
    },
    
    agentLoginFailure : function () {
    	this.getMainView().setActiveItem('regNameScreen');
    },

    openRegisterMailPanel : function() {
    	this.getMainView().setActiveItem('regContactDetailsScreen');
    },
    
    openRegisterNameDetailsView : function() {
    	this.getMainView().setActiveItem('regNameScreen');
    },
    
    capturePhoto : function() {
    	capturePhoto();
    },
    
    registerDoctorDetail : function () {
    	var reqObj = {
    			"action": "saveDoctorDetails",
                "params": {
                    "doctorId": "Doctor122",
                    "fName": form1Value.getAt(0).getValue(),
                    "mName": form1Value.getAt(2).getValue(),
                    "lName": form1Value.getAt(4).getValue(),
                    "country": "",
                    "degrees": "",
                    "mailId": form2Value.getAt(0).getValue(),
                    "mobileNumber": form2Value.getAt(2).getValue(),
                    "specializationList": "",
                    "gender": "",
                    "practiceSinceYear": "",
                    "knownLaunguages": "",
                    "status": ""
                }
    	};
    	this.registerDoctorAPI.makeServerReqest(reqObj, this.registerDoctorSuccess, this.registerDoctorSuccess, this );
  
    },
    
    registerDoctorSuccess : function () {
    	alert('registered successfully. Doctor will receive userid and pwd for sigin.');
    	this.openRegisterNameDetailsView();
    },
    
    registerDoctorSuccess : function () {
    	alert('registered fails.')
    },
    
    init : function () {
        this.registerDoctorAPI = DoctorRegister.service.doctorRegistrationAPI;
    }
});