class VisibilityToggle extends React.Component {

    constructor(props) {
        super(props);
        this.changeVisibility = this.changeVisibility.bind(this);
        this.state = {
            visible: false
        }

    }

    changeVisibility() {
        this.setState((prevState) => {
            return {
                visible: !prevState.visible
            }
        })

    }

    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>

                <button onClick={this.changedVisibility}>
                {this.state.visible ? "Hide details" : "Show details"}
                </button>
                {this.state.visible && (
                    <div>
                        <p>Some text to see!</p>
                    </div>
                )}
        </div>        
        )
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));


// const changedVisibility = () => {
//         visible = !visible;
//         renderNavigation();
// }

// let visible = false;

// const renderNavigation = () => {
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>

//             <button onClick={changedVisibility}>
//              {visible ? "Hide details" : "Show details"}
//             </button>
//             {visible && (
//                 <div>
//                     <p>Some text to see!</p>
//                 </div>
//             )}
//         </div>
//     );

//     ReactDOM.render(template, appRoot);
// }

// const appRoot = document.getElementById("app");

// renderNavigation();