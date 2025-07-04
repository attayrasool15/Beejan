import React, {useEffect, useState, useCallback} from 'react';
import {
  Modal,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  FlatList,
  ActivityIndicator,
  Pressable,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface Props {
  visible: boolean;
  onSelect: (location: {
    description: string;
    latitude: number;
    longitude: number;
  }) => void;
  onClose?: () => void;
}

interface PlacePrediction {
  place_id: string;
  description: string;
}

const GOOGLE_MAPS_API_KEY = 'AIzaSyCb2ys2AD6NTFhnEGXNsDrjSXde6d569vU';

const popularLocations = [
  'Jinnah Park Lahore',
  'Badshahi Mosque Lahore',
  'Data Darbar Lahore',
  'Punjab University Lahore',
];

const LocationSearchModal: React.FC<Props> = ({visible, onSelect, onClose}) => {
  const [input, setInput] = useState('');
  const [predictions, setPredictions] = useState<PlacePrediction[]>([]);
  const [loading, setLoading] = useState(false);

  // Fetch predictions when input changes
  useEffect(() => {
    const fetchPredictions = async () => {
      if (input.length < 2) {
        setPredictions([]);
        return;
      }

      setLoading(true);
      try {
        const response = await fetch(
          `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURIComponent(
            input,
          )}&key=${GOOGLE_MAPS_API_KEY}&components=country:pk`,
        );
        const json = await response.json();
        setPredictions(json.predictions || []);
      } catch (error) {
        console.error('Error fetching predictions:', error);
      } finally {
        setLoading(false);
      }
    };

    const timer = setTimeout(fetchPredictions, 400);
    return () => clearTimeout(timer);
  }, [input]);

  // Fetch detailed location from place_id
  const fetchPlaceDetails = useCallback(async (placeId: string) => {
    try {
      const res = await fetch(
        `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&key=${GOOGLE_MAPS_API_KEY}`,
      );
      const json = await res.json();
      const result = json.result;
      if (result) {
        const {lat, lng} = result.geometry.location;
        return {
          description: result.formatted_address,
          latitude: lat,
          longitude: lng,
        };
      }
    } catch (error) {
      console.error('Error fetching place details:', error);
    }
    return null;
  }, []);

  // Search a free-text location (for popular locations)
  const searchPlaceByText = useCallback(async (query: string) => {
    try {
      const res = await fetch(
        `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${encodeURIComponent(
          query,
        )}&key=${GOOGLE_MAPS_API_KEY}`,
      );
      const json = await res.json();
      const result = json.results?.[0];
      if (result) {
        const {lat, lng} = result.geometry.location;
        return {
          description: result.formatted_address,
          latitude: lat,
          longitude: lng,
        };
      }
    } catch (error) {
      console.error('Error searching place by text:', error);
    }
    return null;
  }, []);

  const renderPredictionItem = ({item}: {item: PlacePrediction}) => (
    <TouchableOpacity
      style={styles.item}
      onPress={async () => {
        const details = await fetchPlaceDetails(item.place_id);
        if (details) {
          onSelect(details);
        }
      }}>
      <Icon
        name="map-marker"
        size={20}
        color="#9C27B0"
        style={styles.itemIcon}
      />
      <Text>{item.description}</Text>
    </TouchableOpacity>
  );

  const renderPopularItem = ({item}: {item: string}) => (
    <TouchableOpacity
      style={styles.item}
      onPress={async () => {
        const details = await searchPlaceByText(item);
        if (details) {
          onSelect(details);
        }
      }}>
      <Icon
        name="map-marker"
        size={20}
        color="#9C27B0"
        style={styles.itemIcon}
      />
      <Text>{item}</Text>
    </TouchableOpacity>
  );

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      presentationStyle="overFullScreen" // ✅ This is the fix
      statusBarTranslucent>
      <View style={styles.overlay}>
        <Pressable style={styles.backdrop} onPress={onClose} />
        <View style={styles.sheet}>
          <View style={styles.handle} />

          {/* Search Bar */}
          <View style={styles.searchRow}>
            <Icon
              name="magnify"
              size={20}
              color="#666"
              style={styles.searchIcon}
            />
            <TextInput
              style={styles.input}
              placeholder="Where are you going?"
              value={input}
              onChangeText={setInput}
            />
          </View>

          {loading && (
            <ActivityIndicator
              size="small"
              color="#9C27B0"
              style={styles.loader}
            />
          )}

          {input.length > 1 ? (
            <FlatList
              data={predictions}
              keyExtractor={item => item.place_id}
              keyboardShouldPersistTaps="handled"
              renderItem={renderPredictionItem}
              ListEmptyComponent={
                !loading ? (
                  <Text style={styles.noResults}>No results found.</Text>
                ) : null
              }
            />
          ) : (
            <FlatList
              data={popularLocations}
              keyExtractor={item => item}
              renderItem={renderPopularItem}
            />
          )}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  backdrop: {
    flex: 1,
    // backgroundColor: '#00000044',
  },
  sheet: {
    backgroundColor: '#fff',
    padding: 16,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    maxHeight: '75%',
  },
  handle: {
    width: 40,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#ccc',
    alignSelf: 'center',
    marginBottom: 12,
  },
  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f3f3f3',
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 12,
  },
  searchIcon: {
    marginRight: 6,
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 8,
  },
  loader: {
    marginVertical: 8,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  itemIcon: {
    marginRight: 10,
  },
  noResults: {
    textAlign: 'center',
    color: '#888',
    marginTop: 10,
  },
});

export default LocationSearchModal;
