import React from 'react';
import { IonLoading, IonContent } from '@ionic/react';

type LoadingProps = {
  show: boolean
}

class Loading extends React.Component<LoadingProps> {

  render() {
    return (<IonContent>
      <IonLoading
        isOpen={this.props.show}
        message={'Loading...'}
        duration={5000}
      />
    </IonContent >
    );
  }
};

export default Loading;
