import React, { useState } from 'react';
import SettingsItem from "../../components/SettingsItem/SettingsItem";
import DropdownMenu from "../../components/SettingsItem/DropdownMenu/DropdownMenu";

const Settings = props => {
	const [open,setOpen] = useState(false);
	const setOpenState = () => {
        setOpen(!open);
    }

	return(
	<SettingsItem 
		open={open}
		setOpen={setOpenState}
	>
		<DropdownMenu
			openModalForLocation={props.openModalForLocation}
			openModalForSize={props.openModalForSize}
			openModalForAlgorithms={props.openModalForAlgorithms}
		/>
	</SettingsItem>
	)
}

export default Settings;