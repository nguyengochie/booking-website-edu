import React from 'react'

const MenuItem = ({ icon, label, isActive }) => {
    const styleActive = { border: "1px solid #fff" }
    return <div
        style={{
            ...(isActive && styleActive),
            borderRadius: "16px",
            padding: "8px 12px", width: "fit-content"
        }} className='flex align-center' >
        <i class={icon}></i>
        <p style={{ marginLeft: "4px" }}>{label}</p>
    </div >
}
export default MenuItem