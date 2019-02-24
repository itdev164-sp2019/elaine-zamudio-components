import React from 'react'
import PropTypes from 'prop-types'
import { Box } from 'rebass'
import styled from 'styled-components'
import { Link } from 'rebass'

const Outer = styled(Box)`
height: ${props => props.height};
width: 100%;
background-color: rebeccapurple;
margin-bottom: 1.45rem;
`

export const Masthead = ({ height, siteTitle}) => {
    return (
        <Outer heigh={height}>
        <Link
        href="/"
        style={{
            solor:  `white`,
            textDecoration: `non`
        }}
        >
        {siteTitle}
        </Link>
        </Outer>
    )
}

Masthead.propTypes = {
    height: PropTypes.string.isRequired,
    siteTitle: PropTypes.string
}