import React, { Component } from 'react';
import SettingsItem from "../../components/SettingsItem/SettingsItem";
import DropdownMenu from "../../components/SettingsItem/DropdownMenu/DropdownMenu";

class Settings extends Component{
	state={
		open: false
	}

	setOpen = () => {
        this.setState(prevState => {
            return {
                ...prevState,
                open: !prevState.open
            }
        })
    }

	render(){
		return(
		<SettingsItem 
			open={this.state.open}
			setOpen={this.setOpen}
		>
			<DropdownMenu />
		</SettingsItem>
		)
	}
}

export default Settings;