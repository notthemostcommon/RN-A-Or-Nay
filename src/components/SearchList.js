import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { List, ListItem } from 'react-native-elements'; 
import ShowLocation from './ShowLocation'; 
import { withNavigation } from 'react-navigation';
import { Container} from 'native-base'; 
import _ from 'underscore'; 




class SearchList extends Component {
    constructor(props){
        super(props)
    }
    static navigationOptions = {
      title: 'Search Results'
    }  

    componentWillMount = () => {
      
    };
    


  render () {
    const { results } = this.props.navigation.state.params; 
    // console.log("this is searchlist results", this.props.navigation.state.params.results)
    const { navigate } = this.props.navigation; 

    // console.log("inside searchlist", this.props.results)
    
  return (
    <Container>
    
      <ScrollView>
        <List>
          {
            _.uniq(results, false, (location => {
              return location.camis
            })).map((item, i) => {
              
              return (<ListItem
                key={i}
                title={item.dba}
                subtitle={`${item.building} ${item.street}`}
                leftIcon={{name: item.icon}}
                onPress={() => navigate('ShowLocation', { title: _.toArray(results) })}
              />)
            })
          }

        </List>
      </ScrollView>
      
      </Container>
  )
}
}
// const styles = StyleSheet.create({
//   subtitleView: {
//     flexDirection: 'row',
//     paddingLeft: 10,
//     paddingTop: 5
//   },
//   ratingImage: {
//     height: 19.21,
//     width: 100
//   },
//   ratingText: {
//     paddingLeft: 10,
//     color: 'grey'
//   }
// })


export default SearchList;


