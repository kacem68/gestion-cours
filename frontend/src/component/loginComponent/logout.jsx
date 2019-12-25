import React , {Component} from 'react'
import authentificationService from '../../Service/AuthentificationService'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper';



class logoutComponent extends Component{
    constructor(props)
    {
        super(props);
        this.back=this.back.bind(this)
    }
    componentDidMount() {   
        this.logout();
    }
    back()
    {
        this.props.history.push('/login');
    }
    logout()
    {
        authentificationService.logout();
    }
    render()
    {
        return(
            <div className="container">
                <Paper >
                    <br></br>
                    <div class="alert alert-danger mx-auto col-lg-6" >
                        Vous êtes déconnecté, Merci pour votre visite
                    </div>
                    <div className="text-center mt-4">
                    <Button variant="contained" className="mx-auto"   onClick={this.back} color="primary">Se connecter</Button>
              </div>
              <br></br>
                </Paper>

            </div>
        )
    }
}
export default logoutComponent;
