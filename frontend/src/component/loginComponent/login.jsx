import  React ,{Component} from 'react';

import AuthenticationService from '../../Service/AuthentificationService'
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBIcon,
    MDBCardHeader,
    MDBBtn
  } from "mdbreact";

class login extends Component{

    constructor(){
        super();
      
            this.state = {
                username: '',
                password: '',
                hasLoginFailed: false,
                showSuccessMessage: false
            }
        this.handleChange=this.handleChange.bind(this);
        this.loginClicked=this.loginClicked.bind(this);
    }



    handleChange(event){
        this.setState({
            [event.target.name]:event.target.value
        })
    }
    verifier(username, password)
    { 
        return username==="abdo" && password==="123";
    }
    loginClicked() {
        if(this.verifier(this.state.username, this.state.password)){
            AuthenticationService.registerSuccessfulLogin(this.state.username,this.state.password)
            this.props.history.push(`/Home`);
        }
        else
        {
            this.setState({showSuccessMessage:false})
            this.setState({hasLoginFailed:true})
        }
        }
  
    
render()
{

    return(
    <MDBContainer center>
      <MDBRow center="true" middle="true">
        <MDBCol md="6" >
          <MDBCard >
            <MDBCardBody >
              <MDBCardHeader className="form-header  warm-flame-gradient rounded">
                <h3 className="text-center my-3">
                  <MDBIcon icon="lock" /> Login:
                </h3>
              </MDBCardHeader>
              <br></br>
              {this.state.hasLoginFailed && <div className="alert alert-warning">Mot de passe incorrect</div>}
              {this.state.showSuccessMessage && <div className="alert alert-success">Accès avec succes</div>}

              <label
                htmlFor="defaultFormEmailEx"
                className="grey-text font-weight-light"
              >
                Username
              </label>
              <input
                type="email"
                id="defaultFormEmailEx"
                className="form-control"
                name="username"
                onChange={this.handleChange} 
              />

              <label
                htmlFor="defaultFormPasswordEx"
                className="grey-text font-weight-light"
              >
                password
              </label>
              <input
                type="password"
                id="defaultFormPasswordEx"
                className="form-control"
                name="password"
                onChange={this.handleChange} 
              />
              <div className="text-center mt-4">
                <MDBBtn color="deep-orange" onClick={this.loginClicked} className="mb-3" type="button">
                  Login
                </MDBBtn>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
      
    )
}
}
export default login;