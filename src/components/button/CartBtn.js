import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux'


function CartBtn() {
  return (
    <div>
      <>
            <NavLink to="/cart" className="btn btn-outline-primary ms-2">
                <span className="fa fa-shopping-cart me-1"></span> Cart ({useState.length})
            </NavLink>
        </>
    </div>
  )
}

export default CartBtn;