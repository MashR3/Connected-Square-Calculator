import React from 'react';
import ReactDOM from 'react-dom';
import Grid from './Grid';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './Styles.css';
import { GithubPicker } from 'react-color';

const bgColors = ['#E8CBBD', '#E8E3BD', '#D9E8BD', '#BDE8CE', '#BDE8E5', '#BDD1E8', '#CCBDE8', '#E8BDE0']
const mColors = ['#B80000', '#DB3E00', '#FCCB00', '#008B02', '#A8B7A8', '#1273DE', '#8F63D8', '#D73CBA']

class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            value: 1,
            mainColor: '#166ae7e1',
            backgroundColor: '#FAFAFA'
        }
    }

    onSliderChange = value => {
        this.setState({ value })
    }

    handleMainColorChange = (color) => {
        this.setState({ mainColor: color.hex });
    };

    handleBGColorChange = (color) => {
        this.setState({ backgroundColor: color.hex });
    };
      
    render() {
        return(
            <div className="container">
                <div className="title">Connected Grid Counter</div>
                <p>Please select grid size using the slider.</p>
                <p>Current grid size:</p>
                <p className="gridSizeText">{this.state.value}</p>
                <div className="sliderContainer">
                    <Slider
                        value={this.state.value}
                        min={1}
                        max={10}
                        onChange={this.onSliderChange}
                        onAfterChange={this.onAfterChange}
                        className="slider"
                    />
                </div>



                <Grid size={this.state.value} mainColor={this.state.mainColor} backgroundColor={this.state.backgroundColor}/>
                
                
        
                <div className="colorContainer">
                    <div>
                        <p>Main Colour:</p>
                        <GithubPicker 
                            width={100}
                            value={this.state.value}
                            color={this.state.mainColor}
                            colors={mColors}
                            onChangeComplete={ this.handleMainColorChange }
                        />
                    </div>
                    <div>
                        <p>Background Colour:</p>
                        <GithubPicker 
                            width={100}
                            value={this.state.value}
                            color={this.state.backgroundColor}
                            colors={bgColors}
                            onChangeComplete={ this.handleBGColorChange }
                        />
                    </div> 
                </div>
                
            </div>
        )
    }
}
    

ReactDOM.render(<App />, document.querySelector('#root'));

if (module.hot) {
    module.hot.accept();
}