import styled from 'styled-components'

export const Article = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  height: 100%;
  position: relative;
  border-radius: 10px;
  margin: auto;
  align-items: center;
  width: 200px;
  height: 330px;
`

export const CardTitle = styled.h3`
  font-family: 'Merriweather', sans-serif;
  font-weight: 700;
  font-size: 30px;
  line-height: 37.71px;
  text-align: center;
  position: relative;
  bottom: 16rem;
  color: white;
`

export const CardWrapper = styled.p`
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  text-align: left;
  color: #333;
`
