import React, {  Component } from 'react';
import './Nav.css';

export class Nav extends Component {
    //Handles Changing the button selector int he parent component
    buttonSelector(button) {
        this.props.buttonSelectChanger(button);
    }

    render() {

        const { currentButton } = this.props;

        return (
            <div className='col-xs-12 nav-bar'>
                <h2 className='can-title'>Can Data Display App</h2>
                <div className="col-xs-6 nav-links">
                <ul className='nav'>
                    <li
                        onClick={() => this.buttonSelector('All')}
                        className={`${currentButton === 'All' ? 'selectedButton' : ''} nav all-test`}>
                        All
                    </li>
                    <li
                        onClick={() => this.buttonSelector('Name')}
                        className={`${currentButton === 'Name' ? 'selectedButton' : ''} nav name-test`}>
                        Name
                    </li>
                    <li
                        onClick={() => this.buttonSelector('Serial')}
                        className={`${currentButton === 'Serial' ? 'selectedButton' : ''} nav serial-test`}>
                        Serial
                    </li>
                    <li
                        onClick={() => this.buttonSelector('Size')}
                        className={`${currentButton === 'Size' ? 'selectedButton' : ''} nav size-test`}>
                        Size
                    </li>
                    <li
                        onClick={() => this.buttonSelector('Created On')}
                        className={`${currentButton === 'Created On' ? 'selectedButton' : ''} nav created-test`}>
                        Created On
                    </li>
                    <li
                        onClick={() => this.buttonSelector('Modified On')}
                        className={`${currentButton === 'Modified On' ? 'selectedButton' : ''} nav modified-test`}>
                        Modified On
                    </li>
                </ul>
                </div>
            </div>
        );

    }
}

export default Nav;
