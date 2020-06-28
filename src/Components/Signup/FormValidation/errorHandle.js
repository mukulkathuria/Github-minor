const validate = values => {
            let errors ={};
            if (!values.username) {
            errors.username = 'Required';
        } 
        if ( values.username.length <=3 ) {
            errors.username = 'Invalid name';
        }
        if (!values.email) {
            errors.email = 'Required';
        } 
        if ( values.email.length <=3 ) {
            errors.email = 'Invalid email';
        }
            return errors;
  }

export default validate;
