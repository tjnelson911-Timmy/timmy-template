import React, {useState} from 'react';
import {View, Text, StyleSheet, Switch, Pressable} from 'react-native';

export function SettingsScreen() {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Preferences</Text>

        <View style={styles.row}>
          <Text style={styles.rowLabel}>Notifications</Text>
          <Switch
            value={notifications}
            onValueChange={setNotifications}
            trackColor={{true: '#8b5cf6'}}
          />
        </View>

        <View style={styles.row}>
          <Text style={styles.rowLabel}>Dark Mode</Text>
          <Switch
            value={darkMode}
            onValueChange={setDarkMode}
            trackColor={{true: '#8b5cf6'}}
          />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Account</Text>

        <Pressable style={styles.row}>
          <Text style={styles.rowLabel}>Edit Profile</Text>
          <Text style={styles.chevron}>›</Text>
        </Pressable>

        <Pressable style={styles.row}>
          <Text style={styles.rowLabel}>Privacy</Text>
          <Text style={styles.chevron}>›</Text>
        </Pressable>

        <Pressable style={styles.row}>
          <Text style={[styles.rowLabel, styles.danger]}>Sign Out</Text>
        </Pressable>
      </View>

      <Text style={styles.version}>Version 1.0.0</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  section: {
    paddingHorizontal: 16,
    paddingTop: 24,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#888',
    textTransform: 'uppercase',
    marginBottom: 12,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f3f4f6',
  },
  rowLabel: {
    fontSize: 16,
    color: '#1a1a1a',
  },
  chevron: {
    fontSize: 20,
    color: '#888',
  },
  danger: {
    color: '#ef4444',
  },
  version: {
    textAlign: 'center',
    color: '#888',
    marginTop: 48,
  },
});
