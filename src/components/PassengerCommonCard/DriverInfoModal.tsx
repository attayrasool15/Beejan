import React from 'react';
import {
  Modal,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface Props {
  visible: boolean;
  onClose: () => void;
}

const DriverInfoModal: React.FC<Props> = ({visible, onClose}) => (
  <Modal visible={visible} transparent animationType="slide">
    <View style={styles.overlay}>
      <View style={styles.container}>
        {/* Top Section */}
        <View style={styles.topSection}>
          <Image
            source={{uri: 'https://randomuser.me/api/portraits/men/1.jpg'}}
            style={styles.avatar}
          />
          <View style={styles.driverInfo}>
            <Text style={styles.driverName}>Driver name</Text>
            <View style={styles.ratingRow}>
              <Icon name="star" size={16} color="#FFC107" />
              <Text style={styles.ratingText}>4.9</Text>
            </View>
          </View>
          <View style={styles.actions}>
            <TouchableOpacity style={styles.iconButton}>
              <Icon name="message" size={20} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.iconButton, {backgroundColor: '#9C27B0'}]}>
              <Icon name="phone" size={20} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Vehicle Details */}
        <View style={styles.vehicleDetails}>
          <View style={styles.vehicleItem}>
            <Text style={styles.vehicleLabel}>Vehicle name</Text>
            <Text style={styles.vehicleValue}>Toyota</Text>
          </View>
          <View style={styles.vehicleItem}>
            <Text style={styles.vehicleLabel}>Colour</Text>
            <Text style={styles.vehicleValue}>Black</Text>
          </View>
          <View style={styles.vehicleItem}>
            <Text style={styles.vehicleLabel}>Number</Text>
            <Text style={styles.vehicleValue}>AAA-123</Text>
          </View>
        </View>

        {/* Divider */}
        <View style={styles.divider} />

        {/* Distance / Time / Price */}
        <View style={styles.bottomRow}>
          <Icon name="car" size={32} color="#333" />
          <View style={styles.infoBlock}>
            <Text style={styles.infoLabel}>DISTANCE</Text>
            <Text style={styles.infoValue}>0.2 km</Text>
          </View>
          <View style={styles.infoBlock}>
            <Text style={styles.infoLabel}>TIME</Text>
            <Text style={styles.infoValue}>2 min</Text>
          </View>
          <View style={styles.infoBlock}>
            <Text style={styles.infoLabel}>PRICE</Text>
            <Text style={styles.infoValue}>RS:450</Text>
          </View>
        </View>

        {/* Footer Button */}
        <TouchableOpacity style={styles.arrivalButton} onPress={onClose}>
          <Text style={styles.arrivalText}>Driver will arrive in 2 min</Text>
        </TouchableOpacity>
      </View>
    </View>
  </Modal>
);

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  container: {
    backgroundColor: '#fff',
    padding: 16,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  topSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  driverInfo: {
    flex: 1,
    marginLeft: 12,
  },
  driverName: {
    fontSize: 16,
    fontWeight: '600',
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  ratingText: {
    marginLeft: 4,
    fontSize: 14,
    color: '#555',
  },
  actions: {
    flexDirection: 'row',
  },
  iconButton: {
    backgroundColor: '#3B82F6',
    borderRadius: 20,
    padding: 8,
    marginLeft: 8,
  },
  vehicleDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  vehicleItem: {
    alignItems: 'center',
    flex: 1,
  },
  vehicleLabel: {
    fontSize: 13,
    color: '#333',
    marginBottom: 4,
  },
  vehicleValue: {
    fontSize: 14,
    color: '#666',
  },
  divider: {
    height: 1,
    backgroundColor: '#eee',
    marginVertical: 12,
  },
  bottomRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  infoBlock: {
    alignItems: 'center',
  },
  infoLabel: {
    fontSize: 12,
    color: '#333',
  },
  infoValue: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  arrivalButton: {
    marginTop: 16,
    backgroundColor: '#9C27B0',
    paddingVertical: 12,
    borderRadius: 8,
  },
  arrivalText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '600',
  },
});

export default DriverInfoModal;