const data = [
	{
		action: 'Violations were cited in the following area(s).',
		boro: 'MANHATTAN',
		building: '88',
		camis: '41159798',
		critical_flag: 'Not Critical',
		cuisine_description: 'Japanese',
		dba: 'MORIMOTO NY',
		grade: 'A',
		grade_date: '2015-06-16T00:00:00.000',
		inspection_date: '2015-06-16T00:00:00.000',
		inspection_type: 'Cycle Inspection / Initial Inspection',
		phone: '2129894639',
		record_date: '2018-02-22T06:00:37.000',
		score: '9',
		street: '10 AVENUE',
		violation_code: '08A',
		violation_description:
			'Facility not vermin proof. Harborage or conditions conducive to attracting vermin to the premises and/or allowing vermin to exist.',
		zipcode: '10011',
	},
	{
		action: 'Violations were cited in the following area(s).',
		boro: 'MANHATTAN',
		building: '88',
		camis: '41159798',
		critical_flag: 'Critical',
		cuisine_description: 'Japanese',
		dba: 'MORIMOTO NY',
		grade: 'A',
		grade_date: '2017-11-13T00:00:00.000',
		inspection_date: '2017-11-13T00:00:00.000',
		inspection_type: 'Cycle Inspection / Re-inspection',
		phone: '2129894639',
		record_date: '2018-02-22T06:00:37.000',
		score: '10',
		street: '10 AVENUE',
		violation_code: '06A',
		violation_description:
			'Personal cleanliness inadequate. Outer garment soiled with possible contaminant.  Effective hair restraint not worn in an area where food is prepared.',
		zipcode: '10011',
	},
	{
		action: 'Violations were cited in the following area(s).',
		boro: 'MANHATTAN',
		building: '88',
		camis: '41159798',
		critical_flag: 'Critical',
		cuisine_description: 'Japanese',
		dba: 'MORIMOTO NY',
		grade: 'A',
		grade_date: '2015-06-16T00:00:00.000',
		inspection_date: '2015-06-16T00:00:00.000',
		inspection_type: 'Cycle Inspection / Initial Inspection',
		phone: '2129894639',
		record_date: '2018-02-22T06:00:37.000',
		score: '9',
		street: '10 AVENUE',
		violation_code: '04N',
		violation_description:
			'Filth flies or food/refuse/sewage-associated (FRSA) flies present in facility\u001as food and/or non-food areas. Filth flies include house flies, little house flies, blow flies, bottle flies and flesh flies. Food/refuse/sewage-associated flies include fruit flies, drain flies and Phorid flies.',
		zipcode: '10011',
	},
	{
		action: 'Violations were cited in the following area(s).',
		boro: 'MANHATTAN',
		building: '88',
		camis: '41159798',
		critical_flag: 'Critical',
		cuisine_description: 'Japanese',
		dba: 'MORIMOTO NY',
		grade: 'A',
		grade_date: '2017-11-13T00:00:00.000',
		inspection_date: '2017-11-13T00:00:00.000',
		inspection_type: 'Cycle Inspection / Re-inspection',
		phone: '2129894639',
		record_date: '2018-02-22T06:00:37.000',
		score: '10',
		street: '10 AVENUE',
		violation_code: '06F',
		violation_description:
			'Wiping cloths soiled or not stored in sanitizing solution.',
		zipcode: '10011',
	},
	{
		action: 'Violations were cited in the following area(s).',
		boro: 'MANHATTAN',
		building: '88',
		camis: '41159798',
		critical_flag: 'Not Critical',
		cuisine_description: 'Japanese',
		dba: 'MORIMOTO NY',
		grade: 'A',
		grade_date: '2016-06-08T00:00:00.000',
		inspection_date: '2016-06-08T00:00:00.000',
		inspection_type: 'Cycle Inspection / Initial Inspection',
		phone: '2129894639',
		record_date: '2018-02-22T06:00:37.000',
		score: '2',
		street: '10 AVENUE',
		violation_code: '10F',
		violation_description:
			'Non-food contact surface improperly constructed. Unacceptable material used. Non-food contact surface or equipment improperly maintained and/or not properly sealed, raised, spaced or movable to allow accessibility for cleaning on all sides, above and underneath the unit.',
		zipcode: '10011',
	},
	{
		action: 'Violations were cited in the following area(s).',
		boro: 'MANHATTAN',
		building: '88',
		camis: '41159798',
		critical_flag: 'Critical',
		cuisine_description: 'Japanese',
		dba: 'MORIMOTO NY',
		inspection_date: '2017-09-19T00:00:00.000',
		inspection_type: 'Cycle Inspection / Initial Inspection',
		phone: '2129894639',
		record_date: '2018-02-22T06:00:37.000',
		score: '41',
		street: '10 AVENUE',
		violation_code: '06F',
		violation_description:
			'Wiping cloths soiled or not stored in sanitizing solution.',
		zipcode: '10011',
	},
	{
		action: 'Violations were cited in the following area(s).',
		boro: 'MANHATTAN',
		building: '88',
		camis: '41159798',
		critical_flag: 'Not Critical',
		cuisine_description: 'Japanese',
		dba: 'MORIMOTO NY',
		inspection_date: '2017-09-19T00:00:00.000',
		inspection_type: 'Cycle Inspection / Initial Inspection',
		phone: '2129894639',
		record_date: '2018-02-22T06:00:37.000',
		score: '41',
		street: '10 AVENUE',
		violation_code: '08C',
		violation_description:
			'Pesticide use not in accordance with label or applicable laws. Prohibited chemical used/stored. Open bait station used.',
		zipcode: '10011',
	},
	{
		action: 'Violations were cited in the following area(s).',
		boro: 'MANHATTAN',
		building: '88',
		camis: '41159798',
		critical_flag: 'Not Critical',
		cuisine_description: 'Japanese',
		dba: 'MORIMOTO NY',
		inspection_date: '2017-09-19T00:00:00.000',
		inspection_type: 'Cycle Inspection / Initial Inspection',
		phone: '2129894639',
		record_date: '2018-02-22T06:00:37.000',
		score: '41',
		street: '10 AVENUE',
		violation_code: '08A',
		violation_description:
			'Facility not vermin proof. Harborage or conditions conducive to attracting vermin to the premises and/or allowing vermin to exist.',
		zipcode: '10011',
	},
	{
		action: 'Violations were cited in the following area(s).',
		boro: 'MANHATTAN',
		building: '88',
		camis: '41159798',
		critical_flag: 'Critical',
		cuisine_description: 'Japanese',
		dba: 'MORIMOTO NY',
		inspection_date: '2017-09-19T00:00:00.000',
		inspection_type: 'Cycle Inspection / Initial Inspection',
		phone: '2129894639',
		record_date: '2018-02-22T06:00:37.000',
		score: '41',
		street: '10 AVENUE',
		violation_code: '04N',
		violation_description:
			'Filth flies or food/refuse/sewage-associated (FRSA) flies present in facility\u001as food and/or non-food areas. Filth flies include house flies, little house flies, blow flies, bottle flies and flesh flies. Food/refuse/sewage-associated flies include fruit flies, drain flies and Phorid flies.',
		zipcode: '10011',
	},
];
