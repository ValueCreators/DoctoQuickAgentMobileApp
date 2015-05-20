Ext.define('DoctorRegister.controller.MainController', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
           mainView : 'main',
           registerNameScreen : 'regNameScreen',
           doctorLoginScreen : 'doctorLoginScreen',
           regContactDetailsScreen : 'regContactDetailsScreen',
		   regDetailsFormPanel1 : 'regNameScreen formpanel#_nameDetailsPanel',
		   regDetailsFormPanel2 : 'regContactDetailsScreen formpanel#_nameDetailsPanel2',
		   loginFormPanel : 'doctorLoginScreen fieldset#loginFormPanelId'
        },
        
        control : {
        	'doctorLoginScreen button#loginBtnId' : {tap : 'agentLogin', scope : this },
        	'regNameScreen button#_registerNameNextBtn' : { tap : 'openRegisterMailPanel', scope : this },
        	'regContactDetailsScreen button#_takeSnapBtn' : { tap : 'capturePhoto', scope : this },
        	'regContactDetailsScreen button#_submitDoctorRegDetailsBtn' : {tap : 'registerDoctorDetail', scope : this}
        }
    },
    
    agentLogin : function () {
    	/*var reqObj = {
    			'action': 'saveDoctorDetails',
            "params": {
            	'phoneNumber' : '8904814609',
            	'password' : 'thiyagu'
            }
    	};*/
		
		var phoneNum = this.getLoginFormPanel().getComponent("agentPhoneNumber").getValue();
		var pwd = this.getLoginFormPanel().getComponent("agentPassword").getValue();
		
		if(this.docUtils.validateAgentLoginInput(phoneNum, pwd)) {
			//this.registerDoctorAPI.makeServerReqest(reqObj, this.agentLoginSuccess, this.agentLoginFailure, this );
			this.getMainView().setActiveItem('regNameScreen');
		}
    },
    
    agentLoginSuccess : function () {
    	this.getMainView().setActiveItem('regNameScreen');
    },
    
    agentLoginFailure : function () {
    	this.getMainView().setActiveItem('regNameScreen');
    },

    openRegisterMailPanel : function() {
		var namePanelInput = this.getRegDetailsFormPanel1().getValues();
		if(this.docUtils.validateNameRegDetails(namePanelInput)) {
			this.getMainView().setActiveItem('regContactDetailsScreen');
		}
    	  	
    },
    
    openRegisterNameDetailsView : function() {
    	this.getMainView().setActiveItem('regNameScreen');
    },
    
    capturePhoto : function() {
    	this.takePicFlag = true;
    	capturePhoto();
    },
    
    registerDoctorDetail : function () {
	
	var form1Value = this.getMainView().getComponent('registerNameScreenId1').getComponent("_nameDetailsPanel");
    var form2Value = this.getRegDetailsFormPanel2();

	var form1Values = form1Value.getValues();
	var form2Values = form2Value.getValues();
	var reqObj = {
                    "firstName": form1Values['fName'],
                    "middleName": form1Values['mName'],
                    "lastName": form1Values['lName'],
                    "degrees": form1Values['degrees'],
					"sex" : form1Values['sex'],
					"dob" : form1Values['dob'],
                    "address1": form2Values['addr1'],
                    "state": form2Values['state'],
                    "city": form2Values['city'],
                    "mobile": form2Values['mobileNum'],
                    //"bankName": form2Values['bankName'],
                    "accountNumber": form2Values['acctNum'],
                    "email": form2Values['emailId'],
					"specialist": form2Values['specialist'],
					"fees": form2Values['feesDesired'],
					//"practiseSinceYear": form2Values['practiseSinceYear'],
					"launguageKnown": form2Values['launguagesKnown'],
					"medicalCouncilMembership ": form2Values['membership'],
					//"memberShipNumber": form2Values['membershipNo'],
					"timeStamp ": new Date(),
    	}
		
		if(this.docUtils.validateOtherRegDetails(form2Value.getValues())) {
			//this.registerDoctorSuccess();
			this.registerDoctorAPI.makeServerReqest("registerDoctorFromAgent", reqObj, this.registerDoctorSuccess, this.registerDoctorFailure, this );
		}
    },
    
    registerDoctorSuccess : function () {
    	alert('registered successfully. Doctor will receive userid and pwd for sigin.');
    	this.openRegisterNameDetailsView();
    },
    
    registerDoctorFailure : function () {
    	alert('registered fails.')
    },
    
    launch : function () {
        this.registerDoctorAPI = DoctorRegister.service.doctorRegistrationAPI;
		this.docUtils = DoctorRegister.util.regUtils;
    }
});