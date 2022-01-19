// App.js

import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      HeadTable: ['Name', 'House No', 'stage', 'Action'],
      DataTable: [
        ['Jhon', '1591', '2', 'Rec - History'],
         ['show', '2684', '3', 'Rec - History'],
         ['Jamesh', '7532', '2', 'Rec - History'],
         ['Lynerst', '3571', '3', 'Rec - History'],
         ['peter', '9512', '5', 'Rec - History']
      ]
    }
  }

  render() {
    const state = this.state;
    return (
      <View style={styles.container}>
        <Table borderStyle={{borderWidth: 1, borderColor: '#ffa1d2'}}>
          <Row data={state.HeadTable} style={styles.HeadStyle} textStyle={styles.TableText}/>
          <Rows data={state.DataTable}  textStyle={styles.TableText}/>
        </Table>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 18,
    paddingTop: 35,
    backgroundColor: '#ffffff'
  },
  HeadStyle: {
    height: 50,
    alignContent: "center",
    backgroundColor: '#ffe0f0'
  },
  TableText: {
    margin: 10
  }
});