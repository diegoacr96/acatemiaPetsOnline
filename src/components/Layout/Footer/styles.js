import styled from 'styled-components';
import { colors } from '../../../utils';

export const Container = styled.footer({
    position: 'fixed',
    height: '5em',
    background: colors.purple,
    width: '100%',
    bottom: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white'
})

export const Columns = styled.div({
    width: '500px',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 10em), 1fr))',
    justifyContent: 'center',
    justifyItems: 'center'
})

export const WhiteAnchor = styled.a({
    color: 'white',
    textDecoration: 'none'
})