import styled from 'styled-components';

export const CourseContainer = styled.article({
    height: '20em',
    alignItems: 'center',
    justifyItems: 'center',
    display: 'grid',
    gridTemplateRows: '5fr 1fr 1fr',
    ['&:not(:first-child):not(last-child)']: {
        margin: '2em 0'
    },
    width: '25em',
    ['@media (max-width: 400px)']: {
        width: '90%'
    }

})

export const A = styled.a({
})

export const Img = styled.img({
    width: '100%'
})