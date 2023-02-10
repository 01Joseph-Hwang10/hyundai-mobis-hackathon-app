import React, {useState, useEffect} from 'react';
import {EngineView, useEngine} from '@babylonjs/react-native';
import {SceneLoader} from '@babylonjs/core/Loading/sceneLoader';
import {Camera} from '@babylonjs/core/Cameras/camera';
import {ArcRotateCamera} from '@babylonjs/core/Cameras/arcRotateCamera';
import '@babylonjs/loaders/glTF';
import styled from 'styled-components/native';

const Wrapper = styled.View`
  flex: 1;
`;

/**
 * @description
 * Main screen of the app.
 *
 * Example code from: https://github.com/BabylonJS/BabylonReactNativeSample
 */
const MainScreen: React.FC = () => {
  const engine = useEngine();
  const [camera, setCamera] = useState<Camera>();

  useEffect(() => {
    if (engine) {
      const url =
        'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/BoxAnimated/glTF/BoxAnimated.gltf';
      SceneLoader.LoadAsync(url, undefined, engine).then(scene => {
        scene.createDefaultCameraOrLight(true, undefined, true);
        (scene.activeCamera as ArcRotateCamera).alpha += Math.PI;
        (scene.activeCamera as ArcRotateCamera).radius = 10;
        setCamera(scene.activeCamera!);
      });
    }
  }, [engine]);

  return (
    <Wrapper>
      <EngineView camera={camera} displayFrameRate={true} />
    </Wrapper>
  );
};

export default MainScreen;
