const { Navbar } = ReactBootstrap;

class LauncherNavBar extends React.Component {

    render() {
        const btnStyle = {backgroundImage: "none"};
        return <Navbar inverse fluid fixedTop>
            <Navbar.Header>
                <Navbar.Brand pullLeft>
                    <a href="#">Application Store</a>
                </Navbar.Brand>
            </Navbar.Header>
        </Navbar>;
    }

}

