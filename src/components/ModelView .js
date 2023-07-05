import React, { Component } from 'react';
import { View } from 'react-native';
import ModelView from 'react-native-3d-model-view';

class ModelScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ModelView
          model={{
            uri: 'https://sketchfab.com/3d-models/dragon-animation-flying-2fdae78e272c4994bb67336a289f11ef',
          }}
          texture={{
            uri: 'https://sketchfab.com/3d-models/cute-dragon-df14ec74767c4598920132758dab8a49',
          }}
          scale={0.01}
          translateZ={-2}
          rotateX={90}
          rotateZ={45}
          style={{ flex: 1 }}
        />
      </View>
    );
  }
}

export default ModelScreen;
