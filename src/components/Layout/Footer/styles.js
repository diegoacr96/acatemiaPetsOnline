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
    display: 'flex',
    width: '500px',
    justifyContent: 'space-between'
})

export const WhiteAnchor = styled.a({
    color: 'white',
    textDecoration: 'none'
})