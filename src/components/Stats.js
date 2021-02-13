import React from "react"
import styled from "styled-components"
import {
  FaMoneyCheck,
  GiEarthAmerica,
  MdAttachMoney,
  MdTimer,
  MdSupervisorAccount
} from "react-icons/all"

const StatsData = [
  {
    icon: (
      <GiEarthAmerica
        css={`
          color: #047bf1;
        `}
      />
    ),
    title: "Envíos a toda la República",
    desc: "Llevamos tus productos hasta la puerta de tu negocio",
  },
  {
    icon: (
      <MdSupervisorAccount
        css={`
          color: #f3a82e;
        `}
      />
    ),
    title: "Atención personalizada",
    desc: "Nos preocupamos por atender tus necesidades",
  },
  {
    icon: (
      <MdTimer
        css={`
          color: #f34f2e;
        `}
      />
    ),
    title: "Entregas rápidas",
    desc: "Entregamos desde X dias hábiles",
  },
  {
    icon: (
      <MdAttachMoney
        css={`
          color: #3af576;
        `}
      />
    ),
    title: "Los mejores precios",
    desc: "Ofrecemos el mejor valor por tu dinero",
  },
]

const Stats = () => {
  return (
    <StatsContainer>
      <Heading>¿Por qué nosotros?</Heading>
      <Wrapper>
        {StatsData.map((item, index) => {
          return (
            <StatsBox key={index}>
              <Icon>{item.icon}</Icon>
              <Title>{item.title}</Title>
              <Description>{item.desc}</Description>
            </StatsBox>
          )
        })}
      </Wrapper>
    </StatsContainer>
  )
}

export default Stats

const StatsContainer = styled.div`
  width: 100%;
  background: #f1f1f1;
  color: #102027;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 4rem calc((100vw - 1300px) / 2);
`

const Heading = styled.h1`
  text-align: start;
  font-size: clamp(1.5rem, 5vw, 2rem);
  margin-bottom: 3rem;
  padding: 0 2rem;
`

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`

const StatsBox = styled.div`
  height: 100%;
  width: 100%;
  padding: 2rem;
`

const Icon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`

const Title = styled.p`
  font-size: clamp(1rem, 2.5vw, 1.5rem);
  margin-bottom: 0.5rem;
`

const Description = styled.p``
