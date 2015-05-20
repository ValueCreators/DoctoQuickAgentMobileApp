Ext.define('DoctorRegister.util.regUtils', {

	singleton: true,

	validateAgentLoginInput : function(mobileNum, pwd) {
		
		var mobNumRegExp = /^[0-9]{10}$/;
	
		if(mobileNum == "" || !mobNumRegExp.test(mobileNum) ) {
			Ext.Msg.alert("Validation","Enter valid phone number");
			return false;
		}
		
		if(pwd != null && pwd == "") {
			Ext.Msg.alert("Validation", "Please enter the password.");
			return false;
		}
		
		return true;
	},
	
	validateNameRegDetails : function(inputObj) {
		
		if(inputObj.fName == "") {
			Ext.Msg.alert("Validation", "First name can not be empty.");
			return false;
		} else if(inputObj.lName == "") {
			Ext.Msg.alert("Validation", "Last name can not be empty.");
			return false;
		} else if(inputObj.degrees == "") {
			Ext.Msg.alert("Validation", "Degrees can not be empty.");
			return false;
		} else if(inputObj.sex == "") {
			Ext.Msg.alert("Validation", "Sex field can not be empty.");
			return false;
		}
		
		return true;
	},
	
	validateOtherRegDetails : function(inputObj) {
		var mobNumRegExp = /^[0-9]{10}$/;
		if(inputObj.addr1 == "") {
			Ext.Msg.alert("Validation", "Address1 can not be empty.");
			return false;
		} else if(inputObj.state == "") {
			Ext.Msg.alert("Validation", "State can not be empty.");
			return false;
		} else if(inputObj.city == "") {
			Ext.Msg.alert("Validation", "City can not be empty.");
			return false;
		} else if(inputObj.mobileNum == "" || !mobNumRegExp.test(inputObj.mobileNum) ) {
			Ext.Msg.alert("Validation","Enter valid phone number");
			return false;
		} /*else if(inputObj.bankName == "") {
			Ext.Msg.alert("Validation", "bankName can not be empty.");
			return false;
		} else if(inputObj.ifscCode == "") {
			Ext.Msg.alert("Validation", "IFSC code can not be empty.");
			return false;
		} else if(inputObj.acctNum == "") {
			Ext.Msg.alert("Validation", "Account number can not be empty.");
			return false;
		} */else if(inputObj.emailId == "") {
			Ext.Msg.alert("Validation", "Email can not be empty.");
			return false;
		} else if(!this.validateEmail(inputObj.emailId)) {
			Ext.Msg.alert("Validation", "Please enter valid email.");
			return false;
		} else if(inputObj.specialist == "0") {
			Ext.Msg.alert("Validation", "Please select the specialist.");
			return false;
		} else if(inputObj.feesDesired == "") {
			Ext.Msg.alert("Validation", "Fees desired can not be empty.");
			return false;
		} else if(inputObj.practiceSinceYear == "") {
			Ext.Msg.alert("Validation", "Practise since year can not be empty.");
			return false;
		} else if(inputObj.knowLaunguages == "") {
			Ext.Msg.alert("Validation", "Please specify launguages.");
			return false;
		} else if(inputObj.membership == "0") {
			Ext.Msg.alert("Validation", "Please select the council membership.");
			return false;
		} 
		
		return true;
	},
	
	validateEmail : function(email) { 
	  // http://stackoverflow.com/a/46181/11236
	  
	    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	    return re.test(email);
	}
});