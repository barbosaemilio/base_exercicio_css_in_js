import styled from 'styled-components'

const CabecalhoContainer = styled.header`
  background-color: var(--cor-secundaria);
  color: var(--cor-principal);
  text-align: center;
  padding: 24px 0;
`

const Cabecalho = () => (
  <CabecalhoContainer>
    <h1>EBAC Jobs</h1>
  </CabecalhoContainer>
)

export default Cabecalho
