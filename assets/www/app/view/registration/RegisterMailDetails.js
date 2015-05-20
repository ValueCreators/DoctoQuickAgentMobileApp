Ext.define('DoctorRegister.view.registration.RegisterMailDetails', {
    extend: 'Ext.Panel',
    xtype: 'regContactDetailsScreen',
    config: {
    	
    	itemId : 'registerNameScreenId2',
    	cls : 'registerNameContainerCls',
    	
    	items : [{
    		
    		xtype : 'container',
    		html : '<div class="doctorRegisterHeaderCls backTextCls"><div class="backButtonDivCls" onclick="DoctorRegister.app.getController(\'MainController\').openRegisterNameDetailsView();"><div class="displayInlineBlock"><img src="resources/images/back.png" /></div><div class="displayInlineBlock marginLeftCls">Back</div><div></div>',
    		cls : 'headerCls'
    	}, {
    		
    		xtype : 'container',
    		itemId : 'registrationProgress',
    		cls : 'registerProgressCls1',
//    		html : '<div class="progressIndicatorCls"></div><div class="progressIndicatorCls activeIndicatorCls"></div><div class="progressIndicatorCls"></div>'
    		html : '<div class="progressIndicatorCls"></div><div class="progressIndicatorCls activeIndicatorCls"></div>'
    	}, {
    		
    		xtype : 'formpanel',
    		itemId : '_nameDetailsPanel2',
    		cls : 'nameDetailsPanelCls',
    		scrollable : true,
    		items : [
    		{
    			xtype : 'textareafield',
    			cls : 'textfiledCls',
    			grow : false,
    			placeHolder : 'Address1',
    			itemId : '_address1',
				name : 'addr1'
    		},
    		{
    			xtype : 'textareafield',
    			cls : 'textfiledCls',
    			grow : false,
    			placeHolder : 'Address2',
    			itemId : '_address2',
				name : 'addr2'
    		},
    		{
    			xtype : 'textfield',
    			cls : 'textfiledCls',
    			grow : false,
    			placeHolder : 'State',
    			itemId : '_state',
				name : 'state'
    		},
    		{
    			xtype : 'textfield',
    			cls : 'textfiledCls',
    			grow : false,
    			placeHolder : 'City',
    			itemId : '_city',
				name : 'city'
    		},
    		{
    			xtype : 'numberfield',
    			cls : 'textfiledCls',
    			placeHolder : 'Mobile Number',
    			itemId : '_doctorMobileNumber',
				name : 'mobileNum'
    		}, 
    		{
    			xtype : 'textfield',
    			cls : 'textfiledCls',
    			placeHolder : 'Bank name',
				name : 'bankName'
    		},
    		{
    			xtype : 'textfield',
    			cls : 'textfiledCls',
    			placeHolder : 'IFC Code',
    			itemId : '_ifcCode',
				name : 'ifscCode'
    		},
    		{
    			xtype : 'textfield',
    			cls : 'textfiledCls',
    			placeHolder : 'Account Number',
    			itemId : '_accNumber',
				name : 'acctNum'
    		},
    		{
    			xtype : 'textfield',
    			cls : 'textfiledCls',
    			placeHolder : 'Email Address',
    			itemId : '_doctorEmailId',
				name : 'emailId'
    		},
    		{
			    xtype: 'selectfield',
			    cls : 'textfiledCls',
			    itemId : '_doctorSpecilist',
				name : 'specialist',
			    options: [
			        {text: 'Select Specialist',  value: '0'},
			        {text: 'Cardiologist',  value: 'Cardiologist'},
			        {text: 'Dermatologist', value: 'Dermatologist'},
			        {text: 'Gastroenterologist',  value: 'Gastroenterologist'},
			        {text: 'Neurologist', value: 'Neurologist'},
			        {text: 'Gynecologist', value: 'Gynecologist'},
			        {text: 'Orthopaedic Surgeon', value: 'Orthopaedic Surgeon'},
			        {text: 'Pediatrician', value: 'Pediatrician'},
			        {text: 'Psychiatrist', value: 'Psychiatrist'},
			        {text: 'Dentist', value: 'Dentist'},
			        {text: 'Dietician', value: 'Dietician'},
			        {text: 'Ear-nose-throat surgeon', value: 'Ear-nose-throat surgeon'},
			        {text: 'Family Practise Physician', value: 'Family Practise Physician'},
			        {text: 'Homeopath', value: 'Homeopath'},
			        {text: 'Veterinarian', value: 'Veterinarian'},
			        {text: 'Lactation Consultant', value: 'Lactation Consultant'},
			        {text: 'Ayurvedic Doctor', value: 'Ayurvedic Doctor'},
			    ]
			},
    		{
    			xtype : 'textfield',
    			cls : 'textfiledCls',
    			placeHolder : 'Fees desired',
    			itemId : '_feesDesired',
				name : 'feesDesired'
    		},
    		{
    			xtype : 'textfield',
    			cls : 'textfiledCls',
    			placeHolder : 'Practicising sinceyear',
    			itemId : '_practisingYear',
				name : 'practiceSinceYear'
    		},
    		{
    			xtype : 'textfield',
    			cls : 'textfiledCls',
    			placeHolder : 'Languages Known',
				name : 'knowLaunguages'
    		},
    		{
			    xtype: 'selectfield',
			    cls : 'textfiledCls',
			    itemId : '_counsilMemberShip',
			    options: [
			        {text: 'Medical Counsil Membership',  value: '0'},
			        {text: 'Not Available', value: 'Not Available'},
			        {text: 'Andhra Pradesh Medical Council', value: 'Andhra Pradesh Medical Council'},
			        {text: 'Medical Council of Registration Hengerabari (Assam)', value: 'Medical Council of Registration Hengerabari (Assam)'},
			        {text: 'Arunachal Pradesh Medical Council', value: 'Arunachal Pradesh Medical Council'},
			        {text: 'Bihar Council of Medical Registration', value: 'Bihar Council of Medical Registration'},
			        {text: 'Chhattisgarh Medical Council', value: 'Chhattisgarh Medical Council'},
			        {text: 'Delhi Medical Council', value: 'Delhi Medical Council'},
			        {text: 'Goa Medical College', value: 'Goa Medical College'},
			        {text: 'Gujarat Medical Council', value: 'Gujarat Medical Council'},
			        {text: 'Haryana Medical Council', value: 'Haryana Medical Council'},
			        {text: 'Himachal Pradesh Medical', value: 'Himachal Pradesh Medical'},
			        {text: 'Jammu and Kashmir State Medical Council', value: 'Jammu and Kashmir State Medical Council'},
			        {text: 'Jharkhand State Medical Council', value: 'Jharkhand State Medical Council'},
			        {text: 'Karnataka State Medical Council', value: 'Karnataka State Medical Council'},
			        {text: 'Karnataka State Medical Council(Kerala)', value: 'Karnataka State Medical Council(Kerala)'},
			        {text: 'Madhya Pradesh Medical Council', value: 'Madhya Pradesh Medical Council'},
			        {text: 'Maharashtra Medical Council', value: 'Maharashtra Medical Council'},
			        {text: 'Orissa Council of Med', value: 'Orissa Council of Med'},
			        {text: 'Punjab Medical Council', value: 'Punjab Medical Council'},
			        {text: 'Rajasthan Medical Council', value: 'Rajasthan Medical Council'},
			        {text: 'Sikkim Medical Council', value: 'Sikkim Medical Council'},
			        {text: 'Tamil Nadu State Medical Council', value: 'Tamil Nadu State Medical Council'},
			        {text: 'Uttar Pradesh Medical Council', value: 'Uttar Pradesh Medical Council'},
			        {text: 'Uttarakhand Medical Council', value: 'Uttarakhand Medical Council'},
			        {text: 'West Bengal Medical Council', value: 'West Bengal Medical Council'},
			        {text: 'The Tripura State Medical Council', value: 'The Tripura State Medical Council'},
			        
			    ],
				name : 'membership'
			},
    		{
    			xtype : 'textfield',
    			cls : 'textfiledCls',
    			placeHolder : 'Medical Counsil Membership No.',
				name : 'membershipNo'
    		},
//    		{
//    			xtype : 'datefield',
//    			cls : 'textfiledCls',
//    			anchor: '100%',
//    			placeHolder : 'Date of birth',
//    			format: 'm d Y',
//    	        altFormats: 'm,d,Y|m.d.Y',
//    			itemId : '_dob'
//    		},
    		{
    			xtype : 'button',
    			cls : 'buttonCls takeSnapBtnCls',
    			text : 'Take Picture',	
    			itemId : '_takeSnapBtn'
    		},{
    			xtype : 'container',
    			hidden : true,
    			cls : 'textfiledCls callbackMsgContainerCls',
    			html : '<div>You will receive a callback from our team to complete your registration and verify your details.</div>',
    		},{
    			xtype : 'button',
    			cls : 'buttonCls',
    			text : 'Submit',
    			itemId : '_submitDoctorRegDetailsBtn'
    		}]
    	}]
    }
});
