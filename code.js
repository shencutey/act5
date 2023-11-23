import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const ApiComponent = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://dummy.restapiexample.com/api/v1/employees');

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      setData(result.data);
      setError(null); // Clear any previous errors
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('Error fetching data. Please try again.'); // Set an error message
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.head}>List of Employee:</Text>
      {error ? (
        <Text style={styles.errorText}>{error}</Text>
      ) : (
        data.map((item) => (
          <View key={item.id}>
            <Text style={styles.name}>{item.employee_name}</Text>
            <Text style={styles.add}>{'Salary: $' + item.employee_salary}</Text>
          </View>
        ))
      )}
    </ScrollView>
  );
};

export function App2() {
  return (
    <View>
      <ApiComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    marginRight: 120,
    padding: 20,
  },
  head: {
    fontSize: 16,
    marginTop: 5,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  name: {
    fontSize: 16,
    marginTop: 5,
    fontWeight: 'bold',
  },
  add: {
    fontSize: 12,
    marginBottom: 20,
  },
  errorText: {
    color: 'red',
    marginTop: 10,
  },
});