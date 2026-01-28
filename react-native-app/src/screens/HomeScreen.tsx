import React from 'react';
import {View, Text, StyleSheet, ScrollView, Pressable} from 'react-native';

export function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.hero}>
        <Text style={styles.emoji}>🚀</Text>
        <Text style={styles.title}>Timmy Template</Text>
        <Text style={styles.subtitle}>
          Your React Native app is ready to go!
        </Text>
      </View>

      <View style={styles.cards}>
        <View style={styles.card}>
          <Text style={styles.cardIcon}>📱</Text>
          <Text style={styles.cardTitle}>Native Performance</Text>
          <Text style={styles.cardText}>
            True native code for iOS and Android.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardIcon}>⚡</Text>
          <Text style={styles.cardTitle}>Fast Refresh</Text>
          <Text style={styles.cardText}>
            See changes instantly as you develop.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardIcon}>🧭</Text>
          <Text style={styles.cardTitle}>React Navigation</Text>
          <Text style={styles.cardText}>
            Full navigation with tabs and stacks.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardIcon}>🔷</Text>
          <Text style={styles.cardTitle}>TypeScript</Text>
          <Text style={styles.cardText}>Full type safety out of the box.</Text>
        </View>
      </View>

      <View style={styles.cta}>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Get Started</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  hero: {
    alignItems: 'center',
    paddingVertical: 48,
    paddingHorizontal: 24,
  },
  emoji: {
    fontSize: 64,
    marginBottom: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: '800',
    color: '#1a1a1a',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    textAlign: 'center',
  },
  cards: {
    paddingHorizontal: 16,
    gap: 12,
  },
  card: {
    backgroundColor: '#f8f9fa',
    borderRadius: 12,
    padding: 20,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    marginBottom: 12,
  },
  cardIcon: {
    fontSize: 32,
    marginBottom: 12,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1a1a1a',
    marginBottom: 4,
  },
  cardText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  cta: {
    padding: 24,
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#8b5cf6',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 12,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
