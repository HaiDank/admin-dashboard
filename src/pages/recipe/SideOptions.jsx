import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import AccessingIcon from '../../assets/AccessingIcon'
import ExportingIcon from '../../assets/ExportingIcon'
import FriendIcon from '../../assets/FriendIcon'
import PlusIcon from '../../assets/PlusIcon'
import Bars3Icon from '../../assets/Bars3Icon'
const SideOptions = () => {
    const [collapsed, setCollapsed] = useState(false)
    const navigate = useNavigate();
    const sideOptions = [{
        Icon: <AccessingIcon style='w-8 h-8' />,
        text: 'Find other recipes',
        onClickFunction: function () {navigate('./global')}
    }, {
        Icon: <PlusIcon style='w-8 h-8' />,
        text: 'Add new recipe',
        onClickFunction: function () { navigate('./add') }
    }, {
        Icon: <ExportingIcon style='w-8 h-8' />,
        text: 'Export your recipes',
        onClickFunction: function () {navigate('./export')}
    }, {
        Icon: <FriendIcon style='w-8 h-8' />,
        text: 'View friend recipes',
        onClickFunction: function () { navigate('./friend') }
    }]
    const sideOptionsElement = sideOptions.map(sideOption => {
        const { Icon, text, onClickFunction } = sideOption
        return (
            <div className='flex space-x-4 cursor-pointer hover:bg-gray-200 p-4' onClick={onClickFunction} key={text}>
                {Icon}
                <span className={`text-lg font-semibold`}>{text}</span>
            </div>
        )
    })
    return (
        <div className='flex flex-col rounded bg-gray-50'>
            <div className='bg-green-accent rounded-t px-3 w-full h-12 flex items-center'>
                <button className='rounded-full hover:bg-green-700 p-1'><Bars3Icon style='w-8 h-8 text-green-100'/></button>
            </div>
            <div>{sideOptionsElement}</div>
            <div className='h-96'></div>
        </div>
    )
}

export default SideOptions