jQuery( document ).ready( function()
{
	var firstNam=$("#firstName").val();
	var lastName=$("#surname").val();
	$("#updateProfileHeader").text(firstNam +" "+ lastName);
	var rules = getValidationRules( "profile" );

	validation2( 'updateUserProfileForm', updateUserProfile, {
		'rules' : rules
	} );

	datePickerValid( 'birthday', false );

	jQuery( '#email' ).focus();
} );

function updateUserProfile()
{
	jQuery.postUTF8( 'updateUserProfile.action',
		{
			id: getFieldValue( 'id' ),
			surname: getFieldValue( 'surname' ),
			firstName: getFieldValue( 'firstName' ),
			email: getFieldValue( 'email' ),
			phoneNumber: getFieldValue( 'phoneNumber' ),
			introduction: getFieldValue( 'introduction' ),
			jobTitle: getFieldValue( 'jobTitle' ),
			gender: getFieldValue( 'gender' ),
			birthday: getFieldValue( 'birthday' ),
			nationality: getFieldValue( 'nationality' ),
			employer: getFieldValue( 'employer' ),
			education: getFieldValue( 'education' ),
			interests: getFieldValue( 'interests' ),
			languages: getFieldValue( 'languages' )
		}
		, function( json )
		{
			var firstNam=$("#firstName").val();
			var lastName=$("#surname").val();
			$("#updateProfileHeader").text(firstNam +" "+ lastName);
			setHeaderDelayMessage( json.message );

		} );
}
