import React, { Component } from 'react';
import {
  View, ScrollView, StyleSheet, Text,
} from 'react-native';
import { Card } from 'react-native-elements';
import IconHeader from '../IconHeader';
import CardHeader from '../cardHeader';
import ItemList from '../ItemList';
import Accordian from '../Screen/Accordian';
import image1 from '../../assets/image/offerZone.jpg';
import image2 from '../../assets/image/mobiles.jpg';
import image3 from '../../assets/image/flights.jpg';
import image4 from '../../assets/image/home.jpg';
import image5 from '../../assets/image/beauti.jpg';
import image6 from '../../assets/image/electronics.jpg';
import image7 from '../../assets/image/sport.jpg';
import image8 from '../../assets/image/toybaby.jpg';
class Dashboard extends Component {
   
      state = {
        menu: [
          {
            title: image1,
            data: [
              { key: 'Chicken Biryani', value: 'false',path:image1 },
              { key: 'Mutton Biryani', value: 'false',path:image2 },
              { key: 'Prawns Biryani', value: 'false',path:image3 },
              { key: 'Chicken Biryani', value: 'false',path:image4 },
              { key: 'Mutton Biryani', value: 'false',path:image5 },
              { key: 'Prawns Biryani', value: 'false',path:image6 },
              { key: 'Chicken Biryani', value: 'false',path:image7 },
              { key: 'Mutton Biryani', value: 'false',path:image8 }
            ]
          },
          {
            title: image2,
            data: [
              { key: 'Chicken Dominator', value: 'false',path:image1 },
              { key: 'Peri Peri Chicken', value: 'false',path:image2 },
              { key: 'Indie Tandoori Paneer', value: 'false',path:image3 },
              { key: 'Veg Extraveganza', value: 'false',path:image4 }
            ]
          },
          {
            title: image3,
            data: [
              { key: 'Cocktail', value: 'false',path:image1 },
              { key: 'Mocktail', value: 'false',path:image2 },
              { key: 'Lemon Soda', value: 'false',path:image3 },
              { key: 'Orange Soda', value: 'false',path:image4 }
            ]
          },
          {
            title: image4,
            data: [
              { key: 'Cocktail', value: 'false',path:image1 },
              { key: 'Mocktail', value: 'false',path:image2 },
              { key: 'Lemon Soda', value: 'false',path:image3 },
              { key: 'Orange Soda', value: 'false',path:image4}
            ]
          },
          {
            title: image5,
            data: [
              { key: 'Cocktail', value: 'false',path:image1 },
              { key: 'Mocktail', value: 'false',path:image2 },
              { key: 'Lemon Soda', value: 'false',path:image3 },
              { key: 'Orange Soda', value: 'false',path:image4 }
            ]
          }
  
        ]
      }
    
    render() {
      return (
  
        <View style={{ flex: 1 }}>
          <View >
            <IconHeader navigation={this.props.navigation} ></IconHeader>
          </View>

          <ScrollView  showsVerticalScrollIndicator={false} >
            <Card>
              <CardHeader></CardHeader>
              <ItemList></ItemList>
            </Card>
  
            <View >
              {this.renderAccordians()}
            </View>
          </ScrollView>
        </View>
  
  
      );
    }
    renderAccordians = () => {
      const items = [];
      console.log('this.menu :', this.state);
    //   for (item of this.state.menu) {
    //     items.push(
    //       <Accordian
    //         title={item.title}
    //         data={item.data}
    //       />
    //     );
    //   }
    this.state.menu.forEach(item => {
        items.push(
            <Accordian
                title={item.title}
                data={item.data}
            />
        )
        }
    )
      return items;
    }
  }
  const style=StyleSheet.create({
    row:{
      flexDirection:'row',
      flexWrap:'wrap',
      alignItems:'flex-start',
    }
  })
  export default Dashboard;