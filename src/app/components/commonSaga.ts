import axios from 'axios';
import { API_URL } from 'utils/constants';
import { getDefaultHeaders } from 'utils/helpers';
import { request } from 'utils/request';

export function* getSignedUrl(fileName: string, fileType: string) {
  try {
    const options = {
      method: 'GET',
      headers: getDefaultHeaders(),
    };
    const response = yield request(
      `${API_URL}/uploads?fileName=${encodeURIComponent(fileName)}&contentType=${fileType}`,
      options,
    );
    console.log(response);
    return response;
  } catch (e) {
    console.log('Something went wrong while generating the signedURL', e);
  }
}

export function* uploadUsingSignedURL(
  signedURL: string,
  fileType: string,
  file: File,
  onUploadProgress?: any,
  onCancelRequest?: any,
) {
    const headers = new Headers();
    headers.append('Content-Type', fileType);
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    if(onCancelRequest){
      onCancelRequest(source)
    }
    yield axios.put(signedURL, file, {
      headers: {
        'Content-Type': fileType,
      },
      cancelToken: source.token,
      ...(onUploadProgress && {
        onUploadProgress,
      }),
    });
    // const response = yield request(signedURL, options);
    // console.log(response, 'file uploaded successfully');
}
