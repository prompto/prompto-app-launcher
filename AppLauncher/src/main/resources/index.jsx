const { Grid, PageHeader } = ReactBootstrap;

class LauncherPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = { all: [] };
        this.fetchDeployed = this.fetchDeployed.bind(this);
        this.deployedReceived = this.deployedReceived.bind(this);
    }

    componentDidMount() {
        this.fetchDeployed();
    }

    fetchDeployed() {
        const data = new FormData();
        data.append("params", JSON.stringify([]));
        axios.post("/ws/run/fetchDeployed", data
        ).then(response=>this.deployedReceived(response.data)
        ).catch(error=>alert(error.response.data.error));
    }

    deployedReceived(response) {
        if(response.error)
            alert(response.error);
        else {
            const deployed = response.data.value.map(item => item.value);
            this.setState( { all: deployed } );
        }
    }


    render() {
        return <div>
            <LauncherNavBar root={this}/>
            <Grid fluid style={{paddingTop: 56}}>
                <LauncherBrowser root={this} id="recent" deployments={this.state.all}/>
            </Grid>
        </div>
    }
}