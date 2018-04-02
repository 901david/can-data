import React, {  Component } from 'react';
import './Nav.css';

export class Nav extends Component {
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
                        className={`${currentButton === 'All' ? 'selectedButton' : ''} nav`}>
                        All
                    </li>
                    <li
                        onClick={() => this.buttonSelector('Name')}
                        className={`${currentButton === 'Name' ? 'selectedButton' : ''} nav`}>
                        Name
                    </li>
                    <li
                        onClick={() => this.buttonSelector('Serial')}
                        className={`${currentButton === 'Serial' ? 'selectedButton' : ''} nav`}>
                        Serial
                    </li>
                    <li
                        onClick={() => this.buttonSelector('Size')}
                        className={`${currentButton === 'Size' ? 'selectedButton' : ''} nav`}>
                        Size
                    </li>
                    <li
                        onClick={() => this.buttonSelector('Created On')}
                        className={`${currentButton === 'Created On' ? 'selectedButton' : ''} nav`}>
                        Created
                    </li>
                    <li
                        onClick={() => this.buttonSelector('Modified On')}
                        className={`${currentButton === 'Modified On' ? 'selectedButton' : ''} nav`}>
                        Modified On
                    </li>
                </ul>
                </div>
            </div>
        );

    }
}

export default Nav;
