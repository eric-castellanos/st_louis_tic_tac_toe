import React from 'react'
import styled from 'styled-components';

const SmallLogo = styled.img`
        width: 90px;
        height: auto;
    `;

function Logo({ link }) {

    return(
        <div>
            <SmallLogo src={link} alt="logo" />
        </div>
    )
}

export default Logo