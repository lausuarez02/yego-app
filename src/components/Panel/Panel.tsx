import React, {useMemo} from 'react';
import {
  View, StyleSheet
} from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';

interface BottomSheetProps {
  children?: React.ReactNode;
};

const Panel = React.forwardRef<BottomSheet ,BottomSheetProps> (({children}, ref) => {
    const snapPoints = useMemo(() => ['25%', '25%'], []);
    
  return (
      <BottomSheet
      style={styles.mainContainer}
        ref={ref}
        index={1}
        snapPoints={snapPoints}
      >
        <View style={styles.contentContainer}>
          {children}
          </View>
      </BottomSheet>
    );
  }
  );


  const styles = StyleSheet.create({
    mainContainer: {
      flex: 1
    },
    contentContainer: {
      backgroundColor: 'white',
      flex: 1,
      alignItems: 'center',
    },
  });

export default Panel;