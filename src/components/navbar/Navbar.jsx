import React from 'react'
import MenuItem from './MenuItem'

const Navbar = () => {
    return (
        <div style={{ backgroundColor: "#003680", padding: "12px 48px", color: "#ffff" }} >
            <div className='flex align-center space-between'>
                <p>Booking website</p>
                <div>
                    <button style={{ marginRight: "8px" }} className='btn-white'>Register</button>
                    <button className='btn-white'>Login</button>
                </div>
            </div>
            <div className='flex gap-12' style={{ marginTop: "24px" }}>
                <MenuItem icon="fa fa-bed" label="Stays" isActive />
                <MenuItem icon="fa fa-plane" label="Flights" />
                <MenuItem icon="fa fa-car" label="Car rentals" />
                <MenuItem icon="fa fa-bed" label="Attraction" />
                <MenuItem icon="fa fa-taxi" label="Airport taxi" />
            </div>
        </div>
    )
}

export default Navbar