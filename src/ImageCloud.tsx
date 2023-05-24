import React from 'react';
import { api } from './api';

interface ImageProps {
  publicId: string;
  cloudName: string;
}

const Image = async ({publicId, cloudName}: ImageProps ) => {
  await api.get(`/${publicId}`, {
    params: {
      cloudName: cloudName,
    },
  }).then((response) => {
    console.log(response.data);

    const { secure_url, width, height } = response.data;

    return <img src={secure_url} width={width} height={height} alt="Midia-C1010"  />;
  }
  ).catch((error) => {
    console.log(error);
  }
  );
};

export default Image;