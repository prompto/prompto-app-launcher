const {  MenuItem, Row, Col, Thumbnail } = ReactBootstrap;

const moduleImage = {
    library : "img/library.png",
    script : "img/script.jpg",
    website : "img/website.jpg",
    batch : "img/batch.jpg",
    service : "img/service.jpg",
};

/* TODO remove this, it is for DEMO purpose only */
const toolUrls = {
    Factories: "http://localhost:8728/factories/index.html"
};


class Deployment extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.getUrl = this.getUrl.bind(this);
    }

    render() {
        const module = this.props.deployment.release.value.module;
        const imageSrc = module.value.image || moduleImage[module.type.toLowerCase()];
        return <Col xs={4} sm={2} style={{width: "170px", boxSizing: "content-box" }}>
            <Thumbnail src={imageSrc} onClick={this.handleClick}>
                <p><strong>{module.value.name}</strong></p>
                <span className="text-muted">{module.value.description}</span>
            </Thumbnail>
        </Col>;
    }

    handleClick() {
        const url = this.getUrl();
        window.open(url, "_blank");
    }

    /* TODO remove this, it is for DEMO purpose only */
    getUrl() {
        const url = this.props.deployment.url;
        if(url)
            return url.value.path;
        const name = this.props.deployment.release.value.module.value.name;
        return toolUrls[name] || "";
    }

}


class LauncherBrowser extends React.Component {

    render() {
        return <Row>
            {this.props.deployments.map( depl => <Deployment key={depl.dbId.value} root={this.props.root} deployment={depl} />)}
        </Row>;
    }
}
