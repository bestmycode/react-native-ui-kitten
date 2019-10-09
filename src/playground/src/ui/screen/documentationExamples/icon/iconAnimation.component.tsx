import React from 'react';
import {
  Button,
  Icon,
} from 'react-native-ui-kitten';

export class IconAnimationShowcase extends React.Component {

  iconRef = React.createRef();

  onPress = () => {
    this.iconRef.current.startAnimation();
  };

  renderIcon = (style) => (
    <Icon
      {...style}
      ref={this.iconRef}
      name='star'
      animation='shake'
    />
  );

  render() {
    return (
      <Button
        icon={this.renderIcon}
        onPress={this.onPress}>
        START ANIMATION
      </Button>
    );
  }
}
