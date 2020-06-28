import React from 'react';
import { Inputs,Labels ,InputGroup ,SuccessBtn , Errormsg} from './signinstyle';
import axios from 'axios';
import { Auth } from '../../Contexts/AuthContext';
import { Redirect } from 'react-router-dom';

const validate = ({errors , username, password}) =>{
    let valid = true;
        Object.values(errors).forEach(val => val.length > 0 && (valid = false));

        username.length === 0 &&(valid=false);
        password.length === 0 &&(valid=false);
        return valid;
}

class SignInForm extends React.Component{
    state={
        username:'',
        password:'',
        formvalidate:null,
        errors:{
            username:'',
            password:''
        }
    }

    static contextType = Auth;
    handleChange = event =>{
        const { name,value} =event.target;
        let {errors} = this.state;

        switch(name){
            case('username'):
            errors.username = value.length <=3 ? 'invalid username' : '';
            break;
            case('password'):
            errors.password = value.length <=3 ? 'invalid password' : '';
            break;
            default:
                break;
        }
        this.setState({errors,[name]:value});
    }
    submitHandle = event =>{
        event.preventDefault();
        if(validate(this.state)){
            axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
               const data= res.data.find(list => list.email === this.state.username || 
                list.username === this.state.username); 
                if(!data) this.setState({errors:{username:'username doesnt exist'}})
                if(data) this.setState({formvalidate:data});
            }) 
                .catch(err => console.log(err));
        }else{
            let {errors } = this.state;
            if(this.state.username.length === 0) errors.username = 'Required';
            if(this.state.password.length === 0) errors.password = 'Required';

            this.setState({errors});
        }  
    }
    render(){
        const [auth,changeauth] = this.context;
        if(this.state.formvalidate){
            changeauth({data:this.state.formvalidate});
            console.log(`Authentication ${auth}`);
           return <Redirect to='/dashboard' />
        }
        const {errors} = this.state;
        return(
            <form onSubmit={this.submitHandle} >
                <InputGroup>
                <Labels>Username or emailaddress</Labels>
                <Inputs type='text' name='username' value={this.state.username}
                autoComplete='new-password' onChange={this.handleChange} />
                {errors.username.length >0 && <Errormsg>{errors.username}</Errormsg>}
                </InputGroup>

                <InputGroup>
                <Labels>Password</Labels>
                <Inputs type='password' name='password' value={this.state.password}
                autoComplete='new-password' onChange={this.handleChange} />
                {errors.password && 
                (errors.password.length >0 && <Errormsg>{errors.password}</Errormsg>)}
                </InputGroup>

                <SuccessBtn type='submit'>Sign In</SuccessBtn>
            </form>
        );
    }
}
export default SignInForm;