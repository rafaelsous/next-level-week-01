import React from 'react';
import { StyleSheet } from 'react-native';
import PickerSelect from 'react-native-picker-select';
import { Feather as Icon } from '@expo/vector-icons';

interface Item {
  label: string;
  value: string;
}

interface Props {
  placeholder: string;
  items: Item[];
  value: Item;
  disabled?: boolean;
  onChangeValue: (value: Item) => void;
}

const DropDown: React.FC<Props> = ({ placeholder, items, value, disabled, onChangeValue }) => {
  return (
    <PickerSelect
      style={{
        viewContainer: {
          height: 60,
          backgroundColor: '#FFF',
          borderRadius: 10,
          marginBottom: 8,
          justifyContent: 'center',
          paddingHorizontal: 14,
        },
        iconContainer: {
          marginRight: 24,
        }
      }}
      Icon={() => {
        return <Icon name="chevron-down" size={18} color="#C7C7CD" />
      }}
      placeholder={{
        label: placeholder,
        color: '#C5C5C5',
      }}
      onValueChange={onChangeValue}
      items={items}
      value={value}
      disabled={disabled}
    />
  );
}

const styles = StyleSheet.create({
  select: {
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginBottom: 8,
    paddingHorizontal: 24,
    fontSize: 16,
  },
});

export default DropDown;