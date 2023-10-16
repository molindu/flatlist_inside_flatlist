import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';

const UserDetails = [
  {
    id: 23445896,
    username: 'Mr. Henry Jhames',
    from: 'Colombo',
    to: 'Kandy',
    ref: '2345',
    seats: {
      seat_1: 'G-234',
      seat_2: 'G-235',
      seat_3: 'G-238',
    },
    ticket_id: {
      id_1: 2003454665,
      id_2: 2003479865,
      id_3: 2023454665,
    },
  },
  // Add more user details as needed
];

const SeatList = () => {
  return (
    <FlatList
      data={UserDetails}
      keyExtractor={(user) => user.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.userContainer}>
          <Text style={styles.username}>{item.username}</Text>
          <Text>From: {item.from}</Text>
          <Text>To: {item.to}</Text>
          <Text>Reference: {item.ref}</Text>
          <Text>Seats:</Text>
          <FlatList
            data={Object.entries(item.seats)}
            keyExtractor={(seat) => seat[0]}
            renderItem={({ item: seat }) => (
              <View style={styles.seatContainer}>
                <Text>{seat[0]}: {seat[1]}</Text>
              </View>
            )}
          />
          <Text>Ticket IDs:</Text>
          <FlatList
            data={Object.entries(item.ticket_id)}
            keyExtractor={(ticket) => ticket[0]}
            renderItem={({ item: ticket }) => (
              <View style={styles.ticketContainer}>
                <Text>{ticket[0]}: {ticket[1]}</Text>
              </View>
            )}
          />
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  userContainer: {
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
    margin: 10,
  },
  username: {
    fontWeight: 'bold',
  },
  seatContainer: {
    marginLeft: 20,
  },
  ticketContainer: {
    marginLeft: 20,
  },
});

export default SeatList;
