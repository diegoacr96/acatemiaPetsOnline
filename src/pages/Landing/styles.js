import styled from 'styled-components';

export const Container = styled.main({
    background: 'white',
    height: '100vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
})

export const Content = styled.section({
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '5em',
    width: '100%',
    overflowY: 'visible',
    ['@media (max-width: 700px)']: {
        padding: '5em 1em',
        width: '100%',
    },
})

export const Header = styled.div({
    height: '30%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'roboto',
    fontWeight: 'bold',
    width: '700px',
    ['@media (max-width: 700px)']: {
        width: '100%',
    },
})

export const Heading = styled.h2({
    height: '3em'
})