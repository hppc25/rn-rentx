import styled, {css} from 'styled-components/native';
import { FlatList } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
// import { Car } from '../../database/model/Car';
import { RectButton } from 'react-native-gesture-handler';

interface Car{
    brand: string,
    name: string,
    period: string,
    thumbnail: string,
    price: string,
    fuel_type: string,
}

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const Header = styled.View`
  width: 100%;
  height: 113px;
  background-color: ${({ theme }) => theme.colors.header};  
  justify-content: flex-end;
  padding: 32px 24px;
`;

export const HeaderContent = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TotalCars = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: ${({ theme }) => theme.colors.text};
`;

export const CarList = (styled(FlatList as new () => FlatList<Car>)
.attrs({
  contentContainerStyle: {
    padding: 24
  },
  showsVerticalScrollIndicator: false
})`` as unknown) as typeof FlatList;;


export const MyCarsButton = styled(RectButton)`
  ${({ theme }) => css`
    width: 60px;
    height: 60px;
    border-radius: 30px;
    background-color: ${theme.colors.main};
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 13px;
    right: 22px;
  `}
`;