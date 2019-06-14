import React, { Component } from "react";
import { View, Text, ScrollView } from "react-native";
import { Card } from "react-native-elements";
import { FlatList } from "react-native-gesture-handler";
import { LEADERS } from "../shared/leaders";
import { ListItem } from "react-native-elements";

export default class AboutUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      leaders: LEADERS
    };
  }
  static navigationOptions = {
    title: "About Us"
  };
  render() {
    const renderMenuItem = ({ item, index }) => {
      return (
        <ListItem
          key={index}
          title={item.name}
          subtitle={item.description}
          hideChevron={true}
          leftAvatar={{ source: require("./images/alberto.png") }}
        />
      );
    };
    const History = () => {
      return (
        <Card title="Our History">
          <Text>
            Started in 2010, Ristorante con Fusion quickly established itself as
            a culinary icon par excellence in Hong Kong. With its unique brand
            of world fusion cuisine that can be found nowhere else, it enjoys
            patronage from the A-list clientele in Hong Kong. Featuring four of
            the best three-star Michelin chefs in the world, you never know what
            will arrive on your plate the next time you visit us.
          </Text>
          <Text>
            Started in 2010, Ristorante con Fusion quickly established itself as
            a culinary icon par excellence in Hong Kong. With its unique brand
            of world fusion cuisine that can be found nowhere else, it enjoys
            patronage from the A-list clientele in Hong Kong. Featuring four of
            the best three-star Michelin chefs in the world, you never know what
            will arrive on your plate the next time you visit us.
          </Text>
        </Card>
      );
    };
    return (
      <ScrollView>
        {History()}
        <Card title="Corporate Leadership">
          <FlatList
            data={this.state.leaders}
            renderItem={renderMenuItem}
            keyExtractor={item => item.id.toString()}
          />
        </Card>
      </ScrollView>
    );
  }
}