import Carousel ,{ Pagination } from 'react-native-snap-carousel';
import React, {Component} from 'react';
import { TouchableHighlight, setState, SafeAreaView, ScrollView, Dimensions, View , Text, StyleSheet, Platform, Image, ImageBackground} from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const { width: screenWidth } = Dimensions.get('window')

export class Slider extends Component {
    
   
    constructor(props){
        super(props);
        this.state = {
          entries: [
              { thumbnail: 'https://i.ibb.co/3T9tJ8f/IMG-5631.jpg',
                title: 'hala' },
              { thumbnail: "https://i.ibb.co/w0wt2zc/IMG-5629.jpg" ,
              title: 'hala'},
              { thumbnail: "https://i.ibb.co/CnynjBZ/IMG-5630.jpg",
              title: 'hala' },
              { thumbnail: "https://i.ibb.co/mRzRbcC/IMG-5632.jpg",
              title: 'hala'}
          ],
          activeSlide : 0,
          first: 0,
          second: 0,
          third: 0,
          fourth: 0,
          pressed: false
        }
      }


    get pagination () {
        var { entries, activeSlide} = this.state;
        return (
            <View>
                <View style={[{flexDirection:'row',alignItems: 'center', justifyContent: 'center', marginTop:20}]}>
                     <View >
                     <FontAwesome name='minus-circle' size={38} onPress ={()=>{
                         if(activeSlide == 0 && this.state.first>0){
                             this.setState({
                                 first: this.state.first-1
                             })
                         }

                         if(activeSlide == 1  && this.state.second>0){
                            this.setState({
                                second: this.state.second-1
                            })
                        }

                        if(activeSlide == 2  && this.state.third>0){
                            this.setState({
                                third: this.state.third-1
                            })
                        }

                        if(activeSlide == 3  && this.state.fourth>0){
                            this.setState({
                                fourth: this.state.fourth-1
                            })
                        }
                     } } />
                     </View>

                     <View style={[{marginTop:0, marginLeft: 55, marginBottom: 0, marginRight: 55}]}> 
                     { activeSlide==0 && <Text style={[{width: 20, fontWeight: 'bold'}]}>{this.state.first}</Text>}
                     { activeSlide==1 && <Text style={[{width: 20, fontWeight: 'bold'}]}>{this.state.second}</Text>}
                     { activeSlide==2 && <Text style={[{width: 20, fontWeight: 'bold'}]}>{this.state.third}</Text>}
                     { activeSlide==3 && <Text style={[{width: 20, fontWeight: 'bold'}]}>{this.state.fourth}</Text>}
                     </View>

                     
                     <TouchableHighlight underlayColor='white'  
                      onHideUnderlay={() => {
                    this.setState({ pressed: false });
                     }}

                    onShowUnderlay={() => {
                        this.setState({ pressed: true });
                    }} 
                        onPress ={()=>{
                         this.state.pressed =true
                         if(activeSlide == 0){
                             this.setState({
                                 first: this.state.first+1
                             })
                         }

                         if(activeSlide == 1){
                            this.setState({
                                second: this.state.second+1
                            })
                        }

                        if(activeSlide == 2){
                            this.setState({
                                third: this.state.third+1
                            })
                        }

                        if(activeSlide == 3){
                            this.setState({
                                fourth: this.state.fourth+1
                            })
                        }
                     } } ><FontAwesome style={[this.state.pressed?{color:'#1f89dc'}:{}]} name='plus-circle' size={38}></FontAwesome>
                     </TouchableHighlight>
                </View>
            <Pagination
              dotsLength={entries.length}
              activeDotIndex={activeSlide}
              containerStyle={{ backgroundColor: 'white' }}
              dotStyle={{
                  width: 10,
                  height: 10,
                  borderRadius: 5,
                  marginHorizontal: 8,
                  backgroundColor: 'black'
              }}
              inactiveDotStyle={{
                  // Define styles for inactive dots here
              }}
              inactiveDotOpacity={0.4}
              inactiveDotScale={0.6}
            />
            </View>
        );
    }
      _renderItem ({item, index}, parallaxProps) {
        return (
            <View style={[styles.item,{}]}>
                {/* <ParallaxImage
                    source={{ uri: item.thumbnail }}
                    containerStyle={[styles.imageContainer]}
                    style={[styles.image]}
                    parallaxFactor={0.4}
                    {...parallaxProps}
                /> */}

                <ImageBackground style={[styles.image]} source={{ uri: item.thumbnail }}></ImageBackground>
               
            </View>
        );
    }

    render () {
        return (
            <View>
            {/* <Carousel
              ref={(c) => { this._carousel = c; }}
              data={this.state.entries}
              renderItem={this._renderItem}
              sliderWidth={screenWidth}
              itemWidth={screenWidth}
            /> */}

            
                <Carousel
                  data={this.state.entries}
                  renderItem={this._renderItem}
                  sliderWidth={screenWidth}
                  itemWidth={screenWidth}
                  onSnapToItem={(index) => this.setState({ activeSlide: index }) }
                />
                { this.pagination }
            </View>
        );
    }
}


const styles = StyleSheet.create({
    item: {
      width: screenWidth - 60,
      height: screenWidth - 60,
    },
    imageContainer: {
      flex: 1,
      marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
      backgroundColor: 'white',
      borderRadius: 8,
      width: screenWidth,
    height: screenWidth
    },
    image: {
    //   ...StyleSheet.absoluteFillObject,
    //   resizeMode: 'cover',
    width: screenWidth-70,
    height: screenWidth,
    marginLeft: 38,
    marginRight: 32,
    marginTop: 30
    },
    minus: {
        fontSize: 40,
        borderStyle:'solid',
        borderWidth: 1,
        borderRadius: 175,
        paddingTop: 0,
        paddingRight: 12,
        paddingLeft: 12,
        paddingBottom: 0
    },
    add: {
        fontSize: 40,
        borderStyle:'solid',
        borderWidth: 1,
        borderRadius: 175,
        paddingTop: 0,
        paddingRight: 9,
        paddingLeft: 9,
        paddingBottom: 0
    }
  })