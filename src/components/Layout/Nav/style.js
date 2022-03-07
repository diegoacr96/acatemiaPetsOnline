import styled from 'styled-components';
import { colors } from '../../../utils';

export const Header = styled.header({
    height: '30%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'roboto',
    fontWeight: 'bold',
    background: colors.teal,
    width: '100%'
})

export const LogoHeader = styled.img({
    width: '500px',
    ['@media(max-width: 400px)']: {
        width: '100%'
    }
})