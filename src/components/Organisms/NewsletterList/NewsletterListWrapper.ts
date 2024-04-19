import styled from 'styled-components'

export const ListContainer = styled.div`
  width: 74%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin: auto;
`

export const Section = styled.section`
  display: flex;
  flex-direction: column;
`

export const Site = styled.h3`
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 700;
  font-size: 22px;
  color: var(--Neutral-High-contrast, #212121);
  position: relative;
  padding-bottom: 10px;
  margin-left: 20rem;
  margin-top: 5rem;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 70px;
    height: 4px;
    background-color: #b00005;
    border-radius: 10px;
  }
`
