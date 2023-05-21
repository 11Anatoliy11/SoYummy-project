import {ChooseYourBreakfast} from 'components/ChooseYourBreakfast'
import {HeroPageTitle} from 'components/HeroPageTitle'
import { SearchForm } from 'components/Search/SearchForm/SearchForm'


import { Wrapper} from './Main.styled'

export const Main = () => {
  return(
    <>
    <HeroPageTitle/>
    <Wrapper>
    <ChooseYourBreakfast/>
    <SearchForm id="hero-search"/>
    </Wrapper>
    </>
  )
}
