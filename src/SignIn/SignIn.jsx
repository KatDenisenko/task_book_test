import React, { Component } from 'react';
import {Grid, Header, Form, Segment, Button, Message}  from 'semantic-ui-react';
import './SignIn.css';
import {connect} from 'react-redux';
import {adminSignIn} from '../redux/actions/adminAction';

class SignIn extends Component {

    state = {
        password:'',
        login:'',
        error:'',
        
    }
    handlerChange=(e)=>{
        this.setState({
            [e.target.name]: e.target.value,
        })
    }
    adminConfirm =()=>{
        if (this.state.login==="admin"&& this.state.password==="123") {
            this.props.adminSignIn();
            this.props.toggleSignIn();
        } else {
            let err = "Логин или паролль введены не верно, попробуйте ещё раз или войдите как пользователь"
            this.setState({
                error:err,
            })
        }
    }

    render() {
        return (
        <div className="signInOwerlay">
        <Grid textAlign='center' verticalAlign='middle' className="signInWrapper">
            <Grid.Column style={{maxWidth: 450}}>
            <Header as='h2' icon color = 'grey' textAlign='center'>
                Login task board
            </Header>
            <Form size='large' onSubmit={this.adminConfirm}>
            <Segment>
   
                <Form.Input
                    fluid
                    name='login'
                    icon='user'
                    iconPosition='left'
                    placeholder='Enter login'
                    type='text'
                    onChange={this.handlerChange}
                    value={this.state.login}
                    required
                    />
                <Form.Input
                fluid
                name='password'          
                    icon='lock'
                iconPosition='left'
                    placeholder='Password'
                    type='password'            
                    onChange={this.handlerChange}
                    value={this.state.password}
                    required
                /> 
                    <Button color='grey' fluid size='large'>Submit</Button>
            </Segment>
            </Form>
            {this.state.error.length>0 && (
                <Message error>
                <h3>Error</h3>
                <p>{this.state.error}</p>
                <Button onClick = {this.props.toggleSignIn} color='orange' fluid size='small'>Sign in like user</Button>
                </Message>
            )
            }          
            </Grid.Column>
            </Grid>
        </div>
            
        );
    }
}

function MDTP (dispatch) {
    return {
        adminSignIn: function() {
            dispatch(adminSignIn())
        },     
  }
  }
  
   export default connect(null, MDTP) (SignIn);



